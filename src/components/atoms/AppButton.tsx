interface AppButtonProps {
  img: string;
  text: string;
  onClick?: () => void;
}

const AppButton = ({ img, text, onClick }: AppButtonProps) => {
  return (
    <button onClick={onClick} className="flex items-center  gap-x-3.5">
      <img src={img} alt={text} />
      <p className="text-[1.1rem]">{text}</p>
    </button>
  );
};

export default AppButton;
