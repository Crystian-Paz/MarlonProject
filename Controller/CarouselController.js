const likedImages = [];

document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const parent = event.target.closest('.single-galeria');
        const img = parent.querySelector('img').src;
        const title = parent.querySelector('h3').textContent;

        if (likedImages.some(item => item.src === img)) {
            likedImages.splice(likedImages.findIndex(item => item.src === img), 1);
            event.target.textContent = '❤️ Curtir';
        } else {
            likedImages.push({ src: img, title });
            event.target.textContent = '💔 Descurtir';
        }

        updateCarousel();
    });
});

function updateCarousel() {
    const carousel = document.getElementById('liked-carousel');
    const carouselImages = document.querySelector('.carousel-images');

    carouselImages.innerHTML = '';

    if (likedImages.length === 0) {
        carousel.style.display = 'none';
    } else {
        carousel.style.display = 'block';

        likedImages.forEach(item => {
            const imgElement = document.createElement('img');
            imgElement.src = item.src;
            imgElement.alt = item.title;
            imgElement.classList.add('carousel-item');
            carouselImages.appendChild(imgElement);
        });

        initializeCarousel();
    }
}

let currentIndex = 0;

function initializeCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
        item.style.display = index === 0 ? 'block' : 'none';
    });
}

document.getElementById('next-btn').addEventListener('click', () => {
    const items = document.querySelectorAll('.carousel-item');
    items[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].style.display = 'block';
});

document.getElementById('prev-btn').addEventListener('click', () => {
    const items = document.querySelectorAll('.carousel-item');
    items[currentIndex].style.display = 'none';
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    items[currentIndex].style.display = 'block';
});
