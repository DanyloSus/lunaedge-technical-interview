import { ReactNode } from "react";

import "./Popover.css";

type PopoverProps = {
  children: ReactNode;
  visible?: boolean;
};

const Popover = (props: PopoverProps) => {
  return (
    <div className="Popover" style={props.visible ? { display: "block" } : {}}>
      {props.children}
    </div>
  );
};

export default Popover;
