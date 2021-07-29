import * as React from "react";
import "./Highlight.css";

export const getHighlightConditionalClasses = (conditions: any) => {
  const {
    labelPosition,
    label,
    color,
    isClickable,
    selectedId,
    isClicking,
    id,
    activeDepths,
    deepestIndex,
    activeIds,
    children,
  } = conditions;
  return `highlight
    ${labelPosition ? labelPosition : label ? "bottom" : ""}
    ${color ? color : "blue"}
    ${isClickable ? "clickable" : ""}
    ${selectedId && selectedId === id ? "selected" : ""}
    ${
      isClicking && activeDepths.ids[deepestIndex] === id
        ? "clicking active"
        : ""
    }
    ${!isClicking && activeIds && activeIds.includes(id) ? "active" : ""}
    ${typeof children === "string" && children.length < 8 ? "short-text" : ""}`;
};

interface HighlightProps extends React.ComponentProps<any> {
  activeDepths?: { id: []; depths: number[] };
  activeIds?: string[] | number[];
  color?: string;
  depth?: number;
  id?: string | number;
  isClickable?: boolean;
  isClicking?: boolean;
  label?: string;
  labelPosition?: string; // (supported values: "top", "left", "right", "bottom")
  onClick?: (id: string | number) => void;
  onMouseDown?: (id: string | number, depth: number) => void;
  onMouseOver?: (id: string | number) => void;
  onMouseOut?: (id: string | number) => void;
  onMouseUp?: (id: string | number) => void;
  selectedId?: string | number;
  secondaryLabel?: string;
  tooltip?: string;
}

export const Highlight = (props: HighlightProps) => {
  const {
    activeDepths,
    activeIds,
    children,
    color,
    depth,
    id,
    isClickable,
    isClicking,
    label,
    labelPosition,
    onClick,
    onMouseDown,
    onMouseOver,
    onMouseOut,
    onMouseUp,
    selectedId,
    secondaryLabel,
    tooltip,
  } = props;

  const deepestIndex = activeDepths
    ? activeDepths.depths.indexOf(Math.max(...activeDepths.depths))
    : null;
  const conditionalClasses = getHighlightConditionalClasses({
    labelPosition,
    label,
    color,
    isClickable,
    selectedId,
    isClicking,
    id,
    activeDepths,
    deepestIndex,
    activeIds,
    children,
  });

  const labelTemplate = (
    <span className="highlight__label">
      <strong>{label}</strong>
      {secondaryLabel ? (
        <span className="highlight__label__secondary-label">
          {secondaryLabel}
        </span>
      ) : null}
    </span>
  );
  return (
    <span
      style={props.style}
      className={conditionalClasses}
      data-label={label}
      data-id={id}
      data-depth={depth}
      onClick={onClick ? () => onClick(id) : null}
      onMouseDown={onMouseDown ? () => onMouseDown(id, depth) : null}
      onMouseOver={onMouseOver ? () => onMouseOver(id) : null}
      onMouseOut={onMouseOut ? () => onMouseOut(id) : null}
      onMouseUp={onMouseUp ? () => onMouseUp(id) : null}
    >
      {labelPosition === "left" || labelPosition === "top"
        ? labelTemplate
        : null}
      {children ? <span className="highlight__content">{children}</span> : null}
      {(label || label !== null) &&
      labelPosition !== "left" &&
      labelPosition !== "top"
        ? labelTemplate
        : null}
      {tooltip ? <span className="highlight__tooltip">{tooltip}</span> : null}
    </span>
  );
};
