import { ReactNode } from "react";

import "./Popover.css";

type PopoverProps = {
  children: ReactNode;
};

const Popover = (props: PopoverProps) => {
  return <div className="Popover">{props.children}</div>;
};

export default Popover;
