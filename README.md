# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
#My tutorial
## Simple API with AdonisJS
This project is from the [Build a Simple API with AdonisJS course](https://www.youtube.com/watch?v=5wzcRtrRVd4&list=PLoCq0WM_wHG-rFQEsShMQkgGcTO1Hmnvx) found on YouTube.

#### show structure folders
```bash
.
├── README.md
├── ace
├── app
│   ├── Middleware
│   │   └── ConvertEmptyStringsToNull.js
│   └── Models
│       ├── Token.js
│       ├── Traits
│       │   └── NoTimestamp.js
│       └── User.js
├── config
│   ├── app.js
│   ├── auth.js
│   ├── bodyParser.js
│   ├── cors.js
│   ├── database.js
│   └── hash.js
├── database
│   ├── factory.js
│   └── migrations
│       ├── 1503250034279_user.js
│       └── 1503250034280_token.js
├── package-lock.json
├── package.json
├── server.js
└── start
    ├── app.js
    ├── kernel.js
    └── routes.js
```
#### My commands
[adonisjs vscode debugger code example](https://newbedev.com/javascript-adonisjs-vscode-debugger-code-example)
```json
// FOR AdonisJS 4.1 AND LOWER VERSION
// in package.json add
...
  "scripts": {
    "dev": "adonis serve --dev --debug",
  }
...
// then create a launch.json file under .vscode folder in root
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Application",
      "runtimeExecutable": "npm",
      "runtimeArgs": [
        "run",
        "dev"
      ],
      "port": 9229,
      "internalConsoleOptions": "openOnSessionStart"
    }
  ]
}
// then it is ready to run
```

```bash
npm i -g @adonisjs/cli
adonis --version
adonis --help
adonis new --help
#new project
adonis new adonis_simple_api_laravel --api-only
cd adonis_simple_api_laravel
adonis serve --dev

# show structure folders
tree -I node_modules
tree -I 'node_modules|cache|test_*'

docker compose up -d
docker compose down

mysql -u root -p'root' -h 127.0.0.1 -P 3307

npm install mysql --save

adonis migration:run
#migrate: 1503250034279_user.js
#migrate: 1503250034280_token.js
#Database migrated successfully in 435 ms

adonis migration:rollback
```
