import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";

function App() {

  return (
    <Router>
          <Box width="400px" sx={{width:{xl: "1488px"}}} m="auto">
            <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/exercise/:id" element={<ExerciseDetail/>} />
            </Routes>
            <Footer/>
          </Box>
           
    </Router>
  );
}


export default App;
