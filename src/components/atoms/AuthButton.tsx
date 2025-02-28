const AuthButton = ({ text }: { text: string }) => {
  return (
    <button className="bg-[#2E5834] rounded-[0.6rem] w-full">
      <p className="font-medium text-[1.3rem] py-5 text-center text-white">
        {text}
      </p>
    </button>
  );
};

export default AuthButton;
