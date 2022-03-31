import React, { FunctionComponent } from "react";
import { IonGrid, IonCol,IonCheckbox, IonRow, IonIcon, IonList, IonButton, IonLabel, IonItem, } from "@ionic/react";
import { happy } from 'ionicons/icons';
import "../custom.css";
import { personCircle, search,trash ,star, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';

import { Task } from "../models/tasks";


interface Props {
  task: Task;
  onDelete: (task: Task) => void;
}

export const TaskListItem: FunctionComponent<Props> = ({ task, onDelete }) => {
  const onClick = () => {
    onDelete(task);
  };

  return (
    <IonList>
      {/* <IonIcon slot="start" ios="mailOutline" md="mailSharp" onClick={onClick}/> */}
      <IonItem>
      <IonCheckbox slot="start" color="secondary" />
           {task.name}
           <IonButton  slot="end" onClick={onClick}>
      <IonIcon  icon={trash} />
      </IonButton>
      </IonItem>
    </IonList>
    // <IonList>
    //   <IonGrid>
    //     <IonRow>
    //       <IonCol>
    //         {task.name}
    //         <IonButton  slot="end" onClick={onClick}>
    //                   <IonIcon slot="icon-only" icon={search} />
    //             </IonButton>
    //       </IonCol>
          
    //     </IonRow>
    //   </IonGrid>
    // </IonList>
  );
};
