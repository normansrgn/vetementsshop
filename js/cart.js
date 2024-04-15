document.addEventListener("DOMContentLoaded", function () {
    const cart = document.getElementById("cart");
    const clearCartButton = document.getElementById("clear-cart");

    // Получаем сохраненные товары из Local Storage
    const savedItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Отображаем сохраненные товары
    savedItems.forEach(function(item) {
        cart.appendChild(createCard(item));
    });

    // Создаем карточку товара
    function createCard(item) {
        const card = document.createElement("div");
        card.classList.add("vetments_card");

        card.innerHTML = `
            <div class="card_pic">
                <img src="${item.image}" alt="">
            </div>
            <div class="card_name">
                <div class="name_tem">${item.brand}</div>
                <div class="name_tem">${item.style}</div>
            </div>
            <div class="card_price">
                <div class="card_price_item">${item.price}</div>
            </div>
        `;

        return card;
    }

    // Очищаем корзину
    clearCartButton.addEventListener("click", function() {
        // Очищаем Local Storage
        localStorage.removeItem("cartItems");

        // Очищаем отображаемые товары на странице
        cart.innerHTML = "";
    });
});
