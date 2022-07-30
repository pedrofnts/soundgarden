function criarTabela(eventos) {
    let body = document.getElementById('table-eventos-body');
    for (let i = 0; i < eventos.length; i++) {
        let evento = eventos[i];
        console.log(evento._id);
        let row = document.createElement('tr');

        let cellIndex = document.createElement('td');
        cellIndex.textContent = `${i + 1}`;
        row.appendChild(cellIndex);

        let cellData = document.createElement('td');
        let date = new Date(evento.scheduled);
        cellData.textContent = date.toLocaleString();
        row.appendChild(cellData);

        let cellTitulo = document.createElement('td');
        cellTitulo.textContent = evento['name'];
        row.appendChild(cellTitulo);

        let cellAtracoes = document.createElement('td');
        cellAtracoes.textContent = evento['attractions'];
        row.appendChild(cellAtracoes);

        let cellBotoes= document.createElement('td');

        let botaoReservas = document.createElement('a');
        botaoReservas.textContent = 'Reservar';
        botaoReservas.setAttribute('class', 'btn btn-dark');
        botaoReservas.setAttribute('href', 'reservas.html');
        cellBotoes.appendChild(botaoReservas);

        let botaoEditar = document.createElement('a');
        botaoEditar.textContent = 'Editar';
        botaoEditar.setAttribute('class', 'btn btn-secondary');
        botaoEditar.setAttribute('href', `editar-evento.html?id=${evento._id}`);
        cellBotoes.appendChild(botaoEditar);

        let botaoExcluir = document.createElement('a');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.setAttribute('class', 'btn btn-danger');
        botaoExcluir.setAttribute('href', `excluir-evento.html?id=${evento._id}`);
        cellBotoes.appendChild(botaoExcluir);

        row.appendChild(cellBotoes);

        body.appendChild(row);
    }
}
fetch("https://xp41-soundgarden-api.herokuapp.com/events").then(function(response) {
    return response.json();
  }).then(function(eventos) {
    console.log(eventos);
    criarTabela(eventos)
  }).catch(function() {
    alert("Falhou");
  });