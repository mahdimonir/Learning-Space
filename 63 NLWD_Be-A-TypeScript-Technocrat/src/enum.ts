//! enum
//* => set of fixed string leteral

type TUserRoles = "Admin" | "Editor" | "Viewer";
enum EUserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

// const canEdit = (role: TUserRoles) => {
const canEdit = (role: EUserRoles) => {
  if (role === "Admin" || role === "Editor") {
    return true;
  } else {
    return false;
  }
};

// const isEditPermissable = canEdit("Admin");
const isEditPermissable = canEdit(EUserRoles.Admin);
console.log(isEditPermissable);
