import "rc-collapse/assets/index.css";
import Collapse, { Panel } from "rc-collapse";
import motion from './_util/motionUtil';
import { IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Collapse.css'; 


const HomeContent : React.FC = () => {
    const temperList = ["Rameau", "Vallotti", "Weimeister", "Back", "Egal"];

    return (
    <Collapse accordion={true} openMotion={motion} >
        <Panel header="Mes tempéraments" headerClass="my-header-class">
            <IonGrid>
                <IonRow >
                    {temperList.map((t) => 
                    <IonCol size='6'>
                        <IonButton expand="block" color="primary">{t}</IonButton>
                    </IonCol>
                     )}
                </IonRow>
            </IonGrid>
        </Panel>
        <Panel header="Les plus courants" headerClass="my-header-class"> <IonGrid>
                <IonRow >
                    {temperList.map((t) => 
                    <IonCol size='6'>
                        <IonButton expand="block" color="primary">{t}</IonButton>
                    </IonCol>
                     )}
                </IonRow>
            </IonGrid>
        </Panel>
    </Collapse>
    )
}; 

export default HomeContent;

