import React from "react";

function WhoWeAre() {
  return (
    <div className="bg-white pb-20">
      <div className="container mx-auto px-3">
        <h1 className="base-100  text-3xl font-bold pb-7 pt-10 px-4 md:px-0">
          Footy King Championship: Who we are and why we created this league
        </h1>
        <div className="space-y-6">
          <div className="bg-base-100 aspect-video w-full md:w-1/2 overflow-hidden rounded">
            <img
              className="w-full h-full object-scale-down -translate-y-5"
              src="/images/who%20we%20are/FKC_v2.png"
            />
          </div>

          <div className="base-100 font-regular space-y-10">
            <div>
              <p>
                Welcome to the heart of Canadian soccer passion, the Footy King
                Championship (FKC). Here, in the Capital of Canada, we've built
                a league that goes beyond the surface, celebrating the hidden
                gems of our nation's soccer talent. Tired of the limitations of
                traditional Sunday leagues, we envisioned FKC as a platform that
                breaks free from conventions. No longer confined to routine
                matches, FKC stands as a testament to our desire to redefine the
                soccer experience. Our league thrives on innovation, creating a
                creative and highly competetive space for undiscovered talents
                to shine.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">Nurturing Hidden Gems:</h2>
              <p>
                FKC is more than just a league; it's a platform for the unsung
                heroes of Canadian soccer. We founded this league with a
                singular focus - to provide a stage for the underground talents
                often overlooked. Our mission is simple: let skills and passion
                take center stage.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">The 16-Team Showdown:</h2>
              <p>
                In the bustling city, 16 teams come together annually to compete
                in a group stage and later in a knockout tournament. It's a
                journey that separates the contenders from the pretenders, as we
                witness the emergence of the best eight teams. FKC is where
                competition meets camaraderie, creating a unique soccer
                experience.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">A Dedication to Growth:</h2>
              <p>
                Our league is a testament to our commitment to nurturing
                Canada's soccer prowess. FKC is born out of a genuine love for
                the game, and our dedication is reflected in every match played.
                We're serious about soccer, and through FKC, we aim to
                contribute to the growth of talent that makes our nation proud.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">Elevating the Stakes:</h2>
              <p>
                This year, we've upped the stakes, offering substantial prize
                money for the tournament winners. It's not just about victory;
                it's about recognizing and rewarding the dedication and skill
                that make FKC special. The stakes are higher, but so is the
                potential for players to showcase their true capabilities.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">Building Partnerships:</h2>
              <p>
                In our journey, we've garnered support from sponsors and schools
                alike. They see in FKC a genuine effort to elevate the game and
                recognize the talent that may have gone unnoticed. Together,
                we're building a community that values skill, teamwork, and the
                sheer joy of playing soccer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
