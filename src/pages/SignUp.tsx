import AppButton from "../components/atoms/AppButton";
import AuthInput from "../components/atoms/AuthInput";

const SignUp = () => {
  return (
    <div className="flex relative">
      <div className="bg-[url(/signUpCoverImage.svg)] w-[51rem] h-[53.6rem] relative ">
        <img
          src="/signUpCoverImageDarkener.svg"
          alt=""
          className="absolute top-0 left-0  "
        />
        <p className="font-semibold w-[20.5rem] text-[2.2rem] text-white mt-[12.8rem]  ml-[5.6rem] ">
          Embark on a culinary journey with us!
          <br /> Sign up to unlock a world of <br /> delicious recipes, and
          personalized cooking experiences.
        </p>
      </div>

      <div className=" w-[50rem] h-[53.45rem] bg-white rounded-tl-[1.7rem] rounded-bl-[1.7rem] absolute top-0 right-0 px-[8.1rem] py-[3.2rem]">
        <div className="flex justify-between items-center mb-[0.9rem]">
          <img src="/LOGO.svg" alt="" />
          <img src="CloseIcon.svg" alt="" />
        </div>
        <p className="font-semibold mb-[0.7rem] text-[2.7rem]">
          Create an Account
        </p>
        <div className="flex justify-between items-center mb-6">
          <div className="border-1 px-6 py-4.5 border-[#A3A3A3] rounded-[0.6rem]">
            <AppButton img="/faceBookIcon.svg" text="Sign up with Facebook" />
          </div>
          <div className="border-1 px-6 py-4.5 border-[#A3A3A3] rounded-[0.6rem]">
            <AppButton img="/googleIcon.svg" text="Sign up with Google" />
          </div>
        </div>
        <div className="flex justify-center items-center mb-6 ">
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <div>
          <AuthInput
            label="Full Name"
            placeholder="Enter your full name"
            type="text"
          />
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
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
