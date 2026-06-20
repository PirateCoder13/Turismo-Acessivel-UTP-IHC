# MAPA DE NAVEGAÇÃO DE TELAS (ARQUITETURA DE INFORMAÇÃO)
**Aplicativo:** Turismo Acessível UTP
**Equipe:** Eduarda Horning Bzunek, João Gualberto Boissa Netto, João Vitor da Mota Mattos, José Otávio Chacorowski Raimundo, Yasmin dos Santos Pereira.

O mapa abaixo descreve a hierarquia e o fluxo de telas do aplicativo, evidenciando as funcionalidades e caminhos de interface.

```text
[ TELA INICIAL / HOME (Mapa Interativo) ]
  │
  ├──> (Botão Flutuante) [ PAINEL DE ACESSIBILIDADE ]
  │      ├─ Alternar Alto Contraste
  │      ├─ Alternar Leitor de Tela (TTS)
  │      ├─ Alternar Fonte para Dislexia
  │      ├─ Aumentar Tamanho da Fonte (A+)
  │      └─ Filtros de Daltonismo (Protanopia, Deuteranopia, Tritanopia)
  │
  ├──> (Botão TopBar) [ SOBRE A EQUIPE ]
  │      └─ Lista de Integrantes e Descrição do Projeto
  │
  ├──> (Navegação Inferior) [ RANKING GERAL ]
  │      └─ Lista de locais ordenados por Selo de Acessibilidade (Platina, Ouro, Prata, Bronze)
  │
  └──> (Clique em um Local no Mapa) [ DETALHES DO LOCAL ]
         │
         ├──> Visão Geral (Foto, Nome, Endereço, Selo Atual)
         ├──> Checklist de Acessibilidade (Portas, Rampas, Sanitários, Sinalização Tátil)
         │
         └──> (Botão "Avaliar") [ FORMULÁRIO DE AVALIAÇÃO ]
                ├─ Passo 1: Informações de Contato / Dados do Usuário
                ├─ Passo 2: Medidas Físicas (Largura de porta, etc.)
                ├─ Passo 3: Avaliação Qualitativa (Notas)
                └─ Passo 4: Envio e Confirmação de Sucesso -> Retorna para Home
```

## Fluxo Principal de Tarefa (Happy Path)
1. O usuário abre o app e cai na **Tela Inicial (Mapa)**.
2. O usuário pode abrir o **Painel de Acessibilidade** a qualquer momento para ajustar a interface às suas necessidades visuais ou cognitivas.
3. O usuário seleciona um ponto turístico (ex: Jardim Botânico) e é levado para a tela de **Detalhes do Local**.
4. Lá, clica em "Avaliar local" e preenche o **Formulário de Avaliação**.
5. Ao concluir, os dados alimentam a aba de **Ranking Geral**.
