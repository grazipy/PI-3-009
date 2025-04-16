import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function InstrumentaisScreen() {
  const instrumentos = [
    'Pinça Allis',
    'Tesoura Metzenbaum',
    'Porta Agulha Mayo-Hegar',
    'Afastador Farabeuf',
    'Pinça Kelly Reta',
    'Tesoura Iris Curva',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instrumentais Cirúrgicos</Text>
      
      <ScrollView contentContainerStyle={styles.list}>
        {instrumentos.map((nome, index) => (
          <TouchableOpacity key={index} style={styles.item}>
            <Text style={styles.itemText}>{nome}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    gap: 10,
  },
  item: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#003366',
    fontWeight: 'bold',
  },
});
