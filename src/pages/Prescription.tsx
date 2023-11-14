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
import {
  BsClockHistory,
  BsFileEarmarkWordFill,
  BsFileWord,
  BsFiletypeCsv,
} from "react-icons/bs";
import MedicalData from "../components/MedicalData";
import CustomNavigationTap from "../context/custNav";
import { AiFillDelete, AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import {
  FaBriefcaseMedical,
  FaFingerprint,
  FaNotesMedical,
  FaRegFilePdf,
  FaUsers,
} from "react-icons/fa6";
import { RiGovernmentFill, RiHospitalFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import AllUsers from "../context/users";
import { FaRegEdit } from "react-icons/fa";
import { InputSwitch } from "primereact/inputswitch";
import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import {
  DeleteHospitalInput,
  DeleteHospitalMutation,
  ListHospitalsQuery,
  ListPrescriptionsQuery,
  UpdateHospitalInput,
  UpdateHospitalMutation,
} from "../API";
import * as queries from "../graphql/queries";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Tooltip } from "primereact/tooltip";
import generatePDF from "react-to-pdf";
import { usePDF } from "react-to-pdf";
import * as mutations from "../graphql/mutations";
import Swal from "sweetalert2";
import LoginData from "../context/login";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { useHistory } from "react-router-dom";

const Prescription: React.FC = () => {
  let history = useHistory();
  //User details
  const [hospital, set_hospital]: any = useState();
  const [visible, setVisible] = useState(false);
  const [filters, setFilters]: any = useState(null);
  const { customNavTap, setCustomNavTap }: any =
    useContext(CustomNavigationTap);
  const { toPDF, targetRef }: any = usePDF({ filename: "page.pdf" });
  //Nav state
  const [navMedical, setNavMedical]: any = useState(false);
  const { users, setUsers }: any = useContext(AllUsers);
  const [products, setProducts] = useState([]);
  const [metaKey, setMetaKey] = useState(true);
  const dt: any = useRef(null);
  const { loginUser, setLoginUser }: any = useContext(LoginData);
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

  //Add hosppiatal
  const [hospitalName, setHospitalName]: any = useState("");
  const [hospitalAddress, setHospitalAddress]: any = useState("");
  const [hospitalPostalCode, setHospitalPostalCode]: any = useState("");
  const [pres, setPres]: any = useState();
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [selectedHos, setSelectedHos]: any = useState();

  const [visibleHospital, setVisibleHospital] = useState(false);

  const cols: any = [
    { field: "code", header: "Code" },
    { field: "name", header: "Name" },
    { field: "category", header: "Category" },
    { field: "quantity", header: "Quantity" },
  ];

  const exportColumns = cols.map((col: any) => ({
    title: col.header,
    dataKey: col.field,
  }));

  useEffect(() => {
    if (selectedHos !== undefined) {
      console.log(setHospitalPostalCode);
      setHospitalName(selectedHos.name);
      setHospitalAddress(selectedHos.address);
      setHospitalPostalCode(selectedHos.code);
    }
  }, [selectedHos]);

  useEffect(() => {
    setProducts(hospital);
  }, [hospital]);

  useEffect(() => {
    initFilters();
  }, []);

  useEffect(() => {
    setProducts(pres);
  }, [pres]);

  useEffect(() => {
    const unlisten = history.listen(() => {
      // This function will run every time the location (page) changes
      getPres();
    });

    // Clean up the listener when the component unmounts
    return () => unlisten();
  }, [history]);

  const exportCSV = (selectionOnly: any) => {
    dt.current.exportCSV({ selectionOnly });
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

  let ss: any = "jspdf";
  const exportPdf: any = () => {
    import(ss).then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc: any = new jsPDF.default(0, 0);

        doc.autoTable(exportColumns, products);
        doc.save("products.pdf");
      });
    });
  };

  let xx: any = "xlsx";
  const exportExcel: any = () => {
    import(xx).then((xlsx: any) => {
      const worksheet: any = xlsx.utils.json_to_sheet(products);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      saveAsExcelFile(excelBuffer, "products");
    });
  };

  let xy: any = "file-saver";
  const saveAsExcelFile: any = (buffer: any, fileName: any) => {
    import(xy).then((module: any) => {
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

  //Get all users
  async function getPres() {
    const allUsers = await API.graphql<GraphQLQuery<ListPrescriptionsQuery>>({
      query: queries.listPrescriptions,
    });
    console.log(allUsers.data?.listPrescriptions?.items);
    setPres(allUsers.data?.listPrescriptions?.items);
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Neviagtion section */}
        <Nav />

        <section className="about-section  bg-light">
          <h2 className="about-sub text-secondary pb-5">
            <FaNotesMedical size="30" /> Medical Prescription
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
                className="nav-link  text-secondary"
                aria-current="page"
                routerLink="/adminmedical"
              >
                <FaBriefcaseMedical /> Medical
              </IonButton>
            </li>
            <li className="nav-item">
              <IonButton
                fill="clear"
                className="nav-link active text-secondary"
                aria-current="page"
                routerLink="/adminmedical"
              >
                <FaNotesMedical /> Prescription
              </IonButton>
            </li>
            <li className="nav-item text-right">{header}</li>
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
              className="dataRowT"
              ref={dt}
              value={pres}
              style={{ textAlign: "left" }}
              selectionMode="single"
              paginator
              rows={5}
              rowsPerPageOptions={[5, 10, 25, 50]}
              filters={filters}
              globalFilterFields={[
                "medication_name",
                "patient_name",
                "dosage",
                "doctor_name",
              ]}
              emptyMessage="No record found."
            >
              <Column
                className="col_rec"
                field="patient_name"
                header="Patient Name"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                className="col_rec"
                field="medication_name"
                header="Medication Name"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                className="col_rec"
                field="dosage"
                header="Dosage"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                className="col_rec"
                field="doctor_name"
                header="Doctor Name"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                className="col_rec"
                field="updatedAt"
                header="Date"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                className="col_rec"
                field="id_number"
                header="Access"
                style={
                  loginUser && loginUser.access_type === "doctor"
                    ? { display: "none" }
                    : { width: "25%" }
                }
                body={(data: any) => {
                  console.log(data);
                  return (
                    <IonButton
                      color="medium"
                      fill="clear"
                      onClick={(e) => {
                        setVisibleHospital(true);
                        setSelectedHos({
                          name: data.hospital_name,
                          address: data.address,
                          code: data.postal_code,
                          id: data.id,
                        });
                      }}
                    >
                      <FaRegEdit size="30 " />
                    </IonButton>
                  );
                }}
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

export default Prescription;
