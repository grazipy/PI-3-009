import React from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Dimensions,
} from 'react-native';
import { Link } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const router = useRouter();
const services = [
  { name: 'Instrumentais', image: require('../../assets/instrumentais.jpg') },
  { name: 'Eletroudos', image: require('../../assets/eletroudo.jpg') },
  { name: 'Endoscopicos', image: require('../../assets/endoscopicos.jpg') },
  { name: 'Implantaveis', image: require('../../assets/implantaveis.jpg') },
  { name: "Kit's Cirurgicos", image: require('../../assets/kits-cirurgicos.jpg') },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Logo */}
        <View style={styles.topBar}>
          <Image
            source={require('../../assets/surgitec-logo-branco.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Barra de busca */}
        <View style={styles.searchBarContainer}>
          <TextInput
            placeholder="Buscar..."
            placeholderTextColor="#aaa"
            style={styles.searchBar}
          />
        </View>

        {/* Botões de acesso */}
        <View style={styles.welcomeSection}>
          <Text style={styles.sectionTitle}>View Docs</Text>
          <View style={styles.buttonContainer}>
            <Link href="/login" style={styles.ctaButton}>
              <Ionicons name="person-circle-outline" size={16} color="white" />
              <Text style={styles.ctaButtonText}> Equipe</Text>
            </Link>
            <Link href="/login" style={styles.ctaButton}>
              <Ionicons name="settings-outline" size={16} color="white" />
              <Text style={styles.ctaButtonText}> Gestor</Text>
            </Link>
          </View>
        </View>

        {/* Cards */}
        <View style={styles.serviceSection}>
          {services.map(service => (
            <TouchableOpacity
              key={service.name}
              style={styles.serviceCard}
              onPress={() => console.log(`Acessar ${service.name}`)}
            >
              <Image source={service.image} style={styles.serviceImage} />
              <View style={styles.overlay}>
                <Text style={styles.serviceText}>{service.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Navegação inferior */}
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => router.push('/cadastrar_funcionario')}>
            <MaterialCommunityIcons name="account-plus" size={20} color="#2d5f9a" />
            <Text style={styles.navLink}>Cadastro</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.surgitec.com.br/')}>
            <Ionicons name="globe-outline" size={20} color="#2d5f9a" />
            <Text style={styles.navLink}>Site</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://consultas.anvisa.gov.br/#/saude/')}>
            <MaterialCommunityIcons name="hospital-box-outline" size={20} color="#2d5f9a" />
            <Text style={styles.navLink}>Anvisa</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.normas.com.br/')}>
            <MaterialCommunityIcons name="file-document-outline" size={20} color="#2d5f9a" />
            <Text style={styles.navLink}>Normas</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const CARD_WIDTH = width * 0.42;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  topBar: {
    paddingVertical: 12,
    backgroundColor: '#001c42',
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: '70%',
    height: 50,
  },
  searchBarContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#001c42',
    width: '100%',
  },
  searchBar: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    fontSize: 14,
  },
  welcomeSection: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 12,
  },
  ctaButton: {
    backgroundColor: '#001c42',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    overflow: 'hidden',
  },
  ctaButtonText: {
    color: 'white',
    fontSize: 14,
  },
  serviceSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    gap: 10,
  },
  serviceCard: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#eee',
    position: 'relative',
  },
  serviceImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    paddingVertical: 5,
    alignItems: 'center',
  },
  serviceText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#f1f1f1',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navLink: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2d5f9a',
    textAlign: 'center',
  },
});
