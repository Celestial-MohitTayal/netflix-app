import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import SignInValidation from "../utils/SignInValidation";
import SignUpValidation from "../utils/SignUpValidation";

const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const passInput = useRef(null);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setErrMsg("");
  };

  const handleButtonClk = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users);
    if (isSignIn) {
      const message = SignInValidation(
        users,
        emailInput.current.value,
        passInput.current.value
      );

      if (message == "acceptLogin") {
        navigate("/home");
      }
      setErrMsg(message);
    } else {
      const message = SignUpValidation(
        users,
        nameInput.current.value,
        emailInput.current.value,
        passInput.current.value
      );

      if (message) {
        setErrMsg(message);
        return;
      }
      setIsSignIn(!isSignIn);
      setErrMsg(null);
    }

    emailInput.current.value = "";
    passInput.current.value = "";
  };

  return (
    <div>
      <Header />
      <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg"
          alt="bgImage"
          style={{ height: "100vh", width: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          padding: 2,
          width: { lg: "25%", sm: "50%" },
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          color: "white",
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: "bold" }}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </Typography>

        {!isSignIn && (
          <TextField
            inputRef={nameInput}
            type="text"
            placeholder="Full Name"
            variant="outlined"
            sx={{
              width: "75%",
              marginBottom: 2,
              backgroundColor: "transparent",
              color: "white",
              "& .MuiInputBase-input": { color: "white" },
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
            }}
          />
        )}

        <TextField
          inputRef={emailInput}
          type="text"
          placeholder="Email or Mobile Number"
          variant="outlined"
          sx={{
            width: "75%",
            marginBottom: 2,
            backgroundColor: "transparent",
            color: "white",
            "& .MuiInputBase-input": { color: "white" },
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
          }}
        />

        <br />

        <TextField
          inputRef={passInput}
          type="password"
          placeholder="Password"
          variant="outlined"
          sx={{
            width: "75%",
            marginBottom: 2,
            backgroundColor: "transparent",
            color: "white",
            "& .MuiInputBase-input": { color: "white" },
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
          }}
        />

        <Typography variant="body2" sx={{ color: "red", marginBottom: 2 }}>
          {errMsg}
        </Typography>

        <Button
          onClick={handleButtonClk}
          variant="contained"
          color="error"
          sx={{
            width: "40%",
            marginBottom: 2,
            backgroundColor: "red",
            "&:hover": { backgroundColor: "darkred" },
          }}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </Button>

        <Typography variant="body2" sx={{ color: "#c4c4c4" }}>
          {isSignIn ? "New to Netflix? " : "Already Registered? "}
          <Button
            onClick={toggleForm}
            sx={{
              color: "white",
              fontWeight: "bold",
              textDecoration: "underline",
              paddingLeft: 0,
              paddingRight: 0,
            }}
          >
            {isSignIn ? "Sign Up Now" : "Sign In Now"}
          </Button>
        </Typography>
      </Box>
    </div>
  );
};

export default Login;
