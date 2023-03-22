import { Routes, Route, useLocation } from "react-router-dom";
import {
  Register,
  Home,
  Login,
  Dashboard,
  About,
  Single,
  Cart,
  NotFound,
} from "../../pages";
import { AnimatePresence } from "framer-motion";

const PageRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<NotFound />} />
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/:name" element={<Single />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
};

export default PageRoutes;
