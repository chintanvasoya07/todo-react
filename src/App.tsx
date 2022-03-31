import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';
import Login from './pages/login';
import Home from './pages/Home';
import Stopwatch from './pages/stopwatch';
import React, { useEffect ,useState} from "react";
import { Capacitor } from "@capacitor/core";
import { App } from '@capacitor/app';
import {useHistory} from "react-router-dom";
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();



const Ap: React.FC = () => {
  const history = useHistory();
  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      App.addListener('backButton', e => {
           // Use of location.pathname is also correct
        if (window.location.pathname === '/') {
          App.exitApp();
        } else if (window.location.pathname === '/login') {
          App.exitApp();
        } else {
          history.goBack();
        }
      })
    }
  }, [])
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/page" exact={true}>
              <Redirect to="/Todo" />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/Todo" component={Home} exact={true} />
        <Route path="/Stopwatch" component={Stopwatch} exact={true} />
          </IonRouterOutlet>
        </IonSplitPane>
       
      </IonReactRouter>
    </IonApp>
  );
};

export default Ap;
