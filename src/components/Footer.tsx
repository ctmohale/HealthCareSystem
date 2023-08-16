import React from "react";
import "./Footer.css";
import { IonButton, IonTitle } from "@ionic/react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";

function Footer() {
  return (
    <div className="row footer-section p-5">
      <div className="col-sm-4">
        <IonTitle color="success">
          <h5>System</h5>
          <p className="text-light">
            Health Care
            <FaUserDoctor />
            System
          </p>
        </IonTitle>
      </div>
      <div className="col-sm-4">
        <IonTitle color="success">
          <h5>About Us</h5>
          <p className="text-light">
            Lorem ipsum dolor sit amet, consectetur....
          </p>
        </IonTitle>
      </div>
      <div className="col-sm-4 text-center">
        <IonTitle color="success">
          <h5>Social Media Section</h5>
        </IonTitle>
        <IonButton
          className="btnFooter"
          fill="clear"
          color="light"
          shape="round"
        >
          <BsFacebook size="25" /> Facebook
        </IonButton>
        <IonButton
          className="btnFooter"
          fill="clear"
          color="light"
          shape="round"
        >
          <AiFillInstagram size="25" /> Instagram
        </IonButton>
        <IonButton
          className="btnFooter"
          fill="clear"
          color="light"
          shape="round"
        >
          <IoLogoWhatsapp size="25" /> Whatsapp
        </IonButton>
      </div>
    </div>
  );
}

export default Footer;
