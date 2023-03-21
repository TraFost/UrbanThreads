import {
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialLinkedin,
} from "react-icons/sl";
import { DiGithubBadge } from "react-icons/di";
import "../styles/parts.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <div className="pb-4">
            <h3 className="font-extrabold text-sm">Mail</h3>
            <p className="text-xs">rahmannurudin29@gmail.com</p>
          </div>
          <div>
            <h3 className="font-extrabold text-sm">Address</h3>
            <p className="text-sm">Urban Streetwear.</p>
            <p className="text-sm">Indonesia, Citra Raya</p>
          </div>
        </div>
        <div className="mr-5">
          <p className="hidden md:block font-extrabold text-sm">
            Explore More:
          </p>
          <div className="block md:flex md:justify-center md:gap-7 pt-4">
            <SlSocialLinkedin className="text-2xl mb-3 md:mb-0 cursor-pointer" />
            <SlSocialInstagram className="text-2xl mb-3 md:mb-0 cursor-pointer" />
            <SlSocialFacebook className="text-2xl mt-3 md:mb-0 md:mt-0 cursor-pointer" />
            <a href="https://github.com/TraFost/UrbanThreads">
              <DiGithubBadge className="text-2xl mt-3 md:mb-0 md:mt-0 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-4 flex justify-evenly">
        <p className="text-black">
          URBAM STREETWEAR © 2022 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
