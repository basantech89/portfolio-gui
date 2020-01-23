import React, { useState, useEffect } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";

export default function Skills() {
  const [src, setSrc] = useState(require("../../assets/images/flat.png"));
  let theme = window.localStorage.getItem('theme');

  useEffect(() => {
    if (theme === 'light') {
      setSrc(require("../../assets/images/work(3).png"));
    } else {
      setSrc(require('../../assets/images/programmer-man.png'));
    }
  }, [theme]);

  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <div className="skills-text-div">
          <h1 className="skills-heading">{skillsSection.title} </h1>
          <p className="subTitle skills-text-subtitle">{skillsSection.subTitle}</p>
          <SoftwareSkill />
          <div>
            {skillsSection.skills.map(skills => {
              return <p className="subTitle skills-text">{skills}</p>;
            })}
          </div>
        </div>
        <div className="skills-image-div">
          <img alt="Basant Working" className="skills-img" src={src}/>
        </div>
      </div>
    </div>
  );
}
