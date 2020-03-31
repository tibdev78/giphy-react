import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    boxSize: {
        width: 200,
        height: 'auto',
        backgroundColor: 'steelblue'
    },
    image: {
        aspectRatio: 1,
        borderRadius: 5,
    },
    containerDetails: {
        flex: 1
    },
    boxSizeGiphDetails: {
        width: 'auto',
        height: 'auto',
        backgroundColor: 'steelblue'
    },
    imageGiphDetails: {
        alignSelf: 'center',
        height: 220,
        width: '100%',
        borderWidth: 1,
    },
    textDetails: {
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: 'bold'
    },
    bottomDetails: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    textBottomDetails: {
        fontWeight: 'bold',
        fontSize: 16,
        fontStyle: 'italic',
        color: '#6F717C'
    }
});
