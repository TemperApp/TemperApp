import React from "react";

const ComparatorModalLegendSVG: React.FC = () => {
  return (    
    <svg
      id="legend-comparator"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px" y="0px" viewBox="0 50 530 410"
    >

      <path id="SelectTemp1" className="fill-1"
        d="M229.7,114H57.3c-3.5,0-6.3-2.8-6.3-6.3V81.3c0-3.5,2.8-6.3,6.3-6.3h172.4
          c3.5,0,6.3,2.8,6.3,6.3v26.4C236,111.2,233.2,114,229.7,114z"
      />

      <path id="SelectTemp2" className="fill-2"
        d="M459.7,114H287.3c-3.5,0-6.3-2.8-6.3-6.3V81.3c0-3.5,2.8-6.3,6.3-6.3h172.4
          c3.5,0,6.3,2.8,6.3,6.3v26.4C466,111.2,463.2,114,459.7,114z"
      />

      <text
        className="color-legend-theme"
        x="144" y="103"
        fontSize="1.3rem"
        textAnchor="middle"
      >
        TEMPÉRAMENT 1
      </text>
      <text
        className="color-legend-theme"
        x="374" y="103"
        fontSize="1.3rem"
        textAnchor="middle"
      >
        TEMPÉRAMENT 2
      </text>

      <path id="comparator-legend-outer-5th" className="fill-dark-1"
        d="M252.7,150.1c-79.6,0-144.1,64.5-144.1,144.1c0,79.6,64.5,144.1,144.1,144.1
          s144.1-64.5,144.1-144.1C396.8,214.6,332.3,150.1,252.7,150.1z M252.7,422.9c-71.1,0-128.7-57.6-128.7-128.7
          c0-71.1,57.6-128.7,128.7-128.7s128.7,57.6,128.7,128.7C381.4,365.3,323.8,422.9,252.7,422.9z"
      />

      <path id="comparator-legend-outer-3rd" className="fill-1"
        d="M252.7,165.5c-71.1,0-128.7,57.6-128.7,128.7c0,71.1,57.6,128.7,128.7,128.7
          s128.7-57.6,128.7-128.7C381.4,223.1,323.8,165.5,252.7,165.5z M252.7,407.4c-62.5,0-113.2-50.7-113.2-113.2
          c0-62.5,50.7-113.2,113.2-113.2s113.2,50.7,113.2,113.2C365.9,356.7,315.2,407.4,252.7,407.4z"
      />

      <path id="comparator-legend-inner-5th" className="fill-dark-2"
        d="M252.7,211.1c-45.9,0-83,37.2-83,83.1c0,45.9,37.2,83.1,83,83.1s83-37.2,83-83.1
          C335.7,248.3,298.5,211.1,252.7,211.1z M252.7,363.1c-38.1,0-68.9-30.9-68.9-68.9c0-38.1,30.9-68.9,68.9-68.9
          c38.1,0,68.9,30.9,68.9,68.9C321.6,332.3,290.8,363.1,252.7,363.1z"
      />

      <path id="comparator-legend-inner-3rd" className="fill-2"
        d="M252.7,225.3c-38.1,0-68.9,30.9-68.9,68.9c0,38.1,30.9,68.9,68.9,68.9
          c38.1,0,68.9-30.9,68.9-68.9C321.6,256.1,290.8,225.3,252.7,225.3z M252.7,349c-30.3,0-54.8-24.6-54.8-54.8
          c0-30.3,24.5-54.8,54.8-54.8c30.3,0,54.8,24.6,54.8,54.8C307.5,324.5,283,349,252.7,349z"
      />

      <line className="line-legend-comparator" x1="366.5" y1="410.6" x2="305" y2="350"/>
      <line className="line-legend-comparator" x1="378.1" y1="398.6" x2="358" y2="380"/>
      <line className="line-legend-comparator" x1="370.8" y1="190.5" x2="301" y2="256"/>
      <line className="line-legend-comparator" x1="361" y1="179" x2="333" y2="204"/>

      <text
        className="color-legend-theme"
        x="371" y="180"
        fontSize="1.25rem"
      >
        TIERCES
      </text>
      <text
        className="color-legend-theme"
        x="373" y="420"
        fontSize="1.25rem"
      >
        QUINTES
      </text>
    </svg>
    );
};

export default ComparatorModalLegendSVG;
