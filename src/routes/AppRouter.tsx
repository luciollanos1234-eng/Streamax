import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Plans from "../pages/Plans";
import Register from "../pages/Register";
import Explorer from "../pages/Explorer";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/planes" element={<Plans />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/explorer" element={<Explorer />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRouter;
