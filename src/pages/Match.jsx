import React from "react";
import MatchHero from "../components/MatchHero";
import { useParams } from "react-router-dom";

function Match() {
  const { matchId } = useParams();
  console.log(matchId);
  return (
    <div>
      <MatchHero matchId={parseInt(matchId.match(/^\d+/))} />
      <div className="container mx-auto bg-[#f1f3f8] md:px-3">
        <div className="flex flex-col items-center">
          <h1 className="py-6 font-bold text-3xl base-100">Form Guide</h1>
          <div className="grid grid-cols-5 mx-3 w-[95%] max-w-[650px] border rounded">
            <div className="col-start-1 col-span-2 justify-self-end">2</div>
            <div className="col-start-4 col-span-2">3</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Match;
