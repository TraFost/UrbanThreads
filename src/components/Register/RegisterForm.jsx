import { useNavigate } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";
import pb from "../../lib/pocketbase";
import Input from "../Input";
import Button from "../Button";
import backgroundImg from "../../assets/register_img.webp";
import imgLayer from "../../assets/placeholder_register-img.webp";
import "../../pages/Register/register.css";

const RegisterForm = () => {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      street: "",
      number: "",
      postalCode: "",
      city: "",
      country: "",
    },
  });

  const { password, confirmPassword, street, city, country } = watch();

  async function registerHandler(data) {
    const dataRegister = {
      name: data.name,
      email: data.email,
      emailVisibility: true,
      password: data.password,
      passwordConfirm: data.confirmPassword,
      street: data.street,
      number: data.number,
      postalCode: data.postalCode,
      city: data.city,
      country: data.country,
    };
    setLoading(true);
    await pb.collection("users").create(dataRegister);
    setLoading(false);
    navigate("/login");
  }

  const validatePassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      return (
        <div className="text-red-500 text-xs font-light pt-2">
          Passwords do not match
        </div>
      );
    }
  };

  const validateLengthPassword = (password, confirm) => {
    if (
      password.length > 0 &&
      password.length < 8 &&
      confirm.length > 0 &&
      confirm.length < 8
    ) {
      return (
        <div className="text-red-500 text-xs font-light pt-2">
          Password must be at least 8 characters
        </div>
      );
    }
  };

  const validateAddress = (street, city, country) => {
    const containsNumber = /\d/g.test(`${street} ${city} ${country}`);
    if (containsNumber) {
      return (
        <div className="text-red-500 text-xs font-light pt-2">
          Address must not contain numbers
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="overflow-hidden h-0 w-0 lg:container-image lg:w-1/2 lg:h-full pb-10 lg:pb-0">
        <figure className="w-full h-full md:item-1">
          <img src={backgroundImg} alt="background-register" />
        </figure>
        <figure className="w-1/2 md:item-2">
          <img src={imgLayer} />
        </figure>
      </div>
      <div className="container-form">
        <form onSubmit={handleSubmit(registerHandler)}>
          <h1 className="text-sm font-semibold pb-[10px]">PERSONAL INFO</h1>
          <div>
            <label className="label">
              <span className="label-text font-light text-xs">name</span>
            </label>
            <Input
              {...register("name")}
              type="text"
              placeholder="your name here.."
              className="bg-gray-100 rounded-none border-none p-6"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-light text-xs">email</span>
            </label>
            <Input
              {...register("email")}
              type="email"
              placeholder="your email here.."
              className="bg-gray-100 rounded-none border-none p-6"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-light text-xs">password</span>
            </label>
            <Input
              {...register("password", {
                required: true,
              })}
              type="password"
              placeholder="enter your password.."
              className="bg-gray-100 rounded-none border-none p-6"
            />
            {validateLengthPassword(password, confirmPassword)}
            {validatePassword(confirmPassword, password)}
          </div>
          <div>
            <label className="label">
              <span className="label-text font-light text-xs">
                confirm password
              </span>
            </label>
            <Input
              {...register("confirmPassword")}
              type="password"
              placeholder="enter your password once more.."
              className="bg-gray-100 rounded-none border-none p-6"
            />
          </div>
          <div className="flex items-center gap-5">
            <div>
              <label className="label">
                <span className="label-text font-light text-xs">street</span>
              </label>
              <Input
                {...register("street")}
                type="text"
                placeholder="your street's name here.."
                className="bg-gray-100 rounded-none border-none"
              />
            </div>
            <div className="basis-[66px]">
              <label className="label">
                <span className="label-text font-light text-xs">number</span>
              </label>
              <Input
                {...register("number")}
                type="number"
                placeholder="000"
                className="bg-gray-100 rounded-none border-none w-[65px]"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="basis-[93px]">
              <label className="label">
                <span className="label-text font-light text-xs">
                  postal code
                </span>
              </label>
              <Input
                {...register("postalCode")}
                type="number"
                placeholder="0000"
                className="bg-gray-100 rounded-none border-none p-6 w-[116px] h-[37px]"
              />
            </div>
            <div className="basis-[93px]">
              <label className="label">
                <span className="label-text font-light text-xs">city</span>
              </label>
              <Input
                {...register("city")}
                type="text"
                placeholder="City"
                className="bg-gray-100 rounded-none border-none p-6 w-[116px] h-[37px]"
              />
            </div>
            <div className="basis-[93px]">
              <label className="label">
                <span className="label-text font-light text-xs">country</span>
              </label>
              <Input
                {...register("country")}
                type="text"
                placeholder="Country"
                className="bg-gray-100 rounded-none border-none p-6 w-[116px] h-[37px]"
              />
            </div>
          </div>
          {validateAddress(street, city, country)}
          <div>
            <Button
              disabled={
                password !== confirmPassword
                  ? true
                  : false || (password.length > 0 && password.length < 8)
                  ? true
                  : false || (street === "" && city === "" && country === "")
                  ? true
                  : false
              }
              className={"button-register"}
            >
              SUBMIT
            </Button>
          </div>
        </form>
        {loading && (
          <p>
            Loading<span className="animate-bounce">...</span>
          </p>
        )}
      </div>
    </>
  );
};

export default RegisterForm;
