# AI Coding Tutor

AI Coding Tutor é uma aplicação web interativa que utiliza inteligência artificial para ensinar conceitos de programação. Ela oferece uma experiência de aprendizado personalizada, gerando conteúdo didático com base nos tópicos inseridos pelo usuário.

## Características

- Interface com tema escuro inspirado em Matrix
- Integração com a API Gemini da Google para geração de conteúdo
- Entrada de texto interativa com efeito visual de Matrix
- 10 seções expansíveis de conteúdo, cobrindo diversos aspectos do tópico escolhido

## Tecnologias Utilizadas

- React.js
- @google/generative-ai (API Gemini)
- CSS para estilização

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/MrIagoUFV/ai-coding-tutor.git
   ```

2. Entre no diretório do projeto:
   ```bash
   cd ai-coding-tutor
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie a aplicação:
   ```bash
   npm start
   ```

## Uso

1. Digite um tópico de programação na caixa de entrada.
2. Clique em "Aprender" ou pressione Enter.
3. A aplicação gerará conteúdo para 10 seções diferentes relacionadas ao tópico.
4. Clique em cada seção para expandir e ver o conteúdo gerado.

## Estrutura do Projeto

- `src/App.js`: Componente principal da aplicação
- `src/Components/InputBox.js`: Componente de entrada de texto
- `src/Components/ResponseSection.js`: Componente para exibição das respostas da IA

## Contribuição

Contribuições são bem-vindas! Por favor, leia o arquivo CONTRIBUTING.md para detalhes sobre nosso código de conduta e o processo para enviar pull requests.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

---

To-Do:

- [ ] Adicionar um campo para a pessoa escolher a api key que vai usar e poder colocar a sua (escala)
- [ ] Adicionar um campo para a pessoa poder trocar o idioma do tutor
- [ ] Estruturar melhor os prompts para respostas melhores.