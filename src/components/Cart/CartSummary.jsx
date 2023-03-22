import { NumericFormat } from "react-number-format";
import { useSelector, useDispatch } from "react-redux";
import { checkout } from "../../app/productSlice";
import pb from "../../lib/pocketbase";

const CartSummary = () => {
  const { total, cart, products, items } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  const handleCheckout = async () => {
    for (let item of cart) {
      const data = products.find((product) => product.id === item.id);
      const update = {
        qty: data.qty - item.qty,
      };
      await pb.collection("products").update(data.id, update);
    }
    dispatch(checkout());
    alert("Thank you for your purchase! :)");
  };
  return (
    <div>
      <div className="hidden lg:block">
        <div className="flex justify-between items-center md:justify-around mx-3 md:mx-0">
          <p className="text-lg font-semibold ml-4 md:ml-1">Total Items</p>
          <p className="text-lg font-semibold mr-4 md:mr-2.5">{cart.length}</p>
        </div>
      </div>

      <div className="flex justify-between items-center md:justify-around mx-3 md:mx-0">
        <p className="text-lg font-semibold ml-4 md:-ml-1">Quantity</p>
        <p className="text-lg font-semibold mr-4 md:mr-0.5">{items}</p>
      </div>
      <div className="lg:mr-2">
        <div className="flex justify-between items-center md:justify-around mx-3 md:mx-0">
          <p className="text-lg font-semibold pl-4 md:pl-0 pr-2 lg:pr-0">
            Shipping
          </p>
          <p className="text-lg font-semibold pr-4 md:pr-0">$0</p>
        </div>
      </div>
      <NumericFormat
        value={total}
        displayType="text"
        prefix="$"
        thousandSeparator={true}
        renderText={(value) => (
          <>
            <div>
              <div className="flex justify-between items-center mx-7 md:justify-around md:mx-0 ">
                <p className="text-lg font-semibold">Total</p>
                <p className="text-lg font-semibold">{value}</p>
              </div>
            </div>
          </>
        )}
      />
      <div className="text-center mt-10 mb-6">
        <button
          className="btn btn-primary hover:bg-white hover:text-black"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
