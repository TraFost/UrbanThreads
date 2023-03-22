import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Footer } from "./parts";
import { fetchProducts } from "./app/productSlice";
import { useDispatch } from "react-redux";
import PageRoutes from "./components/Routes/PageRoutes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts); // cara paujul, dispatch value dari fetch productnya dihandle didalem fetchProducts
    // dispatch(getProducts(fetchProducts)); // regular way
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <PageRoutes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
