import { Pressable, StyleSheet, View, Text } from "react-native"
import { ViewStyleProp } from "../types";
import { Column, Row } from "../common/Grid";

type Props = {
  text: string;
  radius: number;
};
export default function RoundButton({
  text,
  radius,
}: Props) {
  const style: ViewStyleProp = {
    borderRadius: radius,
  };
  return (
    <View style={[styles.roundButton]}>
      <Pressable>
        <View style={[styles.round]}></View>
      </Pressable>
      <Text>
        {text}
      </Text>
    </View>
  );
}

type RoundButtonGroupProps = {
  gutter?: number;
  left?: any;
  right?: any;
};
export function RoundButtonGroup({
  gutter = 10,
}: RoundButtonGroupProps) {
  const style: ViewStyleProp = {};
  return (
    <Column>
      <Row style={[styles.group, style]}>
        <Round />
        <Round />
      </Row>
      <Row gutter={gutter}>
        <Text></Text>
        <Text></Text>
      </Row>
    </Column>
  );
}

type RoundProps = {
  style?: ViewStyleProp;
};
function Round({
  style = {},
}: RoundProps) {
  return (
    <View style={[styles.round, style]}>
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    flexDirection: "row",
    borderRadius: 15,
    backgroundColor: "#E1F3F2",
    justifyContent: "center",
    alignItems: "center",
  },
  roundButton: {},
  round: {
    borderRadius: 12,
    width: 24,
    height: 24,
    backgroundColor: "#B4CBE7",
    margin: 3,
  },
  text: {

  },
});
