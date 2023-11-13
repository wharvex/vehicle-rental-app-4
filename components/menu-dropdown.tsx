import type { NextPage } from "next";
import { memo } from "react";
import RadioChoice from "./radio-choice";

type MenuDropdownType = {
  text?: string;
  text1?: string;
  text2?: string;
  text3?: string;
};

const MenuDropdown: NextPage<MenuDropdownType> = memo(
  ({ text, text1, text2, text3 }) => {
    return (
      <div className="rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start">
        <RadioChoice text="Location" />
        <RadioChoice text="Location" />
        <RadioChoice text="Location" />
        <RadioChoice text="Location" />
      </div>
    );
  }
);

export default MenuDropdown;
