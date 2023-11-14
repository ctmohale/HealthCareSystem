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
import { MdCancel, MdOutlineCancel } from "react-icons/md";
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
import {
  BsArrowRightSquare,
  BsCheckCircle,
  BsCheckCircleFill,
  BsFiletypeCsv,
} from "react-icons/bs";
import { usePDF } from "react-to-pdf";
import { InputText } from "primereact/inputtext";
import { Button } from "@aws-amplify/ui-react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { BiUserCheck } from "react-icons/bi";
import * as queries from "../graphql/queries";
const Appointment: React.FC = () => {
  //User details
  const { loginUser, setLoginUser }: any = useContext(LoginData);
  const [filters, setFilters]: any = useState(null);
  //Nav state
  const { users, setUsers }: any = useContext(AllUsers);
  const [products, setProducts] = useState(users);
  const dt: any = useRef(null);
  const { selectedUser, setSelectedUser }: any = useContext(UserSelected);
  const { toPDF, targetRef } = usePDF({ filename: "users.pdf" });
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [appointmentData, setAppointmentData]: any = useState();

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
    GetAllAppointment();
  }, []);

  useEffect(() => {
    setProducts(appointmentData);
  }, [appointmentData]);

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

  async function GetAllAppointment() {
    // Simple query
    const allAppointment: any = await API.graphql({
      query: queries.listAppointments,
    });
    if (allAppointment) {
      setAppointmentData(allAppointment.data.listAppointments.items);
      console.log(allAppointment.data.listAppointments.items);
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
            <BiUserCheck size="35" /> Doctor Appointment
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
                className="nav-link  text-secondary"
                aria-current="page"
                routerLink="/adminmedical"
              >
                <FaBriefcaseMedical /> Medical
              </IonButton>
            </li>

            <li className="nav-item  text-right">
              <IonButton
                className="nav-link active pt-2"
                color="medium"
                fill="clear"
              >
                <BiUserCheck size="25" /> Appointment
              </IonButton>
            </li>
            <li className="nav-item text-right">{header}</li>
          </ul>

          <div className="row text-center " id="doc_secion_s">
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
                  "appointmentDate",
                  "status",
                  "notes",
                ]}
                emptyMessage="No appointment found...."
              >
                <Column
                  className="col_rec"
                  field="name"
                  header="User"
                  sortable
                  style={{ width: "25%" }}
                ></Column>
                <Column
                  className="col_rec"
                  field="appointmentDate"
                  header="Appointment Date"
                  sortable
                  style={{ width: "25%" }}
                ></Column>
                <Column
                  className="col_rec"
                  field="status"
                  header="Appointment Status"
                  sortable
                  style={{ width: "25%" }}
                ></Column>
                <Column
                  className="col_rec"
                  field="notes"
                  header="Notes"
                  style={{ width: "25%" }}
                ></Column>
                <Column
                  className="col_rec c text-center"
                  header="Approve"
                  style={{ width: "50%" }}
                  body={() => (
                    <>
                      <IonButton shape="round" color="medium" fill="clear">
                        <BsCheckCircle size="25" />
                      </IonButton>
                    </>
                  )}
                ></Column>
                <Column
                  className="col_rec text-center"
                  header="Reject"
                  style={{ width: "50%" }}
                  body={() => (
                    <>
                      <IonButton shape="round" color="danger" fill="clear">
                        <MdOutlineCancel size="30" />
                      </IonButton>
                    </>
                  )}
                ></Column>
              </DataTable>
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

export default Appointment;
