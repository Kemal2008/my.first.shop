document.addEventListener("DOMContentLoaded", () => {
    console.log("Каталог загружен!");

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");

    if (category) {
        // Отображаем сообщение об активной категории
        alert("Показаны только товары из категории: " + category);

        // Применение фильтра по категории (например, скрытие других товаров)
        const allProducts = document.querySelectorAll(".product");
        
        allProducts.forEach(product => {
            if (!product.classList.contains(category)) {
                product.style.display = "none"; // Прячем товары не относящиеся к категории
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product");
    const categoryFilters = document.querySelectorAll(".category-filter");
    const brandFilters = document.querySelectorAll(".brand-filter");
    const minPriceInput = document.getElementById("min-price");
    const maxPriceInput = document.getElementById("max-price");
    const applyFiltersButton = document.getElementById("apply-filters");

    applyFiltersButton.addEventListener("click", () => {
        const selectedCategories = Array.from(categoryFilters)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        const selectedBrands = Array.from(brandFilters)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        const minPrice = parseInt(minPriceInput.value) || 0;
        const maxPrice = parseInt(maxPriceInput.value) || Infinity;

        products.forEach(product => {
            const category = product.dataset.category;
            const brand = product.dataset.brand;
            const price = parseInt(product.dataset.price);

            const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(category);
            const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(brand);
            const priceMatch = price >= minPrice && price <= maxPrice;

            if (categoryMatch && brandMatch && priceMatch) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});
