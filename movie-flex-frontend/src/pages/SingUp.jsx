import "./SignUp.css";

const SignUp = () => {
  const eyeIconUrl = "https://i.imgur.com/nW2iNQm.png";
  const GIconUrl = "https://i.imgur.com/GJnmeaj.png";
  const FbIconUrl = "https://i.imgur.com/QFwv2qR.png";
  const logoUrl = "https://i.imgur.com/ouyiPCG.png";
  return (
    <>
      <div className="ml-24 md:ml-1 lg:ml-20">
        <img src={logoUrl} alt="logo img" className="w-48 md:w-24 lg:w-40" />
      </div>
      <div className=" p-4 -mt-24 lg:-mt-8 max-w-xl mx-auto rounded-md wrapper text-white h-199 shadow-lg z-10 backdrop-filter backdrop-blur-sm md:mt-2">
        <h1 className="text-xl font-bold ">
          Create an account to continue to MovieFlex{" "}
        </h1>
        <form className="ml-20 mr-20 mt-4">
          <label className="block mt-6">
            <div className="text-left">
              Name
              <span className="text-primaryRed ml-1">*</span>
            </div>
            <input
              type="text"
              placeholder="username"
              className="sign-border mt-2 py-2  px-4 bg-transparent rounded-sm block w-full"
            />
          </label>
          <label className="block mt-6">
            <div className="text-left">
              Email address
              <span className="text-primaryRed ml-1">*</span>
            </div>
            <input
              type="email"
              placeholder="email"
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
                placeholder="password"
                className="sign-border  mt-2 py-2  px-4 bg-transparent rounded-sm block w-full"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                <img src={eyeIconUrl} alt="eye icon" className="w-4 h-4 " />
              </span>
            </div>
          </label>
        </form>
        <button className="mt-4 mb-4 w-42 px-16 py-1 h-9 rounded-md font-bold  bg-primaryRed hover:bg-red-900 transition-colors duration-300 ease-in-out">
          Sign Up
        </button>
        <h4>
          Already have an account?{" "}
          <span className="text-SignUpColor">Sign In</span>
        </h4>
        <div className="mt-4 mb-4">OR</div>
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
