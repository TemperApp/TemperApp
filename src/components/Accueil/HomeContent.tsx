import "rc-collapse/assets/index.css";
import Collapse, { Panel } from "rc-collapse";
import motion from './_util/motionUtil';
import { IonButton, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import './Collapse.css'; 
import { chevronDownOutline, chevronForwardSharp } from "ionicons/icons";


const HomeContent : React.FC = () => {
    const temperList = ["Rameau", "Vallotti", "Weimeister", "Back", "Egal"];

    const renderExpandIcon = () => {
        return (
          <IonIcon slot="icon-only" icon={chevronForwardSharp} />
        );
      }


    return (
    <Collapse accordion={false} openMotion={motion} expandIcon={renderExpandIcon} >
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

