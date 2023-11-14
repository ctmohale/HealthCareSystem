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
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useRef, useState, useContext, useEffect } from "react";
import { HiMiniUser } from "react-icons/hi2";
import { TbReportMedical } from "react-icons/tb";
import { PiBaby, PiUsersThreeBold } from "react-icons/pi";
import MedicalData from "../components/MedicalData";
import CustomNavigationTap from "../context/custNav";
import { AiOutlineHome } from "react-icons/ai";
import { BiSolidUserCircle, BiUserCheck } from "react-icons/bi";
import {
  FaBaby,
  FaBriefcaseMedical,
  FaFingerprint,
  FaNotesMedical,
  FaRegHospital,
  FaSuitcaseMedical,
  FaUserDoctor,
  FaUsers,
} from "react-icons/fa6";
import {
  RiGovernmentFill,
  RiHospitalFill,
  RiHospitalLine,
} from "react-icons/ri";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { API } from "aws-amplify";
import * as mutations from "../graphql/mutations";
import Swal from "sweetalert2";
import * as queries from "../graphql/queries";
import Select from "react-select";
import { BsGenderAmbiguous } from "react-icons/bs";
import LoginData from "../context/login";
import AdminData from "../context/admin";

const AdminMedical: React.FC = () => {
  //Sweet Alert Toast
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

  //
  const [allHospitals, setAllHospitals]: any = useState();

  //Doctor details
  const [name, setName]: any = useState("");
  const [surname, setSurname]: any = useState("");
  const [email, setEmail]: any = useState("");
  const [address, setAddress]: any = useState("");
  const [postal, setPostal]: any = useState("");
  const [cell, setCell]: any = useState("");
  const [specialization, setSpecialization]: any = useState("");
  const [hospitalID, setHospitalID]: any = useState("");
  const [grant, setGrant]: any = useState("");
  const { loginUser, setLoginUser }: any = useContext(LoginData);
  const { admin, setAdmin }: any = useContext(AdminData);

  //Add hosppiatal
  const [hospitalName, setHospitalName]: any = useState("");
  const [hospitalAddress, setHospitalAddress]: any = useState("");
  const [hospitalPostalCode, setHospitalPostalCode]: any = useState("");

  const { customNavTap, setCustomNavTap }: any =
    useContext(CustomNavigationTap);

  //Nav state
  const [navMedical, setNavMedical]: any = useState(false);

  const [visibleHospital, setVisibleHospital] = useState(false);
  const [visibleNewBorn, setVisibleNewBorn] = useState(false);
  const [visible, setVisible] = useState(false);

  const [options, setPotions]: any = useState();

  // State variables for DepartmentOfHomeAffairs fields
  const [postalCode, setPostalCode] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [cellPhoneNumber, setCellPhoneNumber] = useState("");
  const [race, setRace] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [citizenshipStatus, setCitizenshipStatus] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [notes, setNotes] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactPhone, setEmergencyContactPhone] = useState("");

  useEffect(() => {
    GetAllHospitals();
  }, []);

  useEffect(() => {
    if (gender !== "") {
      setIdNumber(generateSAIDNumber(gender));
    }
  }, [gender]);

  useEffect(() => {
    let tempData: any = {
      value: "",
      id: "",
    };

    allHospitals !== undefined &&
      allHospitals.map((element: any) => {
        tempData = {
          value: element.hospital_name,
          id: element.id,
        };
      });

    setPotions(tempData);
  }, [allHospitals]);

  //Nav reset
  function resData() {
    setNavMedical(false);
  }

  //Add hospistal data
  async function AddHospitalFunction() {
    if (
      hospitalAddress !== "" &&
      hospitalName !== "" &&
      hospitalPostalCode !== ""
    ) {
      const todoDetails = {
        hospital_name: hospitalName,
        address: hospitalAddress,
        postal_code: hospitalPostalCode,
      };

      const newHospiatal = await API.graphql({
        query: mutations.createHospital,
        variables: { input: todoDetails },
      });

      if (newHospiatal) {
        setVisibleHospital(false);
        Toast.fire({
          icon: "success",
          title: "Hospital added successfully!",
        });
        setInterval(() => {
          window.location.replace("/adminmedical");
        }, 1500);
      }
    } else {
      Toast.fire({
        icon: "warning",
        title: "All input are required!",
      });
    }
  }

  //Add new born
  async function AddNewBornFunction() {
    if (
      name !== "" &&
      surname !== "" &&
      address !== "" &&
      postalCode !== "" &&
      idNumber !== "" &&
      cellPhoneNumber !== "" &&
      race !== "" &&
      gender !== "" &&
      nationality !== "" &&
      email !== "" &&
      maritalStatus !== "" &&
      citizenshipStatus !== ""
    ) {
      const newbornDetails = {
        name: name,
        surname: surname,
        address: address,
        postal_code: postalCode,
        id_number: idNumber,
        cell_phone_no: cellPhoneNumber,
        race: race,
        date_of_birth: extractDateOfBirthFromSAID(idNumber),
        gender: gender,
        nationality: nationality,
        email: email,
        marital_status: maritalStatus,
        citizenship_status: citizenshipStatus,
        photo_url: photoURL,
        notes: notes,
        emergency_contact_name: emergencyContactName,
        emergency_contact_phone: emergencyContactPhone,
        hospital_id: hospitalID,
      };

      const newNewBorn = await API.graphql({
        query: mutations.createDepartmentOfHomeAffairs,
        variables: { input: newbornDetails },
      });

      if (newNewBorn) {
        setVisibleNewBorn(false);
        Toast.fire({
          icon: "success",
          title: "Newborn information added successfully!",
        });
        setInterval(() => {
          window.location.replace("/adminmedical");
        }, 1500);
      }
    } else {
      Toast.fire({
        icon: "warning",
        title: "All input fields are required!",
      });
    }
  }

  function generateSAIDNumber(gender: any) {
    // Get the current date components
    const today = new Date();
    const year = today.getFullYear().toString().substr(-2); // Get the last 2 digits of the year
    const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-indexed
    const day = today.getDate().toString().padStart(2, "0");

    // Generate a random 4-digit sequence number
    const sequence = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");

    // Generate a random 1-digit citizenship status (usually 0 for South African citizens)
    const citizenshipStatus = Math.floor(Math.random() * 10);

    // Validate and use the provided gender (even number for males, odd for females)
    let genderDigit;
    if (gender === "male") {
      genderDigit = 2 * Math.floor(Math.random() * 5);
    } else if (gender === "female") {
      genderDigit = 1 + 2 * Math.floor(Math.random() * 5);
    } else {
      throw new Error('Invalid gender. Use "male" or "female".');
    }

    // Calculate the checksum (Z) - This part is tricky as it involves complex calculations.

    // Combine all components to create a 13-digit ID number
    const idNumber =
      year + month + day + sequence + citizenshipStatus + genderDigit;

    return idNumber;
  }

  function extractDateOfBirthFromSAID(idNumber: any) {
    // Check if the provided ID number is a valid length
    if (idNumber.length !== 13) {
      return "Invalid ID Number";
    }

    // Extract the birthdate component (first 6 digits)
    const birthdateComponent = idNumber.substr(0, 6);

    // Extract the year, month, and day from the birthdate component
    const year = birthdateComponent.substr(0, 2);
    const month = birthdateComponent.substr(2, 2);
    const day = birthdateComponent.substr(4, 2);

    // Construct the full birthdate in the format YY-MM-DD
    const fullBirthdate = `19${year}-${month}-${day}`;

    return fullBirthdate;
  }

  //Add doctor data
  async function AddDoctorFunction() {
    console.log(hospitalID);
    if (
      name !== "" &&
      surname !== "" &&
      specialization !== "" &&
      email !== "" &&
      cell !== ""
    ) {
      const todoDetails = {
        first_name: name,
        last_name: surname,
        specialization: specialization,
        email: email,
        password: "123",
        access_type: "doctor",
        phone: cell,
        hospital_id: hospitalID,
      };

      const newTodo = await API.graphql({
        query: mutations.createMedicalDoctor,
        variables: { input: todoDetails },
      });

      console.log(visible);

      if (newTodo) {
        setVisible(false);
        Toast.fire({
          icon: "success",
          title: "New medical doctor added successfully!",
        });
        setInterval(() => {
          window.location.replace("/adminmedical");
        }, 1500);
      }
    } else {
      Toast.fire({
        icon: "warning",
        title: "All input are required!",
      });
    }
  }

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

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Neviagtion section */}
        <Nav />

        <section className="about-section  bg-light">
          <h2 className="about-sub text-secondary pb-5">
            <FaSuitcaseMedical size="30" /> Dashboard |{" "}
            {loginUser && loginUser.access_type === "doctor" && <>Medical </>}
          </h2>

          <ul className="nav nav-tabs">
            {loginUser && loginUser.access_type !== "doctor" && (
              <>
                {" "}
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
                    routerLink="/prescription"
                  >
                    <FaNotesMedical /> Prescription
                  </IonButton>
                </li>
                <li className="nav-item">
                  <IonButton
                    fill="clear"
                    className="nav-link text-secondary"
                    aria-current="page"
                    routerLink="/appointment"
                  >
                    <BiUserCheck size="25" /> Appointment
                  </IonButton>
                </li>
                <li className="nav-item">
                  <IonButton
                    fill="clear"
                    className="nav-link text-secondary"
                    aria-current="page"
                    routerLink="/adminhospitals"
                  >
                    <RiHospitalFill /> Hospital
                  </IonButton>
                </li>
              </>
            )}
          </ul>
          <br />

          <div className="row text-center" id="main_dash_doc">
            <div className="col-sm-3 text-secondary">
              <IonCard
                className="card-data"
                routerLink={
                  loginUser &&
                  loginUser.access_type !== "doctor" &&
                  "/adminregister"
                }
              >
                <IonTitle color="success">
                  <br />
                  <br />
                  <RiGovernmentFill size="100" />
                  <IonTitle className="text-light">
                    <b>Home Affairs </b>
                  </IonTitle>
                  <b>Registered</b>
                  <br />
                  <br />
                </IonTitle>
              </IonCard>
              <IonButton
                className="p-2"
                shape="round"
                fill="clear"
                color="light"
                onClick={() => setVisibleNewBorn(true)}
              >
                <IoMdAddCircleOutline size="40" /> Add NewBorn
              </IonButton>
            </div>

            <div className="col-sm-3 text-secondary">
              <IonCard className="card-data" routerLink="/print">
                <IonTitle color="success">
                  <br />
                  <br />
                  <FaFingerprint size="100" />
                  <IonTitle className="text-light">
                    <b>Find Patient</b>
                  </IonTitle>
                  <b>Registered</b>
                  <br />
                  <br />
                </IonTitle>
              </IonCard>
              <IonButton
                className="p-2"
                shape="round"
                fill="clear"
                color="light"
                style={
                  loginUser && loginUser.access_type === "doctor"
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <IoMdAddCircleOutline size="40" /> Add Finger-Print
              </IonButton>
            </div>

            <div className="col-sm-3 text-secondary">
              <IonCard className="card-data" routerLink="/doctors">
                <IonTitle color="success">
                  <br />
                  <br />
                  <FaUserDoctor size="100" />
                  <IonTitle className="text-light">
                    <b>Doctors</b>
                  </IonTitle>
                  <b>Registered</b>
                  <br />
                  <br />
                </IonTitle>
              </IonCard>
              <IonButton
                className="p-2"
                shape="round"
                fill="clear"
                onClick={() => setVisible(true)}
                color="light"
                style={
                  loginUser && loginUser.access_type === "doctor"
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <IoMdAddCircleOutline size="40" /> Add Doctor
              </IonButton>
            </div>

            <div className="col-sm-3 text-secondary">
              <IonCard className="card-data" routerLink="/adminhospitals">
                <IonTitle color="success">
                  <br />
                  <br />
                  <RiHospitalLine size="100" />
                  <IonTitle className="text-light">
                    <b>Hospital</b>
                  </IonTitle>
                  <b>Registered</b>
                  <br />
                  <br />
                </IonTitle>
              </IonCard>
              <IonButton
                className="p-2"
                onClick={() => setVisibleHospital(true)}
                shape="round"
                fill="clear"
                color="light"
                style={
                  loginUser && loginUser.access_type === "doctor"
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <IoMdAddCircleOutline size="40" /> Add Hospital
              </IonButton>
            </div>
          </div>
        </section>

        {/* Add Doctor  */}

        <Dialog
          header="Add Doctor"
          visible={visible}
          maximizable
          style={{ width: "50vw" }}
          onHide={() => setVisible(false)}
        >
          <IonItem>
            <IonInput
              label="Name"
              onIonChange={(e: any) => setName(e.target.value)}
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="Surname"
              onIonChange={(e: any) => setSurname(e.target.value)}
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="specialization"
              onInput={(e: any) => setSpecialization(e.target.value)}
              labelPlacement="floating"
              type="text"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="Email"
              onInput={(e: any) => setEmail(e.target.value)}
              labelPlacement="floating"
              type="email"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="Cell No"
              onIonChange={(e: any) => setCell(e.target.value)}
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <div className="p-3">
            <select
              className="form-select form-select-lg mb-3"
              aria-label="Large select example"
              onChange={(e: any) => setHospitalID(e.target.value)}
            >
              {allHospitals &&
                allHospitals.map((items: any) => {
                  return (
                    <option key={items.id} value={items.id}>
                      {items.hospital_name}
                    </option>
                  );
                })}
            </select>
          </div>

          <IonButton
            className="btn mt-3"
            fill="outline"
            shape="round"
            color="medium"
            onClick={() => AddDoctorFunction()}
          >
            Submit Info
          </IonButton>
        </Dialog>

        {/* Add Hospital  */}

        <Dialog
          header="Add Hospital"
          visible={visibleHospital}
          maximizable
          style={{ width: "50vw" }}
          onHide={() => setVisibleHospital(false)}
        >
          <IonItem>
            <IonInput
              label="Hospital Name"
              minlength={2}
              onIonChange={(e: any) => setHospitalName(e.target.value)}
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="Hospital Address"
              onIonChange={(e: any) => setHospitalAddress(e.target.value)}
              labelPlacement="floating"
              placeholder="Enter text"
              type="text"
              minlength={2}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="Hospital Postal Code"
              onIonChange={(e: any) => setHospitalPostalCode(e.target.value)}
              labelPlacement="floating"
              placeholder="Enter text"
              min={2}
              type="number"
            ></IonInput>
          </IonItem>

          <IonButton
            className="btn mt-3"
            fill="outline"
            shape="round"
            color="medium"
            onClick={() => AddHospitalFunction()}
          >
            Submit Info
          </IonButton>
        </Dialog>

        {/* Add new baby  */}

        <Dialog
          header="Register New Born"
          visible={visibleNewBorn}
          maximizable
          style={{ width: "50vw" }}
          onHide={() => setVisibleNewBorn(false)}
        >
          <label className="p-3" htmlFor="">
            <RiHospitalLine size="30" /> Select Hospital
          </label>
          <div className="p-2">
            <select
              className="form-select form-select-lg mb-3"
              aria-label="Large select example"
              onChange={(e: any) => setHospitalID(e.details.value)}
            >
              {allHospitals &&
                allHospitals.map((items: any) => {
                  return (
                    <option key={items.id} value={items.id}>
                      {items.hospital_name}
                    </option>
                  );
                })}
            </select>
          </div>

          <label className="p-3" htmlFor="">
            <BsGenderAmbiguous size="30" /> Select Gender
          </label>
          <div className="p-2">
            <select
              className="form-select form-select-lg mb-3"
              aria-label="Large select example"
              onChange={(e: any) => setGender(e.details.value)}
            >
              <option value="male" selected>
                Male
              </option>
              <option value="female">Female</option>
            </select>
          </div>

          <label className="p-3" htmlFor="">
            <GiTakeMyMoney size="30" /> Grant application
          </label>
          <div className="p-2">
            <select
              className="form-select form-select-lg mb-3"
              aria-label="Large select example"
              onChange={(e: any) => setGrant(e.details.value)}
            >
              <option value="Yes" selected>
                Yes
              </option>
              <option selected value="No">
                No
              </option>
            </select>
          </div>

          {/* Additional Fields for DepartmentOfHomeAffairs */}
          <IonItem>
            <IonInput
              label="Name"
              onIonChange={(e: any) => setName(e.target.value)}
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="Surname"
              onIonChange={(e: any) => setSurname(e.target.value)}
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="Address"
              onIonChange={(e: any) => setAddress(e.target.value)}
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="Postal Code"
              onIonChange={(e: any) => setPostalCode(e.target.value)}
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="Cell Phone Number"
              onIonChange={(e: any) => setCellPhoneNumber(e.target.value)}
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="Race"
              onIonChange={(e: any) => setRace(e.target.value)}
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="Nationality"
              onIonChange={(e: any) => setNationality(e.target.value)}
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="Email"
              onIonChange={(e: any) => setEmail(e.target.value)}
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="Marital Status"
              onIonChange={(e: any) => setMaritalStatus(e.target.value)}
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="Citizenship Status"
              onIonChange={(e: any) => setCitizenshipStatus(e.target.value)}
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="Photo URL"
              onIonChange={(e: any) => setPhotoURL(e.target.value)}
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="Notes"
              onIonChange={(e: any) => setNotes(e.target.value)}
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="Emergency Contact Name"
              onIonChange={(e: any) => setEmergencyContactName(e.target.value)}
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="Emergency Contact Phone"
              onIonChange={(e: any) => setEmergencyContactPhone(e.target.value)}
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <IonButton
            className="btn mt-3"
            fill="outline"
            shape="round"
            color="medium"
            onClick={() => AddNewBornFunction()}
          >
            Submit Info
          </IonButton>
        </Dialog>

        {/* Footer section */}
        <section className="footer-section">
          <Footer />
        </section>
      </IonContent>
    </IonPage>
  );
};

export default AdminMedical;
