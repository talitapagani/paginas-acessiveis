---
layout: example
title: Navegação
permalink: /exemplos/navegacao/
description: TBD

breadcrumb:
  - url: /
    title: Página inicial
  - url: /exemplos
    title: Exemplos
---

## Onde estou, de onde vim e para onde vou

Navegação acessível não envolve apenas menu, mas diferentes formas de permitir às pessoas chegar até determinadas informações em um site. Caixa busca é uma forma de navegação, por exemplo.

Quando um site é composto de várias seções e subseções, é importante ter um indicador de localização no topo da página, o famoso *breadcrumb trail*. Mesmo este site sendo pequeno, repare que todas as páginas têm um *breacrumb* antes do título. Assim, a pessoa sabe que chegou até aqui através da página inicial e, depois, da listagem de exemplos. Os itens do *breacrumb* estão com link para que a pessoa possa clicar nas seções anteriores e fazer o caminho reverso, se quiser.

Mas também temos outros pontos de navegação: no final de cada página, há links para ir para o próximo exemplo ou voltar para o exemplo anterior e também colocamos a listagem completa de todos os exemplos presentes, pois a pessoa pode não querer navegar de forma sequencial. Podemos considerar esta listagem como o mapa do site.

Parte de uma navegação acessível é ter um menu consistente em todas as páginas e apresentar links de salto. **Faça um teste:** navegue pelo site com teclado a partir do início da página. Repare que o primeiro link permite pular a navegação e saltar para o conteúdo principal e o segundo link permite saltar para a lista de exemplos no final da página. 

O link de salto para o conteúdo principal é imprescindível para quem navega via teclado e com leitores de tela. Imagina você ter que passar por todas as opções do menu até chegar ao conteúdo principal? É importante que este seja sempre o primeiro link da página, antes do logo ou qualquer outro.

Nos links de salto, também colocamos a configuração de teclas de acesso através do atributo `accesskey`. Você pode saltar direto para o conteúdo pressionando `Alt + 1` ou ir para a lista de exemplos pressionando `Alt + 2`.