import UrbanLogo from "../../assets/urban-logo.svg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center lg:h-screen"
      >
        <motion.figure
          initial={{ x: -500 }}
          animate={{ x: 0, transition: { duration: 2 } }}
          className="w-2/3 md:w-1/4"
        >
          <img src={UrbanLogo} alt="Urban Threads Logo" />
        </motion.figure>
        <motion.p
          initial={{ y: -500 }}
          animate={{ y: 0, transition: { duration: 2 } }}
          className="text-2xl"
        >
          Built With:
        </motion.p>
        <motion.ul
          initial={{ y: 1000, scale: 0.5 }}
          animate={{
            y: 0,
            transition: { duration: 2 },
            scale: 1,
          }}
          className="flex flex-col md:flex-row justify-center items-center gap-14 md:gap-10 pt-6 pb-5 lg:pb-0"
        >
          <motion.li whileHover={{ scale: 1.3 }} className="w-1/2 md:w-1/12">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt="react-logo"
            />
          </motion.li>
          <motion.li whileHover={{ scale: 1.3 }} className="w-1/2 md:w-1/12">
            <img
              src="https://manggaleh-shop.netlify.app/static/media/redux.b426d97de12d4dab1c06.png"
              alt="redux-logo"
            />
          </motion.li>
          <motion.li whileHover={{ scale: 1.3 }} className="w-1/2 md:w-1/12">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
              alt="tailwind"
            />
          </motion.li>
          <motion.li whileHover={{ scale: 1.3 }} className="w-1/2 md:w-1/12">
            <img
              src="https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo-4.svg"
              alt="daisy-ui"
            />
          </motion.li>
          <motion.li whileHover={{ scale: 1.3 }} className="w-1/2 md:w-1/12">
            <img
              src="https://seeklogo.com/images/P/pocketbase-logo-CA73994F09-seeklogo.com.png"
              alt="daisy-ui"
            />
          </motion.li>
        </motion.ul>
      </motion.div>
    </>
  );
};

export default About;
