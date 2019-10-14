---
layout: example
title: Texto
permalink: /exemplos/texto/
description: TBD

breadcrumb:
  - url: /
    title: Página inicial
  - url: /exemplos
    title: Exemplos
---

## Acessibilidade é também sobre o conteúdo escrito

Site acessível também envolve um conteúdo que possa ser lido e compreendido adequadamente pelas pessoas. Isso envolve não apenas a escrita, mas a formatação do conteúdo.

Acessibilidade vai além de deficiências. Temos que pensar em pessoas com diferentes níveis de letramento, proficiência em tecnologia ou que não são nativas no nosso idioma.

## Formatando o texto de forma acessível

Algumas dicas para que você pense nas questões tipográficas e de formatação de texto de forma inclusiva (observe que aplicamos estas orientações neste site):

- Use um tamanho de fonte de, no mínimo, 14 pixels (cerca de 0.8 rem). A maioria dos navegadores têm um tamanho de fonte padrão de 16 pixels, mas eu costumo recomendar usar a partir de 18 pixels. Um tamanho de fonte maior pode ajudar todas as pessoas a ler o texto e evita que elas precisem dar zoom para ler o conteúdo;
- A altura de linha deve ser de, no mínimo, 1,5 vezes o tamanho da fonte e, no máximo, 2 vezes. A altura de linha menor do que 1,5 vezes pode deixar o texto muito "grudado" e maior do que 2 vezes pode deixar as linhas muito espaçadas. Ambos os casos prejudicam pessoas com deficiências de leitura, como dislexia;
- A largura das linhas deve acomodar entre 80 a 100 caracteres, considerando a visualização para desktop. Menos do que 80 quebra o ritmo de leitura e mais de 100 deixa a linha muito longa e cansativa para ler;
- Adicione espaçamento entre os parágrafos para fornecer um "respiro" visual e facilitar a identificação dos blocos de informações;
- Evite ao máximo alinhamento justificado, à direita e centralizado. O alinhamento de texto à esquerda traz um ponto de referência único para o início dos textos e, como as linhas são de tamanhos irregulares, permite que pessoas com deficiências de leitura ou concentração possam se localizar melhor no texto.

## Escrevendo de forma acessível

Algumas dicas para escrever de forma inclusiva:

- Para desenvolvedores: não esqueça de informar a linguagem do conteúdo da páginas no atributo `lang` da tag `<html>`. Os leitores de tela usam esta informação para calibrar a pronúncia.
- Evite uso de jargões, linguagem técnica e metáforas. Estas expressões podem fazer sentido somente para um grupo de pessoas e podem prejudicar a compreensão do conteúdo para pessoas com autismo, pessoas surdas ou que não dominam o idioma;
- Organize o texto em títulos e subtítulos;
- Use listas, como estamos fazendo aqui;
- Procure não escrever parágrafos muito longos, com mais de sete linhas;
- Explique abreviações, siglas e acrônimos. No HTML, há a tag `abbr` própria para marcar textos que representam este tipo de conteúdo;
- Você pode marcar um trecho de texto como sendo de uma linguagem diferente, permitindo que o leitor de telas leia com a pronúncia adequada, por exemplo: `Este código está <span lang="en">inline</span>`. 