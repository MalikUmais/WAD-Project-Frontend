import { addToCart } from "../cart.js";
export const renderProducts = (products) => {
    const productSection = document.querySelector('.product-section');
    if (!productSection) return;


    while (productSection.firstChild) {
        productSection.removeChild(productSection.firstChild);
    }

    products.forEach((product) => {
        const card = createProductCard(product);
        productSection.appendChild(card);
    });
};

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    const badges = document.createElement('div');
    badges.className = 'product-badges';

    const discountBadge = document.createElement('span');
    discountBadge.className = 'badge discount';
    discountBadge.textContent = product.badges.discount;

    const stockBadge = document.createElement('span');
    stockBadge.className = 'badge stock';
    stockBadge.textContent = product.badges.stock;

    badges.appendChild(discountBadge);
    badges.appendChild(stockBadge);

    const imgDiv = document.createElement('div');
    imgDiv.className = 'product-img';

    const img = document.createElement('img');
    img.src = product.image.src;
    img.alt = product.image.alt;

    imgDiv.appendChild(img);

    const info = document.createElement('div');
    info.className = 'product-info';

    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = product.price + " ";

    const oldPrice = document.createElement('span');
    oldPrice.className = 'old-price';
    oldPrice.textContent = product.oldPrice;

    price.appendChild(oldPrice);

    const title = document.createElement('p');
    title.className = 'title';
    title.textContent = product.title;

    const button = document.createElement('button');
    button.dataset.productId = product._id;
    button.dataset.productModel = product.title;
    button.dataset.price = product.price;
    button.className = 'add-btn';
    button.textContent = product.button;

    button.addEventListener("click", () => {
        addToCart({
            productId: product._id,
            productModel: product.title,
            price: product.price
        });

        document.getElementById("cartPopup").classList.add("open");
    });
    info.appendChild(price);
    info.appendChild(title);
    info.appendChild(button);

    card.appendChild(badges);
    card.appendChild(imgDiv);
    card.appendChild(info);

    return card;
}
