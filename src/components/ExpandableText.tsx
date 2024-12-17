import React, { useState } from "react";

interface ExpandableTextProps {
  children: React.ReactNode;
}
const ExpandableText = ({ children }: ExpandableTextProps) => {
  const [isExpanded, setExpanded] = useState(false);
  const text = isExpanded ? children : "...";

  return (
    <div>
      {text}
      {isExpanded ? <br /> : null}
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;
