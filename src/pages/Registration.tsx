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
import { API, Auth } from "aws-amplify";
import { useRef, useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { CreateUserInput, CreateUserMutation } from "../API";
import { GraphQLQuery } from "@aws-amplify/api";
import * as mutations from "../graphql/mutations";
import Swal from "sweetalert2";
import { AiOutlineUserAdd } from "react-icons/ai";

const Registration: React.FC = () => {
  //User details
  //User details
  const [name, setName]: any = useState("");
  const [surname, setSurname]: any = useState("");
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");
  const [address, setAddress]: any = useState("");
  const [postal, setPostal]: any = useState("");
  const [cell, setCell]: any = useState("");
  const [idNumber, setIdNumber]: any = useState("");

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

  type SignUpParameters = {
    username: string;
    password: string;
    email: string;
    phoneNumber: string;
  };

  //Cognito sigkn up
  async function signUp({
    username,
    password,
    email,
    phoneNumber,
  }: SignUpParameters) {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional
          phoneNumber, // optional - E.164 number convention
          // other custom attributes
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  //Create a new user
  async function addUser() {
    //
    if (
      validationRules(name, "Name") === true &&
      validationRules(surname, "Surname") === true &&
      validationRules(cell, "Cell") === true &&
      validationRules(postal, "Postal code") === true &&
      validationRules(idNumber, "ID") === true &&
      validationRules(address, "Address") === true &&
      validationRules(email, "Email") === true
      //   validationRules(password, "Password") === true
    ) {
      const userDetails: CreateUserInput = {
        name: name,
        surname: surname,
        email: email,
        password: password,
        address: address,
        postal_code: postal,
        id_number: idNumber,
        cell_phone_no: cell,
        access_type: "user",
      };

      const newUser = await API.graphql<GraphQLQuery<CreateUserMutation>>({
        query: mutations.createUser,
        variables: { input: userDetails },
      });

      if (newUser.data) {
        Toast.fire({
          icon: "success",
          title: "User created successfully!",
        });
        window.location.replace("/");
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

    //Password section
    if (type === "Password") {
      if (!data.match(regPassword)) {
        Toast.fire({
          icon: "warning",
          title:
            "Check passwords consisting of 6 to 8 uppercase and lowercase alphanumeric underscores",
        });

        return false;
      }
    }

    //Email section
    if (type === "Email") {
      if (data === "") {
        Toast.fire({
          icon: "warning",
          title: "Email is requred!",
        });

        return false;
      }

      if (!data.match(regex)) {
        Toast.fire({
          icon: "warning",
          title: "Please enter a valid email address",
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

    return true;
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Neviagtion section */}
        <Nav />

        <section className="about-section  bg-light">
          <h2 className="about-sub text-secondary pb-5"> <AiOutlineUserAdd size="30" /> Create new account</h2>

          <div className="row text-center">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <IonItem>
                <IonInput
                  label="Name"
                  onInput={(e: any) => setName(e.target.value)}
                  labelPlacement="floating"
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>

              <IonItem>
                <IonInput
                  label="Surname"
                  onInput={(e: any) => setSurname(e.target.value)}
                  labelPlacement="floating"
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>

              <IonItem>
                <IonInput
                  label="Email"
                  type="email"
                  onInput={(e: any) => setEmail(e.target.value)}
                  labelPlacement="floating"
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>

              <IonItem>
                <IonInput
                  label="Password"
                  onInput={(e: any) => setPassword(e.target.value)}
                  labelPlacement="floating"
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>

              <IonItem>
                <IonInput
                  label="Address"
                  onInput={(e: any) => setAddress(e.target.value)}
                  labelPlacement="floating"
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>

              <IonItem>
                <IonInput
                  label="User postal code"
                  onInput={(e: any) => setPostal(e.target.value)}
                  labelPlacement="floating"
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>

              <IonItem>
                <IonInput
                  label="ID Number"
                  onInput={(e: any) => setIdNumber(e.target.value)}
                  labelPlacement="floating"
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>

              <IonItem>
                <IonInput
                  label="Cell No"
                  onInput={(e: any) => setCell(e.target.value)}
                  labelPlacement="floating"
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>
              <IonButton
                onClick={() => addUser()}
                fill="outline"
                className="btn mt-3"
                shape="round"
                color="success"
              >
                Submit Information
              </IonButton>
            </div>
            <div className="col-sm-6 text-secondary p-5">
              <IonTitle color="success">
                <img
                  src="./assets/undraw_Add_user_re_5oib-removebg-preview.png"
                  width="70%"
                />
              </IonTitle>
            </div>
          </div>
        </section>

        {/* Footer section */}
        <section className="footer-section">
          <Footer />
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Registration;
