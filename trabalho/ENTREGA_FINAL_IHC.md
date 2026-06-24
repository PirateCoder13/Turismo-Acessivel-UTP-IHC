# AVALIAÇÃO HEURÍSTICA DE INTERFACES
**Disciplina:** Interface Humano-Computador (IHC)  
**Professora:** Profa. Patricia Rucker de Bassi  
**Equipe:** Eduarda Horning Bzunek · João Gualberto Boissa Netto · João Vitor da Mota Mattos · José Otávio Chacorowski Raimundo · Yasmin dos Santos Pereira

---

## 1. MAPA DE NAVEGAÇÃO DE TELAS

> Representa como as pessoas se movimentam através do aplicativo. Cada tela é representada com um bloco e todas as telas acessíveis a partir dela fluem daí. (Benyon, 2011)

```
┌──────────────────────────────────────────┐
│         TELA INICIAL — HOME              │
│         (Mapa Interativo da Cidade)      │
└──────────────────────────────────────────┘
        │                    │                    │
        ▼                    ▼                    ▼
┌──────────────┐   ┌──────────────────┐   ┌──────────────┐
│   PAINEL DE  │   │  DETALHES DO     │   │   RANKING    │
│ACESSIBILIDADE│   │  LOCAL TURÍSTICO │   │   GERAL      │
│  (Modal)     │   │                  │   │              │
└──────────────┘   └──────────────────┘   └──────────────┘
        │                    │
        │                    ▼
        │          ┌──────────────────┐
        │          │   FORMULÁRIO DE  │
        │          │   AVALIAÇÃO      │
        │          │  (Passo a passo) │
        │          └──────────────────┘
        │                    │
        │                    ▼
        │          ┌──────────────────┐
        │          │  CONFIRMAÇÃO DE  │
        │          │  ENVIO           │
        │          └──────────────────┘
        │                    │
        └────────────────────┘
                    Retorna à HOME
```

### Descrição dos Fluxos

| Tela de Origem | Ação do Usuário | Tela de Destino |
| :--- | :--- | :--- |
| **HOME** | Toca no botão "Acessibilidade" (barra superior) | Painel de Acessibilidade (modal) |
| **HOME** | Toca em um pino de local no mapa | Detalhes do Local Turístico |
| **HOME** | Toca na aba "Ranking" (nav inferior) | Ranking Geral |
| **Detalhes do Local** | Toca em "Avaliar este local" | Formulário de Avaliação |
| **Formulário de Avaliação** | Conclui e envia | Confirmação de Envio → HOME |
| **Painel de Acessibilidade** | Fecha ou clica fora | Retorna à tela anterior |
| **Qualquer tela** | Toca em "voltar" | Tela anterior |

### Funcionalidades do Painel de Acessibilidade

| Funcionalidade | Descrição |
| :--- | :--- |
| Alto Contraste | Altera paleta de cores para preto/amarelo de alta legibilidade |
| Leitor de Tela (TTS) | Lê em voz alta o texto da tela ao toque |
| Fonte para Dislexia | Substitui a fonte padrão por fonte otimizada para dislexia |
| Aumentar Texto (A+) | Alterna entre 3 tamanhos de fonte |
| Filtro de Daltonismo | Aplica filtros visuais: Protanopia, Deuteranopia, Tritanopia |

---

## 2. FRAMEWORK FINAL DE AVALIAÇÃO HEURÍSTICA

> Conforme as diretrizes da Aula 10 (Avaliação de Interfaces, 01/06), o relatório de inspeção lista **somente os problemas encontrados** — ou seja, os itens avaliados como **Não** no checklist. Para cada problema, indica-se: local, descrição, diretriz violada, severidade, e frequência/impacto/persistência.

### Escala de Severidade (Nielsen)

| Grau | Significado |
| :---: | :--- |
| 1 | "Não concordo que seja um problema de usabilidade" |
| 2 | Problema cosmético — corrigir se sobrar tempo |
| 3 | Problema menor — prioridade baixa |
| 4 | Problema grave — alta prioridade |
| 5 | Catástrofe de usabilidade — correção imperativa |

---

### Problemas Encontrados

| # | Heurística Violada | Local no App | Descrição do Problema e Recomendação | Frequência | Impacto | Persistência | Grau de Severidade |
|:---:| :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| 1 | **H1 – Visibilidade do Status do Sistema** | Tela de Avaliação (envio do formulário) | **Problema:** Não há feedback visual (spinner ou mensagem) durante o envio do formulário, deixando o usuário sem saber se a ação foi concluída, especialmente em conexões lentas.<br>**Recomendação:** Adicionar indicador de carregamento e mensagem de sucesso/erro após o envio. | Baixa | Alto | Alta | **3** |
| 2 | **H2 – Correspondência com o Mundo Real** | Formulário de Avaliação | **Problema:** O campo de coordenadas do local usa termos técnicos ("Latitude/Longitude") que não fazem parte do vocabulário de usuários comuns, especialmente idosos e PcD.<br>**Recomendação:** Substituir por "Localização no Mapa" com um botão de captura automática pelo GPS. | Alta | Médio | Nenhuma | **2** |
| 3 | **H3 – Controle do Usuário e Liberdade** | Formulário de Avaliação (botão enviar) | **Problema:** Não há opção de cancelar ou voltar após iniciar o envio do formulário. Um toque acidental no botão "Enviar" não pode ser desfeito.<br>**Recomendação:** Adicionar diálogo de confirmação "Tem certeza que deseja enviar?" com opção "Cancelar". | Baixa | Alto | Nenhuma | **3** |
| 4 | **H4 – Consistência e Padrões** | Diversas telas | **Problema:** O ícone de "voltar" não é consistente entre as telas: algumas usam seta (←) e outras usam X, gerando confusão sobre o comportamento esperado.<br>**Recomendação:** Padronizar o ícone de retorno em todo o aplicativo usando seta (←) conforme padrão Android/iOS. | Alta | Baixo | Nenhuma | **1** |
| 5 | **H6 – Prevenção de Erros** | Formulário de Avaliação (campo de medidas físicas) | **Problema:** O campo "Largura da Porta" e "Inclinação da Rampa" aceitam qualquer caractere, permitindo a digitação de letras e valores impossíveis (ex.: -500 cm).<br>**Recomendação:** Restringir o teclado ao modo numérico e aplicar validação de faixa de valores aceitáveis. | Média | Alto | Nenhuma | **4** |
| 6 | **H8 – Mapear Vocabulários / Ajuda ao Usuário** | Todo o aplicativo | **Problema:** Não há tela ou seção de ajuda para esclarecer termos específicos do app, como "Selo de Acessibilidade", "Rota acessível" ou os critérios do checklist, dificultando o uso por novatos.<br>**Recomendação:** Implementar uma seção de FAQ ou tooltips explicativos junto aos termos técnicos. | Baixa | Médio | Alta | **2** |
| 7 | **H9 – Reconhecimento em vez de Lembrança** | Aba Ranking Geral | **Problema:** O usuário precisa memorizar o que cada cor do Selo de Acessibilidade significa (Platina, Ouro, Prata, Bronze), pois não há legenda visível na tela de Ranking.<br>**Recomendação:** Exibir legenda permanente ou tooltip ao tocar em cada selo explicando o critério de cada nível. | Alta | Médio | Alta | **2** |
| 8 | **H9 – Reconhecimento em vez de Lembrança** | HOME – Lista de locais | **Problema:** Os locais turísticos não são agrupados por categoria (museus, praças, monumentos) nem ordenados por popularidade ou proximidade, exigindo que o usuário memorize onde cada tipo de local fica.<br>**Recomendação:** Adicionar filtros por categoria e ordenação por distância ou avaliação. | Alta | Médio | Alta | **3** |
| 9 | **H10 – Flexibilidade e Eficiência de Uso** | Painel de Acessibilidade | **Problema:** Não há atalhos de teclado para ativar rapidamente os recursos de acessibilidade (ex.: Alt+1 para Alto Contraste, Alt+2 para Leitor de Tela), obrigando o usuário a navegar manualmente até o painel.<br>**Recomendação:** Implementar hotkeys de teclado para usuários que acessam via desktop/teclado externo. | Baixa | Baixo | Nenhuma | **1** |
| 10 | **H11 – Estética e Design Minimalista** | Tela de Detalhes do Local | **Problema:** Textos em cinza claro sobre fundo branco apresentam contraste insuficiente (abaixo do padrão WCAG 2.1 nível AA), prejudicando especialmente usuários com baixa visão.<br>**Recomendação:** Aumentar o contraste dos textos secundários para no mínimo 4.5:1 conforme WCAG 2.1. | Alta | Alto | Alta | **2** |
| 11 | **H12 – Ajuda e Documentação** | Menu principal / Navegação | **Problema:** Quando o usuário seleciona uma opção ambígua no menu (ex.: diferença entre "Avaliar local" e "Ver avaliações"), não há informação adicional explicando o que cada opção faz antes de selecionar.<br>**Recomendação:** Adicionar subtítulo descritivo ou tooltip abaixo de cada item de menu ambíguo. | Baixa | Médio | Alta | **2** |
