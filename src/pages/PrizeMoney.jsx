import React from "react";

function PrizeMoney() {
  return (
    <div className="bg-white pb-20">
      <div className="container mx-auto px-3">
        <h1 className="base-100  text-3xl font-bold pb-7 pt-10 px-4 md:px-0">
          Prize money
        </h1>
        <div className="space-y-6  base-100">
          <div className="bg-base-100 aspect-video w-full md:w-1/2 overflow-hidden rounded">
            <img
              className="w-full h-full object-scale-down"
              src="/FKCsoccer/images/prize%20money/ether_md.jpg"
              alt="ether"
            />
          </div>
          <div className="space-y-10">
            <div className="space-y-2">
              <h2 className="text-xl font-medium">Cash Prize and Trophy:</h2>
              <p>
                Brace yourself for the grand finale because the championship
                winner isn't just walking away with bragging rights - there's a
                jaw-dropping $20,000 cash prize up for grabs! That's right,
                we're turning up the heat, and the stakes have never been
                higher.
              </p>

              <p>
                But that's not all - the champion will also be awarded a trophy
                to commemorate their epic triumph. It's not just about the
                money; it's about etching your name into the history books of
                the Footy King Championship. Seize the moment, claim the cash,
                hoist that trophy, and let the world know you're the undisputed
                king of the pitch!
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-medium">Ethereum Prizes:</h2>
              <p>
                Get ready to level up your game because our sponsor, Ethereum,
                is bringing some serious heat to the prize table. Every player
                in the championship will be rewarded with Ethereum (ETH) coins,
                a decentralized cryptocurrency that's making waves in the
                digital world.
              </p>

              <p>
                So, how do you get your hands on these digital treasures? Easy.
                Once the championship dust settles, we'll distribute the prize
                money directly to your Ethereum wallet. If you don't have one,
                don't worry - setting up an Ethereum wallet is a breeze. Just
                follow our guide, and you'll be ready to claim your crypto
                winnings.
              </p>

              <p>
                Ethereum's secure and transparent blockchain ensures that your
                prize money is delivered seamlessly and with the utmost
                reliability. Dive into the world of cryptocurrency and let
                Ethereum elevate your victory to a whole new level!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrizeMoney;
