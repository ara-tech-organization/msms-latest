import React, { useState } from "react";
import styles from "./Faq.module.css";

const faqs = [
  {
    question: "What curriculum does Morning Star Matriculation School in Thanjavur follow?",
    answer: "Morning Star Matriculation School, Thanjavur follows the Tamil Nadu State Board curriculum, offering a solid academic foundation complemented by a wide range of co curricular activities. The school emphasizes holistic development, helping students excel both intellectually and personally.The curriculum is thoughtfully structured to prepare students for higher education, competitive exams, and real world challenges—equipping them with the critical thinking, creativity, and confidence needed to succeed.",
  },
  {
    question: "How can I apply for admission to Morning Star School in Thanjavur?",
    answer: "Admissions at Morning Star School, Thanjavur, begin with an offline application form available at the school office. Parents are welcome to visit the campus or contact the administration to learn more about the current admission process, required documents, and age eligibility.We encourage early applications, as seats are limited for each academic year.",
  },
  {
    question: "What facilities are available at Morning Star Matriculation School?",
    answer: "Morning Star Matriculation School offers well-equipped classrooms, smart boards, science and computer labs, a well-stocked library, a spacious playground, CCTV surveillance, and safe, reliable transportation.The school also promotes digital learning, extracurricular clubs, and personalized academic support—ensuring a safe, engaging, and enriching learning environment for every student.",
  },
  {
    question: "Is Morning Star School in Thanjavur offering transport facilities for students?",
    answer: "Morning Star Matriculation School provides safe and dependable transport facilities across major areas in and around Thanjavur.Each bus is equipped with GPS tracking and CCTV cameras, ensuring constant monitoring and student safety. Our transport routes and schedules are efficiently planned to ensure maximum convenience for students and parents alike.",
  },
  {
    question: "Why should I choose Morning Star Matriculation School for my child’s education?",
    answer: "Morning Star Matriculation School in Thanjavur is renowned for its experienced faculty, student-friendly atmosphere, modern teaching methods, and consistent academic excellence.The school places a strong emphasis on values, discipline, and innovation—making it one of the top choices for parents seeking high-quality education in Thanjavur.",
  },
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.accordionWrapper}>
        <h2 className={styles.faqtitle}>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`${styles.accordionItem} ${
            activeIndex === index ? styles.active : ""
          }`}
        >
          <button
            className={styles.accordionHeader}
            onClick={() => toggleIndex(index)}
          >
            <span>{faq.question}</span>
            <span className={styles.icon}>{activeIndex === index ? "−" : "+"}</span>
          </button>
          {activeIndex === index && (
            <div className={styles.accordionContent}>
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
