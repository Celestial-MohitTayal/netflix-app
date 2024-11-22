import { TextField, Button, Box, Typography } from "@mui/material";
import { useRef, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { addUser } from "../redux/UserSlice";

const UserProfile = () => {
  const email = useSelector((store) => store.user.email);
  const name = useSelector((store) => store.user.name);
  const [isForm, setIsForm] = useState(false);
  const [isName, setIsName] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const input = useRef(null);

  const handleButtonClk = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    const index = users.findIndex((user) => user.email === email);
    if (isName) {
      users[index].name = input.current.value;
    } else {
      users[index].password = input.current.value;
    }
    localStorage.setItem("users", JSON.stringify(users));
    const user = users.find((user) => user.email === email);
    dispatch(addUser(user));

    input.current.value = "";
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
          paddingBottom: 2,
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
        <Typography
          variant="h4"
          sx={{
            marginBottom: 4,
            fontWeight: "bold",
            backgroundColor: "black",
            borderRadius: 2,
            padding: 1,
          }}
        >
          User Profile
        </Typography>
        <Typography
          variant="h6"
          fontWeight="bold"
          component="span"
          marginRight="20px"
          marginBottom={2}
        >
          Name:
        </Typography>
        <Typography variant="subtitle1" component="span">
          {name}
        </Typography>
        <br />
        <Typography
          variant="h6"
          fontWeight="bold"
          component="span"
          marginRight="20px"
          marginBottom={2}
        >
          Email:
        </Typography>
        <Typography variant="body1" component="span">
          {email}
        </Typography>
        <br />
        <Button
          onClick={() => {
            setIsForm(true);
            setIsName(true);
          }}
          variant="contained"
          color="error"
          sx={{
            px: 6,
            margin: 2,
            backgroundColor: "red",
            "&:hover": { backgroundColor: "darkred" },
          }}
          component="span"
        >
          Edit Name
        </Button>
        <Button
          onClick={() => {
            setIsForm(true);
            setIsName(false);
          }}
          variant="contained"
          color="error"
          sx={{
            margin: 2,
            backgroundColor: "red",
            "&:hover": { backgroundColor: "darkred" },
          }}
          component="span"
        >
          Change Password
        </Button>
        <br />
        {isForm && (
          <Box>
            <TextField
              inputRef={input}
              type="text"
              placeholder={isName ? "Enter Name" : "Enter New Password"}
              sx={{
                width: "50%",
                marginBottom: 2,
                backgroundColor: "transparent",
                color: "white",
                "& .MuiInputBase-input": { color: "white" },
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
              }}
              component="span"
            />
            <Button
              onClick={() => {
                setIsForm(false);
                handleButtonClk();
              }}
              variant="contained"
              color="error"
              sx={{
                my: 1,
                mx: 3,
                backgroundColor: "red",
                "&:hover": { backgroundColor: "darkred" },
              }}
              component="span"
            >
              Save
            </Button>
          </Box>
        )}
        <br />
        <Typography
          onClick={() => {
            navigate("/home");
          }}
          variant="body1"
          fontWeight="bold"
          component="span"
          marginLeft="20px"
          margin={2}
          sx={{ "&:hover": { textDecoration: "underline" }, cursor: "Pointer" }}
        >
          (Back To HomePage)
        </Typography>
      </Box>
    </div>
  );
};

export default UserProfile;
