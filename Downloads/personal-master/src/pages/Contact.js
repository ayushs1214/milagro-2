import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import Dosa from "../images/dosa.jpg";

const Contact = () => {
  return (
    // <Layout>
    <div>
       <div style={{ height: "50vh", width: "100%", overflow: "hidden" }}>
        <img
          src={Dosa}
          alt="Our Story"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <Box sx={{ my: 5, ml: 40, mr: 40, "& h4": { mb: 2 } }}>
        <Typography variant="h4" align="center">
          Our Story
        </Typography>
        <p>
          Fintech Platform incepted in December 2021 headquartered in Kolkata, India finurl.com is formed to sell financial service primarily focusing on Indian internet users, starting with financial vertical. Enhancing its financial hands to all major locations of the country. FinURL is an online focused digital and instant loan aggregator platform with a vision to solve India’s underserved credit needs.
          <br /><br />
          Via our liaison with banks, NBFCs, and FinTech’s and our extensive distribution reach, we provide optimal solutions to lenders grow efficiently and borrowers avail their unmet credit needs. Finurl.com is an online portal of Finwurl Enterprises Private Limited which helps to make finance available at the fingertips for every earning individual of India.
          <br /><br />
          We started with the aim of making the complete loan process as easy as possible so that every individual can have access to credit easily. Finwurl Enterprises Private Limited is one of the major digital lending platforms in the country which uses technology and analytics tools for analyzing and processing customers' loan applications so that we can help our customers get money with minimum documents in their account in as less as 48 hours.
          <br /><br />
        </p>
      </Box>
      <center>
        <Box
          sx={{
            m: 3,
            width: "600px",
            ml: 40,
            mr: 40,
            "@media (max-width:600px)": {
              width: "300px",
            },
          }}
        >
          <TableContainer component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ bgcolor: "black", color: "white" }}
                    align="center"
                  >
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                    (tollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@myrest.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </center>
      </div>
    // </Layout>
  );
};

export default Contact;