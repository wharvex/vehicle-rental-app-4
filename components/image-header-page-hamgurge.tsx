import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";

type ImageHeaderPageHamgurgeType = {
  image?: string;

  /** Style props */
  imageHeaderPageHamgurgeBoxSizing?: CSSProperties["boxSizing"];
  imageHeaderPageHamgurgeCursor?: CSSProperties["cursor"];
};

const ImageHeaderPageHamgurge: NextPage<ImageHeaderPageHamgurgeType> = memo(
  ({
    image,
    imageHeaderPageHamgurgeBoxSizing,
    imageHeaderPageHamgurgeCursor,
  }) => {
    const imageHeaderPageHamgurgeStyle: CSSProperties = useMemo(() => {
      return {
        boxSizing: imageHeaderPageHamgurgeBoxSizing,
        cursor: imageHeaderPageHamgurgeCursor,
      };
    }, [imageHeaderPageHamgurgeBoxSizing, imageHeaderPageHamgurgeCursor]);

    return (
      <div
        className="flex flex-col items-start justify-start p-2.5"
        style={imageHeaderPageHamgurgeStyle}
      >
        <img
          className="relative w-[60px] h-[42px] object-cover"
          alt=""
          src={image}
        />
      </div>
    );
  }
);

export default ImageHeaderPageHamgurge;
