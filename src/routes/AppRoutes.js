import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'; // Ícones bonitos

import { AuthContext } from '../context/AuthContext';

// Importação das Telas Modulares
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import CoursesScreen from '../screens/CoursesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// --- 1. Navegação em Abas (Tabs) ---
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

// --- 2. Navegação Lateral (Drawer) ---
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

// --- 3. Navegação Principal (Stack) ---
export default function AppRoutes() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return null; // Ou uma tela de Loading
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          // Usuário Logado: Vai para o Drawer (que contém as Tabs)
          <Stack.Screen name="AppDrawer" component={AppDrawer} />
        ) : (
          // Usuário Deslogado: Vai para Login
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}