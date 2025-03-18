const InstructionsCard = ({ desc, img }: { desc: string; img: string }) => {
  return (
    <ul className="">
      <li>
        <p className="mb-6 text-[#444444] text-[1.2rem]">{desc}</p>
        <img src={img} alt="" className=" mb-10 m-auto" />
      </li>
    </ul>
  );
};

export default InstructionsCard;
