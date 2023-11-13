import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";
import ImageHeaderPageLogo from "./image-header-page-logo";
import ImageHeaderPageHamgurge from "./image-header-page-hamgurge";

type HeaderPageType = {
  image?: string;
  image1?: string;

  /** Style props */
  headerPageBackgroundImage?: CSSProperties["backgroundImage"];
  headerPageFlexShrink?: CSSProperties["flexShrink"];
  imageHeaderPageLogoCursor?: CSSProperties["cursor"];
  headerPageBoxSizing?: CSSProperties["boxSizing"];
  headerPageCursor?: CSSProperties["cursor"];

  /** Action props */
  onImageHeaderPageLogoClick?: () => void;
};

const HeaderPage: NextPage<HeaderPageType> = memo(
  ({
    image,
    image1,
    headerPageBackgroundImage,
    headerPageFlexShrink,
    imageHeaderPageLogoCursor,
    headerPageBoxSizing,
    headerPageCursor,
    onImageHeaderPageLogoClick,
  }) => {
    const headerPageStyle: CSSProperties = useMemo(() => {
      return {
        backgroundImage: headerPageBackgroundImage,
        flexShrink: headerPageFlexShrink,
        boxSizing: headerPageBoxSizing,
      };
    }, [headerPageBackgroundImage, headerPageFlexShrink, headerPageBoxSizing]);

    const imageHeaderPageLogoStyle: CSSProperties = useMemo(() => {
      return {
        cursor: imageHeaderPageLogoCursor,
      };
    }, [imageHeaderPageLogoCursor]);

    const imageHeaderPageHamgurgeStyle: CSSProperties = useMemo(() => {
      return {
        cursor: headerPageCursor,
      };
    }, [headerPageCursor]);

    return (
      <header
        className="overflow-hidden flex flex-row items-center justify-between py-5 px-[100px] box-border bg-[url('/header--page@3x.png')] bg-cover bg-no-repeat bg-[top] self-stretch"
        style={headerPageStyle}
      >
        <ImageHeaderPageLogo
          image="/image1@2x.png"
          imageHeaderPageLogoCursor="unset"
        />
        <ImageHeaderPageHamgurge
          image="/image@2x.png"
          imageHeaderPageHamgurgeBoxSizing="border-box"
          imageHeaderPageHamgurgeCursor="unset"
        />
      </header>
    );
  }
);

export default HeaderPage;
