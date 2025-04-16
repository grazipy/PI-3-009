import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CadastroFuncionario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cargo, setCargo] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    // Aqui você pode fazer a lógica de envio (ex: API)
    Alert.alert('Funcionário Cadastrado', `Nome: ${nome}\nCargo: ${cargo}`);
    setNome('');
    setEmail('');
    setCargo('');
    setSenha('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Funcionário</Text>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="account" size={20} color="#003366" />
        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="email" size={20} color="#003366" />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="briefcase" size={20} color="#003366" />
        <TextInput
          style={styles.input}
          placeholder="Cargo"
          value={cargo}
          onChangeText={setCargo}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="lock" size={20} color="#003366" />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <MaterialCommunityIcons name="account-plus" size={20} color="#fff" />
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f8fc',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#003366', // cor da borda
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#003366', // cor do botão
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    gap: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
