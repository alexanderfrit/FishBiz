import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[21px]",
  circle: "rounded-[50%]",
};
const variants = {
  outline: {
    gray_200: "border-gray-200 border border-solid text-black-900",
  },
  fill: {
    indigo_A400: "bg-indigo-A400 text-white-A700",
    indigo_50_7f: "bg-indigo-50_7f",
    white_A700_11: "bg-white-A700_11",
  },
};
const sizes = {
  sm: "h-[42px] px-[18px] text-base",
  lg: "h-[45px] px-3.5 text-lg",
  "3xl": "h-[57px] px-[29px] text-lg",
  xs: "h-[40px] px-[18px] text-xs",
  xl: "h-[49px] px-6 text-lg",
  "2xl": "h-[52px] px-2.5",
  md: "h-[44px] px-2.5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "gray_200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["sm", "lg", "3xl", "xs", "xl", "2xl", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["gray_200", "indigo_A400", "indigo_50_7f", "white_A700_11"]),
};

export { Button };
