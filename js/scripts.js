"use strict";

document.addEventListener("DOMContentLoaded", (e) => {

  const paForm = {
    regular: {
      button: document.getElementById("formButton"),
      inputs: document.querySelectorAll(".rightForm input"),
      name: document.getElementById("fullName"),
      email: document.getElementById("email"),
      phone: document.getElementById("phone")
    },
    aria: {
      button: document.getElementById("formButtonARIA"),
      inputs: document.querySelectorAll(".rightFormARIA input"),
      message: document.getElementById("formMessage"),
      name: document.getElementById("fullName1"),
      email: document.getElementById("email1"),
      phone: document.getElementById("phone1"),
      nameMessage: document.getElementById("nameMessage"),
      emailMessage: document.getElementById("emailMessage")
    }
  }

  function initARIAForm() {

    paForm.aria.button.addEventListener("click", (e) => {
      e.preventDefault();
      ariaFormValidation();
    });

  }

  function ariaFormValidation() {

    let frm = paForm.aria,
        message = frm.message,
        nameMessage = frm.nameMessage,
        emailMessage = frm.emailMessage;

    message.innerHTML = "";
    nameMessage.innerHTML = "";
    emailMessage.innerHTML = "";

    if(isValid(frm.name) && isValid(frm.email)) {
      message.classList.remove("error");
      message.classList.add("success");

      message.innerHTML = "Cadastro realizado com sucesso!";
    } else {
      message.classList.remove("success");
      message.classList.add("error");

      message.innerHTML = "O formulário apresenta erros que impedem a finalização do seu cadastro. Confira se todos os campos obrigatórios foram preenchidos e tente novamente.";

      if(!isValid(frm.name)) {
        nameMessage.innerHTML = "O nome não pode ficar em branco.";
      }

      if(!isValid(frm.email)) {
        emailMessage.innerHTML = "O e-mail não pode ficar em branco e deve ser um válido.";
      }
    }

    message.focus();
  }

  function isValid(field) {

    if(field.validity.valid) {
      field.setAttribute("aria-invalid", "false");
      return true;
    } else {
      field.setAttribute("aria-invalid", "true");
      return false;
    }

  }

  initARIAForm();

});