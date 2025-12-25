export async function getReviews() {
    try {
        const response = await fetch("http://localhost:3000/reviews");
        return await response.json();
    } catch (err) {
        console.error("Reviews API error: ", err);
        return [];
    }
}

export async function postReview(review) {
    try {
        const response = await fetch("http://localhost:3000/reviews", {
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
