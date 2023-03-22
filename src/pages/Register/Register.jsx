import RegisterForm from "../../components/Register/registerForm";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex"
    >
      <RegisterForm />
    </motion.div>
  );
};

export default Register;
