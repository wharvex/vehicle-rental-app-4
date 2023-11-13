import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";
import MenuDropdown from "./menu-dropdown";
import ButtonSmallSmall from "./button-small-small";

type ContainerRadioChoiceMenuType = {
  text?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;

  /** Style props */
  buttonSmallSmallBackgroundColor?: CSSProperties["backgroundColor"];
};

const ContainerRadioChoiceMenu: NextPage<ContainerRadioChoiceMenuType> = memo(
  ({ text, text1, text2, text3, text4, buttonSmallSmallBackgroundColor }) => {
    const buttonSmallSmallStyle: CSSProperties = useMemo(() => {
      return {
        backgroundColor: buttonSmallSmallBackgroundColor,
      };
    }, [buttonSmallSmallBackgroundColor]);

    return (
      <div className="bg-white overflow-hidden flex flex-col items-center justify-start p-2.5 gap-[20px]">
        <MenuDropdown
          text="Location"
          text1="Location"
          text2="Location"
          text3="Location"
        />
        <ButtonSmallSmall
          buttonText="Text"
          buttonSmallSmallBackgroundColor="unset"
        />
      </div>
    );
  }
);

export default ContainerRadioChoiceMenu;
