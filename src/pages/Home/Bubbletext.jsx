import React from 'react';

const BubbleText = ({text}) => {
  return (
    <span className="bubbleText">
      {text.split("").map((child, idx) => (
        <span className="hoverText" key={idx}>
          {child}
        </span>
      ))}
    </span>
  );
};

export default BubbleText;
