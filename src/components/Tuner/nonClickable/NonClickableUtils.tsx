
export const splitProcedure = ( procedure: string) => {
  let tabChaine = procedure.split(";");
  // eslint-disable-next-line @typescript-eslint/no-array-constructor
  let tempProcedure = new Array();
  console.log(tabChaine);
  tabChaine.forEach(element => {
    if(element.includes(":")){
      let temp = element.split(":")
      tempProcedure.push([temp[0],temp[1],'control'])
    }
    else{
      if(element.includes("-")){
        let temp = element.split("-")
        tempProcedure.push([temp[0],temp[1],'tune'])
      }
      else{
        tempProcedure.push([element,"tune"]);
      }
    }
  })
  return tempProcedure;
}
