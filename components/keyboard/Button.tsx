import { Pressable, StyleSheet, View } from "react-native";
import { ViewStyleProp } from "../types";

type Props = {
  width: number;
};
export default function Button({
  width,
}: Props) {
  const height = width * 1;
  const style: ViewStyleProp = {
    width: width,
    height: height,
  };

  const upper: React.ReactNode = [];
  const lower: React.ReactNode = [];

  return (
    <View style={[styles.container, style]}>
      {upper}
      <Pressable>
        <View style={[styles.button]}>
        </View>
      </Pressable>
      {lower}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "green",
    borderWidth: 1,
  },
  button: {},
});
