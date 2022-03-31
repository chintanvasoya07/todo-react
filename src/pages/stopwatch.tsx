import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonMenuButton,IonButtons,
  IonList,
  IonItem,
  IonRow,
  IonCol,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";

import Timerdial from "../components/Timerdial";
import Stopwatchlist from "../components/Stopwatchlist";

let clock = {
  hh: 0,
  mm: 0,
  ss: 0,
  ms: 0,
};

const clockInterface = {
  hh: Number,
  mm: Number,
  ss: Number,
  ms: Number,
};

const Stopwatch: React.FC = () => {
  const [Time, setTime] = useState(clock);
  const [savedTime, setsavedTime] = useState(["0 | 0 | 0 | 0"]);
  const [inter, setinter] = useState(setInterval(() => {}, 100000));
  const [btn, setBtn] = useState("Start");
  const [len, setlen] = useState(1);

  const [active, setactive] = useState(false);

  const IncTime = (time: any) => {
    //console.log(time);
    let { hh, mm, ss, ms } = time;
    if (ms >= 0 && ms < 9) {
      time.ms += 1;
    } else {
      if (ss >= 0 && ss < 59) {
        time.ss += 1;
        time.ms = 0;
      } else {
        if (mm >= 0 && mm < 59) {
          time.ss = 0;
          time.mm += 1;
        } else {
          if (hh >= 0 && hh < 12) {
            time.mm = 0;
            time.hr += 1;
          }
        }
      }
    }
    setTime({
      hh: time.hh,
      mm: time.mm,
      ss: time.ss,
      ms: time.ms,
    });
  };

  const startStop = () => {
    //console.log("Start - Stop");
    if (btn === "Start") {
      setBtn("Stop");
      setactive(true);
    } else {
      //console.log(inter);
      setBtn("Start");
      setactive(false);
    }
  };

  const Reset = () => {
    //console.log("Reset");
    setBtn("Start");
    setactive(false);
    setTime({
      hh: 0,
      mm: 0,
      ss: 0,
      ms: 0,
    });
  };

  const NoteThisTime = () => {
    const obj = Time;
    let StringTime = `${obj.hh} | ${obj.mm} | ${obj.ss} | ${obj.ms}`;
    setsavedTime([...savedTime, StringTime]);
    console.log(savedTime);
    setlen(len + 1);
  };

  useEffect(() => {
    let Inter: any;
    /*
    if (btn === "Start") {
      clearInterval(Inter);
    } else {
      Inter = setInterval(() => IncTime(Time), 100);
    }
    */
    if (active) {
      setinter(setInterval(() => IncTime(Time), 100));
    } else {
      clearInterval(inter);
    }
  }, [active]);

  return (
    <IonPage>
      <IonHeader>
          <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
            <IonTitle> Stopwatch </IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Stopwatch</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Time Dialer Component"*/}
        <Timerdial clock={Time} />
        {/* Clear And Start and Stop button */}
        <IonRow>
          <IonCol size='6'>
            <IonButton color='danger' expand='full' onClick={Reset}>
              Clear
            </IonButton>
          </IonCol>
          <IonCol size='6'>
            <IonButton color='success' expand='full' onClick={startStop}>
              {btn}
            </IonButton>
          </IonCol>
        </IonRow>

        {/*Note the Time Butto*/}
        <IonButton expand='full' onClick={NoteThisTime}>
          Note this Time ...
        </IonButton>

        {/*Noted Time List*/}
        <Stopwatchlist list={savedTime} len={len} />
      </IonContent>
    </IonPage>
  );
};

export default Stopwatch;
