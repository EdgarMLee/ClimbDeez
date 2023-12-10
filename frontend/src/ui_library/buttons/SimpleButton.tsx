import React, { ReactNode } from "react";

("use strict");

type SimpleButtonPropsType = {
  label: string;
  onClickFn: () => void;
  onHoverFn: () => void;
};

const SimpleButton = (props: SimpleButtonPropsType): ReactNode => {
  const { label, onClickFn, onHoverFn } = props;
  return (
    <button
      className="Simple-Button"
      onClick={() => onClickFn()}
      onMouseEnter={() => onHoverFn}>
      {label}
    </button>
  );
};

export default SimpleButton;
