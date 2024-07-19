import { Button, ITextProps } from "native-base";
import { ReactNode } from "react";

interface BotaoProps extends ITextProps{
    onPress: () => void,
    children: ReactNode
}

export function Botao({ onPress, children, ...rest }: BotaoProps){
    return (
        <Button
        onPress={onPress}
        width="100%"
        bg="blue.800"
        mt={10}
        borderRadius='lg'
        {...rest}
        >{ children }</Button>
    );
}