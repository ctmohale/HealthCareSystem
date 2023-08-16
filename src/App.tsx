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
import { Amplify } from "aws-amplify";
import { parseAWSExports } from "@aws-amplify/core";
import awsExports from "./aws-exports";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
  ListGovernmentGrantsQuery,
  ListUsersQuery,
  OnUpdateUserSubscription,
} from "./API";
import * as queries from "./graphql/queries";
import AllUsers from "./context/users";
import LoginData from "./context/login";
import Grant from "./pages/Grant";
import GrantData from "./context/grant";

Amplify.configure(awsExports);

setupIonicReact();

const App: React.FC = () => {
  const [users, setUsers]: any = useState();
  const [loginUser, setLoginUser]: any = useState();
  const [getGrant, setGrant]: any = useState();

  useEffect(() => {
    getAllUsers();
    getAllGrant();
  }, []);

  //Get all users
  async function getAllUsers() {
    const allUsers = await API.graphql<GraphQLQuery<ListUsersQuery>>({
      query: queries.listUsers,
    });
    console.log(allUsers.data?.listUsers?.items);
    setUsers(allUsers.data?.listUsers?.items);
  }

  //Get user grant
  async function getAllGrant() {
    const allGrant = await API.graphql<GraphQLQuery<ListGovernmentGrantsQuery>>(
      {
        query: queries.listGovernmentGrants,
      }
    );
    console.log(allGrant.data?.listGovernmentGrants?.items);
    setGrant(allGrant.data?.listGovernmentGrants?.items);
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

                  <Route path="/notifications">
                    <Notifications />
                  </Route>

                  <Route path="/grant">
                    <Grant />
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
            </GrantData.Provider>
          </LoginData.Provider>
        </AllUsers.Provider>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
