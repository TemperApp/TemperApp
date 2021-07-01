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
        <p className ="p-long"> <strong> Epoque : </strong> {period} </p>
        <p className ="p-long"> <strong> Aire géographique :  </strong> {geographicalArea}</p>
        <p className ="p-long"> <strong> Nature commatique : </strong> {commaticNature} </p>
        <p className ="p-long"> <strong> Particularité scruturelle : </strong> {particularity} </p>
      </div>
    )  
  }; 


export default DescriptionSheet;