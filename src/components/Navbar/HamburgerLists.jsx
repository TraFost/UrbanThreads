import { useNavigate } from "react-router-dom";
import { FcAbout } from "react-icons/fc";
import { RxDashboard } from "react-icons/rx";
import { CgLogOut } from "react-icons/cg";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const HamburgerLists = ({ logout }) => {
  const { items } = useSelector((state) => state.product);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0, transition: { duration: 0.75 } }}
      className="fixed bottom-20 z-50"
    >
      <div className="flex justify-center items-center">
        <div className="ml-6 flex w-16 flex-col items-center space-y-10 py-6">
          <div className="space-y-48 rounded-md bg-black">
            <ul>
              <motion.li
                whileTap={{ scale: 1.5 }}
                className="p-5"
                onClick={() => navigate("/about")}
              >
                <FcAbout className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600" />
              </motion.li>
              <motion.li
                whileTap={{ scale: 1.5 }}
                className="p-5 grid place-items-center"
                onClick={() => navigate("/cart")}
              >
                <div className="indicator">
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">{items}</span>
                </div>
              </motion.li>
              <motion.li
                whileTap={{ scale: 1.5 }}
                className="p-5 grid place-items-center"
                onClick={() => navigate("/dashboard")}
              >
                <RxDashboard />
              </motion.li>
              <motion.li
                whileTap={{ scale: 1.5 }}
                className="p-5 grid place-items-center"
                onClick={() => logout()}
              >
                <CgLogOut />
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HamburgerLists;
