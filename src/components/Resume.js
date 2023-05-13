import React from "react";

const Resume = () => {
  return (
    <div>
      <h3>Resume</h3>
      <p>Download my <a  href= "John_Wilday_Resume_2023.pdf" download= "John_Wilday_Resume_2023.pdf">Resume</a></p>
      <br/>
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
        <h3>Back-end Proficiencies</h3>
        <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
};

export default Resume;
