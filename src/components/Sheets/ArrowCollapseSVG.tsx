import React from "react";

type ArrowCollapseProps = {
  isActive: boolean;
};

const ArrowCollapseSVG: React.FC<ArrowCollapseProps> = ({
  isActive
}) => (
  <i style={{ marginRight: ".5rem" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        verticalAlign: "-.125em",
        marginBottom: "25%",
        transition: "transform 0.2s",
        transform: `rotate(${isActive ? 0 : -90}deg)`,
      }}
      width="16"
      height="8"
      viewBox="0 0 4.233 2.117"
    >
      <g
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        stroke="var(--color-contrast)"
        strokeWidth="3.773"
      >
        <path
          d="M2.131 1.865L.404.293M2.205 1.865L3.932.293"
          strokeWidth=".44113916"
        />
      </g>
    </svg>
  </i>
);

export default ArrowCollapseSVG;
