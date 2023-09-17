import React from "react";
import Image from "next/image";
import Logo from "@/public/images/pcql_header_logo.png";
import FooterBase from "@/components/Footer/FooterBase";
const Footer = () => {
  return (
    <div
      className="px-16 pt-4 bg-[#d5e6f1]"
      // style={{
      //   width: "100%",
      //   height: "100%",
      //   background:
      //     "linear-gradient(180deg, rgba(7, 103, 168, 0.19) 0%, rgba(7, 103, 168, 0) 100%)",
      // }}
    >
      <div className="flex gap-12 text-xs">
        <div>
          <Image src={Logo.src} alt="" height={100} width={100} />
        </div>
        <div>
          <p className="font-bold leading-7">Loan Guides</p>
          <ul className="opacity-70">
            <li>
              <a href="/badcredit">Bad Credit</a>
            </li>
            <li>
              <a href="/fastcash">Fast Cash</a>
            </li>
            <li>
              <a href="/debtconsolidation">Debt Consolidation</a>
            </li>
            <li>
              <a href="/emergency">Emergency</a>
            </li>
            <li>
              <a href="/homeimprovement">Home Improvement</a>
            </li>
            <li>
              <a href="/onlineloans">Online Loans</a>
            </li>
            <li>
              <a href="/taxloans">Tax Loans</a>
            </li>
            <li>
              <a href="/paydayloans">Payday Loans</a>
            </li>
          </ul>
        </div>
        <div className="break-all">
          <p className="font-bold leading-7">Legal</p>
          <ul className="opacity-70">
            <li>
              <a href="/ratesandfees">Rates & Fees</a>
            </li>
            <li>
              <a href="/privacypolicy">Privacy Policy</a>
            </li>
            <li>
              <a href="/termsofuse">Terms of Use</a>
            </li>
            <li>
              <a href="/econsent">E-consent</a>
            </li>
            <li>
              <a href="/addisclosure">Ad Disclosure</a>
            </li>
            <li>
              <a href="/thirdparties">Third Parties</a>
            </li>
            <li>
              <a href="/creditauthorization">Credit Authorization</a>
            </li>
            <li>
              <a href="/california-residents">
                California Residents: Do Not Sell My <br />
                Personal Information
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold leading-7">Our Company</p>
          <ul className="opacity-70">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/PoorCreditQuickLoans">How It works</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/lending-policy">Responsible Lending</a>
            </li>
            <li>
              <a href="/scam-alerts">Scam Alerts</a>
            </li>
            <li>
              <a href="/sitemap">Sitemap</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold leading-7">Contact Information</p>
          <ul className="opacity-70">
            <li>
              <a>Address: 2661 N Pearl St. #431 Tacoma, WA 98407</a>
            </li>
            <li>
              <a>Telephone number: 1-800-722-2274</a>
            </li>
            <li>
              <a>Email address: support@poorcreditquickloans.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_divider py-2">
        <hr />
      </div>
      {/* <FooterBase /> */}
      <div className="footer__copyright">
        <small>Copyright © 2023 Peddle Technologies</small>
      </div>
    </div>
  );
};

export default Footer;
