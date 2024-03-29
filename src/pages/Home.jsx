import React from "react";
import { Link } from "react-router-dom";
import HomeHero from "../components/HomeHero";
import Standings from "./Standings";
import ScoreSlider from "../components/ScoreSlider";
import { TbSoccerField } from "react-icons/tb";
import Schedule from "./Schedule";
import HomeSchedule from "../components/HomeSchedule";

function Home() {
  return (
    <>
      <div className="custom-bg">
        <div className="container mx-auto">
          <div className="flex w-full justify-between items-center py-2">
            <div className="px-3 w-full md:w-[84%] md:px-8">
              <ScoreSlider />
            </div>
            <button className="btn btn-outline btn-accent w-[14%] mr-2 hidden md:block">
              <Link to="/schedule">
                <div className="flex items-center space-x-1 justify-center">
                  <TbSoccerField className="text-[20px] rotate-90" />
                  <p>See all matches</p>
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b  from-blue-500 to-indigo-600">
        <div className="container mx-auto px-3">
          <HomeHero />
        </div>
      </div>
      <div className="pt-8 custom-bg">
        {" "}
        <Standings darkTheme={true} />
      </div>

      <div className="bg-[#f1f3f8]">
        <div className="container mx-auto px-3">
          <HomeSchedule />
        </div>
      </div>
    </>
  );
}

export default Home;
