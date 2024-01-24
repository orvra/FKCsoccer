import React from "react";
import schedule from "../data/sched2";
import dayjs from "dayjs";
import teamsData from "../data/teamsData";
import results from "../data/results";
import MapGames from "./MapGames";

//DISPLAY
const mapDates = schedule.map((game, index) => {
  return game.date;
});

const sortedDates = mapDates
  .filter((date, index) => {
    return mapDates.indexOf(date) === index;
  })
  .sort((date1, date2) => {
    return new Date(date1) - new Date(date2);
  });

const currentDate = dayjs();

//DISPLAY NEXT MATCHDAY GAMES
const futureGames = schedule.filter((game) => {
  return dayjs(game.date) > currentDate;
});

const futureDates = futureGames
  .filter((game) => {
    return game.matchDay === futureGames[0].matchDay;
  })
  .map((game) => {
    return game.date;
  });

const futureDatesToDisplay = futureDates.filter((date, index) => {
  return futureDates.indexOf(date) === index;
});

const pastGames = schedule.filter((game) => {
  return dayjs(game.date) < currentDate;
});

//DISPLAY PREV MATCHDAY RESULTS
const pastDates = pastGames
  .filter((game) => {
    return game.matchDay === pastGames[pastGames.length - 1].matchDay;
  })
  .map((game) => {
    return game.date;
  });

const pastDatesToDisplay = pastDates.filter((date, index) => {
  return pastDates.indexOf(date) === index;
});

function HomeSchedule() {
  return (
    <div className="text-black pb-8">
      <h1 className="font-bold text-3xl tracking-tighter pt-6 pb-4">
        Latest Results
      </h1>
      <MapGames games={pastDatesToDisplay} />
      <h1 className="font-bold text-3xl tracking-tighter pt-8 pb-4">
        Upcoming Matches
      </h1>
      <MapGames games={futureDatesToDisplay} />
    </div>
  );
}

export default HomeSchedule;
