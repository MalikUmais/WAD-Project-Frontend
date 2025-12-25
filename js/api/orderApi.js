const API_URL="https://wad-project-backend-n3tlu3f9e-malikumais-projects.vercel.app/";
export async function postOrder(order) {
    try {
        const response = await fetch(`${API_URL}/order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        });
        return await response.json();
    } catch (err) {
        console.error("Order API error: ", err);
        return [];
    }
}