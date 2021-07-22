import UserContext from "../store/user-context";

export const temperamentFavorite = (id : string, user : string[]) => {
  return user.includes(id);
}