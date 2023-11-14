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
import { useRef, useState, useContext, useEffect } from "react";
import { HiMiniUser } from "react-icons/hi2";
import { TbReportMedical } from "react-icons/tb";
import { BsClockHistory } from "react-icons/bs";
import MedicalData from "../components/MedicalData";
import CustomNavigationTap from "../context/custNav";
import { AiFillDelete, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaBriefcaseMedical, FaUsers } from "react-icons/fa6";
import { RiGovernmentFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import AllUsers from "../context/users";
import { FaRegEdit } from "react-icons/fa";
import { InputSwitch } from "primereact/inputswitch";
import GrantData from "../context/grant";

const AdminGrant: React.FC = () => {
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
  const { users, setUsers }: any = useContext(AllUsers);
  const [products, setProducts] = useState([]);
  const [metaKey, setMetaKey] = useState(true);
  const { getGrant, setGrant }: any = useContext(GrantData);

  //Nav reset
  function resData() {
    setNavMedical(false);
  }

  //   name: String!
  //   surname: String!
  //   email: String!
  //   password: String!
  //   address: String!
  //   postal_code: String!
  //   id_number: String!
  //   cell_phone_no: String!
  //   access_type: String!

  function deleteBtn(data: any) {
    console.log(deleteBtn);
    return (
      <IonButton fill="clear" color="medium">
        <FaRegEdit size="30" />
      </IonButton>
    );
  }

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

          <div className="col-sm-12 text-secondary">
            <DataTable
              value={getGrant}
              style={{ textAlign: "left" }}
              selectionMode="single"
            >
              <Column
                className="col_rec"
                field="grantName"
                header="Grant"
                style={{ width: "25%" }}
              ></Column>
              <Column
                className="col_rec"
                field="amount"
                header="Amount"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                className="col_rec"
                field="applicationProcess"
                header="Status"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                className="col_rec"
                field="id_number"
                header="User"
                sortable
                style={{ width: "25%" }}
                body={<AiOutlineUser size="30" />}
              ></Column>
              <Column
                className="col_rec"
                field="id_number"
                header="Delete"
                sortable
                style={{ width: "25%" }}
                body={
                  <IonButton fill="clear" color="danger">
                    <AiFillDelete size="30" />
                  </IonButton>
                }
              ></Column>
            </DataTable>
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

export default AdminGrant;
