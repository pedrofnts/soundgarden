let botaoCriarEvento = document.getElementById("botao-criar-evento"); // acesso ao botão "criar evento" pelo ID
let formulario = document.getElementById("formulario-cadastro-evento"); // acesso ao formulário pelo ID

 function cadastrarEvento() {
      console.log(formulario[4].value)
     const body = { //JSON com as informações necessárias para criar o evento
         name: formulario[0].value,
         poster: formulario[1].value,
         attractions: formulario[2].value.split(","), // utilizado o split para separar a string com "," e transformando em array
         description: formulario[3].value,
         scheduled: formulario[4].value, //conversão do formato da data para ISO
         number_tickets:formulario[5].value,
     }
  
    fetch("https://xp41-soundgarden-api.herokuapp.com/events", {  // requisição para o servidor
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": JSON.stringify(body)
  })
    .then(response => {
      console.log(response);
      alert("Evento cadastrado com sucesso");
      window.location.replace("./admin.html");
    })
    .catch(err => {
      console.error(err);
      alert("Falha no cadastro!");
    });
  }

 botaoCriarEvento.addEventListener("click", cadastrarEvento, false); //adicionando callback ao evento de click 