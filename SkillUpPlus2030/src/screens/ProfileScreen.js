import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../context/AuthContext';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const { user, signOut } = useContext(AuthContext);

  const handleLogout = () => {
    Alert.alert("Sair", "Até logo!", [
      { text: "Cancelar", style: "cancel" },
      { text: "Sair", onPress: signOut }
    ]);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF416C', '#FF4B2B']}
        style={styles.headerBackground}
      >
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarInitials}>{user?.name?.charAt(0) || 'U'}</Text>
        </View>
        <Text style={styles.userName}>{user?.name || 'Usuário'}</Text>
        <Text style={styles.userEmail}>{user?.email || 'email@teste.com'}</Text>
      </LinearGradient>

      <View style={styles.body}>
        <View style={styles.infoCard}>
          <View style={styles.row}>
            <Ionicons name="id-card-outline" size={24} color="#FF4B2B" />
            <View style={styles.rowText}>
              <Text style={styles.label}>Matrícula (ID)</Text>
              <Text style={styles.value}>#{user?.id || '001'}</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Ionicons name="shield-checkmark-outline" size={24} color="#FF4B2B" />
            <View style={styles.rowText}>
              <Text style={styles.label}>Status da Conta</Text>
              <Text style={styles.value}>Ativo / Verificado</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair da Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FA' },
  headerBackground: { alignItems: 'center', paddingTop: 60, paddingBottom: 40, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  avatarCircle: { width: 100, height: 100, borderRadius: 50, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center', marginBottom: 15, borderWidth: 3, borderColor: '#FFF' },
  avatarInitials: { fontSize: 40, fontWeight: 'bold', color: '#FFF' },
  userName: { fontSize: 24, fontWeight: 'bold', color: '#FFF' },
  userEmail: { fontSize: 14, color: 'rgba(255,255,255,0.8)', marginTop: 5 },
  
  body: { padding: 20, marginTop: -30 },
  infoCard: { backgroundColor: '#FFF', borderRadius: 20, padding: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.05, shadowRadius: 10, elevation: 5 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
  rowText: { marginLeft: 15 },
  label: { fontSize: 12, color: '#999' },
  value: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  divider: { height: 1, backgroundColor: '#F0F2F5', marginVertical: 10 },
  
  logoutButton: { marginTop: 20, backgroundColor: '#FFF', borderWidth: 1, borderColor: '#FF4B2B', padding: 15, borderRadius: 15, alignItems: 'center' },
  logoutText: { color: '#FF4B2B', fontWeight: 'bold', fontSize: 16 }
});