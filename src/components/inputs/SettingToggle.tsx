import React from "react";
import { IonToggle } from "@ionic/react";

type SettingToggleProps = {
  name?: string,
  checked?: boolean,
  value?: string,
  className?: string,
  classNameDefault?: string,
  classNameText?: string,
  classNameToggle?: string,
  onClick?: (e: any) => void,
}

const SettingToggle: React.FC<SettingToggleProps> = ({
  name = '',
  checked = false,
  value = '',
  className = '',
  classNameDefault = 'flex items-center justify-between px-0 my-3',
  classNameText = 'pt-1',
  classNameToggle = '',
  onClick = () => {},
}) => {
  return (
    <div className={`${classNameDefault} ${className}`}>
      <p className={`${classNameText}`}>
        {name}
      </p>
      <IonToggle
        className={classNameToggle}
        checked={checked}
        value={value}
        onClick={onClick}
      />
    </div>
  );
};

export default SettingToggle;
