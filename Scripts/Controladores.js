function entrar() {
  document.getElementById("botao-entrar").classList.remove("display-show");
  document.getElementById("botao-entrar").classList.add("display-hidden");
  document.getElementById("botao-sair").classList.remove("display-hidden");
  document.getElementById("botao-sair").classList.add("display-show");
  document.getElementById("averigua-login").classList.remove("display-show");
  document.getElementById("averigua-login").classList.add("display-hidden");

  document.getElementById("api").classList.remove("display-hidden");
  document.getElementById("api").classList.add("display-show");
  document.getElementById("resultadosAPI").classList.remove("display-hidden");
  document.getElementById("resultadosAPI").classList.add("display-show");

  document.getElementById("botao-sair").addEventListener("click", function () {
    sair();
  });
}
///////////////////////////////////////////////////////////
function sair() {
  localStorage.removeItem("logado");
  document.getElementById("botao-entrar").classList.add("display-show");
  document.getElementById("botao-entrar").classList.remove("display-hidden");
  document.getElementById("botao-sair").classList.add("display-hidden");
  document.getElementById("botao-sair").classList.remove("display-show");
  document.getElementById("averigua-login").classList.add("display-show");
  document.getElementById("averigua-login").classList.remove("display-hidden");

  document.getElementById("api").classList.add("display-hidden");
  document.getElementById("api").classList.remove("display-show");
  document.getElementById("resultadosAPI").classList.add("display-hidden");
  document.getElementById("resultadosAPI").classList.remove("display-show");
  document.getElementById("resultadosAPI").innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const searchAPI = document.querySelector("#api");
  const registerAPI = document.querySelector("#api-register");

  document.querySelector("#linkRegistroApi").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("api").classList.add("display-hidden");
    document.getElementById("api").classList.remove("display-show");
    document.getElementById("api-register").classList.remove("display-hidden");
    document.getElementById("api-register").classList.add("display-show");
  });

  document.querySelector("#linkPesquisaApi").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("api").classList.remove("display-hidden");
    document.getElementById("api").classList.add("display-show");
    document.getElementById("api-register").classList.add("display-hidden");
    document.getElementById("api-register").classList.remove("display-show");
  });
});
