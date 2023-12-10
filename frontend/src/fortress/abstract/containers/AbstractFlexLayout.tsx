import React, { ReactChildren, ReactNode } from "react";

/**
 * This element is meant to have basic CSS properties that can shared across
 * many use cases.
 */
type AbstractFlexLayoutPropsType = {
  children: Array<ReactNode>;
};
const AbstractFlexLayout = (props: AbstractFlexLayoutPropsType): ReactNode => {
  return <div className="AbstractFlexLayout">{props.children}</div>;
};
