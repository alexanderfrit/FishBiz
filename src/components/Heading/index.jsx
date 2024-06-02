import React from "react";

const sizes = {
  "3xl": "text-[42px] font-bold md:text-[38px] sm:text-[32px]",
  "2xl": "text-[32px] font-semibold md:text-3xl sm:text-[28px]",
  xl: "text-[28px] font-bold md:text-[26px] sm:text-2xl",
  "4xl": "text-7xl font-bold md:text-5xl",
  s: "text-lg font-semibold",
  md: "text-xl font-semibold",
  xs: "text-[17px] font-semibold",
  lg: "text-2xl font-bold md:text-[22px]",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
