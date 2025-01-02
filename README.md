# Alterações feitas no código original

- Mudança no cache de persistência do código do Kibana de 360 para 1 dia

- Nos grandes números (legado) não mostra o caractere "-" quando o título estiver em branco.

- Impede que o painel seja filtrado nas interações com as visualizações.

- Adiciona um número extra de cores para uso nas visualizações antigas.

- Substitui o ícone de aplicar dos filtros por um botão com texto.

- Apresenta a lista de itens em ordem alfabética nos controles.

- Nos controles, exclui as opções "Incluir" e "excluir", o número de opções e o valor de número de registros de cada opção da lista..

- Altera o parâmetro de configuração 'Store URLs in session storage' para true.

- Altera a configuração default para português e números com duas casas decimais.

- Ativa 'defer loading' como o padrão nas opções de configuração.

- Substituição da string '(empty)' por '' nas visualizações do tipo tabela.

- Remove os botões 'Incluir' e 'Excluir' e a opção 'Existe' dos filtros (controles).

- Opção para exportar visualizações no formato PNG.

- Inclusão de botão para expandir ou recolher os filtros.

- Remove o subtítulo dos gráficos de histograma de data que indica o agrupamento utilizado ('por mês', 'por ano', etc).

- Inclusão de notas de rodapé e sumário nos quadros dos painéis.

- Abre uma url em janela 'flyout' quando estiver presente o parâmetro 'flyout'.

- Diminui o tempo de armazenamento do código do Kibana em cache do navegador.

- Ordena corretamente os meses abreviados nas opções dos filtros.

- Altera o estilo dos títulos dos quadros dos painéis para permitir mais de uma linha.

- Nos mapas, as camadas do tipo ponto não apresentam os símbolos quando a métrica for zero.

- Remoção de filtros ativados a partir de interações com os mapas.

- Remoção de filtros ativados a partir dos tooltips.

- Nas visualizações do tipo grandes números, quebra o título quando forem utilizados mais de um termo na agregação.

- Remove a linha do eixo Y nos gráficos de barras horizontais.

- Adição de novas cores na paleta de cores que podem ser escolhidas nos gráficos legados.


# Tradução do Kibana para PT-BR

![image](https://github.com/user-attachments/assets/931337db-6a9e-4d8b-bfdb-77181b20c40b)

![image](https://github.com/user-attachments/assets/63580f50-5d29-4b45-9660-15fe90e42d63)

![image](https://github.com/user-attachments/assets/c09427d7-e5a5-41b7-afff-55fbac986757)

![image](https://github.com/user-attachments/assets/592c7ca7-27c3-465b-8bd5-5bf9bd6c0ed8)



# Kibana

Kibana is your window into the [Elastic Stack](https://www.elastic.co/products). Specifically, it's a browser-based analytics and search dashboard for Elasticsearch.

- [Getting Started](#getting-started)
  - [Using a Kibana Release](#using-a-kibana-release)
  - [Building and Running Kibana, and/or Contributing Code](#building-and-running-kibana-andor-contributing-code)
- [Documentation](#documentation)
- [Version Compatibility with Elasticsearch](#version-compatibility-with-elasticsearch)
- [Questions? Problems? Suggestions?](#questions-problems-suggestions)

## Getting Started

If you just want to try Kibana out, check out the [Elastic Stack Getting Started Page](https://www.elastic.co/start) to give it a whirl.

If you're interested in diving a bit deeper and getting a taste of Kibana's capabilities, head over to the [Kibana Getting Started Page](https://www.elastic.co/guide/en/kibana/current/get-started.html).

### Using a Kibana Release

If you want to use a Kibana release in production, give it a test run, or just play around:

- Download the latest version on the [Kibana Download Page](https://www.elastic.co/downloads/kibana).
- Learn more about Kibana's features and capabilities on the
[Kibana Product Page](https://www.elastic.co/products/kibana).
- We also offer a hosted version of Kibana on our
[Cloud Service](https://www.elastic.co/cloud/as-a-service).

### Building and Running Kibana, and/or Contributing Code

You might want to build Kibana locally to contribute some code, test out the latest features, or try
out an open PR:

- [CONTRIBUTING.md](CONTRIBUTING.md) will help you get Kibana up and running.
- If you would like to contribute code, please follow our [STYLEGUIDE.mdx](STYLEGUIDE.mdx).
- For all other questions, check out the [FAQ.md](FAQ.md) and
[wiki](https://github.com/elastic/kibana/wiki).

## Documentation

Visit [Elastic.co](http://www.elastic.co/guide/en/kibana/current/index.html) for the full Kibana documentation.

For information about building the documentation, see the README in [elastic/docs](https://github.com/elastic/docs).

## Version Compatibility with Elasticsearch

Ideally, you should be running Elasticsearch and Kibana with matching version numbers. If your Elasticsearch has an older version number or a newer _major_ number than Kibana, then Kibana will fail to run. If Elasticsearch has a newer minor or patch number than Kibana, then the Kibana Server will log a warning.

_Note: The version numbers below are only examples, meant to illustrate the relationships between different types of version numbers._

| Situation                 | Example Kibana version     | Example ES version | Outcome |
| ------------------------- | -------------------------- |------------------- | ------- |
| Versions are the same.    | 7.15.1                     | 7.15.1             | 💚 OK      |
| ES patch number is newer. | 7.15.__0__                 | 7.15.__1__         | ⚠️ Logged warning      |
| ES minor number is newer. | 7.__14__.2                 | 7.__15__.0         | ⚠️ Logged warning      |
| ES major number is newer. | __7__.15.1                 | __8__.0.0          | 🚫 Fatal error      |
| ES patch number is older. | 7.15.__1__                 | 7.15.__0__         | ⚠️ Logged warning      |
| ES minor number is older. | 7.__15__.1                 | 7.__14__.2         | 🚫 Fatal error      |
| ES major number is older. | __8__.0.0                  | __7__.15.1         | 🚫 Fatal error      |

## Questions? Problems? Suggestions?

- If you've found a bug or want to request a feature, please create a [GitHub Issue](https://github.com/elastic/kibana/issues/new/choose).
  Please check to make sure someone else hasn't already created an issue for the same topic.
- Need help using Kibana? Ask away on our [Kibana Discuss Forum](https://discuss.elastic.co/c/kibana) and a fellow community member or
Elastic engineer will be glad to help you out.
