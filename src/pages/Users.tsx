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
import { BsClockHistory, BsFiletypeCsv } from "react-icons/bs";
import MedicalData from "../components/MedicalData";
import CustomNavigationTap from "../context/custNav";
import { AiFillDelete, AiOutlineHome } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import * as mutations from "../graphql/mutations";
import {
  FaBriefcaseMedical,
  FaFingerprint,
  FaRegFilePdf,
  FaUsers,
} from "react-icons/fa6";
import { RiGovernmentFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import AllUsers from "../context/users";
import { FaRegEdit } from "react-icons/fa";
import { InputSwitch } from "primereact/inputswitch";
import { usePDF } from "react-to-pdf";
import { DeleteUserInput, DeleteUserMutation } from "../API";
import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import Swal from "sweetalert2";
import UserSelected from "../context/selected_user";

const Users: React.FC = () => {
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
  const { toPDF, targetRef } = usePDF({ filename: "users.pdf" });

  //Nav state
  const [navMedical, setNavMedical]: any = useState(false);
  const { users, setUsers }: any = useContext(AllUsers);
  const [products, setProducts] = useState(users);
  const [metaKey, setMetaKey] = useState(true);
  const dt: any = useRef(null);
  const [allHospitals, setAllHospitals]: any = useState();
  const { selectedUser, setSelectedUser }: any = useContext(UserSelected);

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

  //Nav reset
  function resData() {
    setNavMedical(false);
  }

  const cols = [
    { field: "code", header: "Code" },
    { field: "name", header: "Name" },
    { field: "category", header: "Category" },
    { field: "quantity", header: "Quantity" },
  ];

  const exportColumns = cols.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }));

  const exportCSV: any = (selectionOnly: any) => {
    dt.current.exportCSV({ selectionOnly });
  };

  const exportPdf = () => {
    let dataCC = "jspdf";
    import(dataCC).then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default(0, 0);

        doc.autoTable(exportColumns, products);
        doc.save("products.pdf");
      });
    });
  };

  const exportExcel = () => {
    let dataFF = "xlsx";
    import(dataFF).then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(products);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      saveAsExcelFile(excelBuffer, "products");
    });
  };

  const saveAsExcelFile = (buffer: any, fileName: any) => {
    let neDDD = "file-saver";
    import(neDDD).then((module) => {
      if (module && module.default) {
        let EXCEL_TYPE =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        let EXCEL_EXTENSION = ".xlsx";
        const data = new Blob([buffer], {
          type: EXCEL_TYPE,
        });

        module.default.saveAs(
          data,
          fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
        );
      }
    });
  };

  function deleteBtn(data: any) {
    console.log(deleteBtn);
    return (
      <IonButton fill="clear" color="medium">
        <FaRegEdit size="30" />
      </IonButton>
    );
  }

  async function DeleteUser(id: any) {
    // Prompt the user for confirmation before deleting
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmed) {
      return; // User canceled the deletion
    }

    const userDetails: DeleteUserInput = {
      id: id,
    };

    const deletedTodo = await API.graphql<GraphQLQuery<DeleteUserMutation>>({
      query: mutations.deleteMedicalDoctor,
      variables: { input: userDetails },
    });

    if (deletedTodo) {
      const updatedItems = users.filter((item: any) => item.id !== id);
      // Update the state with the new array
      setUsers(updatedItems);
      Toast.fire({
        icon: "success",
        title: "Record deleted successfully!",
      });
    }
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
          </ul>
          <br />
          <div className="col-sm-12 text-secondary" ref={targetRef}>
            <div className="bg-" style={{ textAlign: "right" }}>
              <IonButton
                fill="clear"
                color="medium"
                onClick={() => exportCSV(false)}
                data-pr-tooltip="CSV"
              >
                <BsFiletypeCsv size="25" /> Download CSV
              </IonButton>
              <IonButton color="medium" fill="clear" onClick={() => toPDF()}>
                <FaRegFilePdf size="25" /> Download PDF
              </IonButton>
            </div>
            <DataTable
              paginator
              rows={5}
              rowsPerPageOptions={[5, 10, 25, 50]}
              value={users}
              style={{ textAlign: "left" }}
              selectionMode="single"
            >
              <Column
                className="col_rec"
                field="name"
                header="Name"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                className="col_rec"
                field="surname"
                header="Surname"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                className="col_rec"
                field="id_number"
                header="ID Number"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                className="col_rec"
                field="id_number"
                header="Biomatrics"
                style={{ width: "25%" }}
                body={
                  <IonButton color="medium" fill="clear" routerLink="/profile">
                    <FaFingerprint size="30 " />
                  </IonButton>
                }
              ></Column>
              <Column
                className="col_rec"
                field="id_number"
                header="Access"
                sortable
                style={{ width: "25%" }}
                body={(data: any) => (
                  <IonButton
                    color="medium"
                    fill="clear"
                    onClick={() => setSelectedUser(data)}
                    routerLink="/adminedit"
                  >
                    <FaRegEdit size="30 " />
                  </IonButton>
                )}
              ></Column>
              <Column
                className="col_rec"
                field="id_number"
                header="Delete"
                sortable
                style={{ width: "25%" }}
                body={(data: any) => (
                  <IonButton
                    fill="clear"
                    onClick={() => DeleteUser(data.id)}
                    color="danger"
                  >
                    <AiFillDelete size="30" />
                  </IonButton>
                )}
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

export default Users;
