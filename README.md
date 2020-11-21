
# Boilerplate Nest.js


- REST API with:
[Nestjs]
[TypeORM]
[Axios]



## Getting started


Start by cloning this project on your workstation.

``` sh
git clone https://github.com/gandaierama/boilerplate-nestjs.git
```

The next thing will be to install all the dependencies of the project.

```sh
cd ./boilerplate-nestjs
npm install
```

Once the dependencies are installed, you can now configure your project by creating a new `.env` file containing your environment variables used for development.

```
cp .env.example .env
vi .env
```

```sh

# Launch 
npm run start
```

## Project structure

This API was made with a well-defined directory structure.

```sh

├── dist/  
├── node_modulos/
├── test/
├── src/
│   ├── app
│   │   ├── app.module.ts
│   │   ├── app.controller.ts
│   │   ├── app.dto.ts
│   │   ├── app.entity.ts
│   │   ├── app.class.ts
│   │   └── app.providers.ts
│   ├──crawler
│	│ 	├── ip/
│	│   │   ├── ip.module.ts
│	│   │   ├── ip.controller.ts
│	│   │   ├── ip.dto.ts
│	│   │   ├── ip.entity.ts
│	│   │   ├── ip.class.ts
│	│   │   └── ip.providers.ts
│   ├── database/
│	│   │   ├── database.module.ts
│	│   │   └── database.providers.ts
│   ├── config/
│	│   │   ├── config.module.ts
│	│   │   └── config.service.ts
│   ├── auth/
│   └── main.ts
├── .example.env
├── .gitignore
├── package.json
├── nest-cli.json
├── tsconfig.json
├── webpack-hmr.config.js
└── README.md
```



### IP
```sh

	Coletar ip
	POST /ip

	Consultar ip
	POST /ip/get

	Criar ip
	POST /ip/create

	Analisar ip
	POST /ip/analayse


```

## Roadmap

The following improvements are currently in progress : 

- [ ] Crawler / ip
- [ ] Crawler / site
- [ ] Crawler / tempo
- [ ] Crawler / ip
- [ ] Crawler / ip
- [ ] Crawler / ip
- [ ] Crawler / ip
