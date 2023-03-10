import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../app/productSlice";
import DashboardLists from "../../components/dashboard/DashboardLists";
import Button from "../../components/Button";
import Modal from "../../components/dashboard/Modal";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts); // cara paujul, dispatch value dari fetch productnya dihandle didalem fetchProducts
    // dispatch(getProducts(fetchProducts)); // regular way
  }, []);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const renderedList = products.map((product) => {
    return <DashboardLists key={product.id} product={product} />;
  });

  console.log(products.qty);

  return (
    <>
      {products.length === 0 ? (
        <p>please insert some content!!!</p>
      ) : (
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
                <th className="flex justify-between items-center">
                  <Button
                    onClick={handleModal}
                    className="border-black hover:text-black hover:bg-white"
                  >
                    Add Product
                  </Button>
                  {showModal && <Modal />}
                  <Button className="btn btn-ghost btn-circle ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </Button>
                </th>
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
      )}
    </>
  );
};

export default Dashboard;
