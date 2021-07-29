# SG-NLP Demo

## Local development

```sh
# Docker commands for running ui locally
docker build -t sg-nlp-ui-dev -f ui/Dockerfile.dev ./ui

docker run \
    -e NODE_ENV=development\
    -v "$(pwd)/ui/public:/ui/public"\
    -v "$(pwd)/ui/src:/ui/src"\
    -p 3000:3000\
    -t\
    sg-nlp-ui-dev

# Alternatively, install locally and run
cd ui/
npm install
npm start
```

## Build UI and push to registry

```sh
docker login registry.aisingapore.net

docker build -t sg-nlp-ui -f ui/Dockerfile ./ui
docker tag sg-nlp-ui registry.aisingapore.net/sg-nlp/sg-nlp-ui:latest
docker push registry.aisingapore.net/sg-nlp/sg-nlp-ui:latest
```

## Helm deployment

```sh
helm upgrade -n sg-nlp sg-nlp-release nlp-hub-demo -i
```

## Code formatting

Code formatting for Javascript uses the [Prettier](https://prettier.io/) code formatter.

For VS Code:

- Install the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- Edit the VS Code JSON setting file and add the following:

```"[javascript]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"},
```
