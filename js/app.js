
document.getElementById('with_me').onclick = function (event) {
    window.location.href = '/index.html';
};

document.addEventListener('DOMContentLoaded', function () {
    const imgMe = document.querySelector('.img-me');
    imgMe.style.opacity = '1'; // Установить видимость для запуска анимации
});

document.addEventListener('DOMContentLoaded', function () {
    const imgMe = document.querySelector('.img-me');
    imgMe.style.opacity = '1'; // Установить видимость для запуска анимации

    const box1 = document.querySelector('.box1');
    box1.style.animation = 'rotate 10s linear infinite'; // Добавить анимацию вращения
});