import { StyleSheet, View, Text } from "react-native";
import { ViewStyleProp } from "./types";
import Display from "./display";
import Keyboard from "./keyboard";

type Props = {
  style?: ViewStyleProp;
};
export default function Calculator({
  style = {},
}: Props) {
  return (
    <View style={[styles.calculator, style]}>
      <Header />
      <Display />
      <Keyboard padding={10} gutter={10} />
      <Footer />
    </View>
  );
}

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Text style={styles.headerText}>連邦生徒会</Text>
      </View>
      <View style={styles.headerRight}>
        <Text style={[styles.headerStar, {color: "#CAE2FF"}]}>✦</Text>
        <Text style={[styles.headerStar, {color: "#DC85FB"}]}>✦</Text>
      </View>
    </View>
  );
}

function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Arathi of Kivotos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  calculator: {
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#F8FAF9",
  },
  header: {
    flexDirection: 'row',
    width: 360,
    padding: 10,
    backgroundColor: "#3D67C6",
  },
  headerLeft: {
    flex: 1,
  },
  headerText: {
    color: "#ffffff",
    fontSize: 20,
  },
  headerRight: {
    flexDirection: 'row',
  },
  headerStar: {
    fontSize: 20,
  },
  footer: {
    justifyContent: 'center',
    alignItems: "center",
    padding: 5,
  },
  footerText: {
    color: "#9FABB9",
  },
});
