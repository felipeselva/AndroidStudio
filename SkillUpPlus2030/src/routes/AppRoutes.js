import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'; 

import { AuthContext } from '../context/AuthContext';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import CoursesScreen from '../screens/CoursesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Início') iconName = 'home';
          else if (route.name === 'Cursos') iconName = 'library';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2980b9',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Cursos" component={CoursesScreen} />
    </Tab.Navigator>
  );
}

function AppDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ headerTintColor: '#2c3e50' }}>
      <Drawer.Screen 
        name="SkillUp Home" 
        component={HomeTabs} 
        options={{ title: 'Principal' }}
      />
      <Drawer.Screen 
        name="Meu Perfil" 
        component={ProfileScreen} 
        options={{ title: 'Minha Conta' }}
      />
    </Drawer.Navigator>
  );
}

export default function AppRoutes() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return null; 
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="AppDrawer" component={AppDrawer} />
        ) : (

          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}