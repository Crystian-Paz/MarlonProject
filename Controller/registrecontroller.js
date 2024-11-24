// Seleciona o formulário
const registerForm = document.getElementById('registerForm');

// Evento para criar um card ao submeter o formulário
registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o recarregamento da página

    // Obtém os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const comment = document.getElementById('comment').value;

    if (name && email && date && comment) {
        // Cria um objeto com os dados do usuário
        const userData = { name, email, date, comment };

        // Adiciona ao LocalStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));

        // Cria o card no DOM
        createCard(userData);

        // Limpa o formulário
        registerForm.reset();
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});

// Função para criar um card e adicioná-lo ao DOM
function createCard(user) {
    // Seleciona ou cria o contêiner dos cards
    let userList = document.getElementById('userList');
    if (!userList) {
        userList = document.createElement('div');
        userList.id = 'userList';
        document.body.appendChild(userList); // Adiciona ao final do body
    }

    // Cria o elemento do card
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Data:</strong> ${user.date}</p>
        <p><strong>Comentário:</strong> ${user.comment}</p>
        <button onclick="deleteCard(this)">Excluir</button>
    `;

    // Adiciona o card ao contêiner
    userList.appendChild(card);
}

// Função para excluir um card do DOM e do LocalStorage
function deleteCard(button) {
    // Encontra o card e remove do DOM
    const card = button.parentElement;
    card.remove();

    // Atualiza o LocalStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const index = Array.from(card.parentElement.children).indexOf(card);
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
}

// Função para exibir os cards ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach(createCard);
});
