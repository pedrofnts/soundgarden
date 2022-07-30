const queryParams = window.location.search;
console.log(queryParams);

const urlParams = new URLSearchParams(queryParams);

const id = urlParams.get('id')
console.log(id);

function setTime(element, date) {
  var isoString = date.toISOString()
  element.value = isoString.substring(0, (isoString.indexOf("T")|0) + 6|0);
}

fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`,{
    "headers": {
        "Content-Type": "application/json"
}})
.then(function(response) {
    console.log(response);
    return response.json();
  }).then(function(evento) {
    let nome = document.getElementById("nome"); 
    nome.value=evento.name;
    let banner = document.getElementById("banner"); 
    banner.value=evento.poster;
    let atracoes = document.getElementById("atracoes"); 
    atracoes.value=evento.attractions;
    let descricao = document.getElementById("descricao"); 
    descricao.value=evento.description;
    let data = document.getElementById("data"); 
    let date = new Date(evento.scheduled);
    setTime(data, date);
    let lotacao = document.getElementById("lotacao"); 
    lotacao.value=evento.number_tickets;
  }).catch(function() {
    alert("Falhou");
  });



