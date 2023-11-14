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
import {
  FaBriefcaseMedical,
  FaUserDoctor,
  FaUserPen,
  FaUsers,
} from "react-icons/fa6";
import Swal from "sweetalert2";
import {
  DeleteUserInput,
  DeleteUserMutation,
  UpdateMedicalDoctorInput,
  UpdateMedicalDoctorMutation,
  UpdateUserInput,
  UpdateUserMutation,
} from "../API";
import { API } from "aws-amplify";
import LoginData from "../context/login";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import "@aws-amplify/ui-react/styles.css";
import { Amplify, Auth } from "aws-amplify";
import { RiGovernmentFill, RiHospitalFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import * as queries from "../graphql/queries";

const DoctorProfile: React.FC = () => {
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
  const [allHospitals, setAllHospitals]: any = useState();
  const [specialization, setSpecialization]: any = useState("");
  const [hospitalID, setHospitalID]: any = useState("");

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
      setName(loginUser.first_name);
      setSurname(loginUser.last_name);
      setAddress(loginUser.address);
      setHospitalID(loginUser.hospital_id);
      setCell(loginUser.phone);
      setSpecialization(loginUser.specialization);
    }
  }, [loginUser]);

  useEffect(() => {
    GetAllHospitals();
  }, []);

  //Get all hospistals
  async function GetAllHospitals() {
    // Simple query
    const allHosptalData: any = await API.graphql({
      query: queries.listHospitals,
    });
    if (allHosptalData) {
      setAllHospitals(allHosptalData.data.listHospitals.items);
      console.log(allHosptalData.data.listHospitals.items);
    }
  }

  //
  async function deleteUserAccount() {
    // Prompt the user for confirmation
    const confirmDelete = window.confirm(
      "Are you sure you want to cancel your account?"
    );

    if (!confirmDelete) {
      return; // If the user cancels, do nothing
    }

    const delete_data: DeleteUserInput = {
      id: loginUser.id,
    };

    const delete_grant = await API.graphql<GraphQLQuery<DeleteUserMutation>>({
      query: mutations.deleteUser,
      variables: { input: delete_data },
    });

    if (delete_grant) {
      localStorage.removeItem("user");
      setLoginUser(null);
      window.location.href = "/";
      Toast.fire({
        icon: "success",
        title: "Account deleted successfully!",
      });
    }
  }

  async function UpdateDoctorProfile() {
    //
    if (
      validationRules(name, "Name") === true &&
      validationRules(surname, "Surname") === true &&
      validationRules(cell, "Cell") === true
    ) {
      const userDetails: UpdateMedicalDoctorInput = {
        id: loginUser.id,
        first_name: name,
        last_name: surname,
        password: password,
        specialization: specialization,
        phone: cell,
      };

      const updateUser = await API.graphql<
        GraphQLQuery<UpdateMedicalDoctorMutation>
      >({
        query: mutations.updateMedicalDoctor,
        variables: { input: userDetails },
      });

      let newData = updateUser.data?.updateMedicalDoctor;
      const data = JSON.stringify(newData);
      setLoginUser(newData);
      localStorage.setItem("user", data);
      setLoginUser(newData);

      console.log(updateUser.data?.updateMedicalDoctor);

      if (updateUser.data) {
        Toast.fire({
          icon: "success",
          title: "Doctor profile updated successfully!",
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
            <FaUserDoctor size="30" /> Medical doctor's profile
          </h2>
          <ul className="nav nav-tabs">
            {loginUser && loginUser.access_type !== "doctor" && (
              <>
                <li className="nav-item">
                  <IonButton
                    fill="clear"
                    className="nav-link text-secondary"
                    aria-current="page"
                    routerLink="/Dashboad"
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
              </>
            )}
            <li className="nav-item">
              <IonButton
                fill="clear"
                className="nav-link active text-secondary"
                aria-current="page"
                routerLink="/adminmedical"
              >
                <FaBriefcaseMedical /> Medical
              </IonButton>
            </li>
            {loginUser && loginUser.access_type === "doctor" && (
              <>
                <li className="nav-item">
                  <IonButton
                    fill="clear"
                    className="nav-link text-secondary"
                    aria-current="page"
                    routerLink="/doctors"
                  >
                    <FaUserDoctor /> Doctors
                  </IonButton>
                </li>
                <li className="nav-item">
                  <IonButton
                    fill="clear"
                    className="nav-link text-secondary"
                    aria-current="page"
                    routerLink="/adminmedical"
                  >
                    <RiHospitalFill /> Hospital
                  </IonButton>
                </li>
              </>
            )}
          </ul>
          <br />

          {loginUser && loginUser.access_type === "admin" && (
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <IonButton
                  fill="clear"
                  className="nav-link text-secondary"
                  aria-current="page"
                  routerLink="/Dashboad"
                >
                  <AiOutlineHome /> Dashboard
                </IonButton>
              </li>
              <li className="nav-item">
                <IonButton
                  fill="clear"
                  className="nav-link active text-secondary"
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
              <li className="nav-item">
                <IonButton
                  fill="clear"
                  className="nav-link text-secondary"
                  aria-current="page"
                  href="#"
                >
                  <RiGovernmentFill /> Department
                </IonButton>
              </li>
              <li className="nav-item">
                <IonButton
                  fill="clear"
                  className="nav-link text-secondary"
                  aria-current="page"
                  routerLink="/"
                >
                  <GiReceiveMoney /> Grant
                </IonButton>
              </li>
            </ul>
          )}

          <br />
          <>
            <div className="row text-center">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <IonItem>
                  <IonInput
                    label="Name"
                    value={name}
                    onIonChange={(e: any) => setName(e.target.value)}
                    labelPlacement="floating"
                    placeholder="Enter text"
                  ></IonInput>
                </IonItem>

                <IonItem>
                  <IonInput
                    label="Surname"
                    value={surname}
                    onIonChange={(e: any) => setSurname(e.target.value)}
                    labelPlacement="floating"
                    placeholder="Enter text"
                  ></IonInput>
                </IonItem>

                <IonItem disabled>
                  <IonInput
                    label="specialization"
                    value={specialization}
                    onInput={(e: any) => setSpecialization(e.target.value)}
                    labelPlacement="floating"
                    type="text"
                    placeholder="Enter text"
                  ></IonInput>
                </IonItem>

                <IonItem disabled>
                  <IonInput
                    label="Email"
                    value={email}
                    onInput={(e: any) => setEmail(e.target.value)}
                    labelPlacement="floating"
                    type="email"
                    placeholder="Enter text"
                  ></IonInput>
                </IonItem>

                <IonItem>
                  <IonInput
                    label="Password"
                    value={password}
                    labelPlacement="floating"
                    type="password"
                    onInput={(e: any) => setPassword(e.target.value)}
                    placeholder="Enter text"
                  ></IonInput>
                </IonItem>

                <IonItem>
                  <IonInput
                    label="Cell No"
                    value={cell}
                    onIonChange={(e: any) => setCell(e.target.value)}
                    labelPlacement="floating"
                    placeholder="Enter text"
                  ></IonInput>
                </IonItem>

                <IonButton
                  className="btn mt-3"
                  fill="outline"
                  shape="round"
                  color="medium"
                  onClick={() => UpdateDoctorProfile()}
                >
                  Update Profile
                </IonButton>
              </div>

              <div className="col-sm-6 text-secondary p-5">
                <FaUserDoctor size="200" />
                {loginUser && loginUser.access_type === "user" && (
                  <IonButton
                    onClick={() => deleteUserAccount()}
                    shape="round"
                    color="danger"
                  >
                    Cancel User Account
                  </IonButton>
                )}
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

export default DoctorProfile;
