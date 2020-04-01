import React, {useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './styleDetails';
import Moment from 'react-moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

const storeData = async params => {
  await AsyncStorage.setItem(`favorite#${params.id}`, JSON.stringify(params));
};

const removeData = async itemId =>
  AsyncStorage.removeItem(`favorite#${itemId}`);

export default function FavoriteDetails({route: {params}}) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selected) {
      storeData(params).catch(console.error);
    }
    if (!selected) {
      removeData(params.id).catch(console.error);
    }
  }, [selected, params]);

  return (
    <View style={styles.containerDetails}>
      <View style={styles.boxSizeGiphDetails}>
        <Image
          style={styles.imageGiphDetails}
          source={{uri: params.image.url}}
          resizeMode="stretch"
        />
      </View>
      <View>
        <Text style={styles.textDetails}>{params.title}</Text>
      </View>
      <View style={styles.bottomDetails}>
        <Text style={styles.textBottomDetails}>
          Uploaded the{' '}
          <Moment element={Text} format="DD/MM/YYYY">
            {params.imported}
          </Moment>
        </Text>
      </View>
      <Icon
        style={{textAlign: 'center', marginTop: 75}}
        name="heart"
        size={100}
        color={selected ? 'red' : 'grey'}
        onPress={() => setSelected(!selected)}
      />
    </View>
  );
}
