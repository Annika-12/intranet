import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image, View ,StyleSheet} from 'react-native';

import HomeScreen from '../Screens/HomeScreen';
import Projects from '../Screens/projects';
import Tasks from '../Screens/Tasks';
import Calendar from '../Screens/Calendar';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'relative',
                    elevation: 0,
                    backgroundColor: '#c8a771',
                    height: 90,
                    ... styles.shadow
                }
            }}
        >
            <Tab.Screen
                name="Tasks"
                component={Tasks}
                options= {{
                    tabBarIcon: ({focused}) => (
                     <View style={{ alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('../assets/Todolist.jpeg')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                            }}
                        />

                    </View>
                )
            }}

            />

            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Projekte' component={Projects} />
            <Tab.Screen name='Calendar' component={Calendar} />
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width:0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
});

export default Tabs;