import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Voice, { SpeechResultsEvent, SpeechErrorEvent } from '@react-native-voice/voice';
import * as Speech from 'expo-speech';
import { useRouter } from 'expo-router';

export default function VoiceAssistant() {
  const [isListening, setIsListening] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;
  
    // Fala de boas-vindas do Thot
    Speech.speak(
      'Olá, eu sou o Thot e vou te ajudar. Caso não precise de mim, apenas diga: "bye Thot". E para reativar, diga: "Hello Thot".',
      { language: 'pt-BR' }
    );
  
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  
  }, []);

  const onSpeechResults = (event: SpeechResultsEvent) => {
    const command = event.value?.[0]?.toLowerCase();
    if (command) {
      setText(command);
      handleCommand(command);
    }
  };

  const onSpeechError = (event: SpeechErrorEvent) => {
    console.error(event.error);
    Alert.alert('Erro de voz', event.error?.message ?? 'Erro desconhecido.');
    setIsListening(false);
  };

  const startListening = async () => {
    try {
      await Voice.start('pt-BR');
      setIsListening(true);
    } catch (e) {
      console.error('Erro ao iniciar:', e);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (e) {
      console.error('Erro ao parar:', e);
    }
  };

  const handleCommand = (command: string) => {
    if (command.includes('login')) {
      router.push('/login');
      Speech.speak('Indo para login');
    } else if (command.includes('cadastro')) {
      router.push('/cadastrar_funcionario');
      Speech.speak('Abrindo cadastro de funcionário');
    } else if (command.includes('documento')) {
      router.push('/documentos');
      Speech.speak('Abrindo documentos');
    } else if (command.includes('pdf')) {
      router.push('/subir-pdf');
      Speech.speak('Abrindo envio de PDF');
    } else if (command.includes('sobre')) {
      router.push('/about');
      Speech.speak('Mostrando informações sobre o app');
    } else {
      Speech.speak('Desculpe, não entendi o comando');
    }
  };

  return (
    <View style={styles.assistantContainer}>
      <TouchableOpacity style={styles.button} onPress={isListening ? stopListening : startListening}>
        <Text style={styles.buttonText}>
          {isListening ? 'Parar Assistente' : 'Ativar Assistente'}
        </Text>
      </TouchableOpacity>
      {text && <Text style={styles.transcript}>Você disse: {text}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  assistantContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#2d5f9a',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  transcript: {
    marginTop: 10,
    fontStyle: 'italic',
    color: '#2d5f9a',
  },
});
