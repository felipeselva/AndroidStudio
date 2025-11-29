import React, { useContext } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function HomeScreen() {
  const { user } = useContext(AuthContext);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Olá, {user?.name || 'Visitante'}!</Text>
        <Text style={styles.subWelcome}>Vamos evoluir suas skills hoje?</Text>
      </View>

      <View style={styles.progressSection}>
        <Text style={styles.sectionTitle}>Sua Jornada 2030</Text>
        <Text style={styles.progressLabel}>Nível de Prontidão Digital: 65%</Text>
        <View style={styles.progressBarBackground}>
          <View style={styles.progressBarFill} />
        </View>
        <Text style={styles.progressDescription}>
          Continue estudando para atingir as metas do ODS 8 (Trabalho Decente).
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Destaques</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📱 React Native Avançado</Text>
        <Text style={styles.cardText}>Domine Hooks, Context API e Navegação Híbrida.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🤖 IA Generativa no Trabalho</Text>
        <Text style={styles.cardText}>Como usar prompts para aumentar sua produtividade.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa' },
  header: { padding: 20, backgroundColor: '#2980b9', paddingBottom: 30 },
  welcome: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  subWelcome: { fontSize: 16, color: '#bdc3c7', marginTop: 5 },
  progressSection: { backgroundColor: '#fff', margin: 20, padding: 20, borderRadius: 12, elevation: 3, marginTop: -20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#2c3e50', marginBottom: 10 },
  progressLabel: { fontSize: 14, color: '#34495e', marginBottom: 8, fontWeight: '600' },
  progressBarBackground: { height: 15, backgroundColor: '#ecf0f1', borderRadius: 10, overflow: 'hidden', marginBottom: 10 },
  progressBarFill: { width: '65%', height: '100%', backgroundColor: '#27ae60' },
  progressDescription: { fontSize: 12, color: '#7f8c8d', fontStyle: 'italic' },
  card: { backgroundColor: '#fff', marginHorizontal: 20, marginBottom: 15, padding: 15, borderRadius: 8, borderWidth: 1, borderColor: '#dcdde1' },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#2980b9', marginBottom: 5 },
  cardText: { color: '#576574' }
});