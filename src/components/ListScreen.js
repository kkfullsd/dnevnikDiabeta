import React from 'react'
import {View, Image} from 'react-native'
import {List} from './List'
import {Add} from './Add'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export const ListScreen = () => {


    return (
        <Stack.Navigator>
        <Stack.Screen name="Дневник" component={List} />
        <Stack.Screen name="Добавить измерение" component={Add} />
      </Stack.Navigator>
    )
}