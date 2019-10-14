---
layout: example
title: Foco e Teclado
permalink: /exemplos/foco-e-teclado/
description: TBD

breadcrumb:
  - url: /
    title: Página inicial
  - url: /exemplos
    title: Exemplos
---

## As pessoas não usam somente mouse

Muito da especificação do design de interação de páginas web considera ações via mouse: o *mouse over* nos elementos, o clique, a seleção, o duplo clique, o arrastar e soltar.

Porém:
- O acesso à web via dispositivos móveis já supera o acesso via desktop e grande parte dos dispositivos é de tela sensível ao toque. Não temos ações de mouse nesses dispositivos. Principalmente, não temos *mouse over*;
- Pessoas que usam leitores de tela navegam através de teclado ou outras ações que saltam entre os elementos;
- Pessoas com algumas deficiências físicas também podem fazer muito uso de navegação via teclado;
- Pessoas não precisam ter deficiência para usar o teclado para navegar. Usuários avançados de computadores muitas vezes usam bastante esta modalidade de interação.

Considerando estes pontos, como você dá o suporte adequado para a interação via teclado?

## Fornecendo suporte a foco e teclado

O problema que considero número 1 é remover o atributo `outline` de links e campos de formulário. Este atributo é importante para mostrar o elemento que está recebendo foco no momento e, para quem usa saltos via teclado (Tab), faz uma grande diferença. Você não precisa usar o `outline` padrão do navegador. Veja como fizemos neste site: customizamos o `outline` nos links para que atendessem o padrão visual da página.

Outro problema recorrente é esquecer de estilizar o estado de `:focus` no CSS e estilizar somente o `:hover`. Elementos que receberam foco via teclado não ficam no estado `hover`, mas sim como o `:focus`. É importante que ambos os estados sejam estilizados, inclusive, de forma similar.

Por fim, não esqueça de tratar no JavaScript a ativação de determinados elementos através de teclas como Enter, Espaço e também considerar as ações de dispositivos móveis.

## Ordem de foco

Um critério importante sobre foco via teclado é a ordem de foco dos elementos. Esta ordem de navegação deve ser lógica e sequêncial de acordo com o conteúdo apresentado na página. Por isso, deve-se evitar estratégias como colocar o código do cabeçalho da página ao final do HTML e reposicioná-lo para o topo via CSS. Para quem usa o teclado, o itens do cabeçalho serão vistos no começo da página, mas eles serão os últimos a receber foco. Para pessoas cegas que usam leitores de tela, há também a expectativa de começar a navegação pelos itens de cabeçalho.

<div class="tip">
  <h3 class="tip-title">Dica</h3>

  <p>Para saber se o seu código está organizado de uma forma lógica para navegação via teclado, desabilite o CSS da página. A ordem do conteúdo ainda faz sentido?</p>
</div>