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
import { PiBaby } from "react-icons/pi";
import MedicalData from "../components/MedicalData";
import CustomNavigationTap from "../context/custNav";
import { AiFillDelete, AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { IoFingerPrintOutline } from "react-icons/io5";
import {
  FaArrowRightLong,
  FaBaby,
  FaBriefcaseMedical,
  FaFingerprint,
  FaNotesMedical,
  FaRegFilePdf,
  FaUserDoctor,
  FaUsers,
} from "react-icons/fa6";
import {
  RiFingerprint2Fill,
  RiGovernmentFill,
  RiHospitalLine,
} from "react-icons/ri";
import { GrChapterAdd } from "react-icons/gr";
import LoginData from "../context/login";
import AllUsers from "../context/users";
import UserSelected from "../context/selected_user";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FaRegEdit } from "react-icons/fa";
import {
  CreatePrescriptionInput,
  CreatePrescriptionMutation,
  DeleteUserInput,
  DeleteUserMutation,
} from "../API";
import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import * as mutations from "../graphql/mutations";
import Swal from "sweetalert2";
import { BsArrowRightSquare, BsFiletypeCsv } from "react-icons/bs";
import { usePDF } from "react-to-pdf";
import { InputText } from "primereact/inputtext";
import { Button } from "@aws-amplify/ui-react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { IoIosAddCircleOutline, IoMdClose } from "react-icons/io";
import { GiH2O } from "react-icons/gi";

const Print: React.FC = () => {
  const [medications, setMedications] = useState([
    { name: "Aspirin", dosage: "81 mg" },
    { name: "Lisinopril", dosage: "10 mg" },
    { name: "Atorvastatin", dosage: "20 mg" },
    { name: "Metformin", dosage: "500 mg" },
    { name: "Levothyroxine", dosage: "50 mcg" },
    { name: "Ibuprofen", dosage: "200 mg" },
    { name: "Acetaminophen", dosage: "500 mg" },
    { name: "Losartan", dosage: "50 mg" },
    { name: "Simvastatin", dosage: "40 mg" },
    { name: "Metoprolol", dosage: "25 mg" },
    { name: "Omeprazole", dosage: "20 mg" },
    { name: "Gabapentin", dosage: "300 mg" },
    { name: "Hydrochlorothiazide", dosage: "25 mg" },
    { name: "Amlodipine", dosage: "5 mg" },
    { name: "Sertraline", dosage: "50 mg" },
    { name: "Warfarin", dosage: "5 mg" },
    { name: "Citalopram", dosage: "20 mg" },
    { name: "Clopidogrel", dosage: "75 mg" },
    { name: "Metformin XR", dosage: "1000 mg" },
    { name: "Escitalopram", dosage: "10 mg" },
    { name: "Doxycycline", dosage: "100 mg" },
    { name: "Albuterol", dosage: "90 mcg/actuation" },
    { name: "Prednisone", dosage: "10 mg" },
    { name: "Amoxicillin", dosage: "500 mg" },
    { name: "Fluoxetine", dosage: "20 mg" },
    { name: "Pantoprazole", dosage: "40 mg" },
    { name: "Trazodone", dosage: "50 mg" },
    { name: "Duloxetine", dosage: "30 mg" },
    { name: "Venlafaxine", dosage: "75 mg" },
    { name: "Ranitidine", dosage: "150 mg" },
    { name: "Meloxicam", dosage: "15 mg" },
    { name: "Carvedilol", dosage: "12.5 mg" },
    { name: "Celecoxib", dosage: "200 mg" },
    { name: "Montelukast", dosage: "10 mg" },
    { name: "Hydroxyzine", dosage: "25 mg" },
    { name: "Rosuvastatin", dosage: "10 mg" },
    { name: "Furosemide", dosage: "40 mg" },
    { name: "Loratadine", dosage: "10 mg" },
    { name: "Cyclobenzaprine", dosage: "10 mg" },
    { name: "Esomeprazole", dosage: "40 mg" },
    { name: "Tramadol", dosage: "50 mg" },
    { name: "Azithromycin", dosage: "250 mg" },
    { name: "Methylprednisolone", dosage: "4 mg" },
    { name: "Lorazepam", dosage: "1 mg" },
    { name: "Tamsulosin", dosage: "0.4 mg" },
    { name: "Mirtazapine", dosage: "15 mg" },
    // Add 50 more medications as needed
  ]);
  //User details
  const { loginUser, setLoginUser }: any = useContext(LoginData);
  const [filters, setFilters]: any = useState(null);
  //Nav state
  const [navMedical, setNavMedical]: any = useState(false);
  const { users, setUsers }: any = useContext(AllUsers);
  const [products, setProducts] = useState(users);
  const [metaKey, setMetaKey] = useState(true);
  const dt: any = useRef(null);
  const [allHospitals, setAllHospitals]: any = useState();
  const { selectedUser, setSelectedUser }: any = useContext(UserSelected);
  const { toPDF, targetRef } = usePDF({ filename: "users.pdf" });
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [dosage, setDosage]: any = useState();

  //
  const [patientName, setPatientName] = useState("");
  const [medicationData, setMedicationData] = useState("");
  const [dataUs, setDataUs]: any = useState("");

  useEffect(() => {
    if (selectedUser) {
      setDataUs(selectedUser.name);
    }

    console.log(selectedUser);
  }, [dataUs]);

  useEffect(() => {
    initFilters();
  }, []);

  useEffect(() => {
    setProducts(users);
  }, [users]);

  //Nav reset
  function resData() {
    setNavMedical(false);
  }

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

  const clearFilter = () => {
    initFilters();
  };

  const onGlobalFilterChange = (e: any) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const initFilters = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      "country.name": {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      representative: { value: null, matchMode: FilterMatchMode.IN },
      date: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
      },
      balance: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      status: {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
      verified: { value: null, matchMode: FilterMatchMode.EQUALS },
    });
    setGlobalFilterValue("");
  };

  //Add prescription
  async function addPrescription() {
    const prescriptionDetails: CreatePrescriptionInput = {
      patient_name: dataUs.name,
      medication_name: medicationData[0],
      doctor_name: loginUser.first_name + " " + loginUser.last_name,
      dosage: medicationData[1],
      patient_id: dataUs.id,
      medical_doctor_id: loginUser.id,
    };

    const newTodo = await API.graphql<GraphQLQuery<CreatePrescriptionMutation>>(
      {
        query: mutations.createPrescription,
        variables: { input: prescriptionDetails },
      }
    );

    if (newTodo) {
      setIsOpen(false);
      Toast.fire({
        icon: "success",
        title: "Subscription submited successfully!",
      });
    }
  }

  const renderHeader = () => {
    return (
      <div className="" style={{ textAlign: "right" }}>
        <span className="p-input-icon-left p-2">
          <span className="text-danger">
            {" "}
            <AiOutlineSearch size="20" />
          </span>
          <InputText
            className="bg-light"
            style={{
              borderLeft: "none",
              borderRight: "none",
              borderTop: "none",
            }}
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };

  const header = renderHeader();

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Neviagtion section */}
        <Nav />

        <section className="about-section  bg-light">
          <h2 className="about-sub text-secondary pb-5">
            <FaFingerprint size="30" /> Scan Patient
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
            <li className="nav-item text-right">
              <IonButton
                routerLink="/Prescription"
                className="pt-2"
                color="medium"
                fill="clear"
              >
                <FaNotesMedical /> Prescription
              </IonButton>
            </li>
            <li className="nav-item text-right">
              <IonButton className="pt-2" color="medium" fill="clear">
                <RiFingerprint2Fill /> Find user
              </IonButton>
            </li>
            <li className="nav-item text-right">{header}</li>
          </ul>

          <div className="row text-center ">
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
                showGridlines
                rowsPerPageOptions={[5, 10, 25, 50]}
                value={products}
                style={{ textAlign: "left" }}
                selectionMode="single"
                filters={filters}
                globalFilterFields={[
                  "name",
                  "surname",
                  "id_number",
                  "email",
                  "cell_phone_no",
                ]}
                emptyMessage="No customers found."
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
                  field="email"
                  header="Eamil"
                  style={{ width: "25%" }}
                ></Column>
                <Column
                  className="col_rec"
                  field="cell_phone_no"
                  header="Cell No"
                  style={{ width: "25%" }}
                ></Column>
                <Column
                  className="col_rec"
                  field="id_number"
                  header="Prescription"
                  style={{ width: "25%" }}
                  body={(data: any) => (
                    <IonButton
                      className="text-secondary"
                      fill="clear"
                      onClick={() => {
                        setIsOpen(!isOpen);
                        setDataUs(data);
                      }}
                    >
                      <IoIosAddCircleOutline size="37" />
                    </IonButton>
                  )}
                ></Column>
              </DataTable>
            </div>
          </div>
        </section>

        {/*  */}
        <IonModal className="modalP" isOpen={isOpen}>
          <IonHeader style={{ borderStyle: "none", boxShadow: "none" }}>
            <IonToolbar style={{ borderStyle: "none" }}>
              <IonTitle color="medium">Prescription</IonTitle>
              <IonButtons slot="end">
                <IonButton color="medium" onClick={() => setIsOpen(false)}>
                  <IoMdClose size="20" />
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <div className="text-center text-secondary">
              <FaUserDoctor size="60" />
              <h2>Medical Prescription</h2>
              <br />
            </div>
            <IonItem disabled>
              <IonInput
                label="Patient Name"
                value={dataUs.name}
                type="text"
                labelPlacement="floating"
                placeholder="Enter text"
              ></IonInput>
            </IonItem>

            <IonItem disabled>
              <IonInput
                label="Patient Name"
                value={loginUser && loginUser.first_name}
                type="text"
                labelPlacement="floating"
                placeholder="Enter text"
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonSelect
                interface="popover"
                onIonChange={(e: any) => setMedicationData(e.target.value)}
                placeholder="Select Medication"
              >
                {medications.map((element) => {
                  return (
                    <div key={element.name}>
                      <IonSelectOption value={[element.name, element.dosage]}>
                        {element.name}
                      </IonSelectOption>
                    </div>
                  );
                })}
              </IonSelect>
            </IonItem>
            <IonButton
              onClick={() => addPrescription()}
              className="ion-padding"
              color="medium"
            >
              Submit Prescription
            </IonButton>
          </IonContent>
        </IonModal>
        {/* Footer section */}
        <section className="footer-section">
          <Footer />
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Print;
