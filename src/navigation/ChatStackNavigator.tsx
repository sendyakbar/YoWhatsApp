import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatDetailScreen from '../screens/ChatDetailScreen';
import ContactDetailScreen from '../screens/ContactDetailScreen';

type ChatStackNavigatorParamList = {
  ChatDetailScreen: undefined;
  ContactDetailScreen: undefined;
};

const Stack = createNativeStackNavigator<ChatStackNavigatorParamList>();

export default function ChatStackNavigator(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatDetailScreen" component={ChatDetailScreen} />
      <Stack.Screen
        name="ContactDetailScreen"
        component={ContactDetailScreen}
      />
    </Stack.Navigator>
  );
}
