import { css } from "@styled-system/css";
import {
  grid as styledGrid,
  GridProps as StyledGridProps,
  styleFn,
} from "styled-system";

export const defaultColumns = ["repeat(6, 1fr)", null, "repeat(12, 1fr)"];

function getColumnsWithUnits(column) {
  if (typeof column === "string") {
    return column;
  }

  return `repeat(${column}, 1fr)`;
}

type ColumnType = number | string;

interface IColumns {
  sm?: ColumnType;
  md?: ColumnType;
  lg?: ColumnType;
}

function filledInColumns(columns: IColumns) {
  return [columns.sm || null, columns.md || null, columns.lg || null];
}

export function getColumnsFromArgs(columnArgs?: Array<ColumnType> | IColumns) {
  if (!columnArgs) {
    return defaultColumns;
  }

  if (Array.isArray(columnArgs)) {
    return columnArgs.map((columnArg) => getColumnsWithUnits(columnArg));
  }
}

export function getGridColumns(
  columns?: ColumnType | Array<ColumnType> | IColumns
) {
  if (!columns) {
    return null;
  }

  if (typeof columns === "string" || typeof columns === "number") {
    return [columns];
  }

  if (Array.isArray(columns)) {
    return columns;
  }

  return filledInColumns(columns);
}

const gridParent: styleFn = (arg) => {
  if (!arg.gridParent) {
    return styledGrid(arg);
  }

  return css({
    display: "grid",
    gridColumnGap: ["2px", null, "4px"],
    gridTemplateColumns: getColumnsFromArgs(arg.columns),
    gridColumn: getGridColumns(arg.gridColumn),
  });
};

interface GridParentProps {
  gridParent?: boolean;
  columns?: ColumnType | Array<ColumnType> | IColumns;
}

export const grid = gridParent;
export type GridProps = StyledGridProps & GridParentProps;
