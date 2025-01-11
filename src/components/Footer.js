import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ textAlign: "center", p: 4, backgroundColor: "#2E3B55" }}>
      <Typography variant="subtitle1" sx={{ color: "#fff" }}>
        © 2025 Nirmal Kapilarathne. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
