import React from "react";

const sports = [
  "Sportsbook",
  "Live Sports",
  "Soccer",
  "Basketball",
  "Tennis",
  "eSports",
  "Bet Bonuses",
  "Sports Rules",
];

const casino = [
  "Casino Games",
  "Slots",
  "Live Casino",
  "Roulette",
  "Blackjack",
  "Providers",
  "VIP Club",
  "Promotions",
];

const support = [
  "Fairness",
  "Affiliate",
  "Responsible Gambling",
  "Gamble Aware",
  "Live Support",
  "Help Center",
  "How to Guides",
  "Local Currency Guide",
  "Supported Crypto",
];

const community = [
  "Blog",
  "Forum",
  "Facebook",
  "Twitter",
  "Instagram",
  "YouTube",
  "Shop",
];

const about = [
  "Privacy Policy",
  "Licenses",
  "AML Policy",
  "Terms of Service",
  "Self Exclusion",
  "Primedice",
];

const Language = ["English", "Odds", "Decimal"];

const Footer = () => {
  return (
    <div className="bg-[#081E2A]">
      {/* Extenal Links Div */}
      <div className="external_links  flex flex-row mx-10 py-10">
        <div className="w-1/6">
          <div className="head text-[#FFFFFF] py-2">Sports</div>
          {sports.map((e) => {
            return (
              <div className="text-[#B1BAD3] text-sm py-1 hover:text-[#FFFFFF]">
                {e}
              </div>
            );
          })}
        </div>
        <div className="w-1/6">
          <div className="head text-[#FFFFFF] py-2">Casino</div>
          {casino.map((e) => {
            return (
              <div className="text-[#B1BAD3] text-sm py-1 hover:text-[#FFFFFF]">
                {e}
              </div>
            );
          })}
        </div>
        <div className="w-1/6">
          <div className="head text-[#FFFFFF] py-2">support</div>
          {support.map((e) => {
            return (
              <div className="text-[#B1BAD3] text-sm py-1 hover:text-[#FFFFFF]">
                {e}
              </div>
            );
          })}
        </div>
        <div className="w-1/6">
          <div className="head text-[#FFFFFF] py-2">community</div>
          {community.map((e) => {
            return (
              <div className="text-[#B1BAD3] text-sm py-1 hover:text-[#FFFFFF]">
                {e}
              </div>
            );
          })}
        </div>
        <div className="w-1/6">
          <div className="head text-[#FFFFFF] py-2"> About Us</div>
          {about.map((e) => {
            return (
              <div className="text-[#B1BAD3] text-sm py-1 hover:text-[#FFFFFF]">
                {e}
              </div>
            );
          })}
        </div>
        <div className="w-1/6">
          <div className="head text-[#FFFFFF] py-2">Language</div>
          {Language.map((e) => {
            return (
              <div className="text-[#B1BAD3] text-sm py-1 hover:text-[#FFFFFF]">
                {e}
              </div>
            );
          })}
        </div>
      </div>
      {/* Horizontal Line  */}
      <hr className="text-[#213643] my-5" />
      {/* CopyRight Statement */}
      <div className="text-center text-[#B1BAD3]">
        <h1 className="py-3">© 2024 Stake.com | All Rights Reserved.</h1>
        <h1>1 BTC = $66,844.92</h1>
        <h1 className="text-xs py-10">
          Stake is owned and operated by Medium Rare N.V., registration number:
          145353, registered address: Korporaalweg 10, Willemstad, Curaçao.
          Contact us at support@stake.com. Payment agent company is Medium Rare
          Limited with address 7-9 Riga Feraiou, LIZANTIA COURT, Office 310,
          Agioi Omologites, 1087 Nicosia, Cyprus and Registration number: HE
          410775
        </h1>
      </div>
    </div>
  );
};

export default Footer;
