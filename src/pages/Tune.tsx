import React, { useState } from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonModal, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import Tuner from '../components/Tuner/Tuner';
import './Tune.css';
import { TemperamentDBType } from '../engine/DB';
import HeaderPage from '../components/Header/HeaderPage';
import TunerModal from '../components/Tuner/TunerModal';

const Tune: React.FC = () => {
  
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <HeaderPage 
        buttonModal = {true}
        buttonModalText = "TUNER"
        setShowModal = {setShowModal}
      />
      <IonContent fullscreen scrollY={false}>

        <TunerModal
          showModal = {showModal}
          setShowModal = {setShowModal}
        />

        <Tuner />

      </IonContent>
    </IonPage>
  );
};

export default Tune;
