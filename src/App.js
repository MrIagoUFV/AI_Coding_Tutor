import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import './App.css';
import InputBox from './Components/InputBox';
import ResponseSection from './Components/ResponseSection';

const API_KEY = 'AIzaSyBAxF9haxbPv3kZrPdd3ExBcs1WeTdVusk';
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const topics = [
  "Documentação", "Introdução ao Conceito", "Entendendo o Conceito",
  "Criando Prompts Eficazes", "Interpretando e Adaptando Respostas da IA",
  "Prompts para Diferentes Linguagens", "Melhores Práticas",
  "Exercícios Práticos", "Desafio Avançado", "Recursos Adicionais"
];

const prompts = [
  // Aqui você deve incluir os 10 prompts que você forneceu anteriormente
  // Vou incluir apenas o primeiro como exemplo
  `Crie uma aula sobre como implementar [CONCEITO: {input}] em programação usando IA. A aula deve ser o mais completa possível (de zero ao avançado) e focar em como usar prompts de IA para realizar tarefas de programação. Siga estas diretrizes:

Com o advento da IA, o foco do ensino de programação está mudando de detalhes sintáticos para conceitos e capacidades. O prompt a seguir aplica essa abordagem moderna, focando em como usar prompts para enviar para os ai copilots para realizar tarefas em vez de memorizar sintaxes específicas.

Estamos passando por uma mudança de paradigma no ensino de programação, onde o foco está em entender conceitos e capacidades, e usar IA para implementação, em vez de memorizar sintaxes específicas.

Comece com a parte 0:

0. Itere toda a Documentação:
\t- Liste todos os tópicos de [CONCEITO] para dominar [CONCEITO] (do zero ao avançado)
\t- ensine todos nos tópicos a seguir:

Para a explicação:
- Use exemplos do mundo real para ilustrar como a IA pode ser usada na programação prática
- Enfatize a importância de entender os conceitos subjacentes, não apenas a geração de código
- Encoraje o pensamento crítico e a adaptação criativa dos prompts
- Mantenha um equilíbrio entre o uso de IA e o desenvolvimento de habilidades fundamentais de programação

Lembre-se de ensinar o conteúdo da forma mais didática possível usando Feynamn, focando sempre em como a IA pode ser usada como uma ferramenta para implementação e aprendizado.`,
  // Prompt para o tópico 2
  `Explique o conceito de [CONCEITO: {input}] na programação de forma simples e didática, seguindo o método Feynman. Inclua:

  - Uma explicação geral do que o [CONCEITO] faz
  - Casos de uso comuns
  - Componentes ou etapas principais envolvidas
  - Regras e pontos de atenção importantes

  Lembre-se de usar analogias e exemplos do cotidiano para tornar a explicação o mais acessível possível.`,

  // Prompt para o tópico 3
  `Ensine como criar prompts eficazes para implementar [CONCEITO: {input}] usando IA. Inclua:

  - Como estruturar um prompt para implementar o [CONCEITO]
  - Palavras-chave e termos importantes a incluir no prompt
  - 1 exemplo de prompt para cada caso de aplicação do [CONCEITO]
  - 5 exemplos de prompts para diferentes aspectos ou variações do conceito`,

  // Prompt para o tópico 4
  `Explique como interpretar e adaptar respostas da IA ao implementar [CONCEITO: {input}]. Aborde:

  - Como analisar o código gerado pela IA para [CONCEITO]
  - Dicas específicas para ajustar ou refinar o prompt com base na resposta recebida ao aplicar os prompts para [CONCEITO]
  - Identificação de possíveis problemas ou limitações nas respostas da IA específicos para [CONCEITO]`,

  // Prompt para o tópico 5
  `Demonstre como adaptar prompts para implementar [CONCEITO: {input}] em diferentes linguagens de programação. Inclua:

  - Orientações gerais para adaptar prompts para várias linguagens
  - Um exemplo de prompt para implementar [CONCEITO] adaptado para 3 linguagens diferentes`,

  // Prompt para o tópico 6
  `Compartilhe as melhores práticas para usar IA na implementação de [CONCEITO: {input}]. Inclua:

  - Dicas para criar prompts claros e eficazes (com 1 exemplo específico para [CONCEITO])
  - Como lidar com aspectos complexos ou multifacetados de [CONCEITO] (com 1 exemplo específico)
  - Estratégias para verificar e testar o código gerado para [CONCEITO] (com 1 exemplo específico)`,

  // Prompt para o tópico 7
  `Crie 3 exercícios práticos para implementar [CONCEITO: {input}] usando IA. Para cada exercício:

  - Descreva um cenário ou problema relacionado a [CONCEITO]
  - Forneça sugestões de prompts para resolver o exercício
  - Discuta possíveis variações do prompt e seus impactos`,

  // Prompt para o tópico 8
  `Apresente um desafio avançado para implementar [CONCEITO: {input}] usando IA. Inclua:

  - Um problema complexo relacionado a [CONCEITO] que requer múltiplos prompts ou iterações
  - Uma solução passo a passo detalhada, incluindo todos os prompts necessários, lógica e explicações para concluir o desafio`,

  // Prompt para o tópico 9
  `Forneça recursos adicionais para aprofundar o conhecimento sobre [CONCEITO: {input}]:

  - Liste e descreva brevemente recursos online, livros ou cursos para aprender mais sobre [CONCEITO]
  - Sugira termos de pesquisa específicos para encontrar vídeos no YouTube sobre [CONCEITO]
  - Recomende comunidades online ou fóruns onde os alunos possam discutir e aprender mais sobre [CONCEITO]`
];

function App() {
  const [responses, setResponses] = useState(Array(10).fill(''));
  const [loading, setLoading] = useState(Array(10).fill(false));

  const handleSubmit = async (input) => {
    console.log('Tópico submetido:', input);
    const newResponses = [...responses];
    const newLoading = [...loading];

    for (let i = 0; i < prompts.length; i++) {
      newLoading[i] = true;
      setLoading([...newLoading]);

      try {
        const prompt = prompts[i].replace('{input}', input);
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        newResponses[i] = text;
        setResponses([...newResponses]);
      } catch (error) {
        console.error(`Erro ao gerar conteúdo para o tópico ${i}:`, error);
        newResponses[i] = `Erro ao gerar conteúdo para o tópico ${topics[i]}. Por favor, tente novamente.`;
      }

      newLoading[i] = false;
      setLoading([...newLoading]);
    }
  };

  return (
    <div className="App">
      <h1>AI Coding Tutor</h1>
      <InputBox onSubmit={handleSubmit} />
      <ResponseSection responses={responses} topics={topics} loading={loading} />
    </div>
  );
}

export default App;