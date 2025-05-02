"use client";
import React, { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questionsAndAnswers = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is a Component?",
      answer: "Components are the building blocks of a React application.",
    },
    {
      question: "What is the virtual DOM?",
      answer:
        "The virtual DOM is a lightweight representation of the real DOM.",
    },
    {
      question: "What are hooks in React?",
      answer:
        "Hooks are functions that let you use state and lifecycle features in functional components.",
    },
    {
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in React.",
    },
    {
      question: "What is Redux?",
      answer:
        "Redux is a state management library used for managing global state in a React app.",
    },
    {
      question: "What is React Router?",
      answer:
        "React Router is a library for managing navigation in a React application.",
    },
    {
      question: "What are props in React?",
      answer:
        "Props are inputs to a React component that allow passing data from parent to child components.",
    },
  ];

  return (
    <div className="h-screen bg-white text-black">
      <div className="w-full max-w-xl mx-auto mt-[145px] xl:mt-[150px]">
        <div className="space-y-2">
          {questionsAndAnswers.map((item, index) => (
            <div key={index} className="border-b">
              <button
                className="w-full text-left p-3 bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl font-semibold">{item.question}</h3>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-screen p-4 bg-gray-50"
                    : "max-h-0 p-0"
                }`}
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
