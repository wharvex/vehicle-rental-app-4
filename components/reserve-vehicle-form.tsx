import type { NextPage } from "next";
import { memo } from "react";
import MainContentHero from "./main-content-hero";
import MainContentCardsGroup from "./main-content-cards-group";
import MainContentGeneric from "./main-content-generic";

const ReserveVehicleForm: NextPage = memo(() => {
  return (
    <main className="self-stretch flex-1 flex flex-col items-center justify-start gap-[20px]">
      <MainContentHero
        text="Albany"
        text1="Rhinebeck"
        text2="Poughkeepsie"
        text3="White Plains"
        text4="Go!"
        buttonSmallSmallBackgroundColor="#63ff55"
      />
      <MainContentCardsGroup
        star1="/carsportoutline-1@2x.png"
        text="Browse Vehicles"
        star11="/calendar-11@2x.png"
        text1="Choose Dates"
        imageCardStarAlignItems="flex-start"
        imageCardStarJustifyContent="flex-start"
      />
      <MainContentGeneric
        mainContentGenericHeight="unset"
        mainContentGenericFlex="1"
        mainContentGenericBackground="linear-gradient(180deg, #ebf5ff, #ebf5ff 0.01%, #92c9f9)"
      />
    </main>
  );
});

export default ReserveVehicleForm;
