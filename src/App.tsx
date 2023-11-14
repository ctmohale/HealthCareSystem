import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import Tab1 from "./pages/Home";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import "./App.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Registration from "./pages/Registration";
import Medical from "./pages/Medical";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import { GraphQLSubscription } from "@aws-amplify/api";
import * as subscriptions from "./graphql/subscriptions";
import { GraphQLQuery } from "@aws-amplify/api";
import { Amplify, Auth } from "aws-amplify";
import { parseAWSExports } from "@aws-amplify/core";
import awsExports from "./aws-exports";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
  ListAdminsQuery,
  ListMedicalDoctorsQuery,
  ListUsersQuery,
  OnUpdateUserSubscription,
} from "./API";
import * as queries from "./graphql/queries";
import AllUsers from "./context/users";
import LoginData from "./context/login";
import GrantData from "./context/grant";
import CustomNavigationTap from "./context/custNav";
import MedicalHistory from "./pages/MedicalHistory";
import Swal from "sweetalert2";
import "./App.css";
import { Hub, Logger } from "aws-amplify";
import Dashboad from "./pages/Dashboad";
import Users from "./pages/Users";
import AdminMedical from "./pages/AdminMedical";
import AdminGrant from "./pages/AdminGrant";
import AdminRegister from "./pages/AdminRegister";
import Print from "./pages/Print";
import AdminHospitals from "./pages/AdminHospitals";
import Doctors from "./pages/Doctors";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "./style.css";
import "./flags.css";
import AdminData from "./context/admin";
import AdminLogin from "./context/adminlogin";
import AllDoctors from "./context/doctors";
import DoctorProfile from "./pages/DoctorProfile";
import AdminEdit from "./pages/AdminEdit";
import UserSelected from "./context/selected_user";
import Appointment from "./pages/Appointment";
import UserAppointment from "./pages/UserAppointment";
import Prescription from "./pages/Prescription";

Amplify.configure(awsExports);

setupIonicReact();

const App: React.FC = () => {
  const logger = new Logger("My-Logger");
  const [users, setUsers]: any = useState();
  const [selectedUser, setSelectedUser]: any = useState();
  const [allDoc, setAllDoc]: any = useState();
  const [admin, setAdmin]: any = useState();
  const [loginUser, setLoginUser]: any = useState();
  const [loginAdmin, setloginAdmin]: any = useState();
  const [getGrant, setGrant]: any = useState([]);
  const localData: any = localStorage.getItem("user");
  const [customNavTap, setCustomNavTap]: any = useState(" ");

  useEffect(() => {
    getAllAdmin();
    getAllUsers();
    getAllDoc();
  }, []);

  useEffect(() => {
    console.log(localStorage.getItem("user"));
    if (localStorage.getItem("user") != null) {
      setLoginUser(JSON.parse(localData));
    }
  }, []);

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

  //Get all users
  async function getAllUsers() {
    const allUsers = await API.graphql<GraphQLQuery<ListUsersQuery>>({
      query: queries.listUsers,
    });
    console.log(allUsers.data?.listUsers?.items);
    setUsers(allUsers.data?.listUsers?.items);
  }

  //Get all users
  async function getAllAdmin() {
    const allAdmin = await API.graphql<GraphQLQuery<ListAdminsQuery>>({
      query: queries.listAdmins,
    });
    console.log(allAdmin.data?.listAdmins?.items);
    setAdmin(allAdmin.data?.listAdmins?.items);
  }

  //Get all users
  async function getAllDoc() {
    const allAdmin = await API.graphql<GraphQLQuery<ListMedicalDoctorsQuery>>({
      query: queries.listMedicalDoctors,
    });
    console.log(allAdmin.data?.listMedicalDoctors?.items);
    setAllDoc(allAdmin.data?.listMedicalDoctors?.items);
  }

  useEffect(() => {
    // Subscribe to creation of Todo
    const sub = API.graphql<GraphQLSubscription<OnUpdateUserSubscription>>(
      graphqlOperation(subscriptions.onUpdateUser)
    ).subscribe({
      next: ({ provider, value }) => setLoginUser(value.data?.onUpdateUser),
      error: (error) => console.warn(error),
    });

    // Stop receiving data updates from the subscription
    return () => {
      sub.unsubscribe();
    };
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <AllUsers.Provider value={{ users, setUsers }}>
          <LoginData.Provider value={{ loginUser, setLoginUser }}>
            <GrantData.Provider value={{ getGrant, setGrant }}>
              <CustomNavigationTap.Provider
                value={{ customNavTap, setCustomNavTap }}
              >
                <AdminData.Provider value={{ admin, setAdmin }}>
                  <AdminLogin.Provider value={{ loginAdmin, setloginAdmin }}>
                    <AllDoctors.Provider value={{ allDoc, setAllDoc }}>
                      <UserSelected.Provider
                        value={{ selectedUser, setSelectedUser }}
                      >
                        <IonTabs>
                          <IonRouterOutlet>
                            <Route exact path="/home">
                              <Home />
                            </Route>
                            <Route exact path="/registration">
                              <Registration />
                            </Route>
                            <Route path="/medical">
                              <Medical />
                            </Route>

                            <Route path="/profile">
                              <Profile />
                            </Route>

                            <Route path="/doctorprofile">
                              <DoctorProfile />
                            </Route>

                            <Route path="/notifications">
                              <Notifications />
                            </Route>

                            <Route path="/adminedit">
                              <AdminEdit />
                            </Route>

                            <Route path="/appointment">
                              <Appointment />
                            </Route>

                            <Route path="/prescription">
                              <Prescription />
                            </Route>

                            <Route path="/userappointment">
                              <UserAppointment />
                            </Route>

                            <Route path="/adminhospitals">
                              <AdminHospitals />
                            </Route>

                            <Route path="/print">
                              <Print />
                            </Route>

                            <Route path="/adminregister">
                              <AdminRegister />
                            </Route>

                            <Route path="/dashboad">
                              <Dashboad />
                            </Route>

                            <Route path="/adminmedical">
                              <AdminMedical />
                            </Route>

                            <Route path="/users">
                              <Users />
                            </Route>

                            <Route path="/admingrant">
                              <AdminGrant />
                            </Route>

                            <Route path="/doctors">
                              <Doctors />
                            </Route>

                            <Route path="/medicalHistory">
                              <MedicalHistory />
                            </Route>

                            <Route exact path="/">
                              <Redirect to="/home" />
                            </Route>
                          </IonRouterOutlet>

                          <IonTabBar
                            slot="bottom"
                            style={{ display: "none" }}
                          ></IonTabBar>
                        </IonTabs>
                      </UserSelected.Provider>
                    </AllDoctors.Provider>
                  </AdminLogin.Provider>
                </AdminData.Provider>
              </CustomNavigationTap.Provider>
            </GrantData.Provider>
          </LoginData.Provider>
        </AllUsers.Provider>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
