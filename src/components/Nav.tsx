import React, { useContext, useEffect, useRef, useState } from "react";
import "./Nav.css";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { CgMenuRight } from "react-icons/cg";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

import { TbReportMedical } from "react-icons/tb";
import { BiLogOutCircle, BiUser, BiUserVoice } from "react-icons/bi";
import {
  AiOutlineLogin,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";

import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import { HiBellAlert } from "react-icons/hi2";
import LoginData from "../context/login";
import AllUsers from "../context/users";
import Swal from "sweetalert2";

function Nav() {
  const [isOpen, setIsOpen]: any = useState(false);
  const { loginUser, setLoginUser }: any = useContext(LoginData);
  const [email, setEmail]: any = useState(" ");
  const [password, setPassword]: any = useState(" ");
  const { users }: any = useContext(AllUsers);
  const [loginState, setLoginState]: any = useState(false);

  const modal = useRef<HTMLIonModalElement>(null);

  useEffect(() => {
    console.log(users);
  }, [users]);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  //Logout
  function signOut() {
    setLoginUser(null);
  }

  //Login
  function loginFunction() {
    if (users != null && email != "" && password != "") {
      console.log(users);
      users.map((user_element: any) => {
        if (
          user_element.email === email &&
          user_element.password === password
        ) {
          setLoginUser(user_element);
          setLoginState(true);

          Toast.fire({
            icon: "success",
            title: "Login successfull! Welcome",
          });
          return;
        }
      });
    }

    setIsOpen(false);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <IonButton
            className="home_btn"
            shape="round"
            fill="clear"
            routerLink="/"
            color="success"
          >
            Health Care
            <FaUserDoctor />
            System
          </IonButton>
          <IonButton
            className="mobile_menu"
            fill="clear"
            color="medium"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <CgMenuRight size="20" />
          </IonButton>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <IonButton
                  fill="clear"
                  shape="round"
                  routerLink="/"
                  color="medium"
                ></IonButton>
              </li>
            </ul>

            {loginUser != null ? (
              <>
                <IonButton
                  fill="clear"
                  shape="round"
                  routerLink="/notifications"
                  color="medium"
                >
                  <HiBellAlert size="25" /> Medical Alerts
                </IonButton>
                <br />
                <IonButton
                  fill="clear"
                  shape="round"
                  routerLink="/grant"
                  color="medium"
                >
                  <GiTakeMyMoney size="25" /> Grant
                </IonButton>
                <br />
                <IonButton
                  fill="clear"
                  shape="round"
                  routerLink="/medical"
                  color="medium"
                >
                  <TbReportMedical size="25" /> Medical Report
                </IonButton>
                <br />
                <IonButton
                  fill="clear"
                  shape="round"
                  routerLink="/profile"
                  color="medium"
                >
                  <AiOutlineUser size="25" />
                  {loginUser.name.substring(0, 1) + " " + loginUser.surname}
                </IonButton>
                <br />
                <IonButton
                  fill="clear"
                  shape="round"
                  routerLink="/"
                  onClick={() => signOut()}
                  color="medium"
                >
                  <BiLogOutCircle size="25" /> Sign Out
                </IonButton>
                <br />
              </>
            ) : (
              <IonButton
                id="loginModalSection"
                fill="clear"
                shape="round"
                color="medium"
                onClick={() => setIsOpen(true)}
              >
                <AiOutlineLogin size="25" /> Sign In
              </IonButton>
            )}
          </div>
        </div>
      </nav>
      <IonModal
        className="main-login-modal"
        trigger="loginModalSection"
        isOpen={isOpen}
        onWillDismiss={() => setIsOpen(false)}
      >
        <IonHeader>
          <IonToolbar className="modal_head">
            <IonButtons slot="start">
              <IonButton color="light" onClick={() => modal.current?.dismiss()}>
                Cancel
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="login_title text-secondary">
            <h4 className="text-secondary p-5">
              Helath Care <FaUserDoctor size="50" /> System Login
            </h4>
          </div>
          <IonItem className="form">
            <IonLabel position="stacked">Enter email</IonLabel>
            <IonInput
              type="text"
              onInput={(e: any) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </IonItem>
          <IonItem className="form">
            <IonLabel position="stacked">Enter password</IonLabel>
            <IonInput
              type="text"
              onInput={(e: any) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </IonItem>
          <IonButton
            onClick={() => loginFunction()}
            className="ion-margin w-50"
            fill="outline"
            color="medium"
            shape="round"
          >
            <BiUser /> &nbsp; Sign In
          </IonButton>
          <br />
          <IonButton fill="clear" color="medium" shape="round">
            Forgot Password
          </IonButton>
        </IonContent>
      </IonModal>
    </>
  );
}

export default Nav;
