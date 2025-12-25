const API_URL="https://wad-project-backend-n3tlu3f9e-malikumais-projects.vercel.app";
export async function getReviews() {
    try {
        const response = await fetch(`${API_URL}/reviews`);
        return await response.json();
    } catch (err) {
        console.error("Reviews API error: ", err);
        return [];
    }
}

export async function postReview(review) {
    try {
        const response = await fetch(`${API_URL}/reviews`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(review),
        });

        return await response.json();

    } catch (err) {
        console.error("Reviews API error: ", err);
        return null;
    }
}
