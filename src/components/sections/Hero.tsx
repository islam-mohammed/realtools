import React from "react";
type Props = {
  className?: string;
  children: React.ReactNode;
  height?: string;
  backgroundUrl: string;
  backgroundGradient?: boolean;
};
const Hero = ({
  className,
  children,
  height = "610px",
  backgroundUrl,
  backgroundGradient = true,
  ...props
}: Props) => {
  return (
    <div
      className={`w-full flex items-center justify-center -mt-24 ${
        className ? className : ""
      } `}
      style={{
        backgroundImage: `${
          backgroundGradient &&
          "linear-gradient(120.67deg,rgba(24, 73, 198, 0.9) 50.54%, rgba(24, 73, 198, 0) 85.02%),"
        }url('${backgroundUrl}'`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
export default Hero;
