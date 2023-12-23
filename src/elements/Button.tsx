import "./Button.css";

interface ButtonProps {
  variant: "outline" | "primary" | "text";
  text: string;
  size: "xs" | "sm" | "base" | "lg" | "xl";
  disabled: boolean;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`Button ${props.variant} ${props.size}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="Button__Icon"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
          clipRule="evenodd"
        />
      </svg>
      {props.text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="Button__Icon"
      >
        <path
          fillRule="evenodd"
          d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default Button;
