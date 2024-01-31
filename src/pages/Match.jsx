import React, { Fragment } from "react";
import MatchHero from "../components/MatchHero";
import { useParams } from "react-router-dom";

import teamsData from "../data/teamsData";

import schedule from "../data/sched2";
import FormGuide from "../components/FormGuide";
import teamStatistics from "../functions/teamStatistics";

function Match() {
  const { matchId } = useParams();
  console.log(matchId);
  //const matchId = parseInt(paramId.match(/^\d+/), 10);
  const parsedId = parseInt(matchId.match(/^\d+/));
  const homeTeamStats = {
    id: schedule[parsedId - 1].homeTeam,
    ...teamStatistics(schedule[parsedId - 1].homeTeam),
  };
  const awayTeamStats = {
    id: schedule[parsedId - 1].awayTeam,
    ...teamStatistics(schedule[parsedId - 1].awayTeam),
  };

  return (
    <div>
      <MatchHero matchId={parsedId} />

      <div className="bg-[#f1f3f8]">
        <div className="container mx-auto md:px-3">
          <div className="flex flex-col items-center">
            <h1 className="pt-8 pb-5 font-bold text-3xl base-100">
              Form Guide
            </h1>
            <FormGuide
              homeTeamStats={homeTeamStats}
              awayTeamStats={awayTeamStats}
            />
            <h1 className="pt-8 pb-5 font-bold text-3xl base-100">
              Team Stats
            </h1>
            <div className="grid grid-cols-3 w-[95%] max-w-[650px] border border-gray-300 rounded base-100 pt-3 pb-1 my-2 text-xs bg-white text-center grid-container">
              <div className="flex pb-2 justify-center space-x-2 border-b">
                <h2 className="font-medium text-sm">
                  {teamsData[homeTeamStats.id - 1].name}
                </h2>
                <img
                  className="h-6"
                  src={teamsData[homeTeamStats.id - 1].logo}
                  alt="homeTeam"
                />
              </div>
              <div className="col-start-2 border-b"></div>
              <div className="flex pb-2 justify-center space-x-2 col-start-3 border-b">
                <img
                  className="h-6"
                  src={teamsData[awayTeamStats.id - 1].logo}
                  alt="awayTeam"
                />
                <h2 className="font-medium text-sm">
                  {teamsData[awayTeamStats.id - 1].name}
                </h2>
              </div>
              <div className="row-start-2 col-start-2 py-2">Rank</div>
              <div
                className={
                  homeTeamStats.rank < awayTeamStats.rank
                    ? "row-start-2 col-start-1 py-2 font-bold"
                    : "row-start-2 col-start-1 py-2"
                }
              >
                {homeTeamStats.rank}
              </div>
              <div
                className={
                  awayTeamStats.rank < homeTeamStats.rank
                    ? "row-start-2 col-start-3 py-2 font-bold"
                    : "row-start-2 col-start-3 py-2"
                }
              >
                {awayTeamStats.rank}
              </div>
              <div className="row-start-3 col-start-2 py-2">Wins</div>
              <div
                className={
                  homeTeamStats.wins > awayTeamStats.wins
                    ? "row-start-3 col-start-1 py-2 font-bold"
                    : "row-start-3 col-start-1 py-2"
                }
              >
                {homeTeamStats.wins}
              </div>

              <div
                className={
                  awayTeamStats.wins > homeTeamStats.wins
                    ? "row-start-3 col-start-3 py-2 font-bold"
                    : "row-start-3 col-start-3 py-2"
                }
              >
                {awayTeamStats.wins}
              </div>
              <div className="row-start-4 col-start-2 py-2">Draws</div>
              <div
                className={
                  homeTeamStats.draws > awayTeamStats.draws
                    ? "row-start-4 col-start-1 py-2 font-bold"
                    : "row-start-4 col-start-1 py-2"
                }
              >
                {homeTeamStats.draws}
              </div>
              <div
                className={
                  awayTeamStats.draws > homeTeamStats.draws
                    ? "row-start-4 col-start-3 py-2 font-bold"
                    : "row-start-4 col-start-3 py-2"
                }
              >
                {awayTeamStats.draws}
              </div>

              <div className="row-start-5 col-start-2 py-2">Losses</div>
              <div
                className={
                  homeTeamStats.losses < awayTeamStats.losses
                    ? "row-start-5 col-start-1 py-2 font-bold"
                    : "row-start-5 col-start-1 py-2"
                }
              >
                {homeTeamStats.losses}
              </div>
              <div
                className={
                  awayTeamStats.losses < homeTeamStats.losses
                    ? "row-start-5 col-start-3 py-2 font-bold"
                    : "row-start-5 col-start-3 py-2"
                }
              >
                {awayTeamStats.losses}
              </div>
              <div className="row-start-6 col-start-2 py-2">
                Goal difference
              </div>
              <div
                className={
                  homeTeamStats.goalDifference > awayTeamStats.goalDifference
                    ? "row-start-6 col-start-1 py-2 font-bold"
                    : "row-start-6 col-start-1 py-2"
                }
              >
                {homeTeamStats.goalDifference}
              </div>
              <div
                className={
                  awayTeamStats.goalDifference > homeTeamStats.goalDifference
                    ? "row-start-6 col-start-3 py-2 font-bold"
                    : "row-start-6 col-start-3 py-2"
                }
              >
                {awayTeamStats.goalDifference}
              </div>
              <div className="row-start-7 col-start-2 py-2">
                Avg goals scored per match
              </div>
              <div
                className={
                  homeTeamStats.avgScored > awayTeamStats.avgScored
                    ? "row-start-7 col-start-1 py-2 font-bold"
                    : "row-start-7 col-start-1 py-2"
                }
              >
                {homeTeamStats.avgScored.toFixed(1)}
              </div>
              <div
                className={
                  awayTeamStats.avgScored > homeTeamStats.avgScored
                    ? "row-start-7 col-start-3 py-2 font-bold"
                    : "row-start-7 col-start-3 py-2"
                }
              >
                {awayTeamStats.avgScored.toFixed(1)}
              </div>
              <div className="row-start-8 col-start-2 py-2">
                Avg goals conceded per match
              </div>
              <div
                className={
                  homeTeamStats.avgAgainst < awayTeamStats.avgAgainst
                    ? "row-start-8 col-start-1 py-2 font-bold"
                    : "row-start-8 col-start-1 py-2"
                }
              >
                {homeTeamStats.avgAgainst.toFixed(1)}
              </div>
              <div
                className={
                  awayTeamStats.avgAgainst < homeTeamStats.avgAgainst
                    ? "row-start-8 col-start-3 py-2 font-bold"
                    : "row-start-8 col-start-3 py-2"
                }
              >
                {awayTeamStats.avgAgainst.toFixed(1)}
              </div>
              <div className="col-span-3 col-start-1 row-start-3 border-t border-gray-200"></div>
              <div className="col-span-3 col-start-1 row-start-4 border-t border-gray-200"></div>
              <div className="col-span-3 col-start-1 row-start-5 border-t border-gray-200"></div>
              <div className="col-span-3 col-start-1 row-start-6 border-t border-gray-200"></div>
              <div className="col-span-3 col-start-1 row-start-7 border-t border-gray-200"></div>
              <div className="col-span-3 col-start-1 row-start-8 border-t border-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Match;
