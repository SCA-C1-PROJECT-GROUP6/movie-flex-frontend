import { useState } from "react";
import axios from "../utils/axiosInstanc";
import SignInValidator from "../validators/SignInValidator";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignIn = () => {
  const eyeIconUrl = "https://i.imgur.com/nW2iNQm.png";
  const eyeHideUrl = "https://i.imgur.com/IMmw9S6.png";

  const logoUrl = "https://i.imgur.com/ouyiPCG.png";

  const navigate = useNavigate();

  const initialFormData = {
    email: "",
    password: "",
  };
  const initialFormError = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState(initialFormError);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = SignInValidator({
      email: formData.email,
      password: formData.password,
    });

    if (errors.email || errors.password) {
      setFormError(errors);
    } else {
      try {
        setLoading(true);

        const response = await axios.post("/users/login", formData);
        const data = response.data;
        console.log(data);
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
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: true,
        });
      }
    }
  };
  return (
    <>
      <div className="ml-24 md:ml-1 lg:ml-20">
        <img src={logoUrl} alt="logo img" className="w-48 md:w-24 lg:w-40 " />
      </div>
      <div className=" p-4 -mt-24 lg:-mt-8 max-w-xl mx-auto rounded-md wrapper text-white h-199 shadow-lg z-10 backdrop-filter backdrop-blur-sm md:mt-2">
        <h1 className="text-xl font-bold pt-2 lg:ml-20">
          Sign in to continue to MovieFlex{" "}
        </h1>
        <form className="ml-20 mr-20 mt-4">
          <label className="block mt-6">
            <div className="text-left">
              Email address
              <span className="text-primaryRed ml-1">*</span>
            </div>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
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
              <span className="text-primaryRed ml-1">*</span>
            </div>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
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
            <div className="text-left m-2">Forgot password?</div>
          </label>
        </form>
        <button
          onClick={handleSubmit}
          className="mx-auto block mt-4 mb-4 w-42 px-16 py-1 h-9 rounded-md font-bold  bg-primaryRed hover:bg-red-900 transition-colors duration-300 ease-in-out"
        >
          Sign In
        </button>
        <h4 className="mb-12 text-center">
          Do not have an account?{" "}
          <span
            className="text-SignUpColor"
            value={`${loading ? "Signing..." : "Sign In"}`}
          >
            <Link to={"/signup"}>Sign Up</Link>
          </span>
        </h4>
      </div>
    </>
  );
};

export default SignIn;
