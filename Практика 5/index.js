function addToCart(productName) {
    // Находим элемент корзины
    const cart = document.getElementById('cart');
    
    // Создаем новый элемент списка
    const newItem = document.createElement('li');
    
    // Устанавливаем текст для нового элемента
    newItem.textContent = productName;
    
    // Добавляем новый элемент в корзину
    cart.appendChild(newItem);
}