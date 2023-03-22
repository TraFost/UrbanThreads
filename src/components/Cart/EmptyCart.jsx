import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const nav = useNavigate();
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h3 className="text-2xl font-bold">Your cart is empty!</h3>
      <button
        className="btn btn-primary mt-8 hover:bg-white hover:text-black active:bg-black active:text-white"
        onClick={() => nav("/")}
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default EmptyCart;
