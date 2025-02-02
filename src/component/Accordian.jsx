import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./accordian.css";
import { Link } from "react-router-dom";

const Accordion = ({ question, answer }) => {
  const [isExpanded, setExpanded] = React.useState(false);

  const toggleAccordion = () => {
    setExpanded(!isExpanded);
  };

  // Splitting the answer into list items
  const answerList = answer.split("● ").filter(item => item.trim() !== "");

  return (
    <div className="accordion">
      <div
        className={`accordion-header ${isExpanded ? "expanded" : ""}`}
        onClick={toggleAccordion}
      >
        <div className="accordion-title">
          <h3>{question}</h3>
        </div>
      </div>
      {isExpanded && (
        <div className="accordion-content">
          <ul>
            {answerList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};;

const FAQ = () => {
  const questions = [
    {
      id: 1,
      question: "1. Why is it the best to upscale your business?",
      answer:
        "Mentor Connect attracts mentors from diverse backgrounds in multiple domains. We are on a mission to engage more than 1,000 mentors, including prominent executives, senior professionals at top companies, and well-known industry figures, to provide mentorship through our platform. To ensure quality, mentors undergo an application and initial vetting process before they can start working with us. Only the best are accepted onto the Mentor Connect program.",
    },
    {
      id: 2,
      question: "2. What can I expect from a Mentor?",
      answer:
        "● They should be available when you need them for questions in advice and guidance. \n ● They should provide guidance in working towards your personal goals. \n ● They should be flexible and accommodating when it comes to changes in goals, help requests, and organizational development. \n ● They should offer actionable coaching such as assistance with business problems and personal development. \n ● They should serve as a stable point of contact supporting you throughout your journey. \n ● One-to-one video call sessions. Review on your work and providing practical advice based on it. \n ● Assigning specific coding challenges and tasks. \n ● Prompt response times typically under 24 hours.",
    },
    {
      id: 3,
      question: "3. What should I not expect from our Mentors?",
      answer:
        "● In-depth code analysis, developing new features, or spending extensive time on debugging. They act as coaches and guides, not freelancers. \n ● Not a personalized training program. Mentors focus on helping rather than delivering lectures readily available online, but they can direct you to appropriate resources. \n ● 24/7 support. Mentors dedicate their free time to supporting you, but they may have busy schedules and cannot always respond immediately. \n ● Instant replies. Our mentorship programs are designed for the long term, often exceeding 30 days. If your mentor does not respond for a few hours, there is no need to panic; however, ensure you still feel prioritized and reach out if you feel neglected.",
    },
    {
      id: 4,
      question: "4. What is the purpose of the Mentor Connect program?",
      answer:
        "The Mentor Connect program aims to connect experienced mentors with startups seeking guidance and support. By leveraging your expertise and knowledge, you can make a significant impact on the growth and success of these startups.",
    },
    {
      id: 5,
      question: "5. Who can become a mentor in the Mentor Connect program?",
      answer:
        "We welcome mentors from diverse backgrounds and industries. Whether you're an experienced entrepreneur, industry expert, or professional with specific skills and knowledge, you can contribute valuable insights to the startup community.",
    },
    {
      id: 6,
      question: "6. Will I be compensated for my mentorship efforts?",
      answer:
        "Yes, Mentor Connect is a commercial program. Additionally, participating as a mentor provides opportunities for professional growth, networking, and the satisfaction of helping startups succeed. Some mentorship programs may offer incentives or recognition for outstanding contributions.",
    },
  ];

  return (
    <div>
      <div className="faq-container">
        <div className="faq-parent-heading">
          <h2 className="text-2xl md:text-3xl">FAQs</h2>
        </div>
        <div className=" faq-button-container ">
          <button className="mentconnect"><Link to='/mentorConnect'> Mentor Connect</Link></button>
          <button className="investconnect"><Link to='/investorconnect'> Investor Connect</Link></button>
          <button className="grantconnect"><Link to='/grantsconnect'>Grants Connect</Link></button>
        </div>
        <div className=" faq-bottom-container p-12 max-sm:p-3">
          {questions.map((q) => (
            <Accordion key={q.id} question={q.question} answer={q.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
