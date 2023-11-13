import type { NextPage } from "next";
import { memo, useCallback } from "react";
import { useRouter } from "next/router";
import HeaderPage from "./header-page";
import ReserveVehicleForm from "./reserve-vehicle-form";
import FooterPage from "./footer-page";

const ReservationFormContainer: NextPage = memo(() => {
  const router = useRouter();

  const onImageHeaderPageLogoClick = useCallback(() => {
    router.push("/index");
  }, [router]);

  return (
    <div className="flex-1 bg-aliceblue w-[1440px] overflow-y-auto flex flex-col items-start justify-start">
      <HeaderPage
        image="/image2@2x.png"
        image1="/image3@2x.png"
        headerPageBoxSizing="border-box"
        headerPageBackgroundImage="url('/header--page1@3x.png')"
        headerPageFlexShrink="0"
        imageHeaderPageLogoCursor="pointer"
        headerPageBoxSizing="border-box"
        headerPageCursor="pointer"
        onImageHeaderPageLogoClick={onImageHeaderPageLogoClick}
      />
      <ReserveVehicleForm />
      <FooterPage
        footerPageBackgroundImage="url('/footer--page1@3x.png')"
        footerPageFlexShrink="0"
      />
    </div>
  );
});

export default ReservationFormContainer;
