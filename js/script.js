const scrollToTopButton = document.getElementById('scrollToTopButton');

// Отображение/скрытие кнопки в зависимости от прокрутки страницы
window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
};

// Прокрутка на верх страницы при нажатии на кнопку
scrollToTopButton.addEventListener('click', () => {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для других браузеров
});
