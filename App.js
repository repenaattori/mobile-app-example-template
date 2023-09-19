import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Messages from './components/SendMessage';
import MessageList from './components/MessageList';
import { IconButton, MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { createContext, useState } from 'react';
import SendMessages from './components/SendMessage';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
      <PaperProvider theme={MyTheme}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen 
              name='Add message' 
              component={SendMessages} 
              options={{tabBarIcon: () => <IconButton icon='cube-send' size={40}/>}}/>
            <Tab.Screen 
              name='All messages' 
              component={MessageList} 
              options={{tabBarIcon: () => <IconButton icon='format-list-bulleted' size={40}/>}}/>
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
 
  );
}

const MyTheme = {
  ...MD3LightTheme,
  roundness: 2
}
