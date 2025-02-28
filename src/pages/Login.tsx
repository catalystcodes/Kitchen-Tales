import { useNavigate } from "react-router";
import AppButton from "../components/atoms/AppButton";
import AuthButton from "../components/atoms/AuthButton";
import AuthInput from "../components/atoms/AuthInput";

const Login = () => {
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/signUp");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex relative">
      <div className="bg-[url(/signUpCoverImage.svg)] w-[51rem] h-[53.6rem]  "></div>

      <div className=" w-[50rem] h-[53.45rem] bg-white rounded-tl-[1.7rem] rounded-bl-[1.7rem] absolute top-0 right-0 px-[8.1rem] py-[3.2rem]">
        <div className="flex justify-between items-center mb-[0.9rem]">
          <img src="/LOGO.svg" alt="" />
          <img
            src="CloseIcon.svg"
            alt=""
            onClick={navigateToHome}
            className="cursor-pointer"
          />
        </div>
        <p className="font-semibold mb-[0.7rem] text-[2.7rem]">Login</p>
        <div className="flex justify-between items-center mb-6">
          <div className="border-1 px-6 py-4.5 border-[#A3A3A3] rounded-[0.6rem]">
            <AppButton img="/faceBookIcon.svg" text="Sign up with Facebook" />
          </div>
          <div className="border-1 px-6 py-4.5 border-[#A3A3A3] rounded-[0.6rem]">
            <AppButton img="/googleIcon.svg" text="Sign up with Google" />
          </div>
        </div>
        <div className="flex justify-center items-center mb-6 gap-x-[1rem] ">
          <div className="w-full h-[.06rem] bg-[#A3A3A3]"></div>
          <p>OR</p>
          <div className="w-full h-[.06rem] bg-[#A3A3A3]"></div>
        </div>

        <div className="my-4">
          <AuthInput
            label="E-mail Address"
            placeholder="Enter your e-mail"
            type="email"
          />
        </div>
        <div>
          <AuthInput
            label="Password"
            placeholder="Enter password"
            type="password"
            isPassword={true}
          />
        </div>
        <div className="mt-[1.3rem] mb-[0.4rem]">
          <AuthButton text="Login" />
        </div>
        <p className="text-[1.1rem]">
          Don’t have an account?
          <span
            onClick={navigateToSignUp}
            className="text-[#2E5834] ml-2.5 cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
