import React from 'react';

import "../../pages/Sheets.css"


type descriptionProps = {
    period: string, 
    geographicalArea: string, 
    commaticNature: string, 
    particularity: string
  }


const DescriptionSheet : React.FC<descriptionProps> = ({period, geographicalArea, commaticNature, particularity}) => {

    return(
      <div className ="SheetParagraph">
        <h5>Epoque : {period}</h5>
        <h5>Aire géographique : {geographicalArea}</h5>
        <h5>Nature commatique : {commaticNature}</h5>
        <h5>Particularité scruturelle : {particularity}</h5>
      </div>
    )  
  }; 


export default DescriptionSheet;