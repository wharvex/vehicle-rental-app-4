import type { NextPage } from "next";
import { memo } from "react";

const IconRadioChoiceUnselect: NextPage = memo(() => {
  return (
    <div className="overflow-hidden flex flex-row items-start justify-start p-0.5">
      <img
        className="relative w-[19.5px] h-[19.5px]"
        alt=""
        src="/vector-stroke.svg"
      />
    </div>
  );
});

export default IconRadioChoiceUnselect;
