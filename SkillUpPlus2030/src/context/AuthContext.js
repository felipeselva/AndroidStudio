import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

  
  const signIn = async (email, password) => {

    const userData = {
      id: '1',
      email: email,
      name: 'Aluno Fatec', 
      token: 'token-de-acesso-ficticio'
    };

    setUser(userData);

    await AsyncStorage.setItem('@SKILLUP_USER', JSON.stringify(userData));
  };


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