---
layout: example
title: Links
permalink: /exemplos/links/
description: TBD

breadcrumb:
  - url: /
    title: Página inicial
  - url: /exemplos
    title: Exemplos
---

## Nomeando links

Tente navegar no texto a seguir usando um leitor de telas, com o monitor desligado, passando pelos links sobre com a tecla Tab:

*Para avaliar a acessibilidade deste site, [clique aqui](http://asesweb.governoeletronico.gov.br/ases/) para acessar o site do ASES. Você também pode consultar a documentação do eMAG [aqui](http://emag.governoeletronico.gov.br/) ou da WCAG [neste link](https://www.w3.org/WAI/standards-guidelines/wcag/).*

Percebeu como não fez sentido? Afinal, o que significa vários "clique aqui", "aqui", "neste link", "saiba mais", "leia mais" e etc?

O texto dos links devem fazer sentido mesmo fora do contexto, ou seja, mesmo se eu não estiver lendo o texto ao redor do link, eu consigo entender para onde aquele link leva. Vamos reformular noss exemplo para inserir rótulos mais significativos:

*Para avaliar a acessibilidade deste site, [acesse o site do ASES](http://asesweb.governoeletronico.gov.br/ases/). Você também pode consultar a [documentação do eMAG](http://emag.governoeletronico.gov.br/) ou da [WCAG (Web Content Accessibility Guidelines)](https://www.w3.org/WAI/standards-guidelines/wcag/).*

## Indicando o destino de links

É muito frustrante para pessoas que usam leitores de tela ou possuem deficiências cognitivas e de neurodesenvolvimento quando elas clicam em um link que leva para um site externo sem que elas estejam cientes. Esta ação quebra a previsibilidade e pode trazer muita frustração.

É comum optar por colocar o atributo `target="_blank"` em links desta natureza para que eles abram em uma nova aba, mas isso também não é o ideal, pois você está decidindo uma ação pela pessoa e, ainda assim, a pessoa não sabe que se trata de um link para site externo.

Há duas formas de trazer clareza para indicar o destino do link: um ícone para sites externos, normalmente um quadrado com uma seta diagonal para cima saindo do quadrado, ou um texto adicional ao link.

Repare que, aqui no site, usamos a segunda opção em algumas páginas. Por exemplo: [Inclusive Componentes (link para um site externo)](https://inclusive-components.design/)