import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList,IonButton ,IonItemDivider } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
const Login: React.FC = () => {
    const [name, setText] = useState<string>();
   const [Password,setpass] = useState<any>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          
          <IonItem>
          <IonLabel position="floating"> Name </IonLabel>
            <IonInput value={name} placeholder="please Enter your name" onIonChange={e => setText(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItem>
          <IonLabel position="floating"> Password </IonLabel>
            <IonInput   value={Password} placeholder="please Enter your password" onIonChange={e => setpass(e.detail.value!)}></IonInput>
          </IonItem>

         
          <IonButton  routerLink="/page" expand="block">Login</IonButton>

          
         </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Login;
