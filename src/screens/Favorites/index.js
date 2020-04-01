import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Image} from 'react-native-elements';
import {styles} from './style';
import {GIPHY_API_KEY} from 'react-native-dotenv';

export default function Favorites({navigation, route}) {
  const [gifs, setGifs] = useState([]);
  const numColumn = 2;

  const getGif = useCallback(async () => {
    const uri = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${'test'}&limit=${25}`;
    const response = await fetch(uri);
    const body = await response.json();
    setGifs(body.data);
  }, []);

  useEffect(() => {
    getGif().catch(console.error);
  }, [getGif]);

  const _onPress = useCallback(
    value => {
      navigation.navigate('favoriteDetails.js', {
        id: value.item.id,
        title: value.item.title,
        username: value.item.username,
        imported: value.item.import_datetime,
        image: value.item.images.original,
      });
    },
    [navigation],
  );
  return (
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
                  source={{uri: value.item.images.original.url}}
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
  );
}
