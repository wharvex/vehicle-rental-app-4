import type { NextPage } from "next";
import { memo } from "react";

const ImageCardStar: NextPage = memo(() => {
  return (
    <div className="flex flex-row items-center justify-center">
      <img
        className="relative w-[100px] h-[100px] object-cover"
        alt=""
        src="/star-1@2x.png"
      />
    </div>
  );
});

export default ImageCardStar;
