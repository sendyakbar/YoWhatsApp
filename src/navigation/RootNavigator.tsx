import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainTabNavigator from './MainTabNavigator';
import ChatStackNavigator from './ChatStackNavigator';

type RootNavigatorParamList = {
  MainTabNavigator: undefined;
  ChatStackNavigator: undefined;
};

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export default function RootNavigator(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
      <Stack.Screen name="ChatStackNavigator" component={ChatStackNavigator} />
    </Stack.Navigator>
  );
}
