import React from "react";

type ArrowCollapseProps = {
  statePanel: boolean;
};

const ArrowCollapseSVG: React.FC<ArrowCollapseProps> = ({ statePanel }) => {
  return (
    <i style={{ marginRight: ".5rem" }}>
      <svg
        width="15"
        height="7"
        viewBox="0 0 15 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          width="15"
          height="7"
          fill="url(#pattern0)"
          style={{
            verticalAlign: "-.125em",
            transition: "transform 0.2s",
            transform: `rotate(${statePanel ? 90 : 0}deg)`,
          }}
        />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0"
              transform="translate(0 -0.0357142) scale(0.00847458 0.0181598)"
            />
          </pattern>
          <image
            id="image0"
            width="118"
            height="59"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </i>
  );
};

export default ArrowCollapseSVG;
