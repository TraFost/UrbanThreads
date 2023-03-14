import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import pb from "../lib/pocketbase";
import Hamburger from "hamburger-react";
import Button from "../components/Button";
import logoImage from "../assets/urbam-logo.png";
import "../styles/parts.css";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const { items, total } = useSelector((state) => state.product);

  const navigate = useNavigate();

  const isValid = pb.authStore.isValid; // check to see if user is logged in or not, returns boolean
  const token = pb.authStore.token; // getting access token
  const model = pb.authStore.model; // getting user data, it contains email, name, etc

  let imgUser;

  if (isValid && model) {
    imgUser = pb.getFileUrl(model, model.avatar); // ** get user image from the pb database
  } else {
    imgUser =
      "https://appletradein-au.likewize.com/_nuxt/img/product_placeholder.6d9cbdf.svg";
  }

  const logout = () => {
    pb.authStore.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar-container">
      <div className="flex justify-between mx-10 md:mx-0">
        <figure
          onClick={() => navigate("/")}
          className="w-36 h-20 md:w-28 md:mt-4 md:ml-16 cursor-pointer"
        >
          <img src={logoImage} alt="urban-threads" />
        </figure>
        <div className="flex items-start md:hidden">
          <Hamburger toggle={setHamburger} toggled={hamburger} to size={33} />
        </div>
      </div>
      <div className="hidden md:flex md:items-center md:justify-between">
        <ul className="hidden md:flex md:gap-5 pr-5">
          <li className="nav-list">Store</li>
          <li className="nav-list">
            <a onClick={() => navigate("/about")}>About</a>
          </li>
        </ul>
        {isValid ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
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
              </label>
              <div
                tabIndex={0}
                className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg text-black">
                    {items} Items
                  </span>
                  <span className="text-info">Subtotal: {total}</span>
                  <div className="card-actions">
                    <Button className="btn btn-primary btn-block hover:text-black hover:bg-white rounded-2xl">
                      View cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end mr-7">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full bg-white">
                  <img src={imgUser} alt="profile picture" />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 odd:text-black even:text-black"
              >
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a onClick={() => navigate("/dashboard")}>Dashboard</a>
                </li>
                <li>
                  <a onClick={() => logout()}>Logout</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Button onClick={() => navigate("/login")} className="nav-button">
            LOGIN
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
