import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";

type MainContentGenericType = {
  text?: string;

  /** Style props */
  mainContentGenericHeight?: CSSProperties["height"];
  mainContentGenericFlex?: CSSProperties["flex"];
  mainContentGenericBackground?: CSSProperties["background"];
};

const MainContentGeneric: NextPage<MainContentGenericType> = memo(
  ({
    text = "Generic Main Content",
    mainContentGenericHeight,
    mainContentGenericFlex,
    mainContentGenericBackground,
  }) => {
    const mainContentGenericStyle: CSSProperties = useMemo(() => {
      return {
        height: mainContentGenericHeight,
        flex: mainContentGenericFlex,
        background: mainContentGenericBackground,
      };
    }, [
      mainContentGenericHeight,
      mainContentGenericFlex,
      mainContentGenericBackground,
    ]);

    return (
      <div
        className="h-[137px] flex flex-row items-center justify-center py-0 px-[100px] box-border text-center text-36xl text-black font-body-large self-stretch"
        style={mainContentGenericStyle}
      >
        <div className="relative tracking-[0.5px] leading-[100%] font-medium">
          {text}
        </div>
      </div>
    );
  }
);

export default MainContentGeneric;
