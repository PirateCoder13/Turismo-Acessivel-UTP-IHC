# Apresentação de Slides - Turismo Acessível UTP

Esta pasta contém uma apresentação de slides interativa e autossuficiente desenvolvida estritamente para a disciplina de Interface Humano-Computador (IHC).

## Tecnologias Utilizadas
- HTML5 Semântico
- Tailwind CSS (via CDN para evitar dependência de build)
- Vanilla JavaScript (Interatividade, Auto-escala e Acessibilidade)

## Características de Engenharia Front-End Implementadas
1. **Resolução Absoluta Estrita:** O deck de slides opera numa "caixa" absoluta de `1366x768`, dimensionada dinamicamente via matriz de transformação CSS `transform: scale()` para caber perfeitamente no projetor da sala de aula sem gerar barras de rolagem vertical/horizontal.
2. **Sistema Híbrido de Navegação:**
   - **Teclado:** Setas `⬅️` e `➡️`, `Barra de Espaço` e `Enter`.
   - **Gestos:** Swipe via Touch (dedo no celular/tablet) e Drag via Mouse (arrastar o mouse pressionado).
3. **Controles de Acessibilidade (IHC Aplicado):**
   - **Aumento/Diminuição Tipográfica Dinâmica:** Variável CSS `--font-scale` sendo alterada por JS sem quebrar o layout da página.
   - **Contraste Extremo:** Oculta gradientes visuais complexos e ativa o modo "Preto Absoluto + Amarelo/Branco" para projetores com baixo lúmen (baixo brilho).

## Como Executar Localmente
Como este arquivo não depende do ecossistema Node/Vite do projeto raiz, você só precisa de um navegador:
1. Abra a pasta `slides/` no seu computador.
2. Dê um duplo-clique no arquivo `index.html`.
3. Ele abrirá no seu navegador padrão (Google Chrome, Firefox, Edge, etc) pronto para apresentar. Se preferir, pressione `F11` para preencher toda a tela.

## Como Hospedar Online (GitHub Pages)
Se a equipe quiser apresentar o slide em outro computador ou hospedar para o professor ver:
1. Faça o commit e push desta pasta para o seu repositório no GitHub.
2. No repositório do GitHub, vá em **Settings** > **Pages**.
3. Em *Source*, selecione o branch principal (ex: `main`) e em seguida selecione a pasta `/root` (ou crie um branch específico para as páginas do Github se preferir rotear direto para a pasta `/slides`).
4. (Opcional Vercel) A apresentação já estará online no seu subdiretório do Vercel caso o projeto raiz esteja hospedado lá. Exemplo: `https://seusite.vercel.app/slides/index.html`.
