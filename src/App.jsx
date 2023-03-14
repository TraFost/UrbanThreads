import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Home, Login, Dashboard, About } from "./pages";
import { Navbar, Footer } from "./parts";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
