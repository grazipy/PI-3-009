import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (email === 'admin@surgitec.com' && senha === '1234') {
      router.replace('/'); // redireciona pra Home
    } else {
      Alert.alert('Erro', 'E-mail ou senha inválidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/surgitec-logo-branco.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#aaa" style={styles.icon} />
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#aaa"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#aaa" style={styles.icon} />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#aaa"
          style={styles.input}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Ionicons name="log-in-outline" size={20} color="white" />
        <Text style={styles.buttonText}> Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001c42',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: '70%',
    height: 60,
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#003366',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginVertical: 8,
    width: '100%',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: 'white',
    paddingVertical: 10,
    fontSize: 15,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#007aff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
