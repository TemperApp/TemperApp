import React, { useState } from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonModal, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Compare.css';
import Comparator from '../components/Comparator/Comparator';
import { playCircle } from 'ionicons/icons';
import ComparatorModal from '../components/Comparator/ComparatorModal';
import HeaderPage from '../components/Header/HeaderPage';

const Compare: React.FC = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <HeaderPage 
        buttonModal = {true}
        buttonModalText = "COMPARATOR"
        setShowModal = {setShowModal}
      />

      <IonContent fullscreen scrollY={true}>
        
        <ComparatorModal
          showModal = {showModal}
          setShowModal = {setShowModal}
        />

        <Comparator /> 

      </IonContent>

    </IonPage>
  );
};

export default Compare;
