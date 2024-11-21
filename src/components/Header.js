import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Button,
  Box,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../redux/UserSlice";
import removeVideos from "../redux/MovieSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = JSON.parse(localStorage.getItem("userDetails")) || null;
  useEffect(() => {
    if (!userDetails) {
      navigate("/");
    } else {
      dispatch(addUser(userDetails));
      navigate("/home");
    }
  }, []);
  return (
    <AppBar
      position="absolute"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        background: "linear-gradient(to bottom, black, transparent)",
        padding: "8px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
          style={{ width: "192px" }}
        />
        {userDetails && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              src="https://occ-0-1009-1007.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfa2YTbBSdRCw8ROTRS4NTNn0G7BQ46lOw5X-Uwt3janZC8KIbTM91qWqWHqvalzmwR7BPCeoeRM-sfItd7r45AHApdsNEY.png?r=7e8"
              alt="Profile"
              sx={{
                width: 48,
                height: 48,
                cursor: "pointer",
                transition: "transform 0.075s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            />
            <Button
              onClick={() => {
                dispatch(removeUser());
                // dispatch(removeVideos());
                localStorage.removeItem("userDetails");
                navigate("/");
              }}
              sx={{
                color: "white",
                fontSize: "1.25rem",
                fontFamily: "serif",
                transition: "transform 0.075s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              Sign Out
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
