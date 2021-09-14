import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import {Agenda} from '../Screens/Calendar';

const HomeScreen= ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text> Coming Soon: </Text>
            <Text> o Calendar </Text>
            <Text> o News </Text>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc',
    },
});