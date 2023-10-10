import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import PopupButton from './PopupButton';

function MapsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
      <PopupButton popupText="This is the Maps Screen" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
      <PopupButton popupText="This is the Profile Screen" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function GroupsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile Screen</Text>
      <PopupButton popupText="This is the Group Screen" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function ScheduleScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
      <PopupButton popupText="This is the Schedule Screen" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Maps" component={MapsScreen} />
        <Tab.Screen name="Groups" component={GroupsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Schedule" component={ScheduleScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
