# MENSAGEM PARA O PROFESSOR
O que falta no projeto: Testes, validações do cartão no formulário de Checkout(consequentemente não tem os toasts notificando o erro para o usuário).

Tive um problema em fazer a validação, pedi ajuda aos colegas e mesmo assim não foi resolvido. Pela falta de tempo nessa semana, os testes ficaram pra trás também. Decidi enviar assim mesmo para não atrasar o senhor e também porque já não aguento mais esse projeto :sweat_smile:



# Projeto final

Exame Final de Frontend VI

![ci](https://github.com/PedagogiaDHBrasil/ctd-esp-front3-final/actions/workflows/ci.yml/badge.svg)
![cov](https://github.com/PedagogiaDHBrasil/ctd-esp-front3-final/actions/workflows/coverage.yml/badge.svg)

## Indice

- [Requisitos](#requisitos)
  - [Condições mínimas de aprovação](#condições-mínimas-de-aprovação)
  - [Aspectos que modificam a avaliação final da nota](#aspectos-que-modificam-a-avaliação-final-da-nota)
- [Funcionalidades](#funcionalidades)
- [Desenvolvimento](#desenvolvimento)
- [Entrega](#entrega)
  - [Data de Entrega](#data-de-entrega)
  - [Formato de Entrega](#formato-de-entrega)

## Requisitos

É essencial clonar este projeto em um repositório privado, para poder trabalhar _individualmente_. Projetos que tenham sido realizados sem partir deste modelo não serão aceitos. Para isso você terá que criar um repositório com o nome "ctd-esp-front3-final" na sua conta do Github e depois seguir os seguintes passos no seu terminal

```
# clona o repositório final para o seu computador
git clone https://github.com/PedagogiaDHBrasil/ctd-esp-front3-final

# digite o diretório no final
cd ctd-esp-front3-final

# remove links para o repositório DH
git remove rm origem

# Adicione o link ao repositório da sua conta do github, substitua <yourusername> pela sua conta
git remote add origin https://github.com/<yourusername>/ctd-esp-front3-final

# Faça o upload do template inicial para o seu repositório do github
git push -u origem principal
```

Não se esqueça de adicionar as permissões às contas mencionadas no [Formato de Entrega](#delivery-format) antes da [Data de Entrega](#delivery-date)!

### Condições mínimas de aprovação

As seguintes condições são requisitos mínimos necessários para a aprovação final:

- **Conformidade com todos os recursos obrigatórios**
- Somente as bibliotecas detalhadas neste README podem ser usadas. Consulte [Dependências](docs/development.md#dependencies) e [Dependências de desenvolvimento](docs/development.md#development-dependencies)
- Qualquer funcionalidade que seja implementada usando uma biblioteca diferente das permitidas não será considerada executada.
- Deve ser desenvolvido usando Typescript como linguagem.
- É necessário ter testes unitários escritos para a página de checkout, conforme indicado no item número 4. Para isso, deve-se utilizar Jest e React Testing Library. Além disso, MSW ou alguma outra biblioteca deve ser usada para interceptar as solicitações e simular uma resposta.
- Espera-se que o projeto tenha cobertura de pelo menos 50% como condição mínima de aprovação. Mas lembre-se de que a página de checkout (e seus componentes associados) deve ter pelo menos 90%.
- Espera-se que a página Checkout contenha os fluxos de validação necessários para o envio correto do formulário.
- Nos casos em que é necessário atribuir estilos aos componentes, isso deve ser feito usando a biblioteca Material UI. Estilos dinâmicos também devem ser tratados por esta biblioteca.
- O uso correto de SSG e SSR é esperado em pelo menos 4 das 6 páginas.

### Aspectos que modificam a avaliação final da nota

Os seguintes aspetos são extras ao requisito mínimo de aprovação que serão tidos em conta para aumentar a nota final, desde que a sua implementação seja correta:

**TypeScript**

- Será levado em consideração o uso correto do TypeScript para digitação de componentes e todas as funções que desenvolvem lógica reutilizável.

**Next.JS**

- O uso correto de Static Site Rendering (juntamente com ISR) e Server Side Rendering ao longo das seis (6) páginas do projeto será avaliado.

**Validações**

- Será valorizada a adição de validações de fluxos alternativos ao normal e o tratamento de erros nas diferentes funcionalidades implementadas.

**React Hook Form**

- O uso correto do React Hook Form e o uso das validações nativas que ele possui serão valorizados.

**Material UI**

- Será valorizado o uso de componentes avançados para o design de cada uma das páginas.

**Teste unitário e cobertura**

- Será valorizado o uso correto de testes unitários e o aumento do percentual de cobertura do código (cobertura) além de 50%.

**Boas práticas**

- Atenção especial será dada ao uso de melhores práticas, princípios SOLID, reutilização de componentes e funcionalidades comuns e renderização dinâmica.

## Funcionalidades

Consulte [Recursos](docs/functionalities.md).

## Desenvolvimento

Consulte [Desenvolvimento](docs/development.md).

## Entrega

### Data de entrega

Somente serão aceitas entregas recebidas até o encerramento da aula 24, aula de Avaliação Final.

### Formato de entrega

A entrega será aceita enviando dois URLs

- URL de um repositório privado do Github, que tem acesso compartilhado às seguintes contas:

  - Ninhada 1 - Professor: ??? - conta Github [@???](https://github.com/???)

- URL da Vercel onde o projeto está implantado e funcionando para sua avaliação.

O link do Formulário Google para submissão será enviado pelo professor responsável pela comissão.

Boa sorte e sucesso!
