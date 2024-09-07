quero criar um webapp chamado AI Coding Tutor:

Tema: dark matrix

Visual E FUNCIONALIDADES:

importa api do gemini: 
    npm install @google/generative-ai
    
    Inicializar o modelo generativo
    Antes de fazer qualquer chamada de API, você precisa importar e inicializar o um modelo generativo:

        const { GoogleGenerativeAI } = require("@google/generative-ai");

        // Access your API key as an environment variable (see "Set up your API key" above)
        const genAI = new GoogleGenerativeAI(process.env.API_KEY);

        // ...

        // The Gemini 1.5 models are versatile and work with most use cases
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

        // ...

    API KEY: AIzaSyBAxF9haxbPv3kZrPdd3ExBcs1WeTdVusk

Título: AI Coding Tutor (com efeito animado de matrix)

Cursor do mouse com efeito de matrix

uma caixa de entrada no inicio da página com um botão "Aprender"
    - ao digitar no input, o texto fica com efeito de matrix (cada letra digitada 'cai' dentro do input como a chuva de letras de matrix)
    - ao clicar no botão "Aprender" ou clicar em enter, faz 10 solicitações a API do GEMINI (1 por div)


10 divs para exibir os textos da resposta da api (formatado em markdown)

os divs fica fechados e expandem/fecham quando clicados em cima (individualmente):
 - 0. Documentação
 - 1. Introdução ao Conceito
 - 2. Entendendo o Conceito
 - 3. Criando Prompts Eficazes
 - 4. Interpretando e Adaptando Respostas da IA
 - 5. Prompts para Diferentes Linguagens
 - 6. Melhores Práticas
 - 7. Exercícios Práticos
 - 8. Desafio Avançado
 - 9. Recursos Adicionais

