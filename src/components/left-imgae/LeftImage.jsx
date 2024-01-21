import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import dashboard_img from "../../images/dashboard.png";

const LeftImage = (props) => {
  const { title } = props;
  return (
    <>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        {title}
      </Typography>

      <img src={dashboard_img} alt="dashboard_img" className="dashboard_img" />
    </>
  );
};

export default LeftImage;
