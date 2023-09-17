import { React, useState } from "react";
import AccordionItem from "@/components/AccordionItem/AccordionItem";
import Link from "next/link";

const Faq = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(false);
    }
    setOpen(index);
  };

  const faqData = [
    {
      id: 1,
      title: "Peer To Peer Loans",
      description:
        "Typical Requirements:• Credit Score: 580+• Minimum Income: $2,000 per month• Income Source: Employed, Self-Employed, or Benefits• Loan Range Given: $1,000 to $3,500 The personal loan installment loan process is also quick and convenient. You can request a loan online by providing basic personal and financial information. Your lender or lending partner will provide you with a loan agreement individually tailored to your financial needs. Once you accept the loan agreement, your loan will be deposited directly into your bank account. Again, review the terms of your agreement before you sign, as each lender or lending partner will have their own specific repayment process. Consumers are encouraged to research applicable Federal and state laws, and to ask their lenders or lending partners for more information. If a lender or lending partner is wholly owned and operated by a federally recognized American Indian Tribe and sovereign government, applicable Tribal and Federal law governs its loans and related contracts, applications and documents. For example, personal installment loans can vary by state. Each state has its own rules and regulations for personal loans, so your loan amount and rate will depend on where you live. Also, your loan amount, APR and length of loan may depend on a variety of factors that lenders or lending partners use including your credit score and repayment history.",
    },
    {
      id: 2,
      title: "Personal Installment Loans",
      description: `Typical Requirements:• Credit Score: 580+• Minimum Income: $2,000 per month• Income Source: Employed, Self-Employed, or Benefits• Loan Range Given: $1,000 to $35,000
        The personal loan installment loan process is also quick and convenient. You can request a loan online by providing basic personal and financial information. Your lender or lending partner will provide you with a loan agreement individually tailored to your financial needs. Once you accept the loan agreement, your loan will be deposited directly into your bank account. Again, review the terms of your agreement before you sign, as each lender or lending partner will have their own specific repayment process.
        Consumers are encouraged to research applicable Federal and state laws, and to ask their lenders or lending partners for more information. If a lender or lending partner is wholly owned and operated by a federally recognized American Indian Tribe and sovereign government, applicable Tribal and Federal law governs its loans and related contracts, applications and documents. For example, personal installment loans can vary by state. Each state has its own rules and regulations for personal loans, so your loan amount and rate will depend on where you live. Also, your loan amount, APR and length of loan may depend on a variety of factors that lenders or lending partners use including your credit score and repayment history.`,
    },
    {
      id: 3,
      title: "Bank Personal Loan",
      description:
        "Typical Requirements:• Credit Score: 580+• Minimum Income: $2,000 per month• Income Source: Employed, Self-Employed, or Benefits• Loan Range Given: $1,000 to $3,500 The personal loan installment loan process is also quick and convenient. You can request a loan online by providing basic personal and financial information. Your lender or lending partner will provide you with a loan agreement individually tailored to your financial needs. Once you accept the loan agreement, your loan will be deposited directly into your bank account. Again, review the terms of your agreement before you sign, as each lender or lending partner will have their own specific repayment process. Consumers are encouraged to research applicable Federal and state laws, and to ask their lenders or lending partners for more information. If a lender or lending partner is wholly owned and operated by a federally recognized American Indian Tribe and sovereign government, applicable Tribal and Federal law governs its loans and related contracts, applications and documents. For example, personal installment loans can vary by state. Each state has its own rules and regulations for personal loans, so your loan amount and rate will depend on where you live. Also, your loan amount, APR and length of loan may depend on a variety of factors that lenders or lending partners use including your credit score and repayment history.",
    },
  ];

  return (
    <div className="px-80">
      <p className="text-2xl leading-6 text-center font-bold py-4 text-[#27374C]">
        Types of Personal Loans®
      </p>

      <div className="">
        {/* ==================== */}
        {faqData.map((data, index) => {
          return (
            <>
              <AccordionItem
                key={index}
                open={index === open}
                title={data.title}
                description={data.description}
                toggle={() => toggle(index)}
              />
              <br />
            </>
          );
        })}
        {/* ==================== */}
      </div>
    </div>
  );
};

export default Faq;
