import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../components/Titulo";

export default function Perfil(){
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color="blue.500">Meu Perfil</Titulo>
                <Avatar size="xl" source={{uri:"https://avatars.githubusercontent.com/u/79226308?v=4"}} mt={5} />
                <Titulo color="blue.500">Informações Pessoais</Titulo>
                <Titulo fontSize="lg" mb={1} fontWeight="bold">Igor Fernando</Titulo>
                <Text>23/08/2007</Text>
                <Text>São Paulo</Text>

                <Divider mt={5} />

                <Titulo color="blue.500" mb={1}>Histórico médico</Titulo>
                <Text>Bronquite</Text>
                <Text>Sinusite</Text>

            </VStack>
        </ScrollView>
    );
}