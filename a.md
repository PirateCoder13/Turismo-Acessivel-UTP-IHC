### 
*Este prompt instrui a inteligência artificial a codificar e renderizar as telas interativas do aplicativo móvel, aplicando rigorosamente as regras de IHC, WCAG 2.2 e ABNT NBR 9050 descritas no seu documento de requisitos.*

Aja como um Designer de UI/UX e Desenvolvedor Front-end especialista em Acessibilidade Digital. Crie um protótipo funcional em React (utilizando Tailwind CSS e ícones acessíveis da biblioteca Lucide) para o aplicativo móvel "Turismo Acessível UTP".

A interface deve ser totalmente responsiva (focada em dispositivos móveis) e seguir de forma estrita as diretrizes de acessibilidade WCAG 2.2 e a norma brasileira de acessibilidade física ABNT NBR 9050.

### DIRETRIZES ESTREITAS DE DESIGN E ACESSIBILIDADE:

1. Tamanho do Alvo de Toque (WCAG 2.5.8/2.5.5): Garanta que todos os botões, abas e elementos interativos tenham uma área mínima de clique de 48x48dp (ou 48px) para prevenir erros de acionamento por tremores motores ou uso em movimento.
2. Contraste de Cores (WCAG SC 1.4.3): Use uma tipografia escura sólida sobre fundo claro neutro, garantindo um contraste mínimo de 4.5:1 para texto normal e 3:1 para ícones e elementos visuais. Disponibilize um botão flutuante de "Modo Alto Contraste" no cabeçalho.
3. Redundância Visual para Daltônicos (WCAG SC 1.4.1): Ao classificar a acessibilidade dos locais (Verde/Platina, Laranja/Prata, Vermelho/Bronze), nunca dependa apenas da cor. Combine cores com símbolos geométricos distintos (ex: Estrela para Platina, Quadrado para Prata, Triângulo para Bronze).
4. Tipografia: Use uma fonte sem serifa limpa (Arial ou Inter), altamente legível, com tamanho mínimo de 16px para leitura geral de descrições.

### VOCÊ DEVE CONSTRUIR UM SISTEMA DE NAVEGAÇÃO POR ABAS CONTER AS SEGUINTES 4 TELAS PRINCIPAIS:

#### TELA 1: Painel Principal (Home & Mapa)

* Uma barra superior de acessibilidade (com botões rápidos de "Alto Contraste", "Libras" e "Aumentar Fonte").
* Uma barra de pesquisa proeminente no terço inferior da tela, com um ícone de microfone indicando busca por voz.
* Filtros rápidos por tipo de necessidade (Cadeirante, Baixa Visão, Surdo, etc.) utilizando botões largos (mínimo 48px).
* Um mapa interativo simulado exibindo pins/marcadores em formatos geométricos diferentes para representar os selos de acessibilidade (Platina, Ouro, Prata).
* Botão de Ação Flutuante (FAB) "+" no canto inferior direito para "Cadastrar Novo Local".

#### TELA 2: Painel de Detalhes do Ponto Turístico

* Nome do local (Ex: "Museu de Arte de Curitiba") em destaque com contraste proeminente.
* Badge do "Selo Platina (92/100 pontos)" com ícone de estrela verde.
* Um botão de destaque central com tamanho generoso de clique: "[Avaliar este Local / Enviar Medidas]".
* Lista detalhada e categorizada das especificações técnicas (NBR 9050):
* "Portas: Vão livre medido de 0,90m (Aprovado)" com ícone correspondente.
* "Rampas: Inclinação de 6,25% com corrimão duplo (Aprovado)".
* "Banheiros: Espaço de giro de 1,50m e barras rígidas (Aprovado)".
* "Sinalização: Piso tátil direcional e de alerta ausente na entrada (Pendente)".


* Mini-galeria com fotos da comunidade (todas contendo tags alt de descrição para leitores de tela).

#### TELA 3: Formulário Colaborativo (Passo a Passo)

* Um indicador de progresso no topo: "Passo 1 de 4: Portas e Acessos" com botão "Voltar" e "Cancelar" bem espaçados.
* Texto explicativo simples: "Como medir a porta? Meça o vão livre útil com a porta totalmente aberta".
* Campo numérico acessível para digitação rápida da largura útil em metros: "[ 0,90 m ]".
* Seleção de múltipla escolha (Radio Buttons largos) para desníveis: "(o) Entrada plana e nivelada" e "( ) Possui degrau sem rampa".
* Botão com ícone de câmera para anexar foto comprobatória: "".
* Botão de navegação "Próximo Passo" na parte inferior.

#### TELA 4: Ranking & Perfil Gamificado

* Uma tabela de classificação vertical simples (Ranking Municipal) exibindo os pontos turísticos mais acessíveis do município.
* Área do perfil do usuário colaborador mostrando sua pontuação atual no sistema de gamificação, nível e medalhas conquistadas (ex: "Selo de Colaborador Ouro").

Gere o código limpo, semântico, amigável para leitores de tela (utilizando tags HTML5 corretas e ARIA labels) e monte uma visualização onde eu possa navegar entre estas 4 abas perfeitamente.

---
