import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { styles } from './style';



export default function Home({navigation, route}) {
  const [gifsFavorite, setGifsFavorite] = useState([]);
  const numColumn = 1;

  useEffect(() => {
    async function getGifs() {
      try {
        const stringIds = "";
        if (route.params) {
          stringIds = route.params.toString();
        }
        const response = await fetch(
            `https://api.giphy.com/v1/gifs?api_key=8a16rkgiy4UWDwIMZjmyvphE41dH0e0I&ids=SGkufeMafyuBhIw796,W3keANaGsQLC5Ri8DM`
        );
        const body = await response.json();
        setGifsFavorite(body.data)
      } catch(err) {
          console.error(err);
      }
    }
    getGifs();
  }, [])

  return (
    <View>
       <FlatList 
          data={gifsFavorite}
          numColumns={numColumn}
          renderItem={value => {
              return (
                <View style={styles.container}>
                    <View style={styles.boxSize}>
                      <Image 
                      style={styles.image} 
                      source={{uri: value.item.images.original.url}} 
                      resizeMode='stretch' 
                      PlaceholderContent={<ActivityIndicator />}/>
                    </View>
                </View>
              )
          }}
          keyExtractor={item => item.id}
      >
      </FlatList>
    </View>
  );
}
