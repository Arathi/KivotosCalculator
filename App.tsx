import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RecoilRoot } from 'recoil';
import Calculator from './components/Calculator';

export default function App() {
  return (
    <RecoilRoot>
      <RecoilApp />
    </RecoilRoot>
  );
}

function RecoilApp() {
  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
