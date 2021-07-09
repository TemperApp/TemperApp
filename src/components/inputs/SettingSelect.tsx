import React from "react";
import { IonSelect, IonSelectOption } from "@ionic/react";

export type SettingSelectOption = {
  label: string,
  value: string,
}

type SettingSelectProps = {
  name?: string,
  value: string,
  placeholder?: string,
  options?: SettingSelectOption[],
  okText?: string,
  cancelText?: string,
  className?: string,
  classNameDefault?: string,
  classNameText?: string,
  classNameSelect?: string,
};

const SettingSelect: React.FC<SettingSelectProps> = ({
  name = '',
  value,
  placeholder = '',
  options = [],
  okText = 'Valider',
  cancelText = 'Annuler',
  className = '',
  classNameDefault = 'flex items-center justify-between px-0 my-3',
  classNameText = 'pt-1',
  classNameSelect = '',
}) => {
  return (
    <div className={`${classNameDefault} ${className}`}>
      <p className={`${classNameText}`}>
        {name}
      </p>
        <IonSelect
          className={classNameSelect}
          placeholder={placeholder}
          value={value}
          okText={okText}
          cancelText={cancelText}
        >
          { options.map(({label, value}, idx) => (
              <IonSelectOption
                key={idx}
                value={value}
              >
                {label}
              </IonSelectOption>
          ))}
        </IonSelect>
    </div>
  );
};

export default SettingSelect;
