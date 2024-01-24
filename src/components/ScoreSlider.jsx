import React, { Fragment, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dayjs from "dayjs";
import schedule from "../data/sched2";
import teamsData from "../data/teamsData";

function ScoreSlider() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider variable-width",
    variableWidth: true,
    arrows: true,
    swipeToSlide: true,
  };

  const currentDate = dayjs();
  const filteredSchedule = schedule.filter((game) => {
    return dayjs(game.date) > currentDate;
  });
  const gamesToDisplay = filteredSchedule.filter((game) => {
    return game.matchDay === filteredSchedule[0].matchDay;
  });
  return (
    <div className="">
      <Slider {...settings}>
        {gamesToDisplay.map((game, index) => (
          <Fragment key={index}>
            <div
              style={{ width: 150 }}
              className="flex flex-col bg-indigo-900 h-[80px] px-2 py-1 rounded justify-center text-[11.5px] light-border"
            >
              <h3 className="text-[10.5px] opacity-40 mb-2">
                {`${dayjs("2024-01-27").format("D MMM")}, ${game.time}`}
              </h3>
              <div className="space-y-0.5">
                <div className="flex space-x-1 items-center">
                  <img
                    className="h-3.5"
                    src={teamsData[game.homeTeam - 1].logo}
                  />
                  <h3>{teamsData[game.homeTeam - 1].name}</h3>
                </div>
                <div className="flex space-x-1 items-center">
                  <img
                    className="h-3.5"
                    src={teamsData[game.awayTeam - 1].logo}
                  />
                  <h3>{teamsData[game.awayTeam - 1].name}</h3>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </Slider>
    </div>
  );
}

export default ScoreSlider;
