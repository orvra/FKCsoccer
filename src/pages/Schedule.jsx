import React from "react";
import schedule from "../data/sched2";
import MapGames from "../components/MapGames";

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

function Schedule() {
  return (
    <div>
      <div className="container mx-auto px-3">
        <h1 className="bg-base-100 text-3xl font-bold pb-7 pt-4">
          Schedule & Results
        </h1>
      </div>
      <div className="bg-[#f1f3f8] text-black pt-6">
        <div className="container mx-auto px-3">
          <MapGames games={sortedDates} />
        </div>
      </div>
    </div>
  );
}

export default Schedule;
