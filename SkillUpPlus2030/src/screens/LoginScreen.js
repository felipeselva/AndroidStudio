import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../context/AuthContext';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Ops!', 'Preencha seus dados para entrar.');
      return;
    }
    signIn(email, password);
  };

  return (
    <View style={styles.container}>
      {/* Fundo Gradiente Total */}
      <LinearGradient
        colors={['#FF416C', '#FF4B2B']} // Coral Vibrante
        style={styles.background}
      />

      <View style={styles.content}>
        <View style={styles.iconCircle}>
          <Ionicons name="rocket" size={40} color="#FF4B2B" />
        </View>
        
        <Text style={styles.appName}>SkillUpPlus</Text>
        <Text style={styles.tagline}>Future Ready • 2030</Text>

        <View style={styles.card}>
          <Text style={styles.welcomeText}>Bem-vindo de volta</Text>
          
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <LinearGradient
              colors={['#FF416C', '#FF4B2B']}
              style={styles.gradientButton}
            >
              <Text style={styles.loginText}>Entrar</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.footerText}>Fatec ZL • ODS 4 & 8</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  background: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 },
  content: { alignItems: 'center', padding: 20 },
  iconCircle: { width: 80, height: 80, backgroundColor: '#FFF', borderRadius: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 15, elevation: 10 },
  appName: { fontSize: 32, fontWeight: 'bold', color: '#FFF', letterSpacing: 1 },
  tagline: { fontSize: 14, color: 'rgba(255,255,255,0.8)', marginBottom: 40, letterSpacing: 2 },
  
  card: { width: '100%', backgroundColor: '#FFF', borderRadius: 30, padding: 30, elevation: 10 },
  welcomeText: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 25, textAlign: 'center' },
  input: { backgroundColor: '#F0F2F5', borderRadius: 15, padding: 15, marginBottom: 15, fontSize: 16 },
  
  loginButton: { marginTop: 10, borderRadius: 15, overflow: 'hidden' },
  gradientButton: { padding: 18, alignItems: 'center' },
  loginText: { color: '#FFF', fontWeight: 'bold', fontSize: 18 },
  
  footerText: { marginTop: 30, color: 'rgba(255,255,255,0.6)', fontSize: 12 }
});