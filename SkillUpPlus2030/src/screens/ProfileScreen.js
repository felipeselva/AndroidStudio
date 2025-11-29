import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function ProfileScreen() {
  const { user, signOut } = useContext(AuthContext);

  const handleLogout = () => {
    Alert.alert(
      "Sair",
      "Deseja realmente sair do aplicativo?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Sim, sair", onPress: signOut }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user?.name?.charAt(0) || 'U'}</Text>
        </View>
        <Text style={styles.name}>{user?.name || 'Usuário'}</Text>
        <Text style={styles.email}>{user?.email || 'email@teste.com'}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Dados da Sessão (Persistência)</Text>
        <Text style={styles.infoText}>ID: {user?.id}</Text>
        <Text style={styles.infoText}>Status: Autenticado</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Sair do App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa' },
  header: { alignItems: 'center', padding: 30, backgroundColor: '#fff', marginBottom: 20 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#2c3e50', justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  avatarText: { color: '#fff', fontSize: 32, fontWeight: 'bold' },
  name: { fontSize: 22, fontWeight: 'bold', color: '#2c3e50' },
  email: { fontSize: 16, color: '#7f8c8d' },
  infoSection: { backgroundColor: '#fff', padding: 20, marginHorizontal: 20, borderRadius: 8 },
  infoTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#2980b9' },
  infoText: { fontSize: 16, marginBottom: 5, color: '#34495e' },
  logoutButton: { margin: 20, backgroundColor: '#e74c3c', padding: 15, borderRadius: 8, alignItems: 'center' },
  logoutText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});