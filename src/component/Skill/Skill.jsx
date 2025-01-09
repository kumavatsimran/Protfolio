import React from 'react';
import '../Skill/skill.css';

const frontendSkills = ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'];
const backendSkills = ['Node.js', 'Express.js',  'MongoDB'];
const tools = ['GitHub', 'VS Code', 'render', 'Postman','firebase'];

const Skill= () => {
  return (
    <section className="skills" id="skill">
      <h1 className="text-white text-center my-name mb-5">
        MY <span className="name">SKILLS</span>
      </h1>
      <div className="container">
        <div className="skills-container row justify-content-center gap-4">
          <SkillBox title="Front End" skills={frontendSkills} />
          <SkillBox title="Back End" skills={backendSkills} />
          <SkillBox title="Tools" skills={tools} />
        </div>
      </div>
    </section>
  );
};

const SkillBox = ({ title, skills }) => {
  return (
    <div className="skill-box text-center col-md-3">
      <h3 className="skill-title">{title}</h3>
      <ul className="skill-list">
        {skills.map((skill, i) => (
          <li key={i} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
