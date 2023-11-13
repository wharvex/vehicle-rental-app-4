import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import ReservationFormContainer from "../components/reservation-form-container";

const Home: NextPage = () => {
  const router = useRouter();

  const onImageHeaderPageLogoClick = useCallback(() => {
    router.push("/index");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[1664px] overflow-hidden flex flex-col items-center justify-start">
      <ReservationFormContainer />
    </div>
  );
};

export default Home;
