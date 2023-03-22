import RegisterForm from "../../components/Register/registerForm";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <div.motion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex"
    >
      <RegisterForm />
    </div.motion>
  );
};

export default Register;
