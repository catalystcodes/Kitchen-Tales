const AppInput = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="bg-white rounded-[4.4rem] flex items-center py-[1.4rem] pl-[1.4rem]">
      <img src="/Search icon.svg" alt="" className="mr-[1.3rem]" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-[18.2rem] outline-0"
      />
    </div>
  );
};

export default AppInput;

//
