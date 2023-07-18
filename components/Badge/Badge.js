import React from "react";

const Badge = (props) => {
  const { className = "", children } = props;

  return <div className={`styled_badge ${className}`}>{children}</div>;
};

export default Badge;
