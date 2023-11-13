import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";
import HeaderCard from "./header-card";

type CardType = {
  testimonialButtonText?: string;
  testimonialImageUrls?: string;

  /** Style props */
  cardFlex?: CSSProperties["flex"];
  imageCardStarAlignItems?: CSSProperties["alignItems"];
  imageCardStarJustifyContent?: CSSProperties["justifyContent"];
};

const Card: NextPage<CardType> = memo(
  ({
    testimonialButtonText,
    testimonialImageUrls,
    cardFlex,
    imageCardStarAlignItems,
    imageCardStarJustifyContent,
  }) => {
    const cardStyle: CSSProperties = useMemo(() => {
      return {
        flex: cardFlex,
      };
    }, [cardFlex]);

    const imageCardStarStyle: CSSProperties = useMemo(() => {
      return {
        alignItems: imageCardStarAlignItems,
        justifyContent: imageCardStarJustifyContent,
      };
    }, [imageCardStarAlignItems, imageCardStarJustifyContent]);

    return (
      <div
        className="rounded-xl [background:linear-gradient(180deg,_#e5aeff,_rgba(255,_174,_174,_0))] overflow-hidden flex flex-col items-center justify-center p-[50px] gap-[50px] border-[1px] border-solid border-black"
        style={cardStyle}
      >
        <div
          className="flex flex-row items-center justify-center"
          style={imageCardStarStyle}
        >
          <img
            className="relative w-[100px] h-[100px] object-cover"
            alt=""
            src={testimonialButtonText}
          />
        </div>
        <HeaderCard text="Read Testimonials" />
      </div>
    );
  }
);

export default Card;
