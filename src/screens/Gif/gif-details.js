import React, {useCallback, useEffect} from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';
import { styles } from './style';

export default function GifDetails(props) {
    const {route, navigation} = props;
    console.log(route.params.image)
    useEffect(() => {
        // navigation.setParams({
        //     title: 'test'
        // });
    })
    return (
        <View style={styles.boxSizeGiphDetails}>
            <Image style={styles.image} source={{uri: route.params.image.url}} resizeMode='stretch' />
        </View>
    )
}