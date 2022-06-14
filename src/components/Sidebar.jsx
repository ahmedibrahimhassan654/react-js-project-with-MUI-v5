import { Box } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      sx={{ backgroundColor: "skyblue", display: { xs: "none", sm: "block" } }}
      flex="2"
      p={2}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;
