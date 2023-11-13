import type { NextPage } from "next";
import { memo } from "react";
import MainContentGeneric from "./main-content-generic";

const Main: NextPage = memo(() => {
  return (
    <main className="flex flex-col items-center justify-start gap-[20px] self-stretch flex-1">
      <MainContentGeneric
        text="Generic Main Content"
        mainContentGenericHeight="137px"
        mainContentGenericFlex="unset"
        mainContentGenericBackground="unset"
      />
      <MainContentGeneric
        text="Generic Main Content"
        mainContentGenericHeight="137px"
        mainContentGenericFlex="unset"
        mainContentGenericBackground="unset"
      />
      <MainContentGeneric
        text="Generic Main Content"
        mainContentGenericHeight="137px"
        mainContentGenericFlex="unset"
        mainContentGenericBackground="unset"
      />
    </main>
  );
});

export default Main;
