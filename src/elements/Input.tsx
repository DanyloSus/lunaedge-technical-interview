import { ReactElement } from "react";
import "./Input.css";

interface InputProps {
  label: string;
  id: string;
  required: boolean;
  type: "text" | "number" | "email";
  information: string;
  disabled: boolean;
  icon: ReactElement;
}

const Input = (props: InputProps) => {
  return (
    <div className="Input">
      <div className="Input__InfoBlock">
        <label htmlFor={props.id} className="Input__Label">
          {props.label}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="Input__InfoIcon"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <span className="Input__Info">
          {props.required ? "Required" : "Optional"}
        </span>
      </div>
      <div className="Input__InputBlock">
        {props.icon}
        <input
          type={props.type}
          id={props.id}
          required={props.required}
          className="Input__Input"
          disabled={props.disabled}
        />
      </div>
      <span className="Input__Info">{props.information}</span>
    </div>
  );
};

export default Input;
