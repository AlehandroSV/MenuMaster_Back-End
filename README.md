<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">Um framework progressivo de <a href="http://nodejs.org" target="_blank">Node.js</a> para construir aplicativos eficientes e escaláveis ​​do lado do servidor.</p>

<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="Versão NPM" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Licença do Pacote" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="Downloads NPM" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Cobertura de Código" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Apoiadores no Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Patrocinadores no Open Collective" /></a>
<a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Doar-PayPal-ff3f59.svg"/></a>
<a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Suporte%20nos-Apoie%20no%20Open%20Collective-41B883.svg" alt="Apoie-nos"></a>
<a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Seguir"></a>
</p>

## Descrição

Repositório inicial em TypeScript do framework [Nest](https://github.com/nestjs/nest).

## Instalação

```bash
$ pnpm install
```

## Modificar o banco de dados no arquivo .env

```bash
$ Crie um arquivo .env e modifique as strings

# Sua conexão com o Banco de Dados
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DB"

# Sua senha do Token JWT
JWT_SECRET="SenhaSecretaAqui"
```

## Executar o banco de dados

```bash
# Inicializa o DB
$ pnpm prisma migrate dev
```

## Executando o aplicativo

```bash

# Modo de desenvolvimento
$ pnpm run start

# Modo de desenvolvimento com reinicialização automática
$ pnpm run start:dev

# Modo de produção
$ pnpm run start:prod
```

## Suporte

Nest é um projeto de código aberto licenciado sob o MIT. Ele pode crescer graças aos patrocinadores e ao apoio dos incríveis apoiadores. Se você deseja fazer parte deles, por favor, [leia mais aqui](https://docs.nestjs.com/support).

## Contatos do Framework

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## Contato do criador do Template

- Implementado Por - [Alehandro Vidal](https://www.linkedin.com/in/alehandrosv/)
- Twitter - [@VidalAlehandro](https://twitter.com/VidalAlehandro)
- GitHub - [AlehandroSV](https://github.com/AlehandroSV)
- LinkedIn - [Alehandro Santos Vidal](https://www.linkedin.com/in/alehandrosv/)

## Licença

Nest está licenciado sob a [licença MIT](LICENSE).
