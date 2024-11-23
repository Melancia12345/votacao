if (typeof(Storage) === "undefined") {
  alert("Seu navegador não suporta armazenamento local. O sistema pode não funcionar corretamente.");
}

if (!localStorage.getItem('votes')) {
  initializeVotes();
}

function initializeVotes() {
  const initialVotes = { "chapa-A": 0, "chapa-B": 0, "chapa-C": 0 };
  localStorage.setItem('votes', JSON.stringify(initialVotes));
}

function updateResults() {
  const votes = JSON.parse(localStorage.getItem('votes') || "{}");
  document.getElementById('chapa-A-votes').textContent = votes["chapa-A"] || 0;
  document.getElementById('chapa-B-votes').textContent = votes["chapa-B"] || 0;
  document.getElementById('chapa-C-votes').textContent = votes["chapa-C"] || 0;
}

function vote(candidate) {
  const votes = JSON.parse(localStorage.getItem('votes') || "{}");
  if (!votes.hasOwnProperty(candidate)) {
    showErrorModal('Candidato inválido! Tente novamente.');
    return;
  }
  votes[candidate]++;
  localStorage.setItem('votes', JSON.stringify(votes));
  updateResults(); 
  showVoteModal(`Voto computado para ${candidate}!`);
}


function showVoteModal(message) {
  const modal = document.getElementById('voteModal');
  document.getElementById('modalMessage').textContent = message;
  modal.showModal(); // Exibe o modal

  // Espera 5 segundos antes de redirecionar
  setTimeout(() => {
    modal.close(); // Fecha o modal antes de redirecionar
    window.location.href = './index.html'; // Substitua pela URL desejada
  }, 3000); // 5000 ms = 5 segundos
}

// Atualiza os resultados ao carregar a página
updateResults();
