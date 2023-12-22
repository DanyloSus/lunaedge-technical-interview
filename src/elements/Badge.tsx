import "./Badge.css";

type BadgeProps = {
  name: string;
  type: "add" | "delete";
  onClick: () => void;
};

const Badge = (props: BadgeProps) => {
  return (
    <div className="Badge" onClick={props.onClick}>
      <span
        className={`${
          props.type === "delete" ? "Badge__Text_Delete" : "Badge__Text_Add"
        }`}
      >
        {props.name}
      </span>
      {props.type === "delete" ? (
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
      ) : null}
    </div>
  );
};

export default Badge;
