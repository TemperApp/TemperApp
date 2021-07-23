import { TemperamentDBType } from "../engine/DB";

export const temperamentFavorite = (id : string, user : string[]) => {
  return user.includes(id);
}

export function ascendingOrder(a: TemperamentDBType, b: TemperamentDBType){
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name){
    return 1;
  }
  return 0;
}