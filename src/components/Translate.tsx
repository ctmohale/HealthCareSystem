import {
  IonButton,
  IonButtons,
  IonCard,
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
import { useEffect, useRef, useState } from "react";
import { BiUserPlus, BiUserVoice } from "react-icons/bi";
import { CreateUserInput, CreateUserMutation } from "../API";
import { GraphQLQuery } from "@aws-amplify/api";
import * as mutations from "../graphql/mutations";
import Swal from "sweetalert2";

const Translate: React.FC = () => {
  //User details
  const [name, setName]: any = useState("");
  const [surname, setSurname]: any = useState("");
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");
  const [address, setAddress]: any = useState("");
  const [postal, setPostal]: any = useState("");
  const [cell, setCell]: any = useState("");
  const [idNumber, setIdNumber]: any = useState("");
  const videoRef = useRef(null);

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
    const onDOMContentLoaded = () => {
      const but: any = document.getElementById("but");
      const video: any = videoRef.current;
      const mediaDevices = navigator.mediaDevices;

      video.muted = true;

      but.addEventListener("click", () => {
        mediaDevices
          .getUserMedia({
            video: true,
            audio: true,
          })
          .then((stream) => {
            video.srcObject = stream;
            video.addEventListener("loadedmetadata", () => {
              video.play();
            });
          })
          .catch(alert);
      });
    };

    document.addEventListener("DOMContentLoaded", onDOMContentLoaded);

    return () => {
      document.removeEventListener("DOMContentLoaded", onDOMContentLoaded);
    };
  }, []);

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

      console.log(newUser);

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
          <h2 className="about-sub text-secondary pb-5">
            Translate vioce to text section
          </h2>

          <div className="row text-center">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <IonCard className="card-translate">
                <button id="but">Start Video</button>
                <video id="vid" ref={videoRef}></video>
              </IonCard>
            </div>
            <div className="col-sm-6 text-secondary p-5">
              <BiUserVoice size="200" /> <br />
              <IonButton fill="outline" shape="round" color="medium">
                Activate Translation
              </IonButton>
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

export default Translate;
