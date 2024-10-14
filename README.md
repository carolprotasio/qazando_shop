# Qazando Shop - Testes Automatizados com Cypress

## Sobre o Projeto

O Qazando Shop é um projeto de automação de testes que visa garantir a qualidade e a confiabilidade do site de e-commerce Qazando Shop. Este ambiente simula uma experiência completa de compras online, oferecendo uma plataforma ideal para a prática de automação de testes em um contexto realista.

Funcionalidades Testadas:
* Cadastro de Usuários: Verifica a criação e validação de contas de usuários.
* Login e Logout: Testa a autenticação e a saída segura do sistema.
* Carrinho de Compras: Avalia a adição, remoção e visualização de produtos no carrinho.
* Lista de Desejos: Permite que os usuários salvem produtos para compra futura.
* Informação de Faturamento e Finalização de Pedidos: Confirma o fluxo de checkout, incluindo o processamento de pagamentos.

  <img src="https://github.com/carolprotasio/shop_qazando/blob/main/assets/qaShop.png" alt="web" width="500"/>

#### 🚀 Objetivo do Projeto
O objetivo principal é assegurar que todos os fluxos de interação do usuário funcionem corretamente, desde a navegação inicial até a conclusão da compra. Ao utilizar o Cypress, o projeto realiza testes automatizados que assemelha o comportamento real do usuário, proporcionando uma validação rápida e eficaz das funcionalidades.

## 🛠 Tecnologias Utilizadas

- **Cypress**: Framework de testes E2E.
- **JavaScript**: Linguagem para escrever os testes.
- **Tesults**: Ferramenta para relatórios de execução dos testes.
- **Git**: Controle de versão.
- **Node.js**: Ambiente de execução.

## 🔎 Cenários de Teste e Critérios de Aceitação

### 🧪 Cenário 1: Cadastro de Usuário (Register)
**CT-001: Deve cadastrar com sucesso um novo usuário**  
**Ação**: Preencher todos os campos obrigatórios (nome, email e password) com informações válidas e clicar em "Cadastrar".  
**Resultado esperado**: Uma mensagem informando que o usuário foi cadastrado com sucesso no sistema e o redirecionamento para a página "Minha Conta". O nome do usuário deve ser exibido na interface.

**CT-002: Falha ao tentar cadastrar sem preencher o campo de nome**  
**Ação**: Deixar o campo de nome vazio, preencher os campos de email e password, e clicar em "Cadastrar".  
**Resultado esperado**: Uma mensagem de erro deve ser exibida abaixo do campo de nome, informando que "O campo nome deve ser preenchido".

**CT-003: Falha ao tentar cadastrar sem preencher o campo de email**  
**Ação**: Deixar o campo de email vazio, preencher os campos de nome e password, e clicar em "Cadastrar".  
**Resultado esperado**: Uma mensagem de erro deve ser exibida abaixo do campo de email.

**CT-004: Falha ao tentar cadastrar sem preencher o campo de password**  
**Ação**: Deixar o campo de password vazio, preencher os campos de nome e email, e clicar em "Cadastrar".  
**Resultado esperado**: Uma mensagem de erro deve ser exibida abaixo do campo de senha.

**CT-005: Falha ao tentar cadastrar sem preencher nenhum dos campos obrigatórios**  
**Ação**: Deixar todos os campos (nome, email e password) vazios e clicar em "Cadastrar".  
**Resultado esperado**: Mensagens de erro devem ser exibidas abaixo de cada campo obrigatório, informando que os campos devem ser preenchidos.

<img src="https://github.com/carolprotasio/shop_qazando/blob/main/assets/register-gui.png" alt="web" width="500"/>

### 🧪 Cenário 2: Login de Usuário (Login)
**CT-001: Login com sucesso com credenciais válidas**  
**Ação**: Preencher os campos de email e senha com credenciais válidas e clicar em "Entrar".  
**Resultado esperado**: O usuário deve ser redirecionado para a página "Minha Conta" e seu nome deve ser exibido.

**CT-002: Falha ao tentar login com senha incorreta**  
**Ação**: Preencher o campo de email com um email válido e o campo de senha com uma senha incorreta, e clicar em "Entrar".  
**Resultado esperado**: Uma mensagem de erro deve ser exibida informando que as credenciais estão incorretas.

**CT-003: Falha ao tentar login sem preencher o campo de email**  
**Ação**: Deixar o campo de email vazio, preencher o campo de senha, e clicar em "Entrar".  
**Resultado esperado**: Uma mensagem de erro deve ser exibida abaixo do campo de email, informando que o campo deve ser preenchido.

**CT-004: Falha ao tentar login sem preencher o campo de senha**  
**Ação**: Preencher o campo de email e deixar o campo de senha vazio, e clicar em "Entrar".  
**Resultado esperado**: Uma mensagem de erro deve ser exibida abaixo do campo de senha, informando que o campo deve ser preenchido.

<img src="https://github.com/carolprotasio/shop_qazando/blob/main/assets/login.png" alt="web" width="500"/>

### 🧪 Cenário 3: Adicionar um produto ao Carrinho (Shop)
**CT-001: Adicionar produto ao carrinho com sucesso**  
**Ação**: Selecionar um produto e clicar no botão "Adicionar ao Carrinho".  
**Resultado esperado**: O produto deve ser adicionado ao carrinho com sucesso e uma mensagem de confirmação deve ser exibida.

**CT-002: Adicionar três diferentes produtos ao Carrinho**  
**Ação**: Selecionar três diferentes produtos e clicar no botão "Adicionar ao Carrinho".  
**Resultado esperado**: Os produtos devem ser adicionados ao carrinho com sucesso e as mensagem de confirmação devem ser exibidas.

<img src="https://github.com/carolprotasio/shop_qazando/blob/main/assets/shop.png" alt="web" width="500"/>

### 🧪 Cenário 4: Adicionar produto à lista de desejo (wishing list)
**CT-001: Adicionar um produto à lista de desejos com sucesso**  
**Ação**: Selecionar um produto e clicar no botão "Adicionar à Lista de Desejos".  
**Resultado esperado**: O produto deve ser adicionado à lista de desejos com sucesso. Uma mensagem de "Success" deve ser exibida e o produto deve aparecer na lista de desejos com 1 item.

**CT-002: Adicionar três produtos diferentes à lista de desejos**  
**Ação**: Selecionar três produtos diferentes e adicioná-los à lista de desejos.  
**Resultado esperado**: Os três produtos devem ser adicionados à lista de desejos com sucesso, e a lista deve exibir 3 itens.

**CT-003: Adicionar um produto à lista de desejos e depois ao carrinho**  
**Ação**: Adicionar um produto à lista de desejos e depois transferi-lo para o carrinho.  
**Resultado esperado**: O produto deve ser adicionado à lista de desejos com sucesso e, após ser transferido para o carrinho, deve aparecer na seção "Carrinho".

**CT-004: Adicionar três produtos à lista de desejos e depois ao carrinho**  
**Ação**: Adicionar três produtos à lista de desejos e depois transferi-los para o carrinho.  
**Resultado esperado**: Os três produtos devem ser transferidos da lista de desejos para o carrinho, e a lista de produtos no carrinho deve exibir 3 itens.

<img src="https://github.com/carolprotasio/shop_qazando/blob/main/assets/wishlist.png" alt="web" width="500"/>

### 🧪 Cenário 5: Informação de Faturamento (Billing)
**CT-001: preencher as informações de faturamento com sucesso**  
**Ação**: Preencher todas as informações de faturamento e finalizar o processo de cobrança.  
**Resultado esperado**: As informações de faturamento devem ser registradas com sucesso, e uma mensagem de confirmação deve ser exibida.

**CT-002: Campo "First Name" vazio**  
**Ação**: Deixar o campo "First Name" vazio e tentar salvar informações.  
**Resultado esperado**: Uma mensagem de erro deve ser exibida informando que o campo "First Name" é obrigatório.

**CT-003: Campo "Last Name" vazio**  
**Ação**: Deixar o campo "Last Name" vazio e tentar salvar informações..  
**Resultado esperado**: Uma mensagem de erro deve ser exibida informando que o campo "Last Name" é obrigatório.

**CT-004: Campo "Company Name" vazio**  
**Ação**: Deixar o campo "Company Name" vazio e tentar salvar informações.  
**Resultado esperado**: Uma mensagem de erro deve ser exibida informando que o campo "Company Name" é obrigatório.

**CT-005: Campo "Email Address" vazio**  
**Ação**: Deixar o campo "Email Address" vazio e tentar salvar informações.  
**Resultado esperado**: Uma mensagem de erro deve ser exibida informando que o campo "Email Address" é obrigatório ou inválido.

**CT-006: Campo "Country" vazio**  
**Ação**: Deixar o campo "Country" vazio e tentar salvar informações.  
**Resultado esperado**: Uma mensagem de erro deve ser exibida informando que o campo "Country" é obrigatório.

**CT-007: Campo "City" vazio**  
**Ação**: Deixar o campo "City" vazio e tentar salvar informações.  
**Resultado esperado**: Uma mensagem de erro deve ser exibida informando que o campo "City" é obrigatório.

**CT-008: Campo "Zip Code" vazio**  
**Ação**: Deixar o campo "Zip Code" vazio e tentar salvar informações.
**Resultado esperado**: Uma mensagem de erro deve ser exibida informando que o campo "Zip Code" é obrigatório.

**CT-009: Campo "Full Address" vazio**  
**Ação**: Deixar o campo "Full Address" vazio e tentar salvar informações.  
**Resultado esperado**: Uma mensagem de erro deve ser exibida informando que o campo "Full Address" é obrigatório.

**CT-010: Campo "Additional Notes" vazio**  
**Ação**: Deixar o campo "Additional Notes" vazio e tentar salvar informações. 
**Resultado esperado**: Uma mensagem de erro deve ser exibida informando que o campo "Additional Notes" é obrigatório.

**CT-011: Todos os campos vazios**  
**Ação**: Deixar todos os campos de faturamento vazios e tentar salvar informações. 
**Resultado esperado**: Mensagens de erro devem ser exibidas para todos os campos obrigatórios, informando que devem ser preenchidos.

<img src="https://github.com/carolprotasio/shop_qazando/blob/main/assets/billing.png" alt="web" width="500"/>


### 🧪 Cenário 6: Realizar o Pedido - Pagamento (Orders)
**CT-001: Realizar o pagamento via transferência bancária**  
**Ação**: Preencher as informações de faturamento, selecionar a opção de pagamento via transferência bancária e finalizar o pedido.  
**Resultado esperado**: As informações de faturamento devem ser registradas e o pedido realizado com sucesso, com uma mensagem de confirmação exibida.

**CT-002: Realizar o pagamento via Mobile Banking**  
**Ação**: Preencher as informações de faturamento, selecionar a opção de pagamento via Mobile Banking e finalizar o pedido.  
**Resultado esperado**: As informações de faturamento devem ser registradas e o pedido realizado com sucesso, com uma mensagem de confirmação exibida.

**CT-003: Realizar o pagamento via PayPal**  
**Ação**: Preencher as informações de faturamento, selecionar a opção de pagamento via PayPal e finalizar o pedido.  
**Resultado esperado**: As informações de faturamento devem ser registradas e o pedido realizado com sucesso, com uma mensagem de confirmação exibida.

<img src="https://github.com/carolprotasio/shop_qazando/blob/main/assets/orders.png" alt="web" width="500"/>

## ⚙️ Github Actions 

No projeto Shop Qazando, foi implementada uma pipeline de integração contínua (CI) utilizando GitHub Actions. Essa pipeline automatiza o processo de execução dos testes de ponta a ponta (E2E) desenvolvidos com Cypress sempre que uma nova alteração é feita no repositório. O fluxo de trabalho é configurado para rodar os testes automaticamente e, ao final de cada execução, os resultados são enviados para a plataforma Tesults, que permite o acompanhamento e análise dos testes. Isso garante a qualidade contínua do código e um rápido feedback sobre possíveis erros.

<img src="https://github.com/carolprotasio/shop_qazando/blob/main/assets/githubActions.png" alt="web" width="500"/>


## 📊 Monitoramento de Testes com Tesults
Os resultados dos testes podem ser visualizados diretamente no Tesults. Os painéis oferecem uma visão detalhada de cada execução de teste, incluindo informações sobre:

Status dos Testes: Identificação rápida de testes aprovados, reprovados ou não executados.
Duração das Execuções: Insights sobre o tempo necessário para a execução de cada teste, ajudando na otimização do processo.
Histórico de Resultados: Acompanhamento das execuções ao longo do tempo, facilitando a identificação de padrões e regressões.
Relatórios Personalizados: Geração de relatórios que permitem uma análise aprofundada do desempenho dos testes e a priorização de correções.

<img src="https://github.com/carolprotasio/shop_qazando/blob/main/assets/tesults.png" alt="web" width="500"/>

## ✅ Conclusão
Este projeto permitiu a automação dos testes das principais funcionalidades de um site de e-commerce, garantindo a estabilidade e a confiabilidade do sistema. Com isso, os principais fluxos de usuário são validados de forma contínua, assegurando uma experiência de compra de alta qualidade.

A integração com o Tesults oferece visibilidade e um rastreamento eficaz dos resultados de cada execução, facilitando a análise de desempenho. Além disso, a configuração de uma pipeline de integração contínua (CI) com GitHub Actions automatiza a execução dos testes de ponta a ponta sempre que uma nova alteração é realizada no repositório. Isso garante que o código seja constantemente avaliado, permitindo a detecção precoce de erros e promovendo um ciclo de desenvolvimento mais ágil e eficiente.
