import React, { Fragment } from "react";
import MatchHero from "../components/MatchHero";
import { useParams } from "react-router-dom";
import results from "../data/results";
import teamsData from "../data/teamsData";
import teamResults from "../functions/teamResults";
import schedule from "../data/sched2";
import FormGuide from "../components/FormGuide";

function Match() {
  const { matchId } = useParams();
  console.log(matchId);
  //const matchId = parseInt(paramId.match(/^\d+/), 10);
  const parsedId = parseInt(matchId.match(/^\d+/));
  const homeTeamStats = {
    id: schedule[parsedId - 1].homeTeam,
    ...teamResults(schedule[parsedId - 1].homeTeam),
  };
  const awayTeamStats = {
    id: schedule[parsedId - 1].awayTeam,
    ...teamResults(schedule[parsedId - 1].awayTeam),
  };

  console.log(awayTeamStats);
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
            <div className="grid grid-cols-3 w-[95%] max-w-[650px] border border-gray-300 rounded base-100 pt-3 my-2 text-sm bg-white text-center grid-container">
              <div className="flex pb-2 justify-center space-x-2 border-b">
                <h2 className="font-medium">
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
                <h2 className="font-medium">
                  {teamsData[awayTeamStats.id - 1].name}
                </h2>
              </div>
              <div className="row-start-2 col-start-2 py-2">Position</div>
              <div className="row-start-2 col-start-1 py-2">Position</div>
              <div className="row-start-2 col-start-3 py-2">Position</div>
              <div className="row-start-3 col-start-2 py-2">Wins</div>
              <div className="row-start-3 col-start-1 py-2">
                {homeTeamStats.wins}
              </div>
              <div className="row-start-3 col-start-3 py-2">
                {awayTeamStats.wins}
              </div>
              <div className="row-start-4 col-start-2 py-2">Draws</div>
              <div className="row-start-4 col-start-1 py-2">
                {homeTeamStats.draws}
              </div>
              <div className="row-start-4 col-start-3 py-2">
                {awayTeamStats.draws}
              </div>
              <div className="row-start-5 col-start-2 py-2">Losses</div>
              <div className="row-start-5 col-start-1 py-2">
                {homeTeamStats.losses}
              </div>
              <div className="row-start-5 col-start-3 py-2">
                {awayTeamStats.losses}
              </div>
              <div className="row-start-6 col-start-2 py-2">
                Goal difference
              </div>
              <div className="row-start-6 col-start-1 py-2">
                {homeTeamStats.goalDifference}
              </div>
              <div className="row-start-6 col-start-3 py-2">
                {awayTeamStats.goalDifference}
              </div>
              <div className="row-start-7 col-start-2 py-2">
                Avg goals scored per match
              </div>
              <div className="row-start-7 col-start-1 py-2">
                {homeTeamStats.goalsScored / homeTeamStats.played}
              </div>
              <div className="row-start-7 col-start-3 py-2">
                {awayTeamStats.goalsScored / awayTeamStats.played}
              </div>
              <div className="row-start-8 col-start-2 py-2">
                Avg goals conceded per match
              </div>
              <div className="row-start-8 col-start-1 py-2">
                {homeTeamStats.goalsAgainst / homeTeamStats.played}
              </div>
              <div className="row-start-8 col-start-3 py-2">
                {awayTeamStats.goalsAgainst / awayTeamStats.played}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Match;
