import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { signIn } = useContext(AuthContext);

  const handleLogin = () => {
    // --- REQUISITO: Formulários validados (1.5 pontos) ---
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Atenção', 'Por favor, preencha e-mail e senha para continuar.');
      return;
    }
    
    // Chama a função do contexto para salvar os dados (Persistência)
    signIn(email, password);
  };

  return (
    <View style={styles.container}>
      {/* --- REQUISITO: Componente Image (Logo) --- */}
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2083/2083256.png' }} 
        style={styles.logo} 
      />

      <Text style={styles.title}>SkillUpPlus 2030+</Text>
      <Text style={styles.subtitle}>Requalificação Digital (ODS 4 e 8)</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="seu@email.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="******"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Acessar Plataforma</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f0f4f8' },
  logo: { width: 100, height: 100, marginBottom: 20 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#2c3e50', marginBottom: 5 },
  subtitle: { fontSize: 14, color: '#7f8c8d', marginBottom: 30 },
  inputContainer: { width: '100%', marginBottom: 15 },
  label: { marginBottom: 5, color: '#34495e', fontWeight: '600' },
  input: { width: '100%', height: 50, backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 15, borderWidth: 1, borderColor: '#dcdde1' },
  button: { width: '100%', height: 50, backgroundColor: '#3498db', borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});