import React from "react";

function Eligibility() {
  return (
    <div className="bg-white pb-20">
      <div className="container mx-auto px-3">
        <h1 className="base-100  text-3xl font-bold pb-7 pt-10 px-4 md:px-0">
          Eligibility
        </h1>
        <div className="space-y-6  base-100">
          <div className="bg-base-100 aspect-video w-full md:w-1/2 overflow-hidden rounded">
            <img
              className="w-full h-full object-cover"
              src="/FKCsoccer/images/eligibility/eligibility_md.jpg"
              alt="eligibility"
            />
          </div>
          <div className="space-y-10">
            <div className="space-y-2">
              <h2 className="text-xl font-medium">Age Requirement:</h2>
              <p>
                To step onto the Footy King Championship stage, players must be
                a minimum of 14 years old. If you're under 18, secure a signed
                waiver from your parents for your ticket to soccer glory.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">Enrollment Fee:</h2>
              <p>
                Ready to join the action? Teams must shell out $3,000 for
                enrollment. But that's not all – prove your local dominance by
                providing evidence of active participation in a local
                competitive league. Show us your hometown love for the game!
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">Team Management:</h2>
              <p>
                Every squad needs a leader. Whether it's a dedicated manager or
                a player wearing the dual hat, they become our main point of
                contact for all things team-related.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">Skill Assessment:</h2>
              <p>
                Ready for the challenge? We're handpicking 16 teams based on
                skill, starting right from the application stage. Some teams
                might even duke it out in knockout matches for a coveted spot in
                the group stages. It's a battle for survival – only the best
                earn their place!
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">
                Residency and Record Check:
              </h2>
              <p>
                Keep it true north strong and free – all players must be
                Canadian residents. And hey, we're checking records too. No
                criminal records allowed on the pitch – we're here for the love
                of the game!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eligibility;
