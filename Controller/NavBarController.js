class MobileNavbar { //Funções, com os nomes em ingles a pedido de Crystian
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() { //Mais frescurite, se não se garantir não recomendo mexer só pra não tirar o bonitinho
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() { //Funcionalidade do clicar, faz com que a janela lateral não adicione a barra de scroll horizontal
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() { 
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
// Sem isso a navbar fica fixa ocupando espaço da tela, não precisa mexer
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

const OpenButtons = document.querySelectorAll('.open-modal')

OpenButtons.forEach(button =>{
  button.addEventListener('click', () =>{
    const modalId = button.getAttribute('data-modal');
    console.log(modalId)
  });
}
)
