import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login/>} />
          <Route />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
