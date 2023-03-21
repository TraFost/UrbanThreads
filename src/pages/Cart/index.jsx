import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";
import EmptyCart from "../../components/Cart/EmptyCart";
import CartList from "../../components/Cart/CartList";
import CartSummary from "../../components/Cart/CartSummary";

const Cart = () => {
  const { cart, total } = useSelector((state) => state.product);
  const nav = useNavigate();

  return (
    <>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="mt-6">
          <div className="flex gap-2 lg:gap-0 ml-4">
            <div className="block lg:hidden">
              <button onClick={() => nav(-1)}>
                <BiArrowBack className="text-5xl" />
              </button>
            </div>
            <h1 className="text-2xl font-semibold self-center lg: ml-5">
              Shopping Cart
            </h1>
          </div>
          {/* Divider */}
          <div className="hidden lg:block">
            <div className="divider lg: mb-0" />
          </div>
          <div className="block my-7 lg:hidden">
            <div className="grid place-items-center text-center bg-gray-200 h-10 text-gray-400">{`${cart.length} Items`}</div>
          </div>
          {/* Cart List */}
          <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 mt-6 lg:mt-0">
            <div className="">
              {cart.map((item, index) => (
                <CartList
                  key={item.id}
                  item={item}
                  price={total}
                  index={index}
                />
              ))}
            </div>
            {/* Cart Summary */}
            <div className="flex flex-col justify-center">
              <CartSummary />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
