import { StyleSheet, View } from "react-native";

export default function Display() {
  return (
    <View style={styles.display}></View>
  );
}

const styles = StyleSheet.create({
  display: {
    width: 340,
    height: 80,
    margin: 10,
    backgroundColor: "#ABC2CD",
  },
});
