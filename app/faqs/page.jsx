"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {questionsAndAnswers.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl shadow-sm bg-white overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex items-center justify-between px-5 py-4 focus:outline-none hover:bg-gray-100 transition"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-medium">{item.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>
              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-screen px-5 pb-4"
                    : "max-h-0 px-5 pb-0"
                } overflow-hidden text-gray-600 text-sm`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
