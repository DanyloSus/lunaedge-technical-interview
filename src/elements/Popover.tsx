// libraries
import { ReactNode } from "react";

// styles
import "./Popover.css";

// types
type PopoverProps = {
  children: ReactNode;
  visible?: boolean;
};

const Popover = (props: PopoverProps) => {
  return (
    <div
      className="Popover"
      style={
        props.visible
          ? { display: "block" }
          : {} /* Special for storybook style */
      }
    >
      {props.children}
    </div>
  );
};

export default Popover;
