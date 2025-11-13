//? as const assertion

const OUserRoles = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const;

const canEdit = (role: (typeof OUserRoles)[keyof typeof OUserRoles]) => {
  if (role === OUserRoles.Admin || role === OUserRoles.Editor) {
    return true;
  } else {
    return false;
  }
};

const isEditPermissable = canEdit(OUserRoles.Admin);
console.log(isEditPermissable);
