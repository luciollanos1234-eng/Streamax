import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route />
          <Route />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
