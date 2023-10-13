import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import PopupButton from './PopupButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function MapsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Map Screen</Text>
      <PopupButton popupText="This is the Maps Screen" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile Screen</Text>
      <PopupButton popupText="This is the Profile Screen" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function GroupsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Group Screen</Text>
      <PopupButton popupText="This is the Group Screen" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function ScheduleScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Schedule Screen</Text>
      <PopupButton popupText="This is the Schedule Screen" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: true,
          headerTintColor: '#222428',
          headerTitleAlign: 'left',
          tabBarShowLabel: true,
          headerTitleStyle: {
            fontSize: 30, // Adjust the font size as needed
            paddingBottom: 50,
          },  
          tabBarStyle: {
            height: 90,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: '#222428',
            position: 'absolute',
            borderTopWidth: 0,
          },
})}
  >
        <Tab.Screen 
          name="Class Locations"
          component={MapsScreen} 
          options={{
            tabBarLabel: 'Map',
            tabBarActiveTintColor: '#0079FF', 
            headerStyle: {
              backgroundColor: '#0079FF',
            },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
          }}/>
        <Tab.Screen
          name="Groups"
          component={GroupsScreen} 
          options={{
            tabBarLabel: 'Groups',
            tabBarActiveTintColor: '#FF0060', 
            headerStyle: {
              backgroundColor: '#FF0060',
            },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="group" color={color} size={size} />
          ),
          }}/>
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarActiveTintColor: '#F6FA70', 
            headerStyle: {
              backgroundColor: '#F6FA70',
            },
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
            }}/>
        <Tab.Screen
          name="Schedule"
          component={ScheduleScreen}
          options={{
            tabBarActiveTintColor: '#00DFA2', 
            headerStyle: {
              backgroundColor: '#00DFA2',
            },
            tabBarLabel: 'Schedule',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calendar" color={color} size={size} />
            ),
            }}/>
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
