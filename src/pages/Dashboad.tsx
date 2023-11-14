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
import { useRef, useState, useContext } from "react";
import { HiMiniUser } from "react-icons/hi2";
import { TbReportMedical } from "react-icons/tb";
import { BsClockHistory } from "react-icons/bs";
import MedicalData from "../components/MedicalData";
import CustomNavigationTap from "../context/custNav";
import { AiOutlineHome } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaBriefcaseMedical, FaUsers } from "react-icons/fa6";
import { RiGovernmentFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import LoginData from "../context/login";
import AdminData from "../context/admin";
import { useEffect } from "react";
import AllUsers from "../context/users";

const Dashboad: React.FC = () => {
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
  const { admin, setAdmin }: any = useContext(AdminData);
  const { customNavTap, setCustomNavTap }: any =
    useContext(CustomNavigationTap);
  const { users, setUsers }: any = useContext(AllUsers);
  //Nav state
  const [navMedical, setNavMedical]: any = useState(false);

  //Nav reset
  function resData() {
    setNavMedical(false);
  }

  useEffect(() => {
    console.log(loginUser);
  }, [loginUser]);

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Neviagtion section */}
        <Nav />

        <section className="about-section  bg-light">
          <h2 className="about-sub text-secondary pb-5">
            <AiOutlineHome size="30" /> Dashboard
          </h2>

          <ul className="nav nav-tabs">
            <li className="nav-item">
              <IonButton
                fill="clear"
                className="nav-link active text-secondary"
                aria-current="page"
                href="#"
              >
                <AiOutlineHome /> Dashboard
              </IonButton>
            </li>
            <li className="nav-item">
              <IonButton
                fill="clear"
                className="nav-link text-secondary"
                aria-current="page"
                routerLink="/users"
              >
                <FaUsers /> Users
              </IonButton>
            </li>
            <li className="nav-item">
              <IonButton
                fill="clear"
                className="nav-link text-secondary"
                aria-current="page"
                routerLink="/adminmedical"
              >
                <FaBriefcaseMedical /> Medical
              </IonButton>
            </li>
          </ul>
          <br />

          <div className="row text-center" id="main_dash">
            {loginUser && loginUser.access_type !== "doctor" && (
              <div className="col-sm-3 text-secondary">
                <IonCard className="card-data" routerLink="/users">
                  <IonTitle color="success">
                    <img
                      className="p-4"
                      src="./assets/undraw_Add_user_re_5oib-removebg-preview.png"
                      height="200"
                      alt=""
                    />
                    <IonTitle className="text-light">
                      <b>Access Users</b>
                    </IonTitle>
                    <b> CT Mohale</b>
                    <br />
                    <br />
                    <ol className="list-group">
                      <li className="list-group-item  d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">
                            <small>Registered Users</small>
                          </div>
                        </div>
                        <span className="badge bg-light text-secondary rounded-pill">
                          {users && users.length} <BiSolidUserCircle />
                        </span>
                      </li>
                    </ol>
                  </IonTitle>
                </IonCard>
              </div>
            )}

            <div className="col-sm-3 text-secondary">
              <IonCard className="card-data" routerLink="/adminmedical">
                <IonTitle color="success">
                  <img
                    className="p-4"
                    src="./assets/undraw_medicine_b1ol-removebg-preview.png"
                    height="200"
                    alt=""
                  />
                  <IonTitle className="text-light">
                    <b>Mediacl Section</b>
                  </IonTitle>
                  <b> CT Mohale</b>
                  <br />
                  <br />
                  <ol className="list-group">
                    <li className="list-group-item  d-flex justify-content-between align-items-start">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">
                          <small>Users Medical Records</small>
                        </div>
                      </div>
                      <span className="badge bg-light text-secondary rounded-pill">
                        <BiSolidUserCircle />
                      </span>
                    </li>
                  </ol>
                </IonTitle>
              </IonCard>
            </div>

            {loginUser && loginUser.access_type !== "doctor" && (
              <div className="col-sm-3 text-secondary">
                <IonCard className="card-data">
                  <IonTitle color="success">
                    <img
                      className="p-4"
                      src="./assets/undraw_At_work_re_qotl-removebg-preview.png"
                      height="200"
                      alt=""
                    />
                    <IonTitle className="text-light">
                      <b>Home Affirs</b>
                    </IonTitle>
                    <b> CT Mohale</b>
                    <br />
                    <br />
                    <ol className="list-group">
                      <li className="list-group-item  d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">
                            <small>Department</small>
                          </div>
                        </div>
                        <span className="badge bg-light text-secondary rounded-pill">
                          <BiSolidUserCircle />
                        </span>
                      </li>
                    </ol>
                  </IonTitle>
                </IonCard>
              </div>
            )}

            <div className="col-sm-3 text-secondary">
              <IonCard className="card-data">
                <IonTitle color="success">
                  <img
                    className="p-4"
                    src="./assets/undraw_Female_avatar_efig-removebg-preview.png"
                    height="200"
                    alt=""
                  />
                  <IonTitle className="text-light">
                    <b>Admin Profle</b>
                  </IonTitle>
                  <b> CT Mohale</b>
                  <br />
                  <br />
                  <ol className="list-group">
                    <li className="list-group-item  d-flex justify-content-between align-items-start">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">
                          <small>Active</small>
                        </div>
                      </div>
                      <span className="badge bg-light text-secondary rounded-pill">
                        <BiSolidUserCircle />
                      </span>
                    </li>
                  </ol>
                </IonTitle>
              </IonCard>
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

export default Dashboad;
