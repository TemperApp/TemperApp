import React from 'react';
import { vec2 } from '../../utils/maths';
import Ring from './Ring';

type LabelsRingProps = {
  labels: string[],
  fill?: string,
  c: vec2,
  innerR: number,
  outerR: number,
  fontSize?: number,
  hasStroke?: boolean;
  attributes?: any,
};

const LabelsRing: React.FC<LabelsRingProps> = ({
  labels,
  fill = 'transparent',
  c,
  innerR,
  outerR,
  fontSize,
  hasStroke = false,
  attributes = {},
}) => {
  return (
    <Ring innerR={innerR} outerR={outerR} c={c}
      data={labels.map((label) => ({ label, fill }))}
      hasStroke={hasStroke}
      fontSize={fontSize}
      isTextHorizontal
      {...attributes} />
  );
};

export default React.memo(
  LabelsRing,
  (prevProps, nextProps) => (
    prevProps.labels === nextProps.labels &&
    prevProps.c === nextProps.c &&
    prevProps.innerR === nextProps.innerR &&
    prevProps.outerR === nextProps.outerR &&
    prevProps.hasStroke === nextProps.hasStroke &&
    prevProps.attributes === nextProps.attributes
  )
);
