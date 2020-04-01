import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './style';
import Moment from 'react-moment';

export default function GifDetails({route: {params}}) {
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
    </View>
  );
}
