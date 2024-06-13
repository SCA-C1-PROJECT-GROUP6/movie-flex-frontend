import "./SignUp.css";

const SignIn = () => {
  const eyeIconUrl = "https://i.imgur.com/nW2iNQm.png";

  const logoUrl = "https://i.imgur.com/ouyiPCG.png";
  return (
    <>
      <div className="ml-24 md:ml-1 lg:ml-20">
        <img src={logoUrl} alt="logo img" className="w-48 md:w-24 lg:w-40 -mt-8" />
      </div>
      <div className=" p-4 -mt-24 lg:-mt-8 max-w-xl mx-auto rounded-md wrapper text-white h-199 shadow-lg z-10 backdrop-filter backdrop-blur-sm md:mt-2">
        <h1 className="text-xl font-bold pt-2">
          Sign in to continue to MovieFlex{" "}
        </h1>
        <form className="ml-20 mr-20 mt-4">
          <label className="block mt-6">
            <div className="text-left">
              Email address
              <span className="text-primaryRed ml-1">*</span>
            </div>
            <input
              type="email"
              placeholder="Email"
              className="sign-border mt-2 py-2  px-4 bg-transparent rounded-sm block w-full"
            />
          </label>
          <label className="block mt-6">
            <div className="text-left">
              Password
              <span className="text-primaryRed ml-1">*</span>
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="sign-border  mt-2 py-2  px-4 bg-transparent rounded-sm block w-full"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                <img src={eyeIconUrl} alt="eye icon" className="w-4 h-4 " />
              </span>
            </div>
            <div className="text-left m-2">Forgot password?</div>
          </label>
        </form>
        <button className="mt-4 mb-4 w-42 px-16 py-1 h-9 rounded-md font-bold  bg-primaryRed hover:bg-red-900 transition-colors duration-300 ease-in-out">
          Sign In
        </button>
        <h4 className="mb-12">
          Do not have an account?{" "}
          <span className="text-SignUpColor">Sign Up</span>
        </h4>
      </div>
    </>
  );
};

export default SignIn;
