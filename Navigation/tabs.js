import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image} from 'react-native';

import HomeScreen from '../Screens/HomeScreen';
import Projects from '../Screens/projects';
import Tasks from '../Screens/Tasks';
import Calendar from '../Screens/Calendar';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#000',
                    borderRadius: 15,
                    height: 90,
                }
            }}
        >
            <Tab.Screen name='Tasks' component={Tasks}
             options={{
               tabBarIcon: ({focused}) => (
                <Image
                    source={ require('../assets/Todolist.jpeg')}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                    }}
                />
               )
              }}
             />
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Projekte' component={Projects} />
            <Tab.Screen name='Calendar' component={Calendar} />
        </Tab.Navigator>
    );
}

export default Tabs;