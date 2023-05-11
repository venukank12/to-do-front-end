import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";

const Dashboard = () => {
  return (
    <Box>
      <AppBar />
      <Box p={{md:3,xs:1}} sx={{bgColor:'#F3F6FB'}}>
        <Outlet />
      </Box>
    </Box>
  );
};
export default Dashboard;
