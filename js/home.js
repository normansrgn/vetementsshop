const startTimer = () => {
  const targetTime = new Date("2024-04-30T00:00:00").getTime(); // Задаем дату и время окончания таймера
  const timerEl = document.querySelector("#promo-time");

  const formatTime = (time) => {
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const updateTimer = () => {
    const currentTime = new Date().getTime();
    const distance = targetTime - currentTime;

    if (distance <= 0) {
      clearInterval(timerInterval);
      timerEl.innerHTML = "00:00:00";
      // Дополнительные действия после завершения таймера
      finishTimer();
    } else {
      timerEl.innerHTML = formatTime(distance);
    }
  };

  // Вызываем функцию обновления таймера сразу после его запуска
  updateTimer();

  // Запускаем интервал обновления таймера каждую секунду
  const timerInterval = setInterval(updateTimer, 1000);
};

const finishTimer = () => {
  // Выполните здесь дополнительные действия после завершения таймера
  console.log('Таймер завершен');
  // Например, можно добавить код для перенаправления пользователя на другую страницу или выполнения других действий
};

// Запускаем таймер при загрузке страницы
startTimer();
