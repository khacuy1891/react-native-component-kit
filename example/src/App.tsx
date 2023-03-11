import * as React from 'react';

import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { multiply, AppWebView } from 'react-native-component-kit';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Result: {result}</Text>
        <AppWebView source={{ uri: 'https://google.com.vn' }} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
});
