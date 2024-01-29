import teamResults from "./teamResults";
import groupsData from "../data/groupsData";
import teamsData from "../data/teamsData";

const basicTeamStats = teamsData.map((team) => ({
  id: team.id,
  name: team.name,
  ...teamResults(team.id),
}));

const groupStandings = groupsData.map((group) => ({
  //this function is not my logic and need to understand it :))
  ...group,
  teams: [...group.teams].sort((a, b) => {
    const teamA = basicTeamStats[a - 1];
    const teamB = basicTeamStats[b - 1];

    // Sort by wins first
    if (teamB.points !== teamA.points) {
      return teamB.points - teamA.points;
    }

    // If wins are tied, sort by goal difference
    return teamB.goalDifference - teamA.goalDifference;
  }),
}));

function checkRank(team) {
  for (const group of groupStandings) {
    for (let i = 0; i < group.teams.length; i++) {
      if (group.teams[i] === team) {
        return i + 1;
      }
    }
  }
  // Return a default value if the team wasn't found
  return -1;
}
function teamStatistics(team) {
  const teamStatistics = {
    ...basicTeamStats[team - 1],
    rank: checkRank(team),
    avgScored:
      basicTeamStats[team - 1].goalsScored / basicTeamStats[team - 1].played,
    avgAgainst:
      basicTeamStats[team - 1].goalsAgainst / basicTeamStats[team - 1].played,
  };

  return teamStatistics;
}

export default teamStatistics;
