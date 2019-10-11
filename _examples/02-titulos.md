---
layout: example
title: Títulos
permalink: /exemplos/titulos/
description: TBD

breadcrumb:
  - url: /
    title: Página inicial
  - url: /exemplos
    title: Exemplos
---

## Olá, sou um título de nível 2

Seguir a hierarquia de `tags` de cabeçalho é importante porque estabelece uma relação lógica entre as informações.

A tag `<h1>` deve sempre representar o título da página e não o logo. Toda página deve ter ao menos um título de nível 1.

As tags seguintes, do `<h2>` ao `<h6>` devem ser usadas para representar seções e subseções, **sem pular** a ordem, ou seja, um subtítulo de uma seção marcada com `<h2>` usará a tag `<h3>` e não `<h4>` ou `<h5>`, por exemplo.

### Sou um título de nível 3, na sequência do nível 2

Aqui está um exemplo. Esta seção está subordinada à seção anterior, com o título de nível 2, então, ela está marcada com um título de nível 3, ou `<h3>`. Se esta seção for quebrada em subseções, eu devo começar usando o `<h4>`.

Cada página é como se fosse um livro:
- O `<h1>` é o título do livro;
- O `<h2>` são as seções principais;
- Do `<h3>` em diante, são as subseções.


<div class="tip">
  <h2 class="tip-title">Dica</h2>
  <p>Tente visualizar esta página sem CSS para perceber como uma estrutura de títulos adequada faz sentido para a compreensão do conteúdo mesmo sem estilos.</p>
</div>

## Sou uma nova seção com título de nível 2

Aqui começamos outra seção com uma tag `<h2>`.

## Importância

Hierarquia de títulos e cabeçalhos que sem uma ordem lógica facilitam a navegação de pessoas que usam leitores de tela e teclas de atalho. É muito comum que estas pessoas usam atalhos específicos para percorrer os cabeçalhos das páginas.

Uma boa estrutura de títulos também é relevante para otimizar o seu site para o mecanismos de busca: o `<h1>` é reconhecido como título da página e as demais `tags` como as subseções.