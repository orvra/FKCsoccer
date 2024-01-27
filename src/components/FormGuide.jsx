import React, { Fragment } from "react";
import teamsData from "../data/teamsData";

function FormGuide({ homeTeamStats, awayTeamStats }) {
  return (
    <div className="grid grid-cols-7 sm:grid-cols-5 w-[95%] max-w-[650px] border border-gray-300 rounded base-100 pt-3 my-2 text-sm bg-white">
      <div className="col-start-1 col-span-3 sm:col-span-2 row-start-1 justify-self-end text-right pb-2">
        <div className="flex space-x-2">
          <h2 className="font-medium">
            {teamsData[homeTeamStats.id - 1].name}
          </h2>
          <img
            className="h-6"
            src={teamsData[homeTeamStats.id - 1].logo}
            alt="homeTeam"
          />
        </div>
      </div>
      {homeTeamStats.detailedResults.map((result, index) => {
        return (
          <Fragment key={index + 10}>
            <div className="translate-x-2 min-[400px]:translate-x-0 flex space-x-1 text-xs items-center col-start-1 col-span-3 w-full border-t border-gray-300 justify-end py-3 sm:col-span-2  sm:space-x-2 sm:text-sm">
              <p>({result.homeOrAway})</p>
              <p>{teamsData[result.opponentId - 1].name}</p>
              <img
                className="h-4"
                src={teamsData[result.opponentId - 1].logo}
                alt="logo"
              />
              <p className="tracking-wider font-medium w-8 text-center py-0.5 rounded bg-blue-950 text-white">
                {result.score}
              </p>
              <p
                className={
                  result.result === "W"
                    ? "bg-green-500 py-0.5 px-[4.5px] mr-0.5  rounded-full text-xs text-white"
                    : result.result === "L"
                    ? "bg-red-500 py-0.5 px-[7px] mr-0.5  rounded-full text-xs text-white"
                    : "bg-gray-400 py-0.5 px-[5.5px] mr-0.5  rounded-full text-xs text-white"
                }
              >
                {result.result}
              </p>
            </div>
            <div className="col-span-1 col-start-4 sm:col-start-3 border-t border-gray-300"></div>
          </Fragment>
        );
      })}
      <div className="col-start-5 sm:col-start-4 col-span-3 sm:col-span-2 row-start-1 row-span-1">
        <div className="flex space-x-2">
          <img
            className="h-6"
            src={teamsData[awayTeamStats.id - 1].logo}
            alt="awayTeam"
          />
          <h2 className="font-medium">
            {teamsData[awayTeamStats.id - 1].name}
          </h2>
        </div>
      </div>
      {awayTeamStats.detailedResults.map((result, index) => {
        return (
          <div
            key={index + 20}
            className={`-translate-x-2 min-[400px]:translate-x-0 flex space-x-1 items-center text-xs col-start-5 sm:col-start-4 col-span-3 sm:col-span-2 border-t border-gray-300 sm:space-x-2 sm:text-sm`}
            style={{ gridRowStart: index + 2 }}
          >
            <p
              className={
                result.result === "W"
                  ? "bg-green-500 py-0.5 px-[4.5px] mr-0.5  rounded-full text-xs text-white"
                  : result.result === "L"
                  ? "bg-red-500 py-0.5 px-[7px] mr-0.5  rounded-full text-xs text-white"
                  : "bg-gray-400 py-0.5 px-[5.5px] mr-0.5  rounded-full text-xs text-white"
              }
            >
              {result.result}
            </p>
            <p className="tracking-wider font-medium w-8 text-center py-0.5 rounded bg-blue-950 text-white">
              {result.score}
            </p>
            <img
              className="h-4"
              src={teamsData[result.opponentId - 1].logo}
              alt="logo"
            />
            <p>{teamsData[result.opponentId - 1].name}</p>
            <p>({result.homeOrAway})</p>
          </div>
        );
      })}
    </div>
  );
}

export default FormGuide;
