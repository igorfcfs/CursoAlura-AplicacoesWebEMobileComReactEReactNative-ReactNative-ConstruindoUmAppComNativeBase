import { Button, ITextProps } from "native-base";
import { ReactNode } from "react";

interface BotaoProps extends ITextProps{
    children: ReactNode
}

export function Botao({ children }: BotaoProps){
    return (
        <Button
        width="100%"
        bg="blue.800"
        mt={10}
        borderRadius='lg'
        >{ children }</Button>
    );
}