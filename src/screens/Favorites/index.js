import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Image} from 'react-native-elements';
import {styles} from './styleGif';
import AsyncStorage from '@react-native-community/async-storage';

export default function Favorites({navigation}) {
  const [gifs, setGifs] = useState([]);
  const numColumn = 2;

  const getGifs = useCallback(async () => {
    const storage = await AsyncStorage.getAllKeys();
    const favoritesKey = storage.filter(key => key.startsWith('favorite#'));
    const data = await AsyncStorage.multiGet(favoritesKey);
    setGifs(data.map(([key, value]) => JSON.parse(value)));
  }, []);
  getGifs();

  useEffect(() => {
    getGifs().catch(console.error);
  }, [getGifs]);

  const _onPress = useCallback(
    value => {
      navigation.navigate('FavoritesDetails', {
        id: value.item.id,
        title: value.item.title,
        username: value.item.username,
        imported: value.item.import_datetime,
        image: value.item.image,
      });
    },
    [navigation],
  );
  return gifs.length > 0 ? (
    <View>
      <FlatList
        data={gifs}
        numColumns={numColumn}
        renderItem={value => {
          return (
            <TouchableOpacity onPress={() => _onPress(value)}>
              <View style={styles.boxSize}>
                <Image
                  style={styles.image}
                  source={{uri: value.item.image.url}}
                  resizeMode="stretch"
                  PlaceholderContent={<ActivityIndicator />}
                />
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  ) : <View/>;
}
