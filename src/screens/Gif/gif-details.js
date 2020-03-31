import React, {useCallback, useEffect} from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';
import { styles } from './style';
import Moment from 'react-moment';

export default function GifDetails(props) {
    const {route, navigation} = props;
    useEffect(() => {
        // navigation.setParams({
        //     title: 'test'
        // });
    })
    return (
        <View style={styles.containerDetails}>
            <View style={styles.boxSizeGiphDetails}>
                <Image style={styles.imageGiphDetails} source={{uri: route.params.image.url}} resizeMode='stretch' />
            </View>
            <View>
                <Text style={styles.textDetails}>{route.params.title}</Text>
            </View>
            <View style={styles.bottomDetails}>
                <Text style={styles.textBottomDetails}>
                    imported the <Moment element={Text} format="DD/MM/YYYY">
                        {route.params.imported}
                    </Moment>
                </Text>
            </View>
        </View>
    )
}