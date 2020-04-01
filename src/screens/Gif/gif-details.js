import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './style';
import Moment from 'react-moment';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function GifDetails({route: {params}}) {
  const [selected, setSelected] = useState(false);
  console.log(selected);
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
