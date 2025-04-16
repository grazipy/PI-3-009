import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { Ionicons } from '@expo/vector-icons';

export default function SubirPDFScreen() {
  const [file, setFile] = useState<DocumentPicker.DocumentPickerAsset | null>(null);

  const pickPDF = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
      });

      if (result.assets && result.assets.length > 0) {
        setFile(result.assets[0]);
      }
    } catch (error) {
      console.log('Erro ao selecionar o PDF:', error);
    }
  };

  const enviarPDF = () => {
    if (!file) {
      Alert.alert('Atenção', 'Selecione um arquivo PDF primeiro.');
      return;
    }

    // Simulação de envio
    Alert.alert('Sucesso', `PDF "${file.name}" enviado com sucesso!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enviar Arquivo PDF</Text>

      <TouchableOpacity style={styles.pickButton} onPress={pickPDF}>
        <Ionicons name="document-attach-outline" size={24} color="#fff" />
        <Text style={styles.buttonText}>Selecionar PDF</Text>
      </TouchableOpacity>

      {file && (
        <Text style={styles.fileName}>Selecionado: {file.name}</Text>
      )}

      <TouchableOpacity style={styles.sendButton} onPress={enviarPDF}>
        <Ionicons name="cloud-upload-outline" size={24} color="#fff" />
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  pickButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0059b3', // cor do botão

    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  sendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#28a745', // cor do botão de enviar
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  fileName: {
    marginTop: 10,
    color: '#fff',
    fontSize: 14,
  },
});
