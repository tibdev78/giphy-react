import React, {useCallback} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default function Home({navigation}) {
  const onNavigate = useCallback(() => navigation.navigate('Details'), [
    navigation,
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to HOME</Text>
      <Button title="Navigate Details" onPress={onNavigate} />
    </View>
  );
}
