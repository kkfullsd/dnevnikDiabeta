import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {ListScreen} from './src/components/ListScreen'

import { YellowBox } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {

  

  YellowBox.ignoreWarnings([
    'Non-serializable values were found in the navigation state',
  ]);


  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Diary' >
        
        <Tab.Screen
          name="Diary"
          component={ListScreen}
        />

        {/* <Tab.Screen
          name="Добавить измерение"
          component={Add}
        /> */}

        </Tab.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
