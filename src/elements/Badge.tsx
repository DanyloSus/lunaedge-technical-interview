import "./Badge.css";

type BadgeProps = {
  name: string;
  delete: () => void;
};

const Badge = (props: BadgeProps) => {
  return (
    <div className="Badge" onClick={props.delete}>
      <span>{props.name}</span>
      <button className="Badge__Button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="Badge__Icon"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Badge;
