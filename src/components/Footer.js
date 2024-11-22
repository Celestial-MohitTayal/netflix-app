import React from "react";
import { Box, Typography, Grid2, Link, Button } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "#fff",
        py: 8,
        px: 8,
      }}
    >
      <Box display="flex" justifyContent="start" gap={2} mb={2}>
        <Link href="#" color="inherit">
          <Facebook />
        </Link>
        <Link href="#" color="inherit">
          <Instagram />
        </Link>
        <Link href="#" color="inherit">
          <Twitter />
        </Link>
        <Link href="#" color="inherit">
          <YouTube />
        </Link>
      </Box>

      <Grid2 container spacing={36}>
        <Grid2 item xs={6} sm={3}>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Audio Description
            </Link>
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Investor Relations
            </Link>
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Legal Notices
            </Link>
          </Typography>
        </Grid2>
        <Grid2 item xs={3} sm={3}>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Help Centre
            </Link>
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Jobs
            </Link>
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Cookie Preferences
            </Link>
          </Typography>
        </Grid2>
        <Grid2 item xs={6} sm={3}>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Gift Cards
            </Link>
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Terms of Use
            </Link>
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Corporate Information
            </Link>
          </Typography>
        </Grid2>
        <Grid2 item xs={6} sm={3}>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Media Centre
            </Link>
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Privacy
            </Link>
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Contact Us
            </Link>
          </Typography>
        </Grid2>
      </Grid2>

      <Box mt={3}>
        <Button
          variant="outlined"
          sx={{
            color: "#fff",
            borderColor: "#fff",
            textTransform: "none",
          }}
        >
          Service Code
        </Button>
      </Box>

      <Typography variant="body2" color="inherit" mt={2}>
        © 1997-2024 Netflix, Inc.
      </Typography>
    </Box>
  );
};

export default Footer;
