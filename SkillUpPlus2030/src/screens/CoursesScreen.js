import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function CoursesScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const courses = [
    { id: '1', title: 'Lógica de Programação', category: 'TI', icon: 'code-slash', color: '#4facfe' },
    { id: '2', title: 'React Native Avançado', category: 'TI', icon: 'phone-portrait', color: '#00f2fe' },
    { id: '3', title: 'Liderança Ágil', category: 'Soft Skills', icon: 'people', color: '#43e97b' },
    { id: '4', title: 'Inglês Técnico', category: 'Idiomas', icon: 'language', color: '#fa709a' },
    { id: '5', title: 'IA para Negócios', category: 'TI', icon: 'bulb', color: '#a18cd1' },
  ];

  const filteredCourses = selectedCategory === 'Todas' 
    ? courses 
    : courses.filter(c => c.category === selectedCategory);

  return (
    <View style={styles.container}>
      {/* Header Compacto */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Catálogo</Text>
        <Text style={styles.headerSubtitle}>Explore novas habilidades</Text>
      </View>

      <View style={styles.filterContainer}>
        <Text style={styles.label}>Filtrar Categoria:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            style={{ height: 50 }}
          >
            <Picker.Item label="Todas as Áreas" value="Todas" />
            <Picker.Item label="Tecnologia (TI)" value="TI" />
            <Picker.Item label="Soft Skills" value="Soft Skills" />
            <Picker.Item label="Idiomas" value="Idiomas" />
          </Picker>
        </View>
      </View>

      <FlatList
        data={filteredCourses}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <LinearGradient
              colors={[item.color, '#fff']}
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
              style={styles.iconBox}
            >
              <Ionicons name={item.icon} size={24} color="#FFF" />
            </LinearGradient>
            
            <View style={styles.cardContent}>
              <Text style={styles.courseTitle}>{item.title}</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.category}</Text>
              </View>
            </View>
            
            <Ionicons name="chevron-forward" size={20} color="#CCC" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FA', padding: 20 },
  header: { marginBottom: 20, marginTop: 10 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#333' },
  headerSubtitle: { color: '#999', fontSize: 16 },
  
  filterContainer: { marginBottom: 20 },
  label: { marginBottom: 8, color: '#666', fontWeight: '600' },
  pickerWrapper: { backgroundColor: '#FFF', borderRadius: 15, elevation: 2, overflow: 'hidden' },
  
  card: { flexDirection: 'row', backgroundColor: '#FFF', padding: 15, borderRadius: 20, marginBottom: 15, alignItems: 'center', shadowColor: "#000", shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.05, shadowRadius: 10, elevation: 3 },
  iconBox: { width: 50, height: 50, borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  cardContent: { flex: 1 },
  courseTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  badge: { backgroundColor: '#F0F2F5', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  badgeText: { fontSize: 12, color: '#666', fontWeight: '600' }
});