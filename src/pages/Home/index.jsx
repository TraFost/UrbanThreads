import { useSelector } from "react-redux";
import {
  FirstContent,
  SecondContent,
  ProductsLists,
} from "../../components/Home";
import { img } from "../../assets/LandingPageImg";
import Button from "../../components/Button";
import "./home.css";

const Home = () => {
  const products = useSelector((state) => state.product.products);

  return (
    <main>
      <div className="hidden sm:block">
        <FirstContent img={img} />
      </div>
      <div className="hidden md:block w-full ">
        <img src={img.banner} alt="banner" className="" />
      </div>
      <div className="hidden md:block">
        <SecondContent img={img} />
      </div>
      <div className="pb-20">
        <div className="grid grid-cols-4 gap-x-3 gap-y-4 w-[90%] pb-20">
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
    </main>
  );
};

export default Home;
