import schedule from "../data/sched2.js";
import results from "../data/results.js";
import teamsData from "../data/teamsData.js";

function teamResults(team) {
  let played = 0;
  let goalsScored = 0;
  let goalsAgainst = 0;
  let wins = 0;
  let draws = 0;
  let losses = 0;
  let latestResults = "";
  let detailedResults = [];

  results.forEach((result) => {
    if (
      result.awayTeamScore !== "TBD" &&
      (schedule[result.id - 1].homeTeam === team ||
        schedule[result.id - 1].awayTeam === team)
    ) {
      played++;
      if (schedule[result.id - 1].homeTeam === team) {
        goalsScored += result.homeTeamScore;
        goalsAgainst += result.awayTeamScore;
        if (result.homeTeamScore > result.awayTeamScore) {
          wins++;
          latestResults += "W";
          detailedResults.push({
            result: "W",
            opponentId: schedule[result.id - 1].awayTeam,
            score: `${result.homeTeamScore}-${result.awayTeamScore}`,
            homeOrAway: "H",
          });
        } else if (result.homeTeamScore < result.awayTeamScore) {
          losses++;
          latestResults += "L";
          detailedResults.push({
            result: "L",
            opponentId: schedule[result.id - 1].awayTeam,
            score: `${result.homeTeamScore}-${result.awayTeamScore}`,
            homeOrAway: "H",
          });
        } else {
          draws++;
          latestResults += "D";
          detailedResults.push({
            result: "D",
            opponentId: schedule[result.id - 1].awayTeam,
            score: `${result.homeTeamScore}-${result.awayTeamScore}`,
            homeOrAway: "H",
          });
        }
      } else if (schedule[result.id - 1].awayTeam === team) {
        goalsScored += result.awayTeamScore;
        goalsAgainst += result.homeTeamScore;
        if (result.homeTeamScore < result.awayTeamScore) {
          wins++;
          latestResults += "W";
          detailedResults.push({
            result: "W",
            opponentId: schedule[result.id - 1].homeTeam,
            score: `${result.awayTeamScore}-${result.homeTeamScore}`,
            homeOrAway: "A",
          });
        } else if (result.homeTeamScore > result.awayTeamScore) {
          losses++;
          latestResults += "L";
          detailedResults.push({
            result: "L",
            opponentId: schedule[result.id - 1].homeTeam,
            score: `${result.awayTeamScore}-${result.homeTeamScore}`,
            homeOrAway: "A",
          });
        } else {
          draws++;
          latestResults += "D";
          detailedResults.push({
            result: "D",
            opponentId: schedule[result.id - 1].homeTeam,
            score: `${result.awayTeamScore}-${result.homeTeamScore}`,
            homeOrAway: "A",
          });
        }
      }
    }
  });

  const goalDifference = goalsScored - goalsAgainst;
  const points = wins * 3 + draws;
  return {
    played,
    wins,
    draws,
    losses,
    goalsScored,
    goalsAgainst,
    goalDifference,
    points,
    latestResults,
    detailedResults,
  };
}
export default teamResults;
