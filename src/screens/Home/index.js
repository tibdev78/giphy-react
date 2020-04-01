import React, {useCallback, useState} from 'react';
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
});

export default function Home({navigation}) {
  const [search, setSearch] = useState('');

  const onNavigate = useCallback(
    () =>
      navigation.navigate('Gif', {
        categorie: search,
        limit: parseInt(GIPHY_SEARCH_LIMIT, 10),
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
        buttonStyle={{marginTop: 50}}
        title="Let's see GIFS !"
        onPress={onNavigate}
      />
    </View>
  );
}
