"use client";
import React, { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questionsAndAnswers = [
    {
      question: "What products does Sadaat Pansar Store offer?",
      answer:
        "Sadaat Pansar Store offers a wide range of natural and organic products including dry fruits, herbs, oils, and traditional remedies.",
    },
    {
      question: "How can I place an order online?",
      answer:
        "You can place an order directly through our website by browsing the products, adding them to your cart, and completing the checkout process.",
    },
    {
      question: "Do you deliver all over Pakistan?",
      answer:
        "Yes, we offer fast and reliable delivery services across all major cities in Pakistan including Lahore, Karachi, Islamabad, and Faisalabad.",
    },
    {
      question: "What are the payment options?",
      answer:
        "We accept Cash on Delivery (COD), credit/debit cards, and other local payment methods for your convenience.",
    },
    {
      question: "Are your products genuine and high-quality?",
      answer:
        "Absolutely! We pride ourselves on sourcing only the finest quality ingredients to ensure our customers receive genuine and effective products.",
    },
    {
      question: "Can I return a product if I’m not satisfied?",
      answer:
        "Yes, we have an easy return policy. If you're not satisfied with a product, contact our support team for assistance.",
    },
    {
      question: "Do you offer gift packaging?",
      answer:
        "Yes, we offer beautiful gift boxes and baskets – perfect for special occasions and gifting loved ones.",
    },
  ];

  return (
    <div className="h-screen bg-white text-black ">
      <div className="w-full max-w-xl mx-auto xl:mt-[150px] mt-20">
        <div className="space-y-2 mt-20">
          {questionsAndAnswers.map((item, index) => (
            <div key={index} className="border-b">
              <button
                className="w-full text-left p-3 bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-md font-semibold">{item.question}</h3>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-screen p-4 bg-gray-50"
                    : "max-h-0 p-0"
                }`}
              >
                <p className="text-sm">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
