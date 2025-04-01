import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ 
  value, 
  onChange, 
  placeholder, 
  className = '',
  inputClassName = '',
  iconSize = 20,
  ...props 
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className={`relative flex items-center bg-white border-[1.5px] rounded-lg mb-3 ${className}`}>
      <input 
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className={`w-full text-sm bg-transparent py-3 px-4 pr-10 focus:outline-none ${inputClassName}`}
        {...props}
      />
      
      <button
        type="button"
        onClick={toggleShowPassword}
        className="absolute right-4 text-slate-400 hover:text-gray-600 transition-colors focus:outline-none"
        aria-label={isShowPassword ? "Hide password" : "Show password"}
      >
        {isShowPassword ? (
          <FaRegEyeSlash size={iconSize} />
        ) : (
          <FaRegEye size={iconSize} className='text-primary cursor-pointer'/>
        )}
      </button>
    </div>
  );
};

export default PasswordInput;