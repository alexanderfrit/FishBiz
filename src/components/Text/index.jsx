import React from "react";

const sizes = {
  xs: "text-base font-medium",
  lg: "text-[32px] font-medium md:text-3xl sm:text-[28px]",
  s: "text-lg font-medium",
  md: "text-2xl font-medium md:text-[22px]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-600 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
