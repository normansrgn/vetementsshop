document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();

            const card = button.closest(".vetments_card");

            const item = {
                image: card.querySelector("img").src,
                brand: card.querySelector(".card_name .name_tem").textContent,
                style: card.querySelectorAll(".card_name .name_tem")[1].textContent,
                price: card.querySelector(".card_price .price").textContent // Изменен селектор
            };

            // Проверяем, является ли текущая страница страницей корзины
            const isCartPage = window.location.pathname.includes("cart.html");

            if (!isCartPage) {
                // Получаем сохраненные товары из Local Storage
                const savedItems = JSON.parse(localStorage.getItem("cartItems")) || [];

                // Добавляем новый товар в массив сохраненных товаров
                savedItems.push(item);

                // Сохраняем обновленные товары в Local Storage
                localStorage.setItem("cartItems", JSON.stringify(savedItems));
            }

            // Если это страница корзины, скрываем кнопку "BUY"
            if (isCartPage) {
                button.style.display = "none";
            }
        });
    });
});
