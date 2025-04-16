import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Logo (opcional) */}
      <Image
        source={require('../../assets/surgitec-logo-cor.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Sobre a Surgitec</Text>
      
      <Text style={styles.paragraph}>
        A Surgitec é uma empresa especializada na comercialização e manutenção de equipamentos cirúrgicos,
        atuando com excelência no mercado hospitalar e clínico. Com uma equipe qualificada e produtos de alta qualidade,
        buscamos oferecer soluções eficazes e seguras para o ambiente de saúde.
      </Text>

      <Text style={styles.paragraph}>
        Nosso compromisso é com a saúde, a inovação e o bem-estar dos profissionais e pacientes. Trabalhamos com
        transparência, agilidade e foco no atendimento personalizado.
      </Text>

      <Text style={styles.subtitle}>Missão</Text>
      <Text style={styles.paragraph}>Fornecer produtos cirúrgicos de excelência, contribuindo para a qualidade nos procedimentos médicos.</Text>

      <Text style={styles.subtitle}>Visão</Text>
      <Text style={styles.paragraph}>Ser referência nacional em equipamentos e kits cirúrgicos, com inovação constante e atendimento de excelência.</Text>

      <Text style={styles.subtitle}>Valores</Text>
      <Text style={styles.paragraph}>Ética, qualidade, compromisso, inovação e respeito à vida.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f8fc',
    padding: 20,
  },
  logo: {
    width: '80%',
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#002244',
    marginTop: 20,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    color: '#333',
    marginTop: 10,
    textAlign: 'justify',
  },
});
