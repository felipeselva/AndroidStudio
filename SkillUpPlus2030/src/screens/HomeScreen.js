import React, { useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Importe isso!
import { AuthContext } from '../context/AuthContext';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* Cabeçalho estilo "Super App" chinês - Gradiente Vibrante */}
      <LinearGradient
        colors={['#FF416C', '#FF4B2B']} // Vermelho Coral Moderno
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greeting}>(Olá),</Text>
            <Text style={styles.username}>{user?.name || 'Estudante'}</Text>
          </View>
          <View style={styles.avatarContainer}>
             <Ionicons name="notifications-outline" size={24} color="#FFF" />
          </View>
        </View>

        {/* Card Flutuante de Status */}
        <View style={styles.statsCard}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>65%</Text>
            <Text style={styles.statLabel}>Skill Rate</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Cursos</Text>
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scrollContent} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Barra de Progresso Arredondada */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sua Evolução 🚀</Text>
          <View style={styles.progressContainer}>
            <LinearGradient
              colors={['#FF4B2B', '#FF416C']}
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
              style={{ width: '65%', height: '100%', borderRadius: 10 }}
            />
          </View>
          <Text style={styles.progressText}>Nível Intermediário - ODS 4</Text>
        </View>

        {/* Cards em Grid (Estilo WeChat) */}
        <Text style={styles.sectionTitle}>Explorar</Text>
        <View style={styles.gridContainer}>
          <TouchableOpacity style={styles.gridItem}>
            <View style={[styles.iconBox, { backgroundColor: '#E3F2FD' }]}>
              <Ionicons name="code-slash" size={24} color="#2196F3" />
            </View>
            <Text style={styles.gridText}>Dev</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.gridItem}>
            <View style={[styles.iconBox, { backgroundColor: '#FCE4EC' }]}>
              <Ionicons name="bulb" size={24} color="#E91E63" />
            </View>
            <Text style={styles.gridText}>IA</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem}>
            <View style={[styles.iconBox, { backgroundColor: '#E8F5E9' }]}>
              <Ionicons name="leaf" size={24} color="#4CAF50" />
            </View>
            <Text style={styles.gridText}>ODS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem}>
            <View style={[styles.iconBox, { backgroundColor: '#FFF3E0' }]}>
              <Ionicons name="rocket" size={24} color="#FF9800" />
            </View>
            <Text style={styles.gridText}>Carreira</Text>
          </TouchableOpacity>
        </View>

        {/* Card Grande Moderno */}
        <View style={styles.promoCard}>
           <LinearGradient colors={['#8E2DE2', '#4A00E0']} style={styles.promoGradient}>
              <Text style={styles.promoTitle}>React Native 2030</Text>
              <Text style={styles.promoSubtitle}>Domine o futuro mobile hoje.</Text>
           </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FA' }, // Fundo cinza gelo
  header: { paddingTop: 60, paddingHorizontal: 20, paddingBottom: 50, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  headerContent: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  greeting: { color: 'rgba(255,255,255,0.8)', fontSize: 16 },
  username: { color: '#FFF', fontSize: 28, fontWeight: 'bold' },
  avatarContainer: { backgroundColor: 'rgba(255,255,255,0.2)', padding: 10, borderRadius: 15 },
  
  statsCard: { flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 20, padding: 20, position: 'absolute', bottom: -40, left: 20, right: 20, shadowColor: "#FF4B2B", shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.15, shadowRadius: 20, elevation: 10, justifyContent: 'space-around', alignItems: 'center' },
  statItem: { alignItems: 'center' },
  statNumber: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  statLabel: { fontSize: 12, color: '#999' },
  divider: { width: 1, height: 30, backgroundColor: '#EEE' },

  scrollContent: { marginTop: 50, paddingHorizontal: 20 },
  section: { marginBottom: 25 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 15 },
  progressContainer: { height: 10, backgroundColor: '#EEE', borderRadius: 10, marginBottom: 8 },
  progressText: { fontSize: 12, color: '#999', textAlign: 'right' },

  gridContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
  gridItem: { alignItems: 'center', width: '22%' },
  iconBox: { width: 55, height: 55, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  gridText: { fontSize: 12, fontWeight: '600', color: '#555' },

  promoCard: { borderRadius: 20, overflow: 'hidden', height: 120, marginBottom: 20 },
  promoGradient: { flex: 1, justifyContent: 'center', padding: 20 },
  promoTitle: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  promoSubtitle: { color: 'rgba(255,255,255,0.8)', marginTop: 5 }
});