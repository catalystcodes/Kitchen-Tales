const Substitutions = () => {
  return (
    <div className="mb-20">
      <p className="text-[2.2rem] font-semibold mb-8">Substitutions</p>
      <ul className="list-disc list-inside flex flex-col gap-y-2.5">
        <li className="font-medium text-[1.3rem]">
          Light Soy Sauce:
          <span className="font-normal text-[#444444]">
            {" "}
            All purpose soy sauce
          </span>
        </li>
        <li className="font-medium text-[1.3rem]">
          Dark Soy Sauce:
          <span className="font-normal text-[#444444]">
            {" "}
            Light soy sauce or All purpose soy sauce
          </span>
        </li>
        <li className="font-medium text-[1.3rem]">
          Rice Wine Vinegar:
          <span className="font-normal text-[#444444]">
            {" "}
            White vinegar or balsamic vinegar
          </span>
        </li>
        <li className="font-medium text-[1.3rem]">
          Cornstarch:
          <span className="font-normal text-[#444444]">
            {" "}
            All-purpose flour or Potato Starch
          </span>
        </li>
        <li className="font-medium text-[1.3rem]">
          Shaoxing Wine:
          <span className="font-normal text-[#444444]">
            {" "}
            Dry sherry or mirin (if using mirin, skip the sugar) or Japanese
            cooking sake (rice wine). If you can't consume alcohol, then skip it
            but use chicken broth in place of water.
          </span>
        </li>
        <li className="font-medium text-[1.3rem]">
          Sichuan Pepper:
          <span className="font-normal text-[#444444]"> White pepper</span>
        </li>
      </ul>
    </div>
  );
};

export default Substitutions;
