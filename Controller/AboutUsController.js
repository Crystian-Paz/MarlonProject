const mapauser = new Map(); 

const user1 = new Map();  
user1.set("nome", "Guilherme Menezes");
user1.set("github", "Neoxepa");
user1.set("linkedin", "https://www.linkedin.com/in/guilherme-menezes-4558a3234/");
user1.set("curso", "Engenharia da computação");

const user2 = new Map();
user2.set("nome", "Cauã Verissimo");
user2.set("github", "Kc1fer");
user2.set("linkedin", "https://www.linkedin.com/in/cauã-verissimo-359248323/");
user2.set("curso", "Engenharia da computação");

const user3 = new Map();
user3.set("nome", "Crystian Silva");
user3.set("github", "Crystian-Paz");
user3.set("linkedin", "https://www.linkedin.com/in/crystian-silva/");
user3.set("curso", "Ciência da computação");

const user4 = new Map();
user4.set("nome", "Kaique Lemos");
user4.set("github", "Kaique-Lemos");
user4.set("linkedin", "https://www.linkedin.com/in/kaique-lemos-21b83031b");
user4.set("curso", "Ciência da computação");

const user5 = new Map();
user5.set("nome", "Matheus Hustenir");
user5.set("github", "MHustenir");
user5.set("linkedin", "https://www.linkedin.com/in/matheus-hustenir-286925326/");
user5.set("curso", "Ciência da computação");

const user6 = new Map();
user6.set("nome", "Bruno Nogueira");
user6.set("github", "DEGUSTEBR");
user6.set("linkedin", "https://www.linkedin.com/in/bruno-nogueira-da-rocha-1ab05033a");
user6.set("curso", "Ciência da computação");

mapauser.set("menezes", user1);
mapauser.set("caua", user2);
mapauser.set("crystian", user3);
mapauser.set("kaique", user4);
mapauser.set("matheus", user5);
mapauser.set("bruno", user6);

function info(person) {
    const user = mapauser.get(person);
    if (user) {
        return {
            nome: user.get("nome"),
            github: user.get("github"),
            linkedin: user.get("linkedin"),
            curso: user.get("curso")
        };
    } else {
        console.log("Usuário não encontrado.");
        return null;
    }
}

const buttons = document.querySelectorAll('.findoutmore');

const modal = document.getElementById("infoModal");
const closeModal = document.getElementById("closeModal");

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const person = this.getAttribute('data-person');
        showInfo(person);
    });
});

function showInfo(person) {
    const userinfo = info(person);
    if (userinfo) {
        document.getElementById("nome").innerText = userinfo.nome;

        const githubElement = document.getElementById("github");
        githubElement.innerHTML = `GitHub: <a href="https://github.com/${userinfo.github}" target="_blank">${userinfo.github}</a>`;

        const linkedinElement = document.getElementById("linkedin");
        linkedinElement.innerHTML = `LinkedIn: <a href="${userinfo.linkedin}" target="_blank">${userinfo.linkedin}</a>`;

        document.getElementById("curso").innerText = `Curso: ${userinfo.curso}`;

        modal.style.display = "block";
    }
}


closeModal.addEventListener('click', function() {
    modal.style.display = "none"; 
});


window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});