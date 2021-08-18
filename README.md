# NLP Hub Demo

This repository contains the code for the NLP Hub's demo websites as well as Helm/Kubernetes files for the deployment.

## Demo sites

[SG-NLP Demo](https://sgnlp.aisingapore.net/)

[SEACoreNLP Demo](https://seacorenlp.aisingapore.net/)

## Local development

Requirements:

* Node 16+

```sh
cd ui/
npm install

# Choose one of the demo sites to run
npm run sgnlp
npm run seacorenlp
```

## Code formatting

Code formatting for Javascript uses the [Prettier](https://prettier.io/) code formatter.

For VS Code:

- Install the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- Edit the VS Code JSON setting file and add the following:

```
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## License

Code from this project is released under the MIT License unless otherwise stated.
