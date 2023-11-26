import React from 'react';
import "./skill.css"

const Skill = ({ label, percentage }) => {
  return (
    <div className="skill">
      <div className="label">{label}</div>
      <div className="background">{percentage}%</div>
      <div className="fill" style={{ width: `${percentage - 20}%` }}></div>
    </div>
  );
};

export default Skill;
