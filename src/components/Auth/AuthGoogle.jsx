import { IconButton } from "@mui/material";
import React from "react";
import { useAuth } from "../../contexts/AuthContextProvider";
import GoogleIcon from "@mui/icons-material/Google";

const AuthGoogle = () => {
  const { signWithGoogle } = useAuth();
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
