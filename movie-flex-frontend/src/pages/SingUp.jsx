import { useState } from "react";
import SignUpValidator from "../validators/SignUpValidator";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "../utils/axiosInstanc";

import { toast } from "react-toastify";
import "./SignUp.css";

const SignUp = () => {
  const eyeIconUrl = "https://i.imgur.com/nW2iNQm.png";
  const GIconUrl = "https://i.imgur.com/GJnmeaj.png";
  const FbIconUrl = "https://i.imgur.com/QFwv2qR.png";
  const logoUrl = "https://i.imgur.com/ouyiPCG.png";
  const eyeHideUrl = "https://i.imgur.com/IMmw9S6.png";

  const navigate = useNavigate();

  const initialFormData = {
    name: "",
    email: "",
    password: "",
  };
  const initialFormError = {
    name: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState(initialFormError);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = SignUpValidator({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    if (errors.name || errors.email || errors.password) {
      setFormError(errors);
    } else {
      try {
        setLoading(true);
        const requestBody = {
          username: formData.name,
          email: formData.email,
          password: formData.password,
        };

        const response = await axios.post("/users/signup", requestBody, {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjMyZWYwM2ZkNmYyN2E0ODA0ZTEwNmVlN2I5NDBiYyIsInN1YiI6IjY2NjlhY2MzZTk4MTA1ZTQyNzM3ZjI5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QTSkCBiLob14xwCItJSWuCcbVawXFBYaZ0hb17cU5zM",
          },
        });
        const data = response.data;
        window.localStorage.setItem("userData", JSON.stringify(data));

        toast.success(data.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: true,
        });
        setFormData(initialFormData);
        setFormError(initialFormError);

        setLoading(false);
        navigate("/");
      } catch (error) {
        setLoading(false);

        console.log(error);
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: true,
        });
      }
    }
  };

  return (
    <>
      <div className="ml-24 md:ml-1 lg:ml-20">
        <img
          src={logoUrl}
          alt="logo img"
          className="w-48 md:w-24 lg:w-40 mt-6"
        />
      </div>
      <div className=" p-4 lg:-mt-24 max-w-xl mx-auto rounded-md wrapper text-white h-199 shadow-lg z-10 backdrop-filter backdrop-blur-sm md:mt-2">
        <h1 className="text-xl font-bold text-center ">
          Create an account to continue to MovieFlex{" "}
        </h1>
        <form className="ml-20 mr-20 mt-4">
          <label className="block mt-6">
            <div className="text-left">
              Username
              <span className="text-red-600 ml-1">*</span>
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Username"
              className="sign-border mt-2 py-2  px-4 bg-transparent rounded-sm block w-full"
              autoComplete="off"
            />
            {formError && (
              <p className="text-red-600 text-left mt-1">{formError.name}</p>
            )}
          </label>
          <label className="block mt-6">
            <div className="text-left">
              Email address
              <span className="text-red-600 ml-1">*</span>
            </div>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="sign-border mt-2 py-2  px-4 bg-transparent rounded-sm block w-full"
              autoComplete="off"
            />
            {formError && (
              <p className="text-red-600 text-left mt-1">{formError.email}</p>
            )}
          </label>
          <label className="block mt-6">
            <div className="text-left">
              Password
              <span className="text-red-600 ml-1">*</span>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="sign-border  mt-2 py-2  px-4 bg-transparent rounded-sm block w-full"
                autoComplete="off"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              >
                <img
                  src={showPassword ? eyeHideUrl : eyeIconUrl}
                  alt="eye icon"
                  className="w-4 h-4 "
                />
              </span>
              {formError && (
                <p className="text-red-600 text-left mt-1">
                  {formError.password}
                </p>
              )}
            </div>
          </label>
        </form>
        <button
          type="submit"
          value={`${loading ? "Saving... " : "Sign Up"}`}
          onClick={handleSubmit}
          className="mx-auto block mt-4 mb-4 w-42 px-16 py-1 h-9 rounded-md font-bold  bg-primaryRed hover:bg-red-900 transition-colors duration-300 ease-in-out"
        >
          Sign Up
        </button>
        <h4 className="text-center">
          Already have an account?{" "}
          <span className="text-SignUpColor">
            <Link to={"/signin"}>Sign In</Link>
          </span>
        </h4>
        <div className="mt-4 mb-4 text-center">OR</div>
        <div className="flex justify-center gap-3 mb-12">
          <div className="flex items-center justify-center w-1/2 sign-border px-2 py-2">
            <img src={GIconUrl} alt="Google Icon" className="h-6 w-6 mr-2" />
            <p>Continue with Google</p>
          </div>
          <div className="flex items-center justify-center w-1/2 py-2 px-2 sign-border">
            <img
              src={FbIconUrl}
              alt="Google Icon"
              className="ml-5 h-6 w-6 mr-2"
            />
            <p>Continue with Facebook</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
