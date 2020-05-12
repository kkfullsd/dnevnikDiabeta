import React from 'react'
import {List} from './List'
import {Add} from './Add'
import {Pager} from './Pager'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export const ListScreen = () => {


    return (
        <Stack.Navigator>
        <Stack.Screen name="Дневник" component={Pager} />
        <Stack.Screen name="Добавить измерение" component={Add} />
      </Stack.Navigator>
    )
}