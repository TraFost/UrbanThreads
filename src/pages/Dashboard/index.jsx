import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../app/productSlice";
import DashboardLists from "../../components/dashboard/DashboardLists";

const Dashboard = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts); // cara paujul, dispatch value dari fetch productnya dihandle didalem fetchProducts
    // dispatch(getProducts(fetchProducts)); // regular way
  }, []);

  console.log(products);

  const renderedList = products.map((product) => {
    return <DashboardLists key={product.id} product={product} />;
  });

  return (
    <div className="overflow-x-auto w-full my-8">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Photos</th>
            <th>Product Description</th>
            <th>Product Price</th>
            <th>Qty</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderedList}</tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Dashboard;
