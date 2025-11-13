/*
I have cofusion with enum and mapped. I did not stuck, just have 2 question .
1st: why enum? i'm getting value's suggestion with 'type' then why need enum?
2nd: I have to pass full type throw parameter, then why should i use map?
*/
//! Problem => 1
//* enum
type TUserRoles = "Admin" | "Editor" | "Viewer";
enum EUserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}
const canEdit = (role: TUserRoles) => {
  // const canEdit = (role: EUserRoles) => {
  if (role === "Admin" || role === "Editor") {
    return true;
  } else {
    return false;
  }
};
const isEditPermissable = canEdit("Admin"); //? It's already suggesting then what's wrong?
// const isEditPermissable = canEdit(EUserRoles.Admin);
console.log(isEditPermissable);

//! Problem => 2
type AreaOfNum = {
  height: number;
  width: number;
  isOkay: boolean;
  ownerName: string;
};
type Area<T> = {
  [key in keyof T]: T[key];
};
// const area1: AreaOfNum = {
const area1: Area<AreaOfNum> = {
  //? Why is this? It also need types declarations, then why need map?
  height: 4,
  width: 3,
  isOkay: true,
  ownerName: "Mr. John",
};
