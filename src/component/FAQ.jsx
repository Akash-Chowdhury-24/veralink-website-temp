import React, { useState } from "react";
import "./FAQ.css";

const FAQ = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <p>
        Please reach us at <a href="mailto:info@veralinkgroup.com">info@veralinkgroup.com</a> if you cannot find an answer to your question.
      </p>
      <div className="faq-list">
        
        {faqs.map((item, index) => (
            
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggle(index)}>
              <span>{item.question}</span>
              <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && item.answer && (
              <div className="faq-answer">{item.answer}</div>
            )}
            
          </div>
          
        ))}
      </div>
      
    </div>
  );
};

export default FAQ;
