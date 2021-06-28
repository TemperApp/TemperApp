import React, { useState } from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonModal, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import Tuner from '../components/Tuner/Tuner';
import './Tune.css';
import { TemperamentDBType } from '../engine/DB';
import HeaderPage from '../components/Header/HeaderPage';
import TunerModal from '../components/Tuner/TunerModal';

type TuneProps = {
  darkTheme : boolean,
}

const Tune: React.FC<TuneProps> = ({darkTheme}) => {
  
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <HeaderPage 
        buttonModal = {true}
        buttonModalText = "TUNER"
        setShowModal = {setShowModal}
        darkTheme = {darkTheme}
      />
      <IonContent fullscreen scrollY={false}>

        <TunerModal
          showModal = {showModal}
          setShowModal = {setShowModal}
          darkTheme = {darkTheme}
        />

        <Tuner 
          darkTheme = {darkTheme}
        />

      </IonContent>
    </IonPage>
  );
};

export default Tune;
