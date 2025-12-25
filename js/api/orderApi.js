
export async function postOrder(order) {
    try {
        const response = await fetch("http://localhost:3000/order", {
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