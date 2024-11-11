const images = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg'
];

// Индекс текущего изображения в карусели
let currentIndex = 0;

// Обновление изображения в карусели при загрузке страницы

const carouselImage = document.getElementById('carousel-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Функция для обновления изображения в карусели
function updateImage() {
    carouselImage.src = images[currentIndex];
}

// Функция для перехода к предыдущему изображению
function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// Функция для перехода к следующему изображению
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

// Установка начального изображения
updateImage();

// Обработчик событий для кнопок
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

// Автоматическая смена изображений каждые 3 секунды
setInterval(showNextImage, 3000);