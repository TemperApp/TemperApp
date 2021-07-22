import React from "react";
import { IonRange } from "@ionic/react";

type SettingRangeProps = {
  name?: string,
  value: number,
  attributes?: object,
  className?: string,
  classNameDefault?: string,
  classNameText?: string,
  classNameIonRange?: string,
  onChange?: (e: any) => void,
}

const SettingRange: React.FC<SettingRangeProps> = ({
  children,
  name = '',
  value,
  attributes = {},
  className = '',
  classNameDefault = 'flex items-center justify-between px-0',
  classNameText = 'pt-5',
  classNameIonRange = '',
  onChange = () => {},
}) => {
  return (
    <div className={`${classNameDefault} ${className}`}>
      <p className={`${classNameText}`}>
        {name}
      </p>
      <IonRange
        className={classNameIonRange}
        pin={true}
        value={value}
        onIonChange={onChange}
        {...attributes}
      >
        {children}
      </IonRange>
    </div>
  );
};

export default SettingRange;
