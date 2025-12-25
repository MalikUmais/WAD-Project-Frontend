export async function getProducts() {
    try {
        const response = await fetch("http://localhost:3000/products");
        return await response.json();
    } catch (err) {
        console.error("Product API error: ", err);
        return [];
    }
}
