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
import { useRef, useState, useContext } from "react";
import { HiMiniUser } from "react-icons/hi2";
import { TbReportMedical } from "react-icons/tb";
import { BsClockHistory } from "react-icons/bs";
import MedicalData from "../components/MedicalData";
import CustomNavigationTap from "../context/custNav";

const Medical: React.FC = () => {
  //User details
  const [name, setName]: any = useState("");
  const [surname, setSurname]: any = useState("");
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");
  const [address, setAddress]: any = useState("");
  const [postal, setPostal]: any = useState("");
  const [cell, setCell]: any = useState("");
  const [idNumber, setIdNumber]: any = useState("");
  const { customNavTap, setCustomNavTap }: any =
    useContext(CustomNavigationTap);

  //Nav state
  const [navMedical, setNavMedical]: any = useState(false);

  //Nav reset
  function resData() {
    setNavMedical(false);
  }


  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Neviagtion section */}
        <Nav />

        <section className="about-section  bg-light">
          <h2 className="about-sub text-secondary pb-5">
            <TbReportMedical size="30" /> User medical section
          </h2>

          <div className="row text-center">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <IonItem className="ion-margin" button>
                <IonButton className="ion-padding" href="userappointment" fill="clear">
                  <BsClockHistory size="30" /> Book Appointment
                </IonButton>
              </IonItem>
              <IonItem className="ion-margin" button>
                <IonLabel>
                  <h3>
                    <BsClockHistory /> Medical History
                  </h3>
                  <p>&nbsp; &nbsp; Access medical history</p>
                </IonLabel>
              </IonItem>

              <IonItem className="ion-margin" button>
                <IonLabel>
                  <h3>
                    <BsClockHistory /> Medical History
                  </h3>
                  <p>&nbsp; &nbsp; Access medical history</p>
                </IonLabel>
              </IonItem>

              <IonItem className="ion-margin" button>
                <IonLabel>
                  <h3>
                    <BsClockHistory /> Medical History
                  </h3>
                  <p>&nbsp; &nbsp; Access medical history</p>
                </IonLabel>
              </IonItem>
            </div>

            <div className="col-sm-6 text-secondary">
              <IonTitle color="success">
                <img
                  src="./assets/undraw_At_work_re_qotl-removebg-preview.png"
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

export default Medical;
