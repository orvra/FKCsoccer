import React from "react";

function TournamentFormat() {
  return (
    <div className="bg-white pb-20">
      <div className="container mx-auto px-3">
        <h1 className="base-100  text-3xl font-bold pb-7 pt-10 px-4 md:px-0">
          Tournament Format
        </h1>
        <div className="space-y-6">
          <div className="bg-base-100 aspect-video w-full md:w-1/2 overflow-hidden rounded">
            <img
              className="w-full h-full object-scale-down"
              src="/FKCsoccer/images/tournament%20format/pitches_md.jpg"
              alt="pitches"
            />
          </div>

          <div className="base-100 font-regular space-y-10">
            <div className="space-y-2">
              <h2 className="text-xl font-medium">Group Stage Showdown:</h2>
              <p>
                Get ready for some serious soccer action! We've got 16 teams in
                the mix, divided into 4 groups. Each team faces off against the
                others in its group twice, so there's plenty of chances for
                redemption or to assert dominance.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">Schedule and Standings:</h2>
              <p>
                Check out the schedule <a href="#schedule-link">here</a>. Group
                stage games kick off from the beginning of January and run
                through mid-March. After this intense phase, get ready for the
                knockout stages lasting the next two months, finishing in May.
                The knockout stage bracket will be up within a couple of days
                after the group stages conclude.
              </p>

              <p>
                Stay in the loop with the latest standings. We'll keep you
                posted on team rankings, top scorers, and the road to glory.
                Keep an eye out for updates as the competition heats up!
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">
                Legit Refs, Tracked Stats:
              </h2>
              <p>
                We're keeping it legit with official refs making sure the games
                are played fair and square. Player stats are tracked for those
                eyeing the MVP title. We've got one main location with three
                fields. Where you play will be found in the match information.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">Knockout Drama:</h2>
              <p>
                Things heat up as we move to the knockout stage. The top 2 teams
                from each group battle it out in a round of 8. Home and away
                games bring the drama, and we've got a final showdown to
                determine the champ. Extra time? You bet, just to keep things
                spicy. The winner walks away with the bragging rights and a
                sweet prize. Game on! 🏆⚽
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TournamentFormat;
