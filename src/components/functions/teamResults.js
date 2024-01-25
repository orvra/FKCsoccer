function teamResults(team) {
  let played = 0;
  let goalsScored = 0;
  let goalsAgainst = 0;
  let wins = 0;
  let draws = 0;
  let losses = 0;
  let latestResults = "";
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
        } else if (result.homeTeamScore < result.awayTeamScore) {
          losses++;
          latestResults += "L";
        } else {
          draws++;
          latestResults += "D";
        }
      } else if (schedule[result.id - 1].awayTeam === team) {
        goalsScored += result.awayTeamScore;
        goalsAgainst += result.homeTeamScore;
        if (result.homeTeamScore < result.awayTeamScore) {
          wins++;
          latestResults += "W";
        } else if (result.homeTeamScore > result.awayTeamScore) {
          losses++;
          latestResults += "L";
        } else {
          draws++;
          latestResults += "D";
        }
      }
    }
  });
}
export default teamResults;
