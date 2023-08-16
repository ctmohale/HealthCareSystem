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
import { useRef, useState } from "react";
import { HiBellAlert, HiMiniUser } from "react-icons/hi2";

const Notifications: React.FC = () => {
  //User details
  const [name, setName]: any = useState("");
  const [surname, setSurname]: any = useState("");
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");
  const [address, setAddress]: any = useState("");
  const [postal, setPostal]: any = useState("");
  const [cell, setCell]: any = useState("");
  const [idNumber, setIdNumber]: any = useState("");

  //Create a new user
  // async function addUser() {
  //   //
  //   if (
  //     validationRules(name, "Name") === true &&
  //     validationRules(surname, "Surname") === true &&
  //     validationRules(cell, "Cell") === true &&
  //     validationRules(postal, "Postal code") === true &&
  //     validationRules(idNumber, "ID") === true &&
  //     validationRules(address, "Address") === true &&
  //     validationRules(email, "Email") === true
  //     //   validationRules(password, "Password") === true
  //   ) {
  //     const userDetails: CreateUserInput = {
  //       name: name,
  //       surname: surname,
  //       email: email,
  //       password: password,
  //       address: address,
  //       postal_code: postal,
  //       id_number: idNumber,
  //       cell_phone_no: cell,
  //       access_type: "user",
  //     };

  //     const newUser = await API.graphql<GraphQLQuery<CreateUserMutation>>({
  //       query: mutations.createUser,
  //       variables: { input: userDetails },
  //     });

  //     console.log(newUser);

  //     if (newUser.data) {
  //       Toast.fire({
  //         icon: "success",
  //         title: "User created successfully!",
  //       });
  //       window.location.replace("/");
  //     }
  //   }
  // }

  // function validationRules(data: any, type: any) {
  //   let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   const regPassword = /^[A-Za-z]\w{6,16}$/;
  //   //Names
  //   if (type === "Name" || type === "Surname") {
  //     if (data.length < 2) {
  //       Toast.fire({
  //         icon: "warning",
  //         title: type + " must be at least 2 letters!",
  //       });

  //       return false;
  //     }
  //   }

  //   //Cell
  //   if (type === "Cell") {
  //     if (data.length < 10 || data.length > 10) {
  //       Toast.fire({
  //         icon: "warning",
  //         title: type + " must be 10 numbers",
  //       });

  //       return false;
  //     }
  //   }

  //   //Password section
  //   if (type === "Password") {
  //     if (!data.match(regPassword)) {
  //       Toast.fire({
  //         icon: "warning",
  //         title:
  //           "Check passwords consisting of 6 to 8 uppercase and lowercase alphanumeric underscores",
  //       });

  //       return false;
  //     }
  //   }

  //   //Email section
  //   if (type === "Email") {
  //     if (data === "") {
  //       Toast.fire({
  //         icon: "warning",
  //         title: "Email is requred!",
  //       });

  //       return false;
  //     }

  //     if (!data.match(regex)) {
  //       Toast.fire({
  //         icon: "warning",
  //         title: "Please enter a valid email address",
  //       });
  //       return false;
  //     }
  //   }

  //   //Postal code
  //   if (type === "Postal code") {
  //     if (data.length < 2 || data.length > 4) {
  //       Toast.fire({
  //         icon: "warning",
  //         title: type + " must be > 2 and < 4 numbers",
  //       });

  //       return false;
  //     }
  //   }

  //   //ID number
  //   if (type === "ID") {
  //     if (data.length < 13 || data.length > 13) {
  //       Toast.fire({
  //         icon: "warning",
  //         title: type + " must be 13 numbers",
  //       });

  //       return false;
  //     }
  //   }

  //   return true;
  // }

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Neviagtion section */}
        <Nav />

        <section className="about-section  bg-light">
          <h2 className="about-sub text-secondary pb-5">
            Notification section
          </h2>

          <div className="row text-center">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <IonItem button>
                <IonLabel>
                  <span className="text-warning">
                    <HiBellAlert />
                  </span>
                  <h3>Button Item</h3>
                  <p>Default detail - detail arrow displays on iOS only</p>
                </IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>
                  <span className="text-warning">
                    <HiBellAlert />
                  </span>

                  <h3>Button Item</h3>
                  <p>Default detail - detail arrow displays on iOS only</p>
                </IonLabel>
              </IonItem>

              <IonItem button>
                <IonLabel>
                  <span className="text-warning">
                    <HiBellAlert />
                  </span>

                  <h3>Button Item</h3>
                  <p>Default detail - detail arrow displays on iOS only</p>
                </IonLabel>
              </IonItem>

              <IonItem button>
                <IonLabel>
                  <span className="text-warning">
                    <HiBellAlert />
                  </span>

                  <h3>Button Item</h3>
                  <p>Default detail - detail arrow displays on iOS only</p>
                </IonLabel>
              </IonItem>
            </div>
            <div className="col-sm-6 text-secondary">
              <IonTitle color="success">
                <img
                  src="./assets/undraw_Notify_re_65on-removebg-preview.png"
                  width="70%"
                  alt=""
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

export default Notifications;
