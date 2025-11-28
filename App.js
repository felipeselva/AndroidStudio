import 'react-native-gesture-handler';
import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import AppRoutes from './src/routes/AppRoutes';

export default function App() {
  return (
    // Envolve o app todo com o Contexto de Autenticação
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}