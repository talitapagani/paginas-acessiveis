---
layout: example
title: Imagens
permalink: /exemplos/imagens/
description: TBD

breadcrumb:
  - url: /
    title: Página inicial
  - url: /exemplos
    title: Exemplos
---

## Texto alternativo

A tag `<img>` possui um atributo chamado `alt` que permite especificar um texto alternativo que descreve a imagem. Este texto é lido por softwares leitores de tela e também é reconhecido por mecanismos de busca. A falta do atributo `alt` em imagens é uma das falhas mais comuns em acessibilidade web.

### Navegando por uma imagem sem Alt

Use um leitor de telas para perceber como a imagem a seguir, sem texto alternativo, será lida para pessoas com deficiência visual. De preferência, faça isso com o monitor desligado. Fez sentido para você?

<figure>
  <img src="{{ site.baseurl }}/images/aaron-burden-ufFIweqSPd4-unsplash.jpg">
  <figcaption>
    Foto por <a href="https://unsplash.com/@aaronburden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aaron Burden</a> no <a href="https://unsplash.com/s/photos/lake?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </figcaption>
</figure>

### Exemplo de imagem com Alt

Use um leitor de telas para perceber como a imagem a seguir será lida para pessoas com deficiência visual. Visualmente, não mudou nada para quem é vidente, mas faz uma grande diferença para as pessoas que usam leitores de tela.

<figure>
  <img src="{{ site.baseurl }}/images/aaron-burden-ufFIweqSPd4-unsplash.jpg" alt="Um barco cinza navegando em um lago calmo. Ao fundo, há uma mata ao redor do lago.">
  <figcaption>
    Foto por <a href="https://unsplash.com/@aaronburden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aaron Burden</a> no <a href="https://unsplash.com/s/photos/lake?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </figcaption>
</figure>

Como fica o `alt` no HTML:

    <figure>
      <img 
        src="images/aaron-burden-ufFIweqSPd4-unsplash.jpg" 
        alt="Um barco cinza navegando em um lago calmo. Ao fundo, há uma mata ao redor do lago.">
      <figcaption>...</figcaption>
    </figure>

### Exemplo de image com Alt e com uma descrição longa associada

Neste exemplo, a descrição é muito longa, então é inserido o texto fora da imagem, dentro do `figcaption` com um `id` e este texto é associado à imagem através do atributo `aria-describedby`, que faz parte da especificação do <a href="https://www.w3.org/WAI/standards-guidelines/aria/">WAI-ARIA (link para um site externo, em inglês)</a>.

<figure>
  <img src="{{ site.baseurl }}/images/aaron-burden-ufFIweqSPd4-unsplash.jpg" alt="" aria-describedby="imageDescription">
  <figcaption>
    <p id="imageDescription">Na foto, em primeiro plano, à direita, há uma parte de um barco cinza que está navegando em um lago calmo. Ao fundo, há uma mata ao redor do lago, composta árvores de folhagem verde clara e verde escura. As árvores são refletidas na água do lago.</p>
    Foto por <a href="https://unsplash.com/@aaronburden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aaron Burden</a> no <a href="https://unsplash.com/s/photos/lake?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </figcaption>
</figure>

Veja a seguir como ficou no HTML. Repare que ainda temos o atributo `alt`, mas ele está nulo e isso é válido desde que a imagem não deva ser lida pelo leitor de telas ou se houver um texto no entorno da imagem, como é o caso.

    <figure>
      <img src="images/aaron-burden-ufFIweqSPd4-unsplash.jpg" alt="" 
           aria-describedby="imageDescription">
      <figcaption>
        <p id="imageDescription">Na foto, em primeiro plano, à direita, há uma parte de um barco cinza que está navegando em um lago calmo. Ao fundo, há uma mata ao redor do lago, composta árvores de folhagem verde clara e verde escura. As árvores são refletidas na água do lago.</p>
      </figcaption>
    </figure>

## Toda imagem precisa de descrição?

Toda imagem que faz parte do conteúdo da página precisa ser descrita e isso inclui ilustrações, fotos e ícones.

Se uma imagem é meramente decorativa, é interessante que ela seja inserida via CSS ao invés de ser inserida no código.

<div class="tip">
  <h3 class="tip-title">Importante</h3>
  <p>Não use imagens para representar textos e títulos da página. Use as tags adequadas de parágrafo e cabeçalho para representar informações textuais.</p>
</div>

## Fazendo uma boa descrição de imagens

Não existe uma fórmula para descrever imagens, mas há alguns pontos a serem levados em conta:
- O ideal é que a descrição no `alt` seja de até 100 caracteres. Ao passar disso, é uma descrição longa e pode ser usado o atributo `longdesc` ou o `aria-describedby` para associar outros elementos que descrevem essa imagem;
- A descrição deve evitar fazer juízo de valor, ou seja, falar que a imagem é bonita ou feia, por exemplo. A interpretação é da pessoa que estará lendo a descrição;
- Descrever cor de fundo, textura, estilo (em caso de pintura) e outros detalhes depende muito do contexto. Se esse tipo de informação é relevante pra entender aquela imagem, descreva estes aspecto;
- Evite termos como *figura de...*, *imagem sobre...*, *ícone de lupa* e outras variações. O leitor de telas já anuncia que é uma imagem e estes termos ficam redundantes. Se estiver descrevendo um quadro ou pintura e isso for importante naquele contexto, o termo *pintura* faz sentido. Perceba que tudo depende de contexto.