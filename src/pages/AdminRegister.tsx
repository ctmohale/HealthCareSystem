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
  FaFingerprint,
  FaRegFilePdf,
  FaUserPen,
  FaUsers,
} from "react-icons/fa6";
import Swal from "sweetalert2";
import {
  DeleteUserInput,
  DeleteUserMutation,
  ListDepartmentOfHomeAffairsQuery,
  UpdateUserInput,
  UpdateUserMutation,
} from "../API";
import { API } from "aws-amplify";
import LoginData from "../context/login";
import { AiFillDelete, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { SignInHeader } from "../components/login/SignInHeader";
import { SignInFooter } from "../components/login/SignInFooter";
import { SignUpHeader } from "../components/login/SignUpHeader";
import { PasswordResetHeader } from "../components/login/PasswordResetHeader";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify, Auth } from "aws-amplify";
import { RiGovernmentFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { PiBaby, PiUsersThreeBold } from "react-icons/pi";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FaRegEdit } from "react-icons/fa";
import * as queries from "../graphql/queries";
import { BsFiletypeCsv } from "react-icons/bs";
import { usePDF } from "react-to-pdf";

const AdminRegister: React.FC = () => {
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

  const [homeAffirs, setHomeAffirs]: any = useState();
  const { toPDF, targetRef }: any = usePDF({ filename: "page.pdf" });
  const [products, setProducts] = useState([]);
  const [metaKey, setMetaKey] = useState(true);
  const dt: any = useRef(null);

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
    getAllDepartment();
  }, []);

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

  //Get all users
  async function getAllDepartment() {
    const allHomeAffirs = await API.graphql<
      GraphQLQuery<ListDepartmentOfHomeAffairsQuery>
    >({
      query: queries.listDepartmentOfHomeAffairs,
    });
    console.log(allHomeAffirs.data?.listDepartmentOfHomeAffairs?.items);
    setHomeAffirs(allHomeAffirs.data?.listDepartmentOfHomeAffairs?.items);
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

  async function updateUser() {
    //
    if (
      validationRules(name, "Name") === true &&
      validationRules(surname, "Surname") === true &&
      validationRules(cell, "Cell") === true &&
      validationRules(postal, "Postal code") === true &&
      validationRules(idNumber, "ID") === true &&
      validationRules(address, "Address") === true
    ) {
      const userDetails: UpdateUserInput = {
        id: loginUser.id,
        name: name,
        surname: surname,
        password: password,
        address: address,
        postal_code: postal,
        id_number: idNumber,
        cell_phone_no: cell,
      };

      const updateUser = await API.graphql<GraphQLQuery<UpdateUserMutation>>({
        query: mutations.updateUser,
        variables: { input: userDetails },
      });

      if (updateUser.data) {
        Toast.fire({
          icon: "success",
          title: "User updated successfully!",
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

  useEffect(() => {
    setProducts(homeAffirs);
  }, [homeAffirs]);

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

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Neviagtion section */}
        <Nav />

        <section className="about-section  bg-light">
          <h2 className="about-sub text-secondary pb-5">
            <PiUsersThreeBold size="30" />
            Department Of Home Affairs
          </h2>
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
                  className="nav-link active text-secondary"
                  aria-current="page"
                  routerLink="/adminregister"
                >
                  <RiGovernmentFill /> Home Affairs
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
          )}

          <br />
          <>
            <div className="row text-center">
              <div className="col-sm-12">
                <div className="bg-" style={{ textAlign: "right" }}>
                  <IonButton
                    fill="clear"
                    color="medium"
                    onClick={() => exportCSV(false)}
                    data-pr-tooltip="CSV"
                  >
                    <BsFiletypeCsv size="25" /> Download CSV
                  </IonButton>
                  <IonButton
                    color="medium"
                    fill="clear"
                    onClick={() => toPDF()}
                  >
                    <FaRegFilePdf size="25" /> Download PDF
                  </IonButton>
                </div>
                <DataTable
                  value={homeAffirs}
                  style={{ textAlign: "left" }}
                  selectionMode="single"
                  paginator
                  rows={5}
                  rowsPerPageOptions={[5, 10, 25, 50]}
                >
                  <Column
                    className="col_rec"
                    field="name"
                    header="Name"
                    sortable
                    style={{ width: "10%" }}
                  ></Column>
                  <Column
                    className="col_rec"
                    field="surname"
                    header="Surname"
                    sortable
                    style={{ width: "10%" }}
                  ></Column>
                  <Column
                    className="col_rec"
                    field="id_number"
                    header="ID Number"
                    sortable
                    style={{ width: "10%" }}
                  ></Column>
                  <Column
                    className="col_rec"
                    field="gender"
                    header="Gender"
                    sortable
                    style={{ width: "10%" }}
                  ></Column>
                  <Column
                    className="col_rec"
                    header="Actions"
                    style={{ width: "10%" }}
                    body={(rowData) => (
                      <div className="action-buttons">
                        <IonButton
                          color="medium"
                          fill="clear"
                          routerLink={`/profile/${rowData.id_number}`}
                        >
                          <FaFingerprint size="24" />
                        </IonButton>
                        <IonButton
                          color="medium"
                          fill="clear"
                          routerLink={`/edit/${rowData.id_number}`}
                        >
                          <FaRegEdit size="24" />
                        </IonButton>
                        <IonButton
                          fill="clear"
                          color="danger"
                          // onClick={() => deleteRecord(rowData.id_number)}
                        >
                          <AiFillDelete size="24" />
                        </IonButton>
                      </div>
                    )}
                  ></Column>
                </DataTable>
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

export default AdminRegister;
