---
layout: example
title: Formulários
permalink: /exemplos/formularios/
description: TBD

breadcrumb:
  - url: /
    title: Página inicial
  - url: /exemplos
    title: Exemplos
---

Formulários são as páginas mais propoensas a ocorrer erros de acessibilidade, embora eles sejam os elementos com maior quantidade de recursos para acessibilidade. Um HTML básico organizado de forma semântica já é o suficiente para eliminar grande parte dos problemas.

## Um exemplo de formulário pouco acessível

Faça o teste: navegue neste formulário com o uso de um leitor de telas.

<form class="wrongForm">
  <input type="text" name="fullName" placeholder="Digite seu nome completo">
  <input type="text" name="email" placeholder="Informe seu e-mail">
  <input type="text" name="phone" placeholder="Informe seu telefone no seguinte formato: (XX) XXXXX-XXXX">
  <button class="formButton" type="submit">Enviar</button>
</form>

Os erros deste formulário:
- Não associa rótulos aos campos de entrada. Este formulário usa o atributo `placeholder` para informar o que deve ser preenchido, porém, este texto some ao começar a digitar no campo. O rótulo dos campos deve estar sempre visível;
- Não informa quais campos são obrigatórios ou opcionais;
- Não apresenta mensagens de erro do formulário como um todo e da validação de cada campo;
- Não possui um distinção visual de qual campo está recebendo o foco no mesmo, mesmo aplicando o `outline` padrão do navegador;
- Possui um rótulo genérico para o botão de submissão;
- Não possui uma distinção visual para o estado de foco do botão.

## Corrigindo alguns problemas

Veja agora como fica o nosso formulário com algumas melhorias apenas a nível de HTML. Faça novamente o teste com o leitor de telas.

<form class="rightForm">

  <p>
    <label for="fullName">Nome completo <span class="required">(obrigatório)</span>:</label>
    <input type="text" name="fullName" id="fullName" required>
  </p>

  <p>
    <label for="email">E-mail <span class="required">(obrigatório)</span>:</label>
    <input type="email" name="email" id="email" required>
  </p>
  
  <p>
    <label for="phone">Telefone <span class="optional">(opcional)</span>:</label>
    <input type="tel" name="phone" id="phone" aria-describedby="phoneTip">
    <span class="fieldTip" id="phoneTip">Formato: (99) 99999-9999.</span>
  </p>

  <button class="formButton" id="formButton" type="submit">Finalizar cadastro</button>
</form>

O que fizemos:
- Colocamos um rótulo visível (tag `<label>`) e associado a cada campo através do atributo `for`, com indicação de quais campos são obrigatórios e opcionais. Os campos obrigatórios também possuem o atributo `required`;
- Colocamos a instrução para preenchimento do telefone de forma sempre visível;
- Customizamos o `outline` para que fique visível qual campo contém foco;
- Mudamos o rótulo do botão para um mais significativo;
- Adicionamos estilos aos estados do botão: `hover`, `focus` e `active`.

## Melhorando com WAI-ARIA

Nosso formulário ainda tinha alguns problemas para informar os erros e o resultado da validação do formulário, por isso, fizemos mais algumas alterações e adicionamos um pouco de JavaScript.

<form class="rightForm rightFormARIA">

  <output id="formMessage" role="alert" aria-live="assertive" tabindex="0"></output>

  <p>
    <label for="fullName1">Nome completo <span class="required">(obrigatório)</span>:</label>
    <input type="text" name="fullName1" id="fullName1" required aria-invalid="false" aria-describedby="nameMessage">
    <span class="fieldMessage" id="nameMessage"></span>
  </p>

  <p>
    <label for="email1">E-mail <span class="required">(obrigatório)</span>:</label>
    <input type="email1" name="email1" id="email1" required aria-invalid="false" aria-describedby="emailMessage">
    <span class="fieldMessage" id="emailMessage"></span>
  </p>
  
  <p>
    <label for="phone1">Telefone <span class="optional">(opcional)</span>:</label>
    <input type="tel" name="phone1" id="phone1" aria-describedby="phoneTip">
    <span class="fieldTip" id="phoneTip">Formato: (99) 99999-9999.</span>
  </p>

  <button class="formButton" id="formButtonARIA" type="submit">Finalizar cadastro</button>
</form>

O que fizemos:
- Adicionamos áreas para mensagem informativa de forma geral do formulário e uma área de mensagem abaixo de cada campo com erro. Esta área de mensagem informativa do formulário possui os atributos `role="alert"`, que diz que é uma mensagem de alerta e `aria-live="assertive"` que diz que é um campo que pode sofrer modificações no conteúdo em tempo de execução e o leitor de telas é informado quando há modificação neste campo;
- A indicação do erro é feita de três formas: com uma cor, um texto informativo e um ícone de alerta. Assim, não usamos somente uma forma para representar esta informação, beneficiando pessoas videntes, com deficiências cognitivas, que usam leitor de telas ou que possuem daltonismo;
- Além do atributo `required`, também adicionamos o atributo de estado `aria-invalid` que pode ter os valores `true` ou `false` para indicar se o campo está válido ou inválido;
- Adicionamos um pouco de JavaScript no botão do formulário para fazer uma validação melhor do formulário e controlar a exibição das mensagens de erro.
