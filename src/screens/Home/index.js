import React, {useCallback, useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GIPHY_SEARCH_LIMIT} from 'react-native-dotenv';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

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
  const [search, setSearch] = useState('');

  const onNavigate = useCallback(
    () =>
      navigation.navigate('Home', {
        categorie: search,
        limit: GIPHY_SEARCH_LIMIT,
      }),
    [navigation, search],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>What type of gifs you want ?</Text>
      <Input
        placeholder="Enter your input there..."
        leftIcon={<Icon name="search" size={24} color="black" />}
        onChangeText={text => setSearch(text)}
      />
      <Button
        style={{marginTop: '50px'}}
        title="Navigate Details"
        onPress={onNavigate}
      />
    </View>
  );
}
