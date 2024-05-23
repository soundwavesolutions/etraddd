import React from "react";

const Input = ({ title, children, ...rest }) => {
  return (
    <div className="w-full relative cursor-pointer mb-5">
      <label className="text-[13px] font-medium mb-1 block">{title}</label>
      <input
        type="text"
        className={`px-3 py-[6px] text-sm text-[#333333] bg-[#ffffff] w-full border-[1px] border-[#a8a8a8] focus:border-[#5627d8] hover:border-[#5627d8]`}
        required
        {...rest}
      />
      {children ? children : null}
    </div>
  );
};

export default Input;
