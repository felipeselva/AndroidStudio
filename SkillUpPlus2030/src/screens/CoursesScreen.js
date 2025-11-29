import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
export default function CoursesScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const courses = [
    { id: '1', title: 'Lógica de Programação', category: 'TI' },
    { id: '2', title: 'React Native Avançado', category: 'TI' },
    { id: '3', title: 'Liderança Ágil', category: 'Soft Skills' },
    { id: '4', title: 'Inglês Técnico', category: 'Idiomas' },
    { id: '5', title: 'IA para Negócios', category: 'TI' },
  ];

  const filteredCourses = selectedCategory === 'Todas' 
    ? courses 
    : courses.filter(c => c.category === selectedCategory);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Catálogo de Cursos</Text>
      <Text style={styles.label}>Filtrar por Área:</Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        >
          <Picker.Item label="Todas as Áreas" value="Todas" />
          <Picker.Item label="Tecnologia (TI)" value="TI" />
          <Picker.Item label="Soft Skills" value="Soft Skills" />
          <Picker.Item label="Idiomas" value="Idiomas" />
        </Picker>
      </View>

      <FlatList
        data={filteredCourses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <View style={styles.iconBox}>
              <Text style={styles.iconText}>{item.category[0]}</Text>
            </View>
            <View>
              <Text style={styles.courseTitle}>{item.title}</Text>
              <Text style={styles.courseCategory}>{item.category}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f6fa' },
  header: { fontSize: 22, fontWeight: 'bold', color: '#2c3e50', marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 5, color: '#34495e' },
  pickerContainer: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, backgroundColor: '#fff', marginBottom: 20 },
  card: { flexDirection: 'row', backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 10, alignItems: 'center', elevation: 2 },
  iconBox: { width: 40, height: 40, backgroundColor: '#3498db', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  iconText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  courseTitle: { fontSize: 16, fontWeight: 'bold', color: '#2c3e50' },
  courseCategory: { fontSize: 12, color: '#7f8c8d' }
});