import { useSelector } from "react-redux";
import {
  FirstContent,
  SecondContent,
  ProductsLists,
} from "../../components/Home";
import { img } from "../../assets/LandingPageImg";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import "./home.css";

const Home = () => {
  const products = useSelector((state) => state.product.products);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="hidden sm:block">
        <FirstContent img={img} />
      </div>
      <div className="hidden w-full md:block">
        <img src={img.banner} alt="banner" />
      </div>
      <div className="hidden md:block">
        <SecondContent img={img} />
      </div>
      <div className="my-14 lg:mt-0">
        <div className="grid place-items-center grid-cols-1 gap-y-8 md:gap-x-3 md:gap-y-7 md:grid-cols-2 lg:place-items-start lg:grid-cols-4 lg:gap-x-3 lg:gap-y-4 lg:w-[90%] pb-20">
          {products.map((product, index) => {
            return (
              <ProductsLists key={product.id} product={product} index={index} />
            );
          })}
        </div>
        <div className="flex flex-col w-[87%]">
          {products.length > 0 && (
            <Button className="self-end font-extrabold border-black px-10">
              SEE MORE
            </Button>
          )}
        </div>
      </div>
    </motion.main>
  );
};

export default Home;
