# INSPEÇÃO DE USABILIDADE - HEURÍSTICAS DE NIELSEN
**Aplicativo:** Turismo Acessível UTP
**Equipe:** Eduarda Horning Bzunek, João Gualberto Boissa Netto, João Vitor da Mota Mattos, José Otávio Chacorowski Raimundo, Yasmin dos Santos Pereira.

*Nota: Este documento foca exclusivamente na identificação de problemas (pontos negativos) encontrados na interface, conforme diretrizes de avaliação heurística.*

---

## 1. Visibilidade do Status do Sistema
**[ERRO ENCONTRADO]** Falta de feedback visual imediato ao enviar um formulário de avaliação de um local em áreas com baixa conectividade (offline).
**Severidade:** Alta (3)
**Recomendação:** Implementar um spinner de carregamento e um toast message informando que os dados foram salvos no cache local e serão sincronizados em breve.

## 2. Correspondência entre o Sistema e o Mundo Real
**[ERRO ENCONTRADO]** O termo "Latitude/Longitude" no formulário de cadastro de locais é muito técnico para usuários comuns.
**Severidade:** Média (2)
**Recomendação:** Substituir por "Localização no Mapa" e permitir marcar arrastando um pino virtual.

## 3. Controle e Liberdade do Usuário
**[ERRO ENCONTRADO]** Não há opção clara para cancelar ou desfazer o envio de uma avaliação caso o usuário clique acidentalmente no botão "Enviar".
**Severidade:** Alta (3)
**Recomendação:** Adicionar um botão de "Cancelar" bem visível ou uma funcionalidade "Desfazer" nos primeiros 5 segundos após o envio.

## 4. Consistência e Padrões
**[ERRO ENCONTRADO]** Inconsistência nos ícones de voltar. Algumas telas usam uma seta `<-` e outras usam um `X`.
**Severidade:** Baixa (1)
**Recomendação:** Padronizar todos os botões de retorno/fechar telas para utilizarem o mesmo padrão iconográfico.

## 5. Prevenção de Erros
**[ERRO ENCONTRADO]** O campo "Inclinação da Rampa" permite a digitação de letras e valores matematicamente impossíveis (> 100%).
**Severidade:** Catastrófica (4)
**Recomendação:** Restringir o teclado apenas para números (type="number") e aplicar uma validação de limite máximo no input.

## 6. Reconhecimento em vez de Memorização
**[ERRO ENCONTRADO]** Na aba de "Ranking", não fica explícito imediatamente o que cada cor de "Selo" significa, obrigando o usuário a lembrar da legenda.
**Severidade:** Média (2)
**Recomendação:** Exibir uma pequena legenda ou tooltip próximo aos selos (Ouro, Prata, Bronze).

## 7. Flexibilidade e Eficiência de Uso
**[ERRO ENCONTRADO]** Usuários experientes não possuem atalhos para pular a tela de boas-vindas/tutorial, sendo obrigados a passar por ela toda vez que reinstalam o app.
**Severidade:** Baixa (1)
**Recomendação:** Adicionar um botão "Pular" (Skip) no onboarding.

## 8. Estética e Design Minimalista
**[ERRO ENCONTRADO]** A tela de "Detalhes do Local" possui informações redundantes e textos muito extensos aglomerados, dificultando a leitura para pessoas com déficit de atenção ou baixa visão.
**Severidade:** Média (2)
**Recomendação:** Utilizar listas com marcadores (bullet points) e separar as informações em abas (Visão Geral, Avaliações, Fotos).

## 9. Ajuda aos Usuários em Reconhecer e Recuperar de Erros
**[ERRO ENCONTRADO]** Quando o GPS está desativado, o erro exibido é "Network Error 404 / Location Null", o que é jargão técnico.
**Severidade:** Alta (3)
**Recomendação:** Mudar a mensagem para "Por favor, ative a localização (GPS) do seu celular para encontrarmos os lugares próximos a você."

## 10. Ajuda e Documentação
**[ERRO ENCONTRADO]** Ausência total de um botão "Ajuda" ou "Como Usar" no menu principal para auxiliar idosos ou pessoas com dificuldade tecnológica a entenderem como avaliar uma rampa.
**Severidade:** Média (2)
**Recomendação:** Inserir uma seção de FAQ / Tutorial Rápido dentro do painel de equipe ou no menu de configurações.
