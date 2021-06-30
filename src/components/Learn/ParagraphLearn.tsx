import React from 'react';

import "../../pages/Learn.css"


type paragraphProps = {
    titreExist: boolean, 
    titreText:string,
    contentText: string
    darkTheme: boolean,
  }


const ParagraphLearn : React.FC<paragraphProps> = ({titreExist, titreText, contentText, darkTheme}) => {

  if(titreExist){
    return(
      <div className ="LearnParagraph">
        <h3 className="TitleParagraphLearn">{titreText}</h3>
        <p>{contentText} Le tempérament musical est l’ensemble des choix esthétiques faits au cours de l'accord d’un instrument de musique. La définition de Jean-Jacques Rousseau résume ce qu’on peut considérer comme un triple compromis que constitue un tempérament musical. Il s’agit de trouver une solution qui combine de la façon la plus satisfaisante, selon le contexte (le répertoire, les instruments concernés, etc.) : un paramètre physique et matériel (la “jouabilité” sur les instruments, sur un clavier, un manche avec des frettes, etc.), un paramètre musical (pouvoir moduler le plus librement et le plus loin possible), et un paramètre esthétique (conserver ou pas le plus possible d’intervalles purs “sans choquer l’oreille”).
        </p>
      </div>
    )  
  }
  else{
    return (
      <div className ="LearnParagraph">
      <p>{contentText} Le tempérament musical est l’ensemble des choix esthétiques faits au cours de l'accord d’un instrument de musique. La définition de Jean-Jacques Rousseau résume ce qu’on peut considérer comme un triple compromis que constitue un tempérament musical. Il s’agit de trouver une solution qui combine de la façon la plus satisfaisante, selon le contexte (le répertoire, les instruments concernés, etc.) : un paramètre physique et matériel (la “jouabilité” sur les instruments, sur un clavier, un manche avec des frettes, etc.), un paramètre musical (pouvoir moduler le plus librement et le plus loin possible), et un paramètre esthétique (conserver ou pas le plus possible d’intervalles purs “sans choquer l’oreille”).
      </p>
      </div>
    )
  }
  }; 


export default ParagraphLearn;