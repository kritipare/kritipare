import React from "react";
// import data from "./yourdata";
// import { DiReact, DiNodejs, DiPython, DiHtml5 } from "react-icons/di";
// import { DiReact } from "react-icons/di";
// import { FaPencil } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="container text-center">
      <h2>Skills</h2>
      <hr />
      <div className="row row-cols-3">
        <figure className="col">
          {/* <DiReact size="100px" /> */}
          <figcaption>React</figcaption>
        </figure>
        <figure className="col">
          {/* <DiReact size="100px" /> */}
          <figcaption>Node</figcaption>
        </figure>
        <figure className="col">
          {/* <DiReact size="100px" /> */}
          <figcaption>Python</figcaption>
        </figure>
        <figure className="col">
          {/* <DiReact size="100px" /> */}
          <figcaption>HTML5</figcaption>
        </figure>
      </div>
    </div>
    // <div className="section" id="skills">
    //   <div className="container">
    //     <div className="skills-container">
    //       <h1>Skills</h1>
    //       <div className="skills-grid">
    //         {data.skills.map((skill, index) => (
    //           <li>
    //             <div className="skill" key={index}>
    //               <DiReact />
    //               <img src={skill.img} alt="css"></img>
    //               <p>{skill.para}</p>
    //             </div>
    //           </li>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Skills;
