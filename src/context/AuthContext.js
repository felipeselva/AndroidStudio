import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Criação do Contexto (para ser acessível em todo o app)
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- REQUISITO: Persistência de Dados ---
  // Verifica se já existe um usuário salvo ao abrir o app
  useEffect(() => {
    async function loadStorageData() {
      try {
        const storedUser = await AsyncStorage.getItem('@SKILLUP_USER');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.log("Erro ao recuperar dados:", error);
      } finally {
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  // --- Função de Login ---
  // Recebe email e senha (conforme exigido no PDF)
  const signIn = async (email, password) => {
    // Aqui simulamos um usuário vindo de uma API
    const userData = {
      id: '1',
      email: email,
      name: 'Aluno Fatec', 
      token: 'token-de-acesso-ficticio'
    };

    setUser(userData);
    // Salva no armazenamento do celular (Persistência)
    await AsyncStorage.setItem('@SKILLUP_USER', JSON.stringify(userData));
  };

  // --- Função de Logout ---
  const signOut = async () => {
    setUser(null);
    await AsyncStorage.removeItem('@SKILLUP_USER');
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};