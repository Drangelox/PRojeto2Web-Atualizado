if (localStorage.getItem("logado") !== null) {
  entrar();
} else {
  sair();
}

document
  .querySelector("#pesquisa-api-b")
  .addEventListener("click", function () {
    var query = document.querySelector("#pesquisa-api").value;
    var msgError = document.getElementById("error");
    var msgError_text = document.createElement("p");
    var resultados = document.getElementById("resultadosAPI");

    resultados.innerHTML = "";

    if (query.length < 1) {
      msgError.innerHtml = "";
      msgError_text.innerHTML = "Deve conter pelo menos 1 caracter na pesquisa";
      msgError.appendChild(msgError_text);
    } else {
      axios
        .get("https://visual-crossing-weather.p.rapidapi.com/location")
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  });

document
  .querySelector("#register-api-b")
  .addEventListener("click", function () {
    var estado = document.querySelector("#registerEstado").value;
    var tipoClima = document.querySelector("#registerTipoClima").value;
    var mensagemErro = document.getElementById("error-register");
    var mensagemError_text = document.createElement("p");

    if (estado.length < 1) {
      mensagemErro.innerHTML = "";
      mensagemError_text.innerHTML =
        "O nome do estado deve conter pelo menos 1 caracter";
      mensagemErro.appendChild(mensagemError_text);
    } else if (tipoClima.length < 1) {
      mensagemErro.innerHTML = "";
      mensagemError_text.innerHTML =
        "O tipoClima deve conter pelo menos 1 caracter";
      mensagemErro.appendChild(mensagemError_text);
    } else {
      axios
        .post("http://localhost:3000/api/register", {
          estado: estado,
          tipoClima: tipoClima,
        })
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            mensagemErro.innerHTML = "";
            mensagemError_text.innerHTML = "Registro efetuado com sucesso!";
            mensagemErro.appendChild(mensagemError_text);
          } else if (response.status === 201) {
            mensagemErro.innerHTML = "";
            mensagemError_text.innerHTML = response.data.error;
            mensagemErro.appendChild(mensagemError_text);
          }
        })
        .catch(function (error) {
          console.log(error.response);
          mensagemErro.innerHTML = "";
          mensagemError_text.innerHTML = error.response.data.error;
          mensagemErro.appendChild(mensagemError_text);
        });
    }
  });
