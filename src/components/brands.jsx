import React from "react";
import AwsImage from "../Images/AWS.png";
import NvidiaImage from "../Images/Nvidia.png";
import ZummitImage from "../Images/Zummit infolabs.png";
import { Typography, Box } from "@mui/material";

const Brand = () => {
  return (
    <div className="branditems">
          <Box
              c>
        <Typography align="center" variant="h6">
          Supported by some of the world’s most innovative brands
        </Typography>
      </Box>
          <Box
              sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: "wrap"
              }}
          >
        <img style={{paddingBottom:"15px"}} src={AwsImage} alt="" />
        <img style={{paddingBottom:"15px"}} src={NvidiaImage} alt="" />
        <img style={{paddingBottom:"15px"}} src={ZummitImage} alt="" />
      </Box>
    </div>
  );
};

export default Brand;
