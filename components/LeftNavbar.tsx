import React from "react";

const LeftNavbar = () => {
  return (
    <div className="flex flex-col w-1/6 h-screen bg-[#0E1F2B] overflow-y-auto">
      <div className="my-2">
        <button className="text-white mx-2 bg-[#079C4F] px-2 py-1 rounded-md">
          CASINO
        </button>
        <button className="text-white mx-2 bg-[#EF6C02] px-2 py-1 rounded-md">
          SPORTS
        </button>
      </div>

      <div>
        <section className="First Sec bg-[#1A2C38] flex flex-col mx-3 my-2   text-[#FFFFFF] rounded-md">
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">
            Favourites
          </span>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">Recent</span>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">
            Challenges
          </span>
          <span className="hover:bg-[#2F4453] px-3 py-2 text-sm">My Bets</span>
        </section>
        <section className=" bg-[#1A2C38] flex flex-col mx-3 my-2  text-[#FFFFFF]">
          <div className="border border-b border-[#2F4453]">Games</div>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">
            Stake Originals
          </span>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">
            Stake Exclusives
          </span>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">Slots</span>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">
            Live Casino{" "}
          </span>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">
            Games Shows
          </span>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">
            New Releases
          </span>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">
            Bonus Buy
          </span>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">
            Enhanced ETP
          </span>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">
            Table Games
          </span>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">
            Blackjack
          </span>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">Baccart</span>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">Roulette</span>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">
            Stake Poker
          </span>
        </section>
        <section className=" bg-[#1A2C38] mx-3 my-2  text-[#FFFFFF]">
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">
            Providers
          </span>
        </section>
        <section className="bg-[#1A2C38] flex flex-col mx-3 my-2 px-3 py-2 text-[#FFFFFF]">
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">Profile</span>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">
            Promotions
          </span>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">
            Affilliate
          </span>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">VIP Club</span>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">Blog</span>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">Forum</span>
        </section>
        <section className="bg-[#1A2C38] flex flex-col mx-3 my-2 px-3 py-2 text-[#FFFFFF]">
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">
            Sponsorships
          </span>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">
            Responsible Gambling
          </span>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">
            Live Support{" "}
          </span>
          <span className="hover:bg-[#2F4453] px-3 pt-2 text-sm">
            Language:English
          </span>
        </section>
      </div>
    </div>
  );
};

export default LeftNavbar;
