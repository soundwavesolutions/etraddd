import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMinus,
  FaPhone,
  FaPlus,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const about_links = [
  "Company Overview",
  "Investor Relations",
  "Newsroom",
  "Careers",
  "Accessibility at E*TRADE",
  "Privacy & Cookies",
];
const service_links = ["Contact Us", "FAQs", "Forms and Applications"];
const quick_links = [
  "Open An Account",
  "Fund My Account",
  "Cash Management",
  "Find a Financial Advisor",
  "Stock Plans",
  "Executive Services",
  "Security Center",
  "Site Map",
];

const Footer = () => {
  const [showAbout, setShowAbout] = useState(
    window.innerWidth > 768 ? true : false,
  );
  const [showService, setShowService] = useState(
    window.innerWidth > 768 ? true : false,
  );
  const [showQuick, setShowQuick] = useState(
    window.innerWidth > 768 ? true : false,
  );

  return (
    <div className="bg-[#f6f6f6]">
      <div className="py-8 px-4 lg:max-w-[1220px] mx-auto">
        <div className="flex gap-y-4 flex-wrap">
          <div className="w-full md:w-1/4">
            <p
              className="cursor-pointer flex items-center justify-between font-bold mb-5 pb-1 max-md:border-b border-[#c0c0c0]"
              onClick={() => setShowAbout((prev) => !prev)}
            >
              About Us
              {!showAbout ? (
                <FaPlus className="md:hidden" />
              ) : (
                <FaMinus className="md:hidden" />
              )}
            </p>
            {showAbout &&
              about_links?.map((itm, idx) => (
                <a
                  key={idx}
                  href={`#${itm}`}
                  className="block text-[#5627d8] text-sm mb-7"
                >
                  {itm}
                </a>
              ))}
          </div>
          <div className="w-full md:w-1/4">
            <p
              className="cursor-pointer flex items-center justify-between font-bold mb-5 pb-1 max-md:border-b border-[#c0c0c0]"
              onClick={() => setShowService((prev) => !prev)}
            >
              Service
              {!showService ? (
                <FaPlus className="md:hidden" />
              ) : (
                <FaMinus className="md:hidden" />
              )}
            </p>
            {showService &&
              service_links?.map((itm, idx) => (
                <a
                  key={idx}
                  href={`#${itm}`}
                  className="block text-[#5627d8] text-sm mb-7"
                >
                  {itm}
                </a>
              ))}
          </div>
          <div className="w-full md:w-1/4">
            <p
              className="cursor-pointer flex items-center justify-between font-bold mb-5 pb-1 max-md:border-b border-[#c0c0c0]"
              onClick={() => setShowQuick((prev) => !prev)}
            >
              Quick Links
              {!showQuick ? (
                <FaPlus className="md:hidden" />
              ) : (
                <FaMinus className="md:hidden" />
              )}
            </p>
            {showQuick &&
              quick_links?.map((itm, idx) => (
                <a
                  key={idx}
                  href={`#${itm}`}
                  className="block text-[#5627d8] text-sm mb-7"
                >
                  {itm}
                </a>
              ))}
          </div>
          <div className="w-full md:w-1/4 max-md:text-center">
            <p className="font-bold mb-4">Connect with us</p>
            <p className="text-[#5627d8] flex items-center gap-2 max-md:justify-center cursor-pointer">
              <FaPhone fill="#5627d8" /> 800-387-2331
            </p>
            <div className="flex items-center gap-2 mt-2 max-md:justify-center">
              <FaFacebook
                fill="#5627d8"
                size={24}
              />
              <FaTwitter
                fill="#5627d8"
                size={24}
              />
              <FaLinkedin
                fill="#5627d8"
                size={24}
              />
              <FaYoutube
                fill="#5627d8"
                size={24}
              />
              <FaInstagram
                fill="#5627d8"
                size={24}
              />
            </div>
          </div>
        </div>
        <div className="border border-[#dbdbdb] my-6"></div>
        <p className="font-bold max-w-[720px] mx-auto mb-6 text-center">
          Check the background of Morgan Stanley Smith Barney LLC on{" "}
          <span className="text-[var(--primary)]">FINRA's BrokerCheck</span> and
          see the Morgan Stanley Smith Barney LLC{" "}
          <span className="text-[var(--primary)]">Relationship Summary.</span>
        </p>
        <div className="border border-[#dbdbdb] p-2 text-center my-3 text-sm font-bold max-w-fit mx-auto">
          Investment Products • Not FDIC Insured • No Bank Guarantee • May Lose
          Value
        </div>
        <p className="font-bold my-6">
          PLEASE READ THE IMPORTANT DISCLOSURES BELOW.
        </p>
        <p className="font-bold my-6">
          Banking products and services are provided by Morgan Stanley Private
          Bank, National Association,{" "}
          <span className="text-[var(--primary)]">Member FDIC.</span>
        </p>
        <p className="mt-6 mb-3 text-sm">
          Securities products and investment advisory services offered by Morgan
          Stanley Smith Barney LLC, Member{" "}
          <span className="text-[var(--primary)]">SIPC</span> and a Registered
          Investment Adviser. Commodity futures and options on futures products
          and services offered by E*TRADE Futures LLC, Member{" "}
          <span className="text-[var(--primary)]">NFA</span> Stock plan
          administration solutions and services offered by E*TRADE Financial
          Corporate Services, Inc., and are a part of Morgan Stanley at Work.
          Banking products and services provided by Morgan Stanley Private Bank,
          National Association, Member{" "}
          <span className="text-[var(--primary)]">FDIC</span>. All entities are
          separate but affiliated subsidiaries of Morgan Stanley. E*TRADE from
          Morgan Stanley and Morgan Stanley at Work are registered trademarks of
          Morgan Stanley.
        </p>
        <p className="text-sm font-bold">
          System response and account access times may vary due to a variety of
          factors, including trading volumes, market conditions, system
          performance, and other factors.
        </p>
        <p className="text-sm font-bold text-[var(--primary)]">
          Statement of Financial Condition | About Asset Protection | Account
          Agreements and Disclosures | Quarterly 606 Report | Business
          Resiliency Plan
        </p>
        <p className="text-sm mt-3">
          ©2024 E*TRADE from Morgan Stanley. All rights reserved.{" "}
          <span className="text-[var(--primary)]">
            E*TRADE Copyright Policy
          </span>
        </p>
        <div className="border border-[#dbdbdb] my-3"></div>
        <br />
        <div className="grid place-items-center">
          <img
            src="https://cdn2.etrade.net/1/22020114160.0/aempros/content/dam/etrade/retail/en_US/images/global/footer/protection-guarantee.svg"
            alt=""
          />
          <br />
          <img
            src="https://cdn2.etrade.net/1/18021313340.0/aempros/content/dam/etrade/retail/en_US/images/global/footer/sipc-logo-member.png"
            alt=""
          />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Footer;
