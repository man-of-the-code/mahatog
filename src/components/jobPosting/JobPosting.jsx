// components/JobPosting.js
import styles from './jobposting.module.css';


export default function JobPosting() {
  return (
    <div className={styles.jobposting}>
      <h1>Job Title: [Position Name]</h1>
      <p><strong>Company:</strong> [Your Company Name]</p>
      <p><strong>Location:</strong> [City, State/Country or Remote]</p>
      <p><strong>Job Type:</strong> [Full-Time/Part-Time/Contract/Internship]</p>
      <p><strong>Salary:</strong> [Optional: Salary Range or “Competitive”]</p>
      {/* <p><strong>Application Deadline:</strong> [Date, if applicable]</p> */}

      {/* <h2>About Us</h2>
      <p>[Briefly introduce your company, its mission, culture, and what makes it a great place to work.]</p> */}

      {/* <h2>Job Description</h2>
      <p>[Summarize the role in a few sentences. Mention the main purpose and impact of the position.]</p> */}

      {/* <h2>Key Responsibilities</h2> */}
      {/* <ul> */}
        {/* <li>[Responsibility #1]</li>
        <li>[Responsibility #2]</li>
        <li>[Responsibility #3]</li> */}
        {/* Add more as needed */}
      {/* </ul> */}

      {/* <h2>Qualifications</h2> */}
      {/* <ul> */}
        {/* <li>[Required qualification #1]</li>
        <li>[Required qualification #2]</li>
        <li>[Preferred qualification #1, if any]</li> */}
        {/* Add more as needed */}
      {/* </ul> */}

      {/* <h2>Skills & Competencies</h2> */}
      {/* <ul> */}
        {/* <li>[Skill #1]</li>
        <li>[Skill #2]</li>
        <li>[Skill #3]</li> */}
        {/* Add more as needed */}
      {/* </ul> */}

      {/* <h2>Benefits</h2> */}
      {/* <ul> */}
        {/* <li>[Benefit #1, e.g., Health insurance]</li>
        <li>[Benefit #2, e.g., Flexible hours]</li> */}
        {/* Add more as needed */}
      {/* </ul> */}

      <h2>How to Apply/Contact</h2>
      <p>
        mobile number/WhatsApp :
      </p>
      <p>
        email :
      </p>

      {/* <h2>Equal Opportunity Statement</h2>
      <p>
        [Optional, but recommended: "We are an equal opportunity employer and value diversity at our company. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status."]
      </p> */}
    </div>
  );
}
