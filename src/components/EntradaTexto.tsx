import { FormControl, Input, ITextProps } from "native-base";
import { ReactNode } from "react";

interface EntradaTextoProps extends ITextProps{
    label: ReactNode,
    placeholder: string
}

export function EntradaTexto({ label, placeholder }: EntradaTextoProps){
    return (
        <FormControl mt={3}>
            <FormControl.Label>{label}</FormControl.Label>
            <Input
            placeholder={placeholder}
            size='lg'
            width='100%'
            borderRadius="lg"
            backgroundColor="gray.100"
            shadow={3}
            />
        </FormControl>
    );
}