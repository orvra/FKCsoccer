import React from "react";

function GameRules() {
  return (
    <div className="bg-white pb-20">
      <div className="container mx-auto px-3">
        <h1 className="base-100  text-3xl font-bold pb-7 pt-10 px-4 md:px-0">
          Game rules
        </h1>
        <div className="space-y-6">
          <div className="bg-base-100 aspect-video w-full md:w-1/2 overflow-hidden rounded">
            <img
              className="w-full h-full object-cover"
              src="/images/game%20rules/rules_md.jpg"
              alt="game rules"
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
              <h2 className="text-xl font-medium">Number of Players</h2>
              <p>
                Each team will consist of (6) field players and a (1) goalkeeper
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">Goal Size</h2>
              <p>18' w x 6.5' h</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">Field Size</h2>
              <p>35 yds x 55 yds</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">Goal</h2>
              <p>
                A score occurs if the ball passes under the crossbar, between
                the goalposts, and all of the ball passes completely over the
                outside edge of the goal line.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">Throw-in</h2>
              <p>
                If all of the ball passes completely over the outside edge of
                the touchline (sideline), the restart is a throwin. The throw-in
                is taken by the team that did not last touch the ball. An
                improper throw-in or a throw-in taken from the wrong spot
                results in a throw-in for the opposing team.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">
                Goal Kick - Build-Out Line
              </h2>
              <p>
                If all of the ball passes over the end line, it was last touched
                by an attacking player, and a valid goal was not scored, the
                restart is a goal kick. The ball is placed in the goal area and
                kicked by a member of the defending team. All attacking players
                must remain outside the penalty area BEHIND THE BUILD-OUT LINE
                until the ball is first touched by the defending team. A goal
                may be scored directly from a goal-kick. The ball is not in play
                until the first touch is established. The ball does not have to
                leave the penalty area to be considered in play. (Note: Since
                heading is not allowed at this level, the BUILD - OUT LINE is in
                place to encourage young players to keep the ball on the ground
                and minimize serving the ball in the air to the opponent.
                Punting the ball at this level is not allowed,)
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">Corner Kick</h2>
              <p>
                If all of the ball passes over the end line, it was last touched
                by a defensive player, and a valid goal was not scored, the
                restart is a corner kick. The ball is placed in the corner arc
                and kicked by an attacking player. A goal may be scored directly
                from a corner-kick. If all of the ball is kicked over the goal
                line from the corner kick, a goal kick is awarded to the
                defending team.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">Drop Ball</h2>
              <p>
                When the game is stopped while the ball is in play, for a reason
                other than an infraction of the laws, the game is restarted with
                a drop ball.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">
                Direct Free Kick Foul (foul resulting in a direct or penalty
                kick)
              </h2>
              <p>
                A direct free kick is the sanction awarded at the point of
                infraction for any one of the ten direct free kick fouls. For
                the complete wording and understanding of these infractions, you
                must read the actual laws of the game. There are four conditions
                that must occur for a foul to be awarded. 1. By a player 2.
                Against an opponent 3. During play 4. On the field of play. This
                is an overview of the infractions that result in a direct kick.
                <ol className="list-disc pl-10 pt-3">
                  <li>Kicking or attempting to kick an opponent</li>
                  <li>Tripping or attempting to trip an opponent</li>
                  <li>Jumping at an opponent</li>
                  <li>Charging an opponent</li>
                  <li>Striking or attempting to strike an opponent</li>
                  <li>Pushing an opponent</li>
                  <li>
                    Making contact with an opponent before contacting the ball
                    when making a tackle
                  </li>
                  <li>Holding an opponent</li>
                  <li>Spitting at an opponent</li>
                  <li>
                    Deliberately handling the ball (except by a goalkeeper in
                    his or her own penalty area)
                  </li>
                </ol>
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">Penalty Kick</h2>
              <p>
                If one of the ten direct free kick fouls is committed by the
                defense in its own penalty area, the sanction awarded to the
                attacking team is a penalty kick. The ball is placed on the
                penalty mark, the kicker is identified, the goal-keeper is
                positioned on the goal-line and may not move forward until the
                ball is kicked. All other players must remain outside the
                penalty area and penalty arc and not closer to the goal-line
                than the penalty mark until the ball has been kicked. Time is
                extended for a penalty kick taken at the end of halftime,
                full-time, or over-time.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">Indirect Free Kick Foul</h2>
              <p>
                An indirect free kick is the sanction awarded at the point of
                infraction for any indirect free kick foul. Again, this is an
                overview. The law book must be consulted for a complete wording
                and understanding.
              </p>
              <ol className="list-disc pl-10 pt-3">
                <li>
                  Goal-keeper takes more than six seconds while controlling the
                  ball with his hands before releasing it from his possession.
                </li>
                <li>
                  Goal-keeper touches the ball again with his hands after it has
                  been released from his possession and has not been touched by
                  any other player.
                </li>
                <li>
                  Goal-keeper touches the ball with his hands after it has been
                  deliberately passed to him by a teammate.
                </li>
                <li>
                  Goal-keeper touches the ball with his hands after he has
                  received it directly from a throw-in taken by a teammate.
                </li>
                <li>Dangerous play</li>
                <li>
                  Impeding the progress of an opponent by interposing oneself
                  between the opponent and the ball not within playing distance
                  of the ball.
                </li>
                <li>
                  Prevents the goal-keeper from releasing the ball from his
                  hands.
                </li>
                <li>
                  Commits any other offense, not previously mentioned in Law 12,
                  for which play is stopped to caution or dismiss a player.
                </li>
              </ol>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-medium">Free Kicks</h2>
              <div className="space-y-2">
                <p className="font-medium">Direct Free Kick</p>
                <p>
                  On a direct free kick, a valid goal is scored if the ball is
                  kicked directly into the opponent's goal.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-medium">Indirect Free Kick</p>
                <p>
                  On an indirect free kick, the ball must touch another player
                  in addition to the kicker prior to a goal being scored. The
                  referee signals an indirect free kick by holding an arm in the
                  air until the ball is played or touched by another player or
                  goes out of bounds.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">Advantage</h2>
              <p>
                The referee applies the advantage clause to allow play to
                continue if, in his or her opinion, it would be more
                advantageous to the fouled team to continue play than to be
                awarded a free kick. If the referee applies the advantage clause
                and the advantage that was anticipated does not develop within a
                few seconds, the referee shall penalize the original offense.
                If, in the opinion of the referee, the foul was egregious enough
                to warrant a caution or send off, the referee must do so at the
                next stoppage of play.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">Off-side</h2>
              <p>
                A player is in an off-side position if he or she is nearer to
                the opponents' goal-line than the ball, unless the player is
                behind the “Build-Out Line” of his/her opponents' half of the
                field, or there are at least two opponents between the attacker
                and the goal-line. It is not an offense in itself to be in an
                off-side position. A player shall only be penalized for being in
                an off-side position if, at the moment the ball touches or is
                played by a teammate, he or she is, in the opinion of the
                referee, involved in the play by:
              </p>
              <ul className="list-disc pl-10 py-3">
                <li>Interfering with play</li>
                <li>Interfering with an opponent</li>
                <li>Gaining an advantage by being in that position</li>
              </ul>
              <p>
                A player shall not be declared off-side by the referee merely
                because of being in an off-side position or if the ball is
                received directly from a goal kick, a corner kick, or a
                throw-in. If a player is declared off-side, the referee shall
                award an indirect free kick, which shall be taken by a player of
                the opposing team from the place where the infringement
                occurred, unless the offense is committed by a player in the
                opponents' goal area, in which case the free kick shall be taken
                from any point within the goal area.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">
                Misconduct Resulting in a Caution and a Showing of the Yellow
                Card
              </h2>
              <ol className="list-disc pl-10 pt-3">
                <li>Dissent with the referee's decision</li>
                <li>Unsporting behavior</li>
                <li>Persistent infringement of the Laws of the Game</li>
                <li>Delaying the restart of play</li>
                <li>
                  Failing to respect the required distance when play is
                  restarted with a corner kick, free kick, or a throw-in.
                </li>
                <li>
                  Entering the field of play without the referee's permission
                </li>
                <li>
                  Leaving the field of play without the referee's permission
                </li>
              </ol>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium">
                Misconduct Resulting in a Send-off and a Showing of the Red Card
                (team plays down a player)
              </h2>
              <ol className="list-disc pl-10 pt-3">
                <li>Violent conduct</li>
                <li>Serious foul play</li>
                <li>Spitting at an opponent or any other person</li>
                <li>
                  Denying the opponents a goal or an obvious goal scoring
                  opportunity by deliberately handling the ball
                </li>
                <li>
                  Denying the opponents a goal or an obvious goal scoring
                  opportunity by committing a foul that would be punishable by a
                  free kick or penalty kick.
                </li>
                <li>Offensive, insulting, or abusive language</li>
                <li>
                  A player committing a second infractional offense after having
                  already received a caution
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameRules;
