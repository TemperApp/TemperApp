/* eslint-disable eqeqeq */
import "rc-collapse/assets/index.css";
import Collapse, { Panel } from "rc-collapse";
import motion from './_util/motionUtil';
import { IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import { useState } from "react";

import './Collapse.css'; 
import "./ButtonTemper.css"
import Waves from "./Waves";

const arrowPath =
'M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88' +
'.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.' +
'6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-0.7 5.' +
'2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z';



const HomeContent : React.FC<{darkTheme: boolean}> = ({darkTheme}) => {
    const temperList = ["Rameau", "Vallotti", "Weimeister", "Back", "Egal"];

    const [firstUse, setFirstUse] = useState<boolean>(true); 
    let activePanel = 1; 

    const [statePanel1, setStatePanel1] = useState<boolean>(false);
    const [statePanel2, setStatePanel2] = useState<boolean>(false);

    const isActive = (e : any) => {
        if(e == 0){
            setStatePanel1(true);
            setStatePanel2(false);
        }
        if(e == 1){
            setStatePanel1(false);
            setStatePanel2(true);
        }
        if(e === undefined && statePanel1){
            setStatePanel1(false);
        }
        if(e === undefined && statePanel2){
            setStatePanel2(false);
        }
    }

    const expandIcon = (e : any) => {

        if(firstUse){
            if(activePanel==0){
                setStatePanel1(true); 
                setFirstUse(false); 
            }
            if(activePanel==1){
                setStatePanel2(true); 
                setFirstUse(false); 
            }
        }
            /*
            if(e.panelKey == activePanel){
                return (
                    <i style={{ marginRight: '.5rem' }}>
                    <svg
                        viewBox="0 0 1024 1024"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        style={{
                        verticalAlign: '-.125em',
                        transition: 'transform 0.2s',
                        transform: `rotate(${statePanel1 ? 90 : 0}deg)`,
                        }}
                    >
                        <path d={arrowPath} p-id="5827" />
                    </svg>
                    </i>
                )
            }
        }
            */


        if(e.panelKey == 0){
            return (
                <i style={{ marginRight: '.5rem' }}>
                <svg
                    viewBox="0 0 1024 1024"
                    width="1em"
                    height="1em"
                    fill={"currentColor"}
                    style={{
                    verticalAlign: '-.125em',
                    transition: 'transform 0.2s',
                    transform: `rotate(${statePanel1 ? 90 : 0}deg)`,
                    }}
                >
                    <path d={arrowPath} p-id="5827" />
                </svg>
                </i>
            );
        }
        if(e.panelKey == 1){
            return (
                <i style={{ marginRight: '.5rem' }}>
                <svg
                    viewBox="0 0 1024 1024"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    style={{
                    verticalAlign: '-.125em',
                    transition: 'transform 0.2s',
                    transform: `rotate(${statePanel2 ? 90 : 0}deg)`,
                    }}
                >
                    <path d={arrowPath} p-id="5827" />
                </svg>
                </i>
            );
        }
    }
    

    return (
    <div>
   
    <Collapse accordion={true} defaultActiveKey={activePanel} openMotion={motion} expandIcon={(e) => expandIcon(e)} onChange={(e) => (isActive(e))} >
        <Panel key="0" header="Mes tempéraments" headerClass="my-header-class" >
            <IonGrid>
                <IonRow >
                    {temperList.map((t) => 
                    <IonCol size='6'>
                        <IonButton className="buttonType" expand="block" color="temperapp">{t}</IonButton>
                    </IonCol>
                     )}
                </IonRow>
            </IonGrid>
        </Panel>
        <Panel key="1" header="Les plus courants" headerClass="my-header-class"> <IonGrid>
                <IonRow >
                    {temperList.map((t) => 
                    <IonCol size='6'>
                        <IonButton className="buttonType" expand="block" color="temperapp">{t}</IonButton>
                    </IonCol>
                     )}
                </IonRow>
            </IonGrid>
        </Panel>
    </Collapse>

    <Waves 
        darkTheme = {darkTheme}
    />
    

    </div>
    )
}; 

export default HomeContent;

