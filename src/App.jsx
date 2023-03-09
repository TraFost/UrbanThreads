import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Home, Login, Dashboard } from "./pages";
import { Navbar, Footer } from "./parts";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
