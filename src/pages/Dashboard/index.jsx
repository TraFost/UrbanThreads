import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSearch } from "../../app/productSlice";
import { motion } from "framer-motion";
import DashboardLists from "../../components/dashboard/DashboardLists";
import Button from "../../components/Button";
import Modal from "../../components/dashboard/Modal";
import "./dashboard.css";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const dispatch = useDispatch();
  const { products, searchField } = useSelector(
    ({ product: { products, searchField } }) => {
      const filteredProduct = products.filter((product) => {
        return product.productName
          .toLowerCase()
          .includes(searchField.toLowerCase());
      });
      return {
        products: filteredProduct,
        searchField: searchField,
      };
    }
  );

  const handleSearchButton = () => {
    setIsSearch(!isSearch);
    dispatch(handleSearch(""));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-x-auto w-full my-8"
    >
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Photos & Product Name</th>
            <th>Product Description</th>
            <th>Product Price</th>
            <th>Qty</th>
            <th className="flex justify-around items-center">
              <Button
                onClick={() => setShowModal(!showModal)}
                className="border-black hover:text-black hover:bg-white"
              >
                Add Product
              </Button>
              {showModal && <Modal />}
              {isSearch && (
                <input
                  type="text"
                  value={searchField}
                  className="search-field input-sm"
                  onChange={({ target: { value } }) =>
                    dispatch(handleSearch(value))
                  }
                />
              )}
              <Button
                className="btn btn-ghost btn-circle"
                onClick={handleSearchButton}
              >
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
        <tbody>
          {products.map((product) => {
            return <DashboardLists key={product.id} product={product} />;
          })}
        </tbody>
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
    </motion.div>
  );
};

export default Dashboard;
