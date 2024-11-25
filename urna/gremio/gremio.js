
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
 
  votes[candidate]++;
  localStorage.setItem('votes', JSON.stringify(votes));
  updateResults(); 
  showVoteModal(` seu Voto  na  ${candidate} foi confirmado!`);
}


function showVoteModal(message) {
  const modal = document.getElementById('voteModal');
  document.getElementById('modalMessage').textContent = message;
  modal.showModal(); // Exibe o modal

  // Espera 5 segundos antes de redirecionar
  setTimeout(() => {
   
    window.location.href = './index.html'; // Substitua pela URL desejada
  }, 3000); // 5000 ms = 5 segundos
}

// Atualiza os resultados ao carregar a página
updateResults();
