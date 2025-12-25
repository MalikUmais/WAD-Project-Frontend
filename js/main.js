import { getProducts } from "./api/productApi.js";
import { renderProducts } from "./ui/renderProducts.js";

import { getReviews } from "/js/api/reviewApi.js";
import { renderReviews } from "js/ui/renderReviews.js";

import { renderCart, confirmOrder } from "./cart.js";
document.addEventListener("DOMContentLoaded", init);

async function init() {

    if (document.querySelector(".product-section")) {
        try {
            const products = await getProducts();
            renderProducts(products);
        } catch (error) {
            console.error("Failed to load products:", error);
        }
    }

    if (document.querySelector(".reviews-grid")) {
        try {
            const reviews = await getReviews();
            renderReviews(reviews);
        } catch (error) {
            console.error("Failed to load reviews:", error);
        }
    }
}
window.closeCart = () => {
    document.getElementById("cartPopup").classList.remove("open");
};
document.addEventListener("DOMContentLoaded", () => {
    renderCart();
    document
        .getElementById("confirmOrderBtn")
        .addEventListener("click", confirmOrder);
});