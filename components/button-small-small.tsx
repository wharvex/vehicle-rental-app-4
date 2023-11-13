import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";

type ButtonSmallSmallType = {
  buttonText?: string;

  /** Style props */
  buttonSmallSmallBackgroundColor?: CSSProperties["backgroundColor"];
};

const ButtonSmallSmall: NextPage<ButtonSmallSmallType> = memo(
  ({ buttonText = "Text", buttonSmallSmallBackgroundColor }) => {
    const buttonSmallSmallStyle: CSSProperties = useMemo(() => {
      return {
        backgroundColor: buttonSmallSmallBackgroundColor,
      };
    }, [buttonSmallSmallBackgroundColor]);

    return (
      <div
        className="rounded-3xs box-border w-[214px] h-[82px] flex flex-col items-center justify-center text-center text-21xl text-black font-header-footer-button-extra-small border-[2px] border-solid border-black"
        style={buttonSmallSmallStyle}
      >
        <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[100%] font-medium flex items-center justify-center">
          {buttonText}
        </div>
      </div>
    );
  }
);

export default ButtonSmallSmall;
