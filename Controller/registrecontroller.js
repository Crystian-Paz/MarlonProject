const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const comment = document.getElementById('comment').value;

    if (name && email && date && comment) {
        const userData = { id: Date.now(), name, email, date, comment };
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
        createCard(userData);
        registerForm.reset();
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});

function createCard(user) {
    const userList = document.getElementById('userList');
    const card = document.createElement('li');
    card.classList.add('card');
    card.setAttribute('data-id', user.id);

    card.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Data:</strong> ${user.date}</p>
        <p><strong>Comentário:</strong> ${user.comment}</p>
        <button class="delete-button">Excluir</button>
    `;

    userList.appendChild(card);

    card.querySelector('.delete-button').addEventListener('click', () => {
        deleteCard(card, user.id);
    });
}

function deleteCard(card, id) {
    card.remove();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.filter(user => user.id !== id);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
}

document.addEventListener('DOMContentLoaded', () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach(createCard);
});
