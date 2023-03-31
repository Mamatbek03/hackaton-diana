import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { IconButton } from "@mui/material";
// import { signWithGoogle } from "./fire";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import { signWithGoogle } from "../../fire";

const AuthGoogle = () => {
  const user = JSON.parse(localStorage.getItem("register"));

  return (
    <div>
      <IconButton onClick={() => signWithGoogle()}>
        <GoogleIcon />
      </IconButton>
      <>
        {/* {user.email}, {user.displayName}
        <img src={user.photoURL} alt="" /> */}
      </>
    </div>
  );
};

export default AuthGoogle;
