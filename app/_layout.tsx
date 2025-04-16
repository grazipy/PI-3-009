import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Título da tela de cadastro */}
      <Stack.Screen 
        name="cadastrar_funcionario" 
        options={{ title: 'Cadastrar Funcionário' }} 
      />

    

      <Stack.Screen name="+not-found" options={{ title: 'Página não encontrada' }} />
    </Stack>
  );
}
