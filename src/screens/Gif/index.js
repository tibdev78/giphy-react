import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList, Image, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {GIPHY_API_KEY} from 'react-native-dotenv';

export default function Gif(props) {
  const [gifs, setGifs] = useState([]);
  const {navigation} = props;
  const numColumn = 2;

  useEffect(() => {
    async function getGif() {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=4`,
        );
        const body = await response.json();
        setGifs(body.data);
      } catch (err) {
        console.error(err);
      }
    }
    getGif();
  }, []);

  const _onPress = useCallback(
    value => {
      //console.log(value.item.images)
      navigation.navigate('GifDetails', {
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
