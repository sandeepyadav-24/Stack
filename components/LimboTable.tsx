import React from "react";
const LimboTableData = [
  {
    name: "Dr. Rock & the Riff ",
    user: "Hidden",
    time: "9:01 PM",
    Bet_Amount: "CA$900.00",
    Multiplier: "5.12×",
    Payout: "CA$4,610.40",
  },
  {
    name: "Salon Privé Blackjack",
    user: "Hidden",
    time: "9:01 PM",
    Bet_Amount: "0.06545706",
    Multiplier: "2.25×",
    Payout: "0.14727839",
  },
  {
    name: "Retro Tapes",
    user: "buba0013",
    time: "9:01 PM",
    Bet_Amount: "0.01796400",
    Multiplier: "0.53×",
    Payout: "-0.00851943",
  },
  {
    name: "Roosters Revenge",
    user: "Hidden",
    time: "9:01 PM",
    Bet_Amount: "0.01494000",
    Multiplier: "0.00×",
    Payout: "-0.01494000",
  },
  {
    name: "Super Sic Bo",
    user: "Hidden",
    time: "9:01 PM",
    Bet_Amount: "30448.00142",
    Multiplier: "0.00×",
    Payout: "-30448.00142",
  },
  {
    name: "Mines",
    user: "Hidden",
    time: "11:45 AM",
    Bet_Amount: "25.72743744",
    Multiplier: "0.00×",
    Payout: "-25.72743744",
  },
  {
    name: "Dr. Rock & the Riff ",
    user: "Hidden",
    time: "9:01 PM",
    Bet_Amount: "CA$900.00",
    Multiplier: "5.12×",
    Payout: "CA$4,610.40",
  },
  {
    name: "Salon Privé Blackjack",
    user: "Hidden",
    time: "9:01 PM",
    Bet_Amount: "0.06545706",
    Multiplier: "2.25×",
    Payout: "0.14727839",
  },
  {
    name: "Retro Tapes",
    user: "buba0013",
    time: "9:01 PM",
    Bet_Amount: "0.01796400",
    Multiplier: "0.53×",
    Payout: "-0.00851943",
  },
  {
    name: "Roosters Revenge",
    user: "Hidden",
    time: "9:01 PM",
    Bet_Amount: "0.01494000",
    Multiplier: "0.00×",
    Payout: "-0.01494000",
  },
  {
    name: "Super Sic Bo",
    user: "Hidden",
    time: "9:01 PM",
    Bet_Amount: "30448.00142",
    Multiplier: "0.00×",
    Payout: "-30448.00142",
  },
  {
    name: "Mines",
    user: "Hidden",
    time: "11:45 AM",
    Bet_Amount: "25.72743744",
    Multiplier: "0.00×",
    Payout: "-25.72743744",
  },
  {
    name: "Dr. Rock & the Riff ",
    user: "Hidden",
    time: "9:01 PM",
    Bet_Amount: "CA$900.00",
    Multiplier: "5.12×",
    Payout: "CA$4,610.40",
  },
  {
    name: "Salon Privé Blackjack",
    user: "Hidden",
    time: "9:01 PM",
    Bet_Amount: "0.06545706",
    Multiplier: "2.25×",
    Payout: "0.14727839",
  },
  {
    name: "Retro Tapes",
    user: "buba0013",
    time: "9:01 PM",
    Bet_Amount: "0.01796400",
    Multiplier: "0.53×",
    Payout: "-0.00851943",
  },
];

const LimboTable = () => {
  return (
    <div className="mx-10">
      <div className="table_navbar justify-between flex flex-row">
        <div className="flex flex-row bg-[#0F212E] rounded-3xl text-[#FFFFFF] py-1">
          <div className="px-3 hover:bg-[#2F4453] mx-1 rounded-3xl py-2">
            My Bets
          </div>
          <div className="px-3 hover:bg-[#2F4453] mx-1 rounded-3xl py-2">
            All Bets
          </div>
          <div className="bg-[#2F4453] px-3 mx-1 rounded-3xl py-2">
            High Rollers
          </div>
          <div className="px-3 hover:bg-[#2F4453] mx-1 rounded-3xl py-2">
            Race Leaderboards
          </div>
        </div>
        <div className="flex flex-row">
          <div>Ghost mode on </div>
          <div>10</div>
        </div>
      </div>
      <div className="table_header text-[#B1BAD3] flex flex-row ">
        <div className="w-1/6 text-center py-3">Game</div>
        <div className="w-1/6 text-center py-3">User</div>
        <div className="w-1/6 text-center py-3">Time</div>
        <div className="w-1/6 text-center py-3">Bet Amount</div>
        <div className="w-1/6 text-center py-3">Multiplier</div>
        <div className="w-1/6 text-center py-3">Payout</div>
      </div>

      {LimboTableData.map((row, index) => {
        if (index % 2 == 0) {
          return (
            <div className="flex flex-row" key={index}>
              <div className="text-[#FFFFFF] w-1/6 text-center py-4 text-sm">
                {row.name}
              </div>
              <div className="text-[#B1BAD3] w-1/6 text-center py-4 text-sm">
                {row.user}
              </div>
              <div className="text-[#B1BAD3] w-1/6 text-center py-4 text-sm">
                {row.time}
              </div>
              <div className="text-[#B1BAD3] w-1/6 text-center py-4 text-sm">
                {row.Bet_Amount}
              </div>
              <div className="text-[#B1BAD3] w-1/6 text-center py-4 text-sm">
                {row.Multiplier}
              </div>
              <div className="text-[#B1BAD3] w-1/6 text-center py-4 text-sm">
                {row.Payout}
              </div>
            </div>
          );
        } else {
          return (
            <div className="flex flex-row bg-[#213643]" key={index}>
              <div className="text-[#FFFFFF] w-1/2 text-center py-4 text-sm">
                {row.name}
              </div>
              <div className="text-[#B1BAD3] w-1/2 text-center py-4 text-sm">
                {row.user}
              </div>
              <div className="text-[#B1BAD3] w-1/2 text-center py-4 text-sm">
                {row.time}
              </div>
              <div className="text-[#B1BAD3] w-1/2 text-center py-4 text-sm">
                {row.Bet_Amount}
              </div>
              <div className="text-[#B1BAD3] w-1/2 text-center py-4 text-sm">
                {row.Multiplier}
              </div>
              <div className="text-[#B1BAD3] w-1/2 text-center py-4 text-sm">
                {row.Payout}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default LimboTable;
