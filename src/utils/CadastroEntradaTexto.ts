const secoes = [
    {
        id: 1,
        titulo: "Insira alguns dados básicos:",
        entradaTexto: [
            {
                id: 1,
                label: 'Nome',
                placeholder: 'Digite seu nome completo'
            },
            {
                id: 2,
                label: 'Email',
                placeholder: 'Digite seu email'
            },
            {
                id: 3,
                label: 'Crie uma senha',
                placeholder: 'Insira sua senha'
            },
            {
                id: 4,
                label: 'Repita sua senha',
                placeholder: 'Insira sua senha'
            }
        ]
    },
    {
        id: 2,
        titulo: "Agora, insira mais alguns dados sobre você:",
        entradaTexto: [
            {
                id: 1,
                label: 'CEP',
                placeholder: 'Digite seu CEP'
            },
            {
                id: 2,
                label: 'Endereço',
                placeholder: 'Digite endereço'
            },
            {
                id: 3,
                label: 'Número',
                placeholder: 'Insira seu numero'
            },
            {
                id: 4,
                label: 'Complemento',
                placeholder: 'Insira seu complemento'
            },
            {
                id: 5,
                label: 'Telefone',
                placeholder: 'Insira seu telefone'
            }
        ]
    },
    {
        id: 3,
        titulo: "Para finalizar, qual seu plano de saúde?",
        checkboxes: [
            {
                id: 1,
                value: "Sulamerica"
            },
            {
                id: 2,
                value: "Unimed"
            },
            {
                id: 3,
                value: "Bradesco"
            },
            {
                id: 4,
                value: "Amil"
            },
            {
                id: 5,
                value: "Biosaúde"
            },
            {
                id: 6,
                value: "Biovida"
            },
            {
                id: 7,
                value: "Outros"
            },
            {
                id: 8,
                value: "Não tenho plano"
            }
        ]
    }
];

export { secoes }