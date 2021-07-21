import React from "react";
import { IonInput } from "@ionic/react";

type InputType = "checkbox" | "color" | "date"
  | "datetime-local" | "email" | "file" | "hidden"
  | "image" | "month" | "number" | "password"
  | "radio" | "range" | "reset" | "search"
  | "submit" | "tel" | "text" | "time" | "url" | "week"

type SettingInputProps = {
  name?: string,
  type?: InputType,
  value?: string | number,
  placeholder?: string,
  attributes?: object,
  className?: string,
  classNameDefault?: string,
  classNameText?: string,
  classNameInput?: string,
  onChange?: (e: any) => void,
}

const SettingInput: React.FC<SettingInputProps> = ({
  name = '',
  type = 'text',
  value = '',
  placeholder = '',
  attributes = {},
  className = '',
  classNameDefault = 'flex items-center justify-between px-0 my-3',
  classNameText = 'pt-1',
  classNameInput = '',
  onChange = () => {},
}) => {
  return (
    <div className={`${classNameDefault} ${className}`}>
      <p className={`${classNameText}`}>
        {name}
      </p>
      <IonInput
        className={classNameInput}
        type={type as any}
        value={value}
        placeholder={placeholder}
        onIonChange={onChange}
        {...attributes}
      />
    </div>
  );
};

export default SettingInput;
