import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import { Box, Stack } from "@mui/material";
function App() {
  return (
    <Box>
      <Stack direction="row" spacing={1} justifyContent="space-between">
        {/* <Navbar/> */}
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
