import React from "react";

const Resume = () => {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "50px"}}>
        <h3>Resume</h3>
        <p>
          Download my{" "}
          <a
            href="John_Wilday_Resume_2023.pdf"
            download="John_Wilday_Resume_2023.pdf"
          >
            Resume
          </a>
        </p>
      </div>
      <div className="container" style={{marginBottom: "60px"}}>
        <div className="row">
          <div className="col" style={{marginLeft: "190px"}}>
            <h3>Front-end Proficiencies</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>responsive design</li>
              <li>PWA</li>
              <li>Redux</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="col">
            <h3>Back-end Proficiencies</h3>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
