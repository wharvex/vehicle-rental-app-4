import type { NextPage } from "next";
import { memo } from "react";
import IconRadioChoiceUnselect from "./icon-radio-choice-unselect";
import ContentRadioChoice from "./content-radio-choice";

type RadioChoiceType = {
  text?: string;
};

const RadioChoice: NextPage<RadioChoiceType> = memo(({ text }) => {
  return (
    <div className="h-11 flex flex-row items-center justify-start py-0 px-[15px] box-border gap-[20px] self-stretch">
      <IconRadioChoiceUnselect />
      <ContentRadioChoice text="Location" />
    </div>
  );
});

export default RadioChoice;
