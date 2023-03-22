import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Register, Login, About, Single, Cart, NotFound } from "../../pages";
import { AnimatePresence } from "framer-motion";
import Skeleton from "../Skeleton";

const Home = lazy(() => import("../../pages/Home"));
const Dashboard = lazy(() => import("../../pages/Dashboard"));

const PageRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<NotFound />} />
        <Route
          index
          element={
            <Suspense fallback={<Skeleton />}>
              <Home />
            </Suspense>
          }
        />
        <Route path="register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<Skeleton />}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route path="/:name" element={<Single />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
};

export default PageRoutes;
