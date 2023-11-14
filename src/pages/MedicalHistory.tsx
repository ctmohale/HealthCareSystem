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
import * as mutations from "../graphql/mutations";
import { GraphQLQuery } from "@aws-amplify/api";
import { API } from "aws-amplify";
import Swal from "sweetalert2";

const MedicalHistory: React.FC = () => {
  //Medical data
  const [condition, setCondition]: any = useState();
  const [allergies, setAllergies]: any = useState();
  const [surgeries, setSurgeries]: any = useState();
  const [medications, setMedications]: any = useState();

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
            <TbReportMedical size="30" /> User medical history
          </h2>

          <div className="row text-center">
            <div className="col-sm-6 mb-3 mb-sm-0">
              {/* Display medical history */}
              <IonItem>
                <IonInput
                  label="Medical condition"
                  onInput={(e: any) => setCondition(e.target.value)}
                  labelPlacement="floating"
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonInput
                  label="Allergic reactions"
                  onInput={(e: any) => setAllergies(e.target.value)}
                  labelPlacement="floating"
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonInput
                  label="Medical surgeries"
                  onInput={(e: any) => setSurgeries(e.target.value)}
                  labelPlacement="floating"
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>
              <IonButton
                fill="outline"
                className="btn mt-3"
                shape="round"
                color="success"
              >
                Submit Information
              </IonButton>
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

export default MedicalHistory;
