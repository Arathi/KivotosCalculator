import { StyleSheet, View } from "react-native";
import { ViewStyleProp } from "../types";
import React from "react";

type Props = {
  style?: ViewStyleProp;
};
export default function Grid({
  style = {},
}: Props) {
  return (
    <View style={[styles.grid, style]}>
    </View>
  );
}

type RowProps = {
  gutter?: number;
  style?: ViewStyleProp;
  children: React.ReactNode;
};
export function Row({
  gutter = 0,
  style = {},
  children = [],
}: RowProps) {
  const cells: React.ReactNode[] = [];
  if (React.Children.count(children)) {
    React.Children.map(children, (child, index) => {
      const cellStyle: ViewStyleProp = {
        marginLeft: index > 0 ? gutter : 0,
      };
      cells.push(<Cell style={cellStyle}>{child}</Cell>);
    });
  }
  
  return (
    <View style={[styles.row, style]}>
      {cells}
    </View>
  );
}

type ColumnProps = {
  style?: ViewStyleProp;
  children: React.ReactNode;
};
export function Column({
  style = {},
  children = [],
}: ColumnProps) {
  return (
    <View style={[styles.column, style]}>
      {children}
    </View>
  );
}

type CellProps = {
  children: React.ReactNode;
  style?: ViewStyleProp;
};
export function Cell({
  children,
  style = {},
}: CellProps) {
  return (
    <View style={[styles.cell, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cell: {},
});
