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
import {
  FaBriefcaseMedical,
  FaFingerprint,
  FaNotesMedical,
  FaRegFilePdf,
  FaUserDoctor,
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
  DeleteMedicalDoctorInput,
  DeleteMedicalDoctorMutation,
  ListHospitalsQuery,
  ListMedicalDoctorsQuery,
} from "../API";
import * as queries from "../graphql/queries";
import { Button } from "@aws-amplify/ui-react";
import { usePDF } from "react-to-pdf";
import { Dialog } from "primereact/dialog";
import * as mutations from "../graphql/mutations";
import Swal from "sweetalert2";
import LoginData from "../context/login";

const Doctors: React.FC = () => {
  const [allDoctors, setAllDoctors]: any = useState();
  const { toPDF, targetRef } = usePDF({ filename: "doc.pdf" });

  //Doctor details
  const [name, setName]: any = useState("");
  const [surname, setSurname]: any = useState("");
  const [email, setEmail]: any = useState("");
  const [address, setAddress]: any = useState("");
  const [postal, setPostal]: any = useState("");
  const [cell, setCell]: any = useState("");
  const [specialization, setSpecialization]: any = useState("");
  const [hospitalID, setHospitalID]: any = useState("");
  const [visible, setVisible] = useState(false);
  const { loginUser, setLoginUser }: any = useContext(LoginData);

  useEffect(() => {
    getAllHospitals();
  }, []);

  const [products, setProducts] = useState([]);
  const dt: any = useRef(null);
  const [allHospitals, setAllHospitals]: any = useState();

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

  useEffect(() => {
    setProducts(allDoctors);
  }, [allDoctors]); // eslint-disable-line react-hooks/exhaustive-deps

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

  const header = (
    <div className="flex align-items-center justify-content-end gap-2">
      <Button
        type="button"
        onClick={() => exportCSV(false)}
        data-pr-tooltip="CSV"
      />
      <Button type="button" onClick={exportExcel} data-pr-tooltip="XLS" />
      <Button type="button" onClick={exportPdf} data-pr-tooltip="PDF" />
    </div>
  );

  function deleteBtn(data: any) {
    console.log(deleteBtn);
    return (
      <IonButton fill="clear" color="medium">
        <FaRegEdit size="30" />
      </IonButton>
    );
  }

  //Get all medical doctors
  async function getAllHospitals() {
    const allDoctors = await API.graphql<GraphQLQuery<ListMedicalDoctorsQuery>>(
      {
        query: queries.listMedicalDoctors,
      }
    );
    setAllDoctors(allDoctors.data?.listMedicalDoctors?.items);
  }

  async function DeleteDoctor(id: any) {
    // Prompt the user for confirmation before deleting
    const confirmed = window.confirm(
      "Are you sure you want to delete this doctor?"
    );
    if (!confirmed) {
      return; // User canceled the deletion
    }

    const hospitalDetails: DeleteMedicalDoctorInput = {
      id: id,
    };

    const deletedTodo = await API.graphql<
      GraphQLQuery<DeleteMedicalDoctorMutation>
    >({
      query: mutations.deleteMedicalDoctor,
      variables: { input: hospitalDetails },
    });

    if (deletedTodo) {
      const updatedItems = allDoctors.filter((item: any) => item.id !== id);
      // Update the state with the new array
      setAllDoctors(updatedItems);
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
            <FaUserDoctor size="30" /> Doctors
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
                className="nav-link active text-secondary"
                aria-current="page"
                routerLink="/doctors"
              >
                <FaUserDoctor /> Doctors
              </IonButton>
            </li>

            {/* {loginUser && loginUser.access_type === "doctor" && (
              <>
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
              </>
            )} */}
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
              value={allDoctors}
              style={{ textAlign: "left" }}
              selectionMode="single"
              paginator
              rows={5}
              rowsPerPageOptions={[5, 10, 25, 50]}
              tableStyle={{ minWidth: "50rem" }}
              paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
              currentPageReportTemplate="{first} to {last} of {totalRecords}"
            >
              <Column
                className="col_rec"
                field="first_name"
                header="Doctor Name"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                className="col_rec"
                field="last_name"
                header="Doctor Surname"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                className="col_rec"
                field="specialization"
                header="Specialization"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                className="col_rec"
                field="email"
                header="Email"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                className="col_rec"
                field="phone"
                header="Cell NO"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                className="col_rec"
                field="id_number"
                header="Access"
                sortable
                style={
                  loginUser && loginUser.access_type === "doctor"
                    ? { display: "none" }
                    : { width: "25%" }
                }
                body={
                  <IonButton color="medium" fill="clear" routerLink="/profile">
                    <FaRegEdit size="30 " />
                  </IonButton>
                }
              ></Column>
              <Column
                className="col_rec"
                field="id_number"
                header="Delete"
                sortable
                style={
                  loginUser && loginUser.access_type === "doctor"
                    ? { display: "none" }
                    : { width: "25%" }
                }
                body={(data) => (
                  <IonButton
                    onClick={() => DeleteDoctor(data.id)}
                    fill="clear"
                    color="danger"
                  >
                    <AiFillDelete size="30" />
                  </IonButton>
                )}
              ></Column>
            </DataTable>

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
                // onClick={() => AddDoctorFunction()}
              >
                Submit Info
              </IonButton>
            </Dialog>
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

export default Doctors;
