import React, { Fragment } from "react";
import groupsData from "../data/groupsData";
import teamsData from "../data/teamsData";
import teamResults from "../functions/teamResults";
import { useWindowSize } from "@uidotdev/usehooks";
import { RiCheckboxCircleFill, RiCloseCircleFill } from "react-icons/ri";
import { BsFillDashCircleFill } from "react-icons/bs";

const teamStats = teamsData.map((team) => ({
  id: team.id,
  name: team.name,
  ...teamResults(team.id),
}));

console.log(teamStats);

//groupName: "Group A",
//teams: [1, 5, 9, 13], // Insert the IDs of teams for Group A

const groupStandings = groupsData.map((group) => ({
  //this function is not my logic and need to understand it :))
  ...group,
  teams: [...group.teams].sort((a, b) => {
    const teamA = teamStats[a - 1];
    const teamB = teamStats[b - 1];

    // Sort by wins first
    if (teamB.points !== teamA.points) {
      return teamB.points - teamA.points;
    }

    // If wins are tied, sort by goal difference
    return teamB.goalDifference - teamA.goalDifference;
  }),
}));

console.log(groupStandings);

function lastXResults(results, counterMax) {
  const elements = [];
  for (let i = 0; i < counterMax && i < results.length; i++) {
    if (results[results.length - 1 - i] === "W") {
      elements.push(
        <RiCheckboxCircleFill
          key={i + 100}
          className="text-green-600 text-[18px] bg-transparent mr-0.5"
        />
      );
    } else if (results[results.length - 1 - i] === "L") {
      elements.push(
        <RiCloseCircleFill
          key={i + 100}
          className="text-red-500 text-[18px] bg-transparent mr-0.5"
        />
      );
    } else {
      elements.push(
        <BsFillDashCircleFill
          key={i + 100}
          className="text-slate-400 text-[15px] bg-transparent mr-1"
        />
      );
    }
  }
  return elements;
}

function Standings({ darkTheme }) {
  const windowSize = useWindowSize();
  return (
    <div>
      <div className="custom-bg">
        <div className="container mx-auto md:px-3">
          <h1 className="text-3xl font-bold pb-7 pt-4 px-4 md:px-0">
            Standings
          </h1>
        </div>
      </div>
      <div className={darkTheme ? "custom-bg" : "bg-[#f1f3f8]"}>
        <div className="container mx-auto">
          <div className="py-4 px-3">
            {windowSize.width > 650
              ? groupStandings.map((group, index) => (
                  <div
                    key={index}
                    className="mt-2 p-3 mb-4 bg-white text-black rounded"
                  >
                    <h1 className="text-lg font-medium">{group.groupName}</h1>
                    <div className="grid grid-cols-12 text-center items-center gap-y-1 font-semibold">
                      <div className="text-xs py-4 col-start-3">
                        <p>Played</p>
                      </div>
                      <div className="text-xs py-4 col-start-4">
                        <p>Won</p>
                      </div>
                      <div className="text-xs py-4 col-start-5">
                        <p>Drawn</p>
                      </div>
                      <div className="text-xs py-4 col-start-6">
                        <p>Lost</p>
                      </div>
                      <div className="text-xs py-4 col-start-7">
                        <p>For</p>
                      </div>
                      <div className="text-xs py-4 col-start-8">
                        <p>Against</p>
                      </div>
                      <div className="text-xs py-4 col-start-9">
                        <p>Goal diff.</p>
                      </div>
                      <div className="text-xs py-4 col-start-10">
                        <p>Points</p>
                      </div>
                      <div className="text-xs py-4 col-start-11 col-span-2">
                        <p>Form</p>
                      </div>
                      {group.teams.map((team, index) => {
                        return (
                          <Fragment key={teamStats[team - 1].id + 10}>
                            <div className="col-start-1 col-span-2 text-start text-xs">
                              <div className="flex space-x-1.5 items-center">
                                <p className="font-semibold px-1 text-sm">
                                  {index + 1}
                                </p>
                                <img
                                  className="h-7"
                                  src={teamsData[team - 1].logo}
                                  alt="logo"
                                />
                                <p className="font-medium text-[10px] md:text-xs">
                                  {teamStats[team - 1].name}
                                </p>
                              </div>
                            </div>
                            <div className="col-start-3 col-span-1 font-normal text-xs">
                              <p>{teamStats[team - 1].played}</p>
                            </div>
                            <div className="col-start-4 col-span-1 font-normal text-xs">
                              <p>{teamStats[team - 1].wins}</p>
                            </div>
                            <div className="col-start-5 col-span-1 font-normal text-xs">
                              <p>{teamStats[team - 1].draws}</p>
                            </div>
                            <div className="col-start-6 col-span-1 font-normal text-xs">
                              <p>{teamStats[team - 1].losses}</p>
                            </div>
                            <div className="col-start-7 col-span-1 font-normal text-xs">
                              <p>{teamStats[team - 1].goalsScored}</p>
                            </div>
                            <div className="col-start-8 col-span-1 font-normal text-xs">
                              <p>{teamStats[team - 1].goalsAgainst}</p>
                            </div>
                            <div className="col-start-9 col-span-1 font-normal text-xs">
                              <p>{teamStats[team - 1].goalDifference}</p>
                            </div>
                            <div className="col-start-10 col-span-1 font-normal text-xs">
                              <p>{teamStats[team - 1].points}</p>
                            </div>
                            <div className="col-start-11 col-span-2 font-normal text-xs">
                              <div className="flex items-center justify-center">
                                {lastXResults(
                                  teamStats[team - 1].latestResults,
                                  5
                                )}
                              </div>
                            </div>
                            <div className="col-span-12 border-b my-3"></div>
                          </Fragment>
                        );
                      })}
                    </div>
                  </div>
                ))
              : groupStandings.map((group, index) => (
                  <div
                    key={index}
                    className="p-3 mb-4  bg-white text-black rounded"
                  >
                    <h1 className="text-lg font-medium">{group.groupName}</h1>
                    <div className="grid grid-cols-8 text-[11px] text-center items-center gap-y-1 font-medium">
                      <div className="py-4 col-start-4 text-[10px]">
                        <p>Played</p>
                      </div>
                      <div className="py-4 col-start-5 text-[10px] leading-3">
                        <p>GD</p>
                      </div>
                      <div className="py-4 col-start-6 text-[10px]">
                        <p>Points</p>
                      </div>
                      <div className="py-4 col-start-7 col-span-2 text-[10px]">
                        <p>Form</p>
                      </div>
                      {group.teams.map((team, index) => {
                        return (
                          <Fragment key={teamStats[team - 1].id + 10}>
                            <div className="col-start-1 col-span-3 text-start text-xs">
                              <div className="flex space-x-1.5 items-center">
                                <p className="font-semibold px-1 text-sm">
                                  {index + 1}
                                </p>
                                <img
                                  className="h-7"
                                  src={teamsData[team - 1].logo}
                                  alt="logo"
                                />
                                <p className="font-medium text-[10px] md:text-xs">
                                  {teamStats[team - 1].name}
                                </p>
                              </div>
                            </div>
                            <div className="col-start-4 col-span-1 font-normal text-xs">
                              <p>{teamStats[team - 1].played}</p>
                            </div>
                            <div className="col-start-5 col-span-1 font-normal text-xs">
                              <p>{teamStats[team - 1].goalDifference}</p>
                            </div>
                            <div className="col-start-6 col-span-1 font-normal text-xs">
                              <p>{teamStats[team - 1].points}</p>
                            </div>
                            <div className="col-start-7 col-span-2 font-normal text-xs">
                              <div className="flex items-center justify-center">
                                {lastXResults(
                                  teamStats[team - 1].latestResults,
                                  3
                                )}
                              </div>
                            </div>
                            <div className="col-span-8 border-b my-3"></div>
                          </Fragment>
                        );
                      })}
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Standings;
