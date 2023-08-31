import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StatusScreen from '../screens/StatusScreen';
import CallsScreen from '../screens/CallsScreen';
import CommunitiesScreen from '../screens/CommunitiesScreen';
import ChatsScreen from '../screens/ChatsScreen';
import SettingsScreen from '../screens/SettingsScreen';

type RootNavigatorParamList = {
  StatusScreen: undefined;
  CallsScreen: undefined;
  CommunitiesScreen: undefined;
  ChatsScreen: undefined;
  SettingsScreen: undefined;
};

const Tab = createBottomTabNavigator<RootNavigatorParamList>();

export default function RootNavigator(): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen name="StatusScreen" component={StatusScreen} />
      <Tab.Screen name="CallsScreen" component={CallsScreen} />
      <Tab.Screen name="CommunitiesScreen" component={CommunitiesScreen} />
      <Tab.Screen name="ChatsScreen" component={ChatsScreen} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
