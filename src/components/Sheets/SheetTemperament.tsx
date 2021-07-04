import React from 'react';
import Sheet from './Sheet';

const SheetTemperament: React.FC = () => {
  const period="XXXe siècle"
  const geographicalArea="Inconnu"
  const commaticNature="X/XX de comma pythagoricien"
  const particularity="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, officia? Sequi, dicta vero numquam quo eum reiciendis aliquam alias accusantium placeat fugiat recusandae officiis doloremque error ab dolores earum. Modi!"

  return (
    <Sheet>
      <div>
        <p><b>Époque</b> : {period} </p>
        <p><b>Aire géographique</b> : {geographicalArea}</p>
        <p><b>Nature</b> : {commaticNature} </p>
        <p><b>Particularité scruturelle</b> : {particularity} </p>
      </div>
    </Sheet>
  );
};

export default SheetTemperament;
