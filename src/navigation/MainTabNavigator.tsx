import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StatusScreen from '../screens/StatusScreen';
import CallsScreen from '../screens/CallsScreen';
import CommunitiesScreen from '../screens/CommunitiesScreen';
import ChatsScreen from '../screens/ChatsScreen';
import SettingsScreen from '../screens/SettingsScreen';

type MainTabNavigatorParamList = {
  StatusScreen: undefined;
  CallsScreen: undefined;
  CommunitiesScreen: undefined;
  ChatsScreen: undefined;
  SettingsScreen: undefined;
};

const Tab = createBottomTabNavigator<MainTabNavigatorParamList>();

export default function MainTabNavigator(): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="StatusScreen"
        component={StatusScreen}
        options={{title: 'Status'}}
      />
      <Tab.Screen
        name="CallsScreen"
        component={CallsScreen}
        options={{title: 'Calls'}}
      />
      <Tab.Screen
        name="CommunitiesScreen"
        component={CommunitiesScreen}
        options={{title: 'Communities'}}
      />
      <Tab.Screen
        name="ChatsScreen"
        component={ChatsScreen}
        options={{title: 'Chats'}}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{title: 'Settings'}}
      />
    </Tab.Navigator>
  );
}
