import React from "react";
import schedule from "../data/sched2";
import teamsData from "../data/teamsData";
import results from "../data/results";
import dayjs from "dayjs";

function MatchHero({ matchId = 1, result = 1 }) {
  return (
    <div className="w-full h-[250px] bg-gradient-to-b  from-blue-500 to-indigo-600">
      <div className="container mx-auto flex flex-col justify-center items-center h-full w-full">
        <p className="flex text-xs opacity-80">
          {dayjs(schedule[matchId - 1].date).format("DD MMMM")} - Matchday{" "}
          {schedule[matchId - 1].matchDay} - Group {schedule[matchId - 1].group}
        </p>
        <div className="border-0 border-t border-grey-200 opacity-20 w-full my-4"></div>
        <p className="flex text-xs opacity-60 pb-4">
          {schedule[matchId - 1].stadium}
        </p>
        <div className="flex w-full items-center">
          <div className="flex-1 flex space-x-2 justify-end items-center md:space-x-3">
            <h1 className="text-sm font-medium md:text-3xl md:font-bold">
              {teamsData[schedule[matchId - 1].homeTeam - 1].name}
            </h1>
            <img
              src={teamsData[schedule[matchId - 1].homeTeam - 1].logo}
              alt="homeTeam"
              className="h-8 md:h-11"
            />
          </div>
          <h1 className="px-3 font-medium md:px-5">
            {schedule[matchId - 1].time}
          </h1>
          <div className="flex-1 flex space-x-2 items-center md:space-x-3">
            <img
              src={teamsData[schedule[matchId - 1].awayTeam - 1].logo}
              alt="awayTeam"
              className="h-8 md:h-11"
            />
            <h1 className="text-sm font-medium md:text-3xl md:font-bold">
              {teamsData[schedule[matchId - 1].awayTeam - 1].name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchHero;
