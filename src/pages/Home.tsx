import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Neviagtion section */}
        <Nav />

        {/* Main section */}
        <section className="main-section text-center">
          <div className="sub-m">
            <IonTitle color="success">
              <h3 className="main-title text-center">Welcome to our smart</h3>
            </IonTitle>
            <h3 className="main-title-sub text-light text-center">
              health care system
            </h3>
            <IonButton
              className="btn-register"
              fill="outline"
              shape="round"
              color="success"
              routerLink="/Registration"
            >
              Register now
            </IonButton>
          </div>
        </section>

        <section className="about-section text-center bg-light">
          <div className="row">
            <div className="col-sm-6">
              <h4 className="text-data" color="medium">
                <IonTitle color="success">
                  <h2 className="about-sub text-success pb-5">
                    <b>About Our Translation System</b>
                  </h2>
                </IonTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in{" "}
                <br />
                <br />
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h4>
            </div>
            <div className="col-sm-6 p-5">
              <img
                className="side_img"
                src="./assets/undraw_medicine_b1ol-removebg-preview.png"
                width="80%"
              />
              <h5>Proffetional medical doctors</h5>
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

export default Home;
