import { VStack, Text, Divider, ScrollView } from "native-base";

import { CardConsulta } from "../components/CardConsulta";
import { Titulo } from "../components/Titulo";
import { Botao } from "../components/Botao";

export default function Consultas(){
    return (
        <ScrollView p={5}>
            <Titulo color="blue.500" mb={5}>Minhas Consultas</Titulo>
            <Botao mt={5} mb={5}>Agendar nova consulta</Botao>

            <Titulo color="blue.500" mb={2} fontSize="lg" alignSelf="flex-start">Próximas Consultas</Titulo>
            <CardConsulta
            nome="Dr. Igor Fernando"
            especialidade="Cardiologista"
            foto="https://avatars.githubusercontent.com/u/79226308?v=4"
            data="20/04/2023"
            foiAgendado
            foiAtendido
            />

            <Divider mt={5} />

            <Titulo color="blue.500" mb={2} fontSize="lg" alignSelf="flex-start">Consultas Passadas</Titulo>
            
            <CardConsulta
            nome="Dr. Igor Fernando"
            especialidade="Cardiologista"
            foto="https://avatars.githubusercontent.com/u/79226308?v=4"
            data="20/04/2023"
            foiAgendado={false}
            foiAtendido={false}
            />

            <CardConsulta
            nome="Dr. Igor Fernando"
            especialidade="Cardiologista"
            foto="https://avatars.githubusercontent.com/u/79226308?v=4"
            data="20/04/2023"
            foiAgendado={false}
            foiAtendido={false}
            />

            <CardConsulta
            nome="Dr. Igor Fernando"
            especialidade="Cardiologista"
            foto="https://avatars.githubusercontent.com/u/79226308?v=4"
            data="20/04/2023"
            foiAgendado={false}
            foiAtendido={false}
            />
        </ScrollView>
    );
}