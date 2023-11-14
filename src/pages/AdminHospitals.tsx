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
import { AiFillDelete, AiOutlineHome } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import {
  FaBriefcaseMedical,
  FaFingerprint,
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

const AdminHospitals: React.FC = () => {
  //User details
  const [hospital, set_hospital]: any = useState();
  const [visible, setVisible] = useState(false);
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
    getAllHospitals();
  }, []);

  useEffect(() => {
    setProducts(hospital);
  }, [hospital]);

  const exportCSV = (selectionOnly: any) => {
    dt.current.exportCSV({ selectionOnly });
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

  //Nav reset
  function resData() {
    setNavMedical(false);
  }

  function deleteBtn(data: any) {
    console.log(deleteBtn);
    return (
      <IonButton fill="clear" color="medium">
        <FaRegEdit size="30" />
      </IonButton>
    );
  }

  //Get all users
  async function getAllHospitals() {
    const allUsers = await API.graphql<GraphQLQuery<ListHospitalsQuery>>({
      query: queries.listHospitals,
    });
    console.log(allUsers.data?.listHospitals?.items);
    set_hospital(allUsers.data?.listHospitals?.items);
  }

  //
  async function UpdateHospitalData() {
    const todoDetails: UpdateHospitalInput = {
      id: selectedHos.id,
      hospital_name: hospitalName,
      address: hospitalAddress,
      postal_code: hospitalPostalCode,
    };

    const updatedTodo = await API.graphql<GraphQLQuery<UpdateHospitalMutation>>(
      {
        query: mutations.updateHospital,
        variables: { input: todoDetails },
      }
    );

    if (updatedTodo) {
      setInterval(() => {
        window.location.href = "/adminhospitals";
      }, 1500);

      setVisibleHospital(false);
      Toast.fire({
        icon: "success",
        title: "Record updated successfully!",
      });
    }
  }

  async function deleteBiometricData(id: any) {
    // Prompt the user for confirmation before deleting
    const confirmed = window.confirm(
      "Are you sure you want to delete this hopital data?"
    );
    if (!confirmed) {
      return; // User canceled the deletion
    }

    const hospitalDetails: DeleteHospitalInput = {
      id: id,
    };

    const deletedTodo = await API.graphql<GraphQLQuery<DeleteHospitalMutation>>(
      {
        query: mutations.deleteHospital,
        variables: { input: hospitalDetails },
      }
    );

    if (deletedTodo) {
      const updatedItems = hospital.filter((item: any) => item.id !== id);
      // Update the state with the new array
      set_hospital(updatedItems);
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
            <RiHospitalFill size="30" /> Hospitals
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
                <RiHospitalFill /> Hospital
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
              className="dataRowT"
              ref={dt}
              value={hospital}
              style={{ textAlign: "left" }}
              selectionMode="single"
              paginator
              rows={5}
              rowsPerPageOptions={[5, 10, 25, 50]}
            >
              <Column
                className="col_rec"
                field="hospital_name"
                header="Hospital Name"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                className="col_rec"
                field="address"
                header="Address"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                className="col_rec"
                field="postal_code"
                header="Postal Code"
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
              <Column
                className="col_rec"
                field="id_number"
                header="Delete"
                style={
                  loginUser && loginUser.access_type === "doctor"
                    ? { display: "none" }
                    : { width: "25%" }
                }
                body={(data: any) => (
                  <IonButton
                    onClick={() => deleteBiometricData(data.id)}
                    fill="clear"
                    color="danger"
                  >
                    <AiFillDelete size="30" />
                  </IonButton>
                )}
              ></Column>
            </DataTable>
          </div>
        </section>

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
              value={hospitalName}
              onIonChange={(e: any) => setHospitalName(e.target.value)}
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="Hospital Address"
              onIonChange={(e: any) => setHospitalAddress(e.target.value)}
              value={hospitalAddress}
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
              value={hospitalPostalCode}
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
            onClick={() => UpdateHospitalData()}
          >
            Update Record
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

export default AdminHospitals;
