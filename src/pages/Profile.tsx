import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { GraphQLQuery } from "@aws-amplify/api";
import * as mutations from "../graphql/mutations";
import { useContext, useEffect, useRef, useState } from "react";
import { FaUserPen } from "react-icons/fa6";
import Swal from "sweetalert2";
import { UpdateUserInput, UpdateUserMutation } from "../API";
import { API } from "aws-amplify";
import LoginData from "../context/login";
import { AiOutlineUser } from "react-icons/ai";

const Profile: React.FC = () => {
  //User details
  const [name, setName]: any = useState("");
  const [surname, setSurname]: any = useState("");
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");
  const [address, setAddress]: any = useState("");
  const [postal, setPostal]: any = useState("");
  const [cell, setCell]: any = useState("");
  const [idNumber, setIdNumber]: any = useState("");
  const { loginUser, setLoginUser }: any = useContext(LoginData);

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

  useEffect(() => {
    if (loginUser != null) {
      setEmail(loginUser.email);
      setPassword(loginUser.password);
      setName(loginUser.name);
      setSurname(loginUser.surname);
      setAddress(loginUser.address);
      setPostal(loginUser.postal_code);
      setCell(loginUser.cell_phone_no);
      setIdNumber(loginUser.id_number);
    }
  }, [loginUser]);

  async function updateUser() {
    //
    if (
      validationRules(name, "Name") === true &&
      validationRules(surname, "Surname") === true &&
      validationRules(cell, "Cell") === true &&
      validationRules(postal, "Postal code") === true &&
      validationRules(idNumber, "ID") === true &&
      validationRules(address, "Address") === true
    ) {
      const userDetails: UpdateUserInput = {
        id: loginUser.id,
        name: name,
        password: password,
        address: address,
        postal_code: postal,
        id_number: idNumber,
        cell_phone_no: cell,
      };

      const updateUser = await API.graphql<GraphQLQuery<UpdateUserMutation>>({
        query: mutations.updateUser,
        variables: { input: userDetails },
      });

      if (updateUser.data) {
        Toast.fire({
          icon: "success",
          title: "User updated successfully!",
        });
      }
    }
  }

  function validationRules(data: any, type: any) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regPassword = /^[A-Za-z]\w{6,16}$/;
    //Names
    if (type === "Name" || type === "Surname") {
      if (data.length < 2) {
        Toast.fire({
          icon: "warning",
          title: type + " must be at least 2 letters!",
        });

        return false;
      }
    }

    //Cell
    if (type === "Cell") {
      if (data.length < 10 || data.length > 10) {
        Toast.fire({
          icon: "warning",
          title: type + " must be 10 numbers",
        });

        return false;
      }
    }

    //Postal code
    if (type === "Postal code") {
      if (data.length < 2 || data.length > 4) {
        Toast.fire({
          icon: "warning",
          title: type + " must be > 2 and < 4 numbers",
        });

        return false;
      }
    }

    //ID number
    if (type === "ID") {
      if (data.length < 13 || data.length > 13) {
        Toast.fire({
          icon: "warning",
          title: type + " must be 13 numbers",
        });

        return false;
      }
    }

    // Postal code
    if (type === "Address") {
      if (data.length < 2) {
        Toast.fire({
          icon: "warning",
          title: type + " must be at least 2 letters!",
        });

        return false;
      }
    }

    return true;
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Neviagtion section */}
        <Nav />

        <section className="about-section  bg-light">
          <h2 className="about-sub text-secondary pb-5">
            <AiOutlineUser size="30" /> User profile section
          </h2>

          <>
            <div className="row text-center">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <IonItem>
                  <IonInput
                    label="Name"
                    onInput={(e: any) => setName(e.target.value)}
                    value={name}
                    labelPlacement="floating"
                    placeholder="Enter text"
                  ></IonInput>
                </IonItem>

                <IonItem>
                  <IonInput
                    label="Surname"
                    value={surname}
                    onInput={(e: any) => setSurname(e.target.value)}
                    labelPlacement="floating"
                    placeholder="Enter text"
                  ></IonInput>
                </IonItem>

                <IonItem disabled>
                  <IonInput
                    label="Email"
                    type="email"
                    value={email}
                    onInput={(e: any) => setEmail(e.target.value)}
                    labelPlacement="floating"
                    placeholder="Enter text"
                  ></IonInput>
                </IonItem>

                <IonItem disabled>
                  <IonInput
                    label="Password"
                    type="password"
                    value={password}
                    onInput={(e: any) => setPassword(e.target.value)}
                    labelPlacement="floating"
                    placeholder="Enter text"
                  ></IonInput>
                </IonItem>

                <IonItem>
                  <IonInput
                    label="Address"
                    onInput={(e: any) => setAddress(e.target.value)}
                    value={address}
                    labelPlacement="floating"
                    placeholder="Enter text"
                  ></IonInput>
                </IonItem>

                <IonItem>
                  <IonInput
                    label="User postal code"
                    onInput={(e: any) => setPostal(e.target.value)}
                    value={postal}
                    labelPlacement="floating"
                    placeholder="Enter text"
                  ></IonInput>
                </IonItem>

                <IonItem>
                  <IonInput
                    label="ID Number"
                    onInput={(e: any) => setIdNumber(e.target.value)}
                    value={idNumber}
                    labelPlacement="floating"
                    placeholder="Enter text"
                  ></IonInput>
                </IonItem>

                <IonItem>
                  <IonInput
                    label="Cell No"
                    onInput={(e: any) => setCell(e.target.value)}
                    value={cell}
                    labelPlacement="floating"
                    placeholder="Enter text"
                  ></IonInput>
                </IonItem>
                <IonButton
                  onClick={() => updateUser()}
                  className="btn mt-3"
                  fill="outline"
                  shape="round"
                  color="medium"
                >
                  Update Profile
                </IonButton>
              </div>
              <div className="col-sm-6 text-secondary p-5">
                <img
                  src="./assets/undraw_Female_avatar_efig-removebg-preview.png"
                  width="70%"
                />
              </div>
            </div>
          </>
        </section>

        {/* Footer section */}
        <section className="footer-section">
          <Footer />
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
