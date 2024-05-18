import Image from "next/image";
const LimboGameWindow = () => {
  return (
    <div className="mx-10 my-20">
      <div className=" flex flex-row rounded-lg">
        {/* First Div  */}
        <div className="tasl_bar w-1/4 bg-[#213643]">
          {/* manual and Auto options */}
          <div className="nav flex flex-row rounded-3xl mx-5 my-2 bg-[#0F212E]">
            <div className="hover:bg-[#2F4453] w-1/2 rounded-3xl px-10 py-3 text-white">
              Manual{" "}
            </div>
            <div className="hover:bg-[#2F4453] w-1/2 rounded-3xl px-10 py-3 text-white">
              Auto
            </div>
          </div>
          {/* Bet Amount Section  */}
          <div className="bet_amount px-3 my-2">
            <div className="flex flex-row justify-between text-[#B1BAD3]">
              <h1>Bet Amount</h1>
              <span>0.00</span>
            </div>
            <div className="bg-[#2F4453]">
              <input type="number" className="bg-[#0F212E]" />
              <span>1</span>
              <span>2</span>
            </div>
          </div>
          {/* Profit on Win Section  */}
          <div className="win_profit"></div>
          {/* Bet Button  */}
          <div className="text-center bg-[#00E700] mx-3 rounded-md py-3">
            Bet
          </div>
        </div>
        {/* Second Div */}
        <div className="game_window w-3/4 bg-[#0F212E]">
          {/* Real Time Estimation  */}
          <div className="text-[100px] font-bold text-white my-40 text-center">
            1.00+
          </div>
          {/*  */}
          <div className="bg-[#213643] flex flex-row mx-5 mb-3 rounded-md ">
            {/* Target multiplier Input  */}
            <div className="w-1/2 mx-5 my-3">
              <h1 className="text-[#B1BAD3]">Target Multiplier</h1>
              <input
                className="bg-[#0F212E] text-white border-[#547086] border-[1px] rounded-sm w-full py-2 px-2 text-sm"
                type="number"
              />
            </div>
            {/* Win Chance Input  */}
            <div className="w-1/2 mx-5 my-3">
              <h1 className="text-[#B1BAD3]">Win Chance</h1>
              <input
                className="bg-[#0F212E] text-white border-[#547086] border-[1px] rounded-sm w-full py-2 px-2 text-sm"
                type="number"
              />
            </div>
          </div>
        </div>
        <hr className="text-white my-4" />
      </div>
      <div className="footer flex flex-row bg-[#0F212E] justify-between px-3 py-2">
        <div className="flex flex-row">
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
        </div>
        <div></div>
        <div className="text-[#B1BAD3]">Fairness</div>
      </div>
    </div>
  );
};

export default LimboGameWindow;
