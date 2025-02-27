interface AuthInputProps {
  label: string;
  type: string;
  placeholder: string;
}

const AuthInput = ({ label, type, placeholder }: AuthInputProps) => {
  return (
    <div className="flex flex-col">
      <p className="mb-1.5 text-[1.1rem]">{label}</p>
      <input
        type={type}
        id="Full Name"
        placeholder={placeholder}
        className="px-6 outline-none "
      />
    </div>
  );
};

export default AuthInput;
