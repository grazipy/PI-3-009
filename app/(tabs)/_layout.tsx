import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#003366', // Cor do ícone ativo
        headerStyle: {
          backgroundColor: 'white', // Fundo do cabeçalho (topo)
        },
        headerShadowVisible: false, // Remove sombra do header
        headerTintColor: '#003366', // Cor do texto do cabeçalho
        tabBarStyle: {
          backgroundColor: 'white', // Barra inferior
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início', // Título do topo
          tabBarLabel: 'Home', // Texto embaixo do ícone
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="documentos"
        options={{
          href: null,
          title: 'Documentos', // Título do topo
          tabBarLabel: 'Docs', // Texto na aba
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'document' : 'document-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          href: null,
          title: 'Login', // Título do topo
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={24} />
          ),
        }}
      />
  <Tabs.Screen
        name="subir-pdf"
        options={{
          href: null,
          title: 'Carregar Arquivo', // Título do topo
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={24} />
          ),
        }}
      />
        <Tabs.Screen
        name="instrumentais"
        options={{
          href: null,
          title: 'Instrumentais', // Título do topo
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={24} />
          ),
        }}
      />

<Tabs.Screen
        name="cadastrar_funcionario"
        options={{
          href: null,
          title: 'Cadastro de Funcionario',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={24} />
          ),
        }}
      />
          <Tabs.Screen
        name="about"
        options={{
          title: 'Sobre', // Título do topo
          tabBarLabel: 'Sobre', // Texto embaixo do ícone
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}
