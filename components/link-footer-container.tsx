import type { NextPage } from "next";
import { memo } from "react";

type LinkFooterContainerType = {
  linkText?: string;
};

const LinkFooterContainer: NextPage<LinkFooterContainerType> = memo(
  ({ linkText = "Link / Footer" }) => {
    return (
      <div className="flex flex-row items-center justify-center p-2.5 text-center text-13xl text-black font-header-footer-button-extra-small">
        <a className="[text-decoration:none] relative tracking-[0.5px] leading-[100%] font-medium text-[inherit] flex items-center justify-center w-[86px] shrink-0">
          {linkText}
        </a>
      </div>
    );
  }
);

export default LinkFooterContainer;
