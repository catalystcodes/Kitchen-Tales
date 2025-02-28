import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface AuthInputProps {
  label: string;
  type: string;
  placeholder: string;
  isPassword?: boolean;
}

const AuthInput = ({
  label,
  type,
  placeholder,
  isPassword,
}: AuthInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col relative">
      <label className="mb-1.5 text-[1.1rem]">{label}</label>
      <input
        type={type}
        id="Full Name"
        placeholder={placeholder}
        className="px-6 outline-none border-1 border-[#A3A3A3] py-6"
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2  text-gray-500 hover:text-gray-700"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  );
};

export default AuthInput;
