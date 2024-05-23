import React from "react";

const Button = ({ title, ...rest }) => {
  return (
    <button
      className="my-5 px-6 py-[6px] bg-[#5627d8] font-[500] text-sm text-center text-[#ffffff] w-full"
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
