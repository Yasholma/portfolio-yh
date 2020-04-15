import React from "react";

import "./skill-item.styles.scss";

const SkillItem = ({ image, title, status }) => {
  return (
    <div className="skill-item">
      <img
        src={image}
        title={title}
        alt={title}
        className="skill-item__image"
      />
      <div className="skill-item__desc">
        <p>{title}</p>
        <span>{status}</span>
      </div>
    </div>
  );
};

export default SkillItem;
