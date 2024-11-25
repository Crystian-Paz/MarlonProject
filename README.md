# 📂 Site Estilo Portfólio de Grupo

Este projeto foi desenvolvido como parte da disciplina **Web Code**, ministrada pelo professor **Marlon**, e tem como objetivo criar um site colaborativo estilo portfólio. O site apresenta informações sobre os integrantes do grupo, suas preferências, e oferece funcionalidades interativas como galeria, curtidas e registro de comentários.  

👉 **Acesse o site online**: [Clique aqui](https://marlon-project.vercel.app/)

---

## 🖥️ Funcionalidades do Site

### **Página Membros/Home**
- **Texto de Boas-Vindas**: Introdução com a logo do grupo e um botão que redireciona para a galeria.
- **Cards dos Integrantes**:
  - Cada card apresenta um integrante do grupo.
  - Ao clicar, abre-se um **modal** com as redes sociais principais do integrante.
- **Seção de Comentários**:
  - Espaço para registrar comentários e entrar em contato com o grupo.  
  - *Observação*: Esta funcionalidade não está ativa e foi movida para a página de registro.

---

### **Página Galeria**
- **Texto Introdutório**: Explica a motivação da criação da galeria.
- **Galeria dos Integrantes**:
  - Cada integrante possui imagens com textos sobre seus favoritos (filmes, animações, álbuns, etc.).
  - Botões de **curtir/descurtir**:
    - Ao curtir, as fotos são adicionadas a um **carrossel de fotos curtidas**.
    - O carrossel permite visualizar uma imagem por vez com navegação por setas.

---

### **Página Registro**
- Formulário para inserir:
  - Nome, e-mail, data e comentário.
- **Armazenamento no LocalStorage**:
  - Os dados inseridos são salvos no LocalStorage.
  - Um card é criado na parte inferior da página com as informações registradas.

---

## 🚀 Tecnologias Utilizadas
- **HTML5**: Estruturação.
- **CSS3**: Estilização e layout.
- **JavaScript**: Funcionalidades dinâmicas e interatividade.
- **LocalStorage**: Armazenamento local de dados.
- **Vercel**: Hospedagem online do projeto.
- **MVC**: Pastas no padrão MVC.

---

## 🛠️ Como Executar Localmente

Siga os passos abaixo para executar o projeto em seu ambiente local:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
