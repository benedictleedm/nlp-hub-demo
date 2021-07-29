import * as React from "react";
import "./HighlightContainer.css";

/*******************************************************************************
  This is a Wrapper for <Highlight /> that sets
  container CSS classes that get inherited.
*******************************************************************************/

interface HighlightContainerProps extends React.ComponentProps<any> {
  isClicking?: boolean;
  layout?: string; // (supported values: "bottom-labels", null)
  className?: string;
}

export const HighlightContainer = (props: HighlightContainerProps) => {
  const { children, isClicking, layout, className } = props;

  const containerClasses = `passage
      model__content__summary
      highlight-container
      ${layout ? "highlight-container--" + layout : ""}
      ${isClicking ? "clicking" : ""}
      ${className || ""}`;

  return <div className={containerClasses}>{children}</div>;
};
