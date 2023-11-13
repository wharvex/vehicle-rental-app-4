import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";
import ContainerHeroBodyHeader from "./container-hero-body-header";
import ContainerRadioChoiceMenu from "./container-radio-choice-menu";

type BodyHeroType = {
  text?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;

  /** Style props */
  bodyHeroFlexShrink?: CSSProperties["flexShrink"];
  buttonSmallSmallBackgroundColor?: CSSProperties["backgroundColor"];
};

const BodyHero: NextPage<BodyHeroType> = memo(
  ({
    text,
    text1,
    text2,
    text3,
    text4,
    bodyHeroFlexShrink,
    buttonSmallSmallBackgroundColor,
  }) => {
    const bodyHeroStyle: CSSProperties = useMemo(() => {
      return {
        flexShrink: bodyHeroFlexShrink,
      };
    }, [bodyHeroFlexShrink]);

    const buttonSmallSmallStyle: CSSProperties = useMemo(() => {
      return {
        backgroundColor: buttonSmallSmallBackgroundColor,
      };
    }, [buttonSmallSmallBackgroundColor]);

    return (
      <div
        className="rounded-xl bg-white w-[1000px] h-[350px] overflow-hidden flex flex-row items-center justify-center py-[25px] px-[50px] box-border gap-[75px]"
        style={bodyHeroStyle}
      >
        <ContainerHeroBodyHeader />
        <ContainerRadioChoiceMenu
          text="Location"
          text1="Location"
          text2="Location"
          text3="Location"
          text4="Text"
          buttonSmallSmallBackgroundColor="unset"
        />
      </div>
    );
  }
);

export default BodyHero;
