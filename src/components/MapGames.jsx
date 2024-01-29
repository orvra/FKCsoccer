import React from "react";
import schedule from "../data/sched2";
import dayjs from "dayjs";
import teamsData from "../data/teamsData";
import results from "../data/results";
import { Link } from "react-router-dom";

function MapGames({ games }) {
  return (
    <div className="space-y-6">
      {games.map((gameDay, index) => {
        return (
          <div key={index} className="space-y-2">
            <h2>{dayjs(gameDay).format("dddd D MMMM YYYY")}</h2>
            <p className="text-gray-600 text-xs">Group stage</p>
            <div className="grid gap-2 md:grid-cols-2 ">
              {schedule
                .filter((game) => {
                  return game.date === gameDay;
                })
                .map((gameOnDate, index) => {
                  return (
                    <Link
                      key={index + 20}
                      to={`/matches/${gameOnDate.id}--${teamsData[
                        gameOnDate.homeTeam - 1
                      ].name.replace(/\s/g, "-")}-${teamsData[
                        gameOnDate.awayTeam - 1
                      ].name.replace(/\s/g, "-")}`}
                    >
                      <div className="pb-3 pt-2 px-3 h-[110px] bg-white rounded border border-slate-200 grid grid-cols-3 hover:cursor-pointer">
                        <div className="space-y-2 col-span-2">
                          <p className="text-gray-500 text-[11px]">
                            Group {gameOnDate.group}
                          </p>
                          <div className="flex justify-between">
                            <div className="flex items-center space-x-2">
                              <img
                                className="h-7"
                                src={teamsData[gameOnDate.homeTeam - 1].logo}
                                alt="logo"
                              />
                              <h3 className="font-medium">
                                {teamsData[gameOnDate.homeTeam - 1].name}
                              </h3>
                            </div>
                            {results[gameOnDate.id - 1].homeTeamScore !==
                            "TBD" ? (
                              <p className="font-medium pr-4">
                                {results[gameOnDate.id - 1].homeTeamScore}
                              </p>
                            ) : null}
                          </div>

                          <div className="flex justify-between">
                            <div className="flex space-x-1.5">
                              <img
                                className="h-7"
                                src={teamsData[gameOnDate.awayTeam - 1].logo}
                                alt="logo"
                              />
                              <h3 className="font-medium">
                                {teamsData[gameOnDate.awayTeam - 1].name}
                              </h3>
                            </div>
                            {results[gameOnDate.id - 1].awayTeamScore !==
                            "TBD" ? (
                              <p className="font-medium pr-4">
                                {results[gameOnDate.id - 1].awayTeamScore}
                              </p>
                            ) : null}
                          </div>
                        </div>
                        <div className="text-sm border-l flex flex-col justify-center items-center space-y-0.5 pt-3">
                          {dayjs(
                            `${gameOnDate.date} ${gameOnDate.time}`
                          ).isAfter(dayjs()) ? (
                            <p>{gameOnDate.time}</p>
                          ) : (
                            <p>Full time</p>
                          )}
                          <p className="text-[13px] font-medium custom-link">
                            See more
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MapGames;
