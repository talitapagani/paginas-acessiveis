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

<form method="POST" action="#" class="wrongForm">
  <input type="text" name="fullName" placeholder="Digite seu nome completo" required>
  <input type="text" name="email" placeholder="Informe seu e-mail" required>
  <input type="text" name="phone" placeholder="Informe seu telefone no seguinte formato: (XX) XXXXX-XXXX">
  <button class="formButton" type="submit">Enviar</button>
</form>

## Corrigindo os problemas

<form method="POST" action="#" class="rightForm">

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

## Melhorando com WAI-ARIA

<form method="POST" action="#" class="rightForm rightFormARIA">

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
