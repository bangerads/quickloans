import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import PersonalLoansRequirement from "@/components/Pages/PersonalLoans/PersonalLoansRequirement";
import React from "react";

function PersonalLoans() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(180deg, rgba(7, 103, 168, 0.19) 0%, rgba(7, 103, 168, 0) 100%)",
      }}
    >
      <Navbar />
      <PersonalLoansRequirement />
      <Footer />
    </div>
  );
}

export default PersonalLoans;
