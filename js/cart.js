import { postOrder } from "./api/orderApi.js";

let cart = JSON.parse(localStorage.getItem("cart")) || [];
function parsePrice(price) {
    return Number(price.replace(/[^0-9]/g, ""));
}
export function addToCart(product) {
    const numericPrice = parsePrice(product.price);
    const existing = cart.find(p => p.productId === product.productId);

    if (existing) {
        existing.quantity += 1;
        existing.subTotal = existing.quantity * numericPrice;
    } else {
        cart.push({
            ...product,
            price: numericPrice,
            quantity: 1,
            subTotal: numericPrice
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

export function renderCart() {
    const cartList = document.getElementById("cartItems");
    const totalEl = document.getElementById("cartTotal");

    cartList.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.subTotal;

        cartList.innerHTML += `
      <div class="cart-item">
        <span>${item.productModel}</span>
        <span>Qty: ${item.quantity}</span>
        <span>Rs ${item.price}</span>
      </div>
    `;
    });

    totalEl.textContent = `Rs ${total}`;
}

export async function confirmOrder() {
    const nameInput = document.getElementById("customerName");
    const addressInput = document.getElementById("shippingAddress");

    if (!nameInput.value || !addressInput.value) {
        alert("Please enter customer name and address");
        return;
    }

    const order = {
        orderId: Date.now(),
        customerName: nameInput.value,
        shippingAddress: addressInput.value,
        items: cart,
        totalAmount: cart.reduce((a, b) => a + b.subTotal, 0)
    };

    await postOrder(order);

    cart = [];
    localStorage.removeItem("cart");

    nameInput.value = "";
    addressInput.value = "";
    showSuccessModal();

    renderCart();
}
export function showSuccessModal() {
    const modal = document.getElementById("successModal");
    modal.classList.add("active");
}

document.getElementById("closeSuccessBtn").addEventListener("click", () => {
    const modal = document.getElementById("successModal");
    modal.classList.remove("active");
});

