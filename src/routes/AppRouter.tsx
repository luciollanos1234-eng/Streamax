import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Register" element={<Register />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRouter;
