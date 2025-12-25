const API_URL="https://wad-project-backend-n3tlu3f9e-malikumais-projects.vercel.app";
export async function getProducts() {
    try {
        const response = await fetch(`${API_URL}/products`);
        return await response.json();
    } catch (err) {
        console.error("Product API error: ", err);
        return [];
    }
}
