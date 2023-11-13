import type { NextPage } from "next";
import { memo } from "react";

type HeaderHeroBodyType = {
  text?: string;
};

const HeaderHeroBody: NextPage<HeaderHeroBodyType> = memo(
  ({ text = "Reserve a Vehicle" }) => {
    return (
      <div className="flex flex-row items-start justify-start text-center text-36xl text-black font-body-large">
        <div className="relative tracking-[0.5px] leading-[100%] font-medium">
          {text}
        </div>
      </div>
    );
  }
);

export default HeaderHeroBody;
