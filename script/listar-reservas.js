function criarTabela(reservas) {
    let body = document.getElementById('table-reserva-body');
    for (let i = 0; i < reservas.length; i++) {
        let reserva = reservas[i];
        let row = document.createElement('tr');

        let cellIndex = document.createElement('td');
        cellIndex.textContent = `${i + 1}`;
        row.appendChild(cellIndex);

        let cellNome = document.createElement('td');
        cellNome.textContent = reserva.event == null ? "-" : reserva.event['name']
        row.appendChild(cellNome);

        let cellTitular = document.createElement('td');
        cellTitular.textContent = reserva['owner_name'];
        row.appendChild(cellTitular);

        let cellEmail = document.createElement('td');
        cellEmail.textContent = reserva['owner_email'];
        row.appendChild(cellEmail);

        let cellTickets = document.createElement('td');
        cellTickets.textContent = reserva['number_tickets'];
        row.appendChild(cellTickets);

        body.appendChild(row);
    }
}
fetch("https://xp41-soundgarden-api.herokuapp.com/bookings").then(function(response) {
    return response.json();
  }).then(function(reservas) {
    console.log(reservas);
    criarTabela(reservas)
  }).catch(function(erro) {
      console.log(erro)
    alert("Falhou");
  });