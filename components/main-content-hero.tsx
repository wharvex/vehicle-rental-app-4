import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";
import BodyHero from "./body-hero";

type MainContentHeroType = {
  text?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;

  /** Style props */
  buttonSmallSmallBackgroundColor?: CSSProperties["backgroundColor"];
};

const MainContentHero: NextPage<MainContentHeroType> = memo(
  ({ text, text1, text2, text3, text4, buttonSmallSmallBackgroundColor }) => {
    const buttonSmallSmallStyle: CSSProperties = useMemo(() => {
      return {
        backgroundColor: buttonSmallSmallBackgroundColor,
      };
    }, [buttonSmallSmallBackgroundColor]);

    return (
      <div className="overflow-hidden flex flex-row items-center justify-center py-[100px] px-2.5 box-border bg-[url('/maincontent--hero@3x.png')] bg-cover bg-no-repeat bg-[top] self-stretch">
        <BodyHero
          text="Location"
          text1="Location"
          text2="Location"
          text3="Location"
          text4="Text"
          bodyHeroFlexShrink="0"
          buttonSmallSmallBackgroundColor="unset"
        />
      </div>
    );
  }
);

export default MainContentHero;
