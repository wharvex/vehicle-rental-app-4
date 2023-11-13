import type { NextPage } from "next";
import { memo } from "react";

type ButtonLargeLargeType = {
  buttonText?: string;
};

const ButtonLargeLarge: NextPage<ButtonLargeLargeType> = memo(
  ({ buttonText = "Text" }) => {
    return (
      <div className="rounded-3xs box-border w-[308px] h-[118px] flex flex-col items-center justify-center text-center text-41xl text-black font-header-footer-button-extra-small border-[2px] border-solid border-black">
        <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[100%] font-medium flex items-center justify-center">
          {buttonText}
        </div>
      </div>
    );
  }
);

export default ButtonLargeLarge;
