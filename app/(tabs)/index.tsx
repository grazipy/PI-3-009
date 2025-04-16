import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import VoiceAssistant from '../components/VoiceAssistant'; // ou o caminho certo
import GLBViewer from '../components/GLBViewer';
// import GLBViewer from '../components/GLBViewer'; // Ensure this is correct or remove if unused


// dentro do return, onde quiser
<VoiceAssistant />
// <GLBViewer /> // Uncomment and use if needed

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Painel</Text>

      <View style={styles.buttonGrid}>
        <TouchableOpacity style={styles.card} onPress={() => router.push('/login')}>
          <MaterialCommunityIcons name="login" size={40} color="#2d5f9a" />
          <Text style={styles.cardText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/cadastrar_funcionario')}>
          <MaterialCommunityIcons name="account-plus" size={40} color="#2d5f9a" />
          <Text style={styles.cardText}>Cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/documentos')}>
          <MaterialCommunityIcons name="toolbox-outline" size={40} color="#2d5f9a" />
          <Text style={styles.cardText}>Documentos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/subir-pdf')}>
          <MaterialCommunityIcons name="file-upload-outline" size={40} color="#2d5f9a" />
          <Text style={styles.cardText}>Subir PDF</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/about')}>
          <MaterialCommunityIcons name="information-outline" size={40} color="#2d5f9a" />
          <Text style={styles.cardText}>Sobre</Text>
        </TouchableOpacity>
      
        <GLBViewer />


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f4fa',
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 30,
    color: '#2d5f9a',
  },
  buttonGrid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: '40%',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  cardText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: '#2d5f9a',
  },
});
