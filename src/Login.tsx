import { TouchableOpacity } from 'react-native';
import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import Logo from './assets/Logo.png'
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { Botao } from './components/Botao';

export default function Login({ navigation }) {
  return (
    <VStack flex={1} alignItems='center' padding={5} justifyContent="center">
      <Image source={Logo} alt="Logo Voll" />

      <Titulo>Faça login em sua conta</Titulo>

      <Box>
        <EntradaTexto
        label="Email"
        placeholder="Insira seu endereço de email"
        />
        
        <EntradaTexto
        label="Senha"
        placeholder="Insira sua senha"
        />
      </Box>

      <Botao onPress={() => navigation.navigate('Tabs')}>Entrar</Botao>

      <Link href='https://alura.com.br' mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box
      w="100%"
      flexDirection="row"
      justifyContent="center"
      mt={8}
      >
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color="blue.500" fontWeight="bold">
           Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}

