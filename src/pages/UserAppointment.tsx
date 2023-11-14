import {
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
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
import { useRef, useState, useContext, useEffect } from "react";
import { HiMiniUser } from "react-icons/hi2";
import { TbReportMedical } from "react-icons/tb";
import { BsClockHistory } from "react-icons/bs";

const UserAppointment: React.FC = () => {
  const datetime = useRef<null | HTMLIonDatetimeElement>(null);

  useEffect(() => {
    if (!datetime.current) return;
    datetime.current.value = [
      "2022-06-03",
      "2022-06-13",
      "2022-06-29",
      "2022-06-28",
      "2022-06-26",
    ];
  }, []);

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
            <div className="col-sm-6">
              <IonDatetime
                onClick={(e) => console.log(e)}
                ref={datetime}
                presentation="date"
                multiple={true}
              ></IonDatetime>
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

export default UserAppointment;
