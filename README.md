# Desafio: Registro de Paradas 🚜

Esse projeto faz parte do desafio para desenvolvedor **React Native** na **DataFarm**, ao qual eu tive o prazer de participar. O desafio consiste em criar um aplicativo para registrar as vezes que o usuário parou sua atividade na lavoura por qualquer que seja o motivo. O usuário deve informar o equipamento utilizado, a fazenda e o talhão onde estava ocorrendo a atividade. Além disso deve informar o motivo da parada/pausa, além de uma estimativa do tempo que a pausa durará e uma possível nota/observação sobre o ocorrido.

**_Techs:_**

- React Native;
- React Navigation;
- Styled-components;
- MMKV;
- Quick SQLite;
- TypeORM;
- Reanimated v3;
- Lottie.

## Overview

Durante a implementação tentei me ater ao máximo à [nova arquitetura do React Native](https://reactnative.dev/docs/next/the-new-architecture/landing-page), utilizando de bibliotecas como **MMKV**, **Quick SQLite** e **Reanimated v3** que usam [JSI e Turbo Modules](https://reactnative.dev/docs/next/the-new-architecture/pillars-turbomodules) para realizar a comunicação com entidades nativas.

O motivo da escolha foi o ganho de performance comparado com abordagens que utilizam a arquitetura antiga com a _"bridge"_ onde o _bundle javascript_ se comunica com módulos nativos por meio da serialização de _JSON_.

Observe a comparação de performance de alguma das bibliotecas citadas:

- _QuickSQLite_ vs _SQLite_ (ambos utilizando _TypeORM_)

![quick-sqlite-performance](https://imgur.com/YxRpiKQ.png)

- _MMKV_ vs Bibliotecas populares de armazenamento local

![mmkv-performance](https://i.imgur.com/7SWff0m.png)

## UI design

Para a interface de usuário, segui as guidelines dos _prints_ apresentados na descrição do desafio. Entretanto, tomei a liberdade de adicionar algumas coisas como:

- SplashPage customizada;
- Modais de resposta à interação do usuário;
- Banner representando a situação da conexão do usuário;
- E animações utilizando Lottie e Reanimated.

![ui-design](https://imgur.com/gDhPelW.png)

## Offline-first

Um diferencial deste desafio era permitir a utilização do aplicativo sem conexão com a internet. Para resolver este problema utilizei uma fila de execução que seria a responsável por atualizar os dados com o servidor enquanto o app se comunica diretamente com o banco de dados local. Observe:

![database_sync](https://i.imgur.com/KfDpGIu.png)

Como a imagem acima sugera, o app se comunica diretamente com o banco de dados a maior parte do tempo, porém, à cada atualização do registro de parada um novo conteúdo é adicionado à [fila de execução](https://github.com/oviniciusrosa/datafarm_challenge/blob/main/src/contexts/execution_queue.tsx). O conteúdo adicionado descreve o envio à _API_, contendo o método _HTTP_, o endpoint da _API_ e o dado em si.

Após receber o conteúdo, a fila verifica a conexão do usuário. Caso o app possua conexão com a internet, a fila já executa o envio da informação. Caso contrário, a fila armazena o conteúdo numa tabela do banco de dados e, assim que a conexão é recuperada, essa tabela é lida e executada.

Normalmente, esta estrutura possui um módulo de reconciliação dos dados, onde é feita uma comparação com o dado que veio do servidor e os dados enviados a fim de manter a confiabilidade da informação. Entretanto, não foi necessário neste caso, pois o aplicativo não obtém os registros de paradas anteriormente enviados, apenas armazena localmente.

## Como rodar

Primeiro, é necessário clonar o repositório:

> git clone https://github.com/oviniciusrosa/datafarm_challenge.git

Em seguida, instalamos as dependências do projeto:

> yarn install

Então, executamos o app com o seguinte comando:

> yarn android

**OBS:**É importante salientar que, seguindo as exigências do desafio, o app foi feito para o sistema operacional _android_. Ao executar o aplicativo no iOS o usuário pode se deparar com uma experiência instável.

**Aproveite!! 😊**
