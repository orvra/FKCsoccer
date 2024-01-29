import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function HomeHero() {
  return (
    <div className="py-6 grid grid-cols-1 lg:grid-cols-3 gap-x-4">
      <div className="relative group aspect-video rounded overflow-hidden border border-cyan-700 lg:col-span-2">
        <Link to="/register">
          <img
            className=" transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110"
            src="/FKCsoccer/images/hero/game2.jpg"
            alt="soccer"
          />
          <div className="flex absolute bottom-0 left-0 pb-8 pl-8 font-medium text-2xl sm:text-3xl">
            <h2>Register</h2>
            <IoIosArrowForward className="self-end group-hover:text-red-400" />
          </div>
        </Link>
      </div>

      <div className="lg:p-2 lg:bg-gradient-to-t from-blue-950 from-1% via-[#1434A4] to-[#1434A4] lg:rounded lg:border lg:border-cyan-700 lg:flex lg:flex-col">
        <div className="pt-4 pb-2 lg:pt-0 lg:pb-2">
          <h1 className="text-2xl font-semibold lg:text-lg">Latest News</h1>
        </div>

        <div className="space-y-2">
          <Link to="/who-we-are">
            <div className="group flex items-center space-x-4 ">
              <div className="flex justify-center items-center aspect-video w-[30%] rounded overflow-hidden bg-black">
                <img
                  className="w-1/2 transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110"
                  src="/FKCsoccer/images/logo/FKC_v3.png"
                />
              </div>
              <h2 className="text-sm font-medium">Who we are</h2>
            </div>
          </Link>

          <div className="custom-border"></div>

          <Link to="/game-rules">
            <div className="group flex items-center space-x-4">
              <div className="aspect-video w-[30%] rounded overflow-hidden">
                <img
                  className="w-full transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110"
                  src="/FKCsoccer/images/hero/rules2_sm.jpg"
                />
              </div>
              <h2 className="text-sm font-medium">Game rules</h2>
            </div>
          </Link>

          <div className="custom-border"></div>

          <Link to="/tournament-format">
            <div className="group flex items-center space-x-4">
              <div className="aspect-video w-[30%] rounded overflow-hidden">
                <img
                  className="w-full transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110"
                  src="/FKCsoccer/images/hero/pitches_sm.jpg"
                />
              </div>
              <h2 className="text-sm font-medium">Tournament format</h2>
            </div>
          </Link>

          <div className="custom-border"></div>

          <Link to="prize-money">
            <div className="group flex items-center space-x-4">
              <div className="aspect-video w-[30%] rounded overflow-hidden">
                <img
                  className="w-full transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110"
                  src="/FKCsoccer/images/hero/ether_sm.jpg"
                />
              </div>
              <h2 className="text-sm font-medium">Prize money</h2>
            </div>
          </Link>
          <div className="custom-border"></div>

          <Link to="eligibility">
            <div className="group flex items-center space-x-4">
              <div className="aspect-video w-[30%] rounded overflow-hidden">
                <img
                  className="w-full transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110"
                  src="/FKCsoccer/images/hero/eligibility_sm.jpg"
                />
              </div>
              <h2 className="text-sm font-medium">Eligibility</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
