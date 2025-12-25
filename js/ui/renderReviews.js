export const renderReviews = (reviews) => {
    const reviewsGrid = document.querySelector('.reviews-grid');
    if (!reviewsGrid) return;

    // Clear old cards safely
    while (reviewsGrid.firstChild) {
        reviewsGrid.removeChild(reviewsGrid.firstChild);
    }

    reviews.forEach(review => {
        const card = createReviewCard(review);
        reviewsGrid.appendChild(card);
    });
};
function generateStars(count) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        stars += i <= count ? "★" : "☆";
    }
    return stars;
}

function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';

    const userDiv = document.createElement('div');
    userDiv.className = 'review-user';

    const avatar = document.createElement('img');
    avatar.src = review.reviewerGender === "Female"
        ? "./assets/svgs/female-svgrepo-com.svg"
        : "./assets/svgs/male-svgrepo-com.svg";
    avatar.alt = "Avatar";
    avatar.className = 'avatar';

    const nameDiv = document.createElement('div');
    const name = document.createElement('h4');
    name.textContent = review.reviewerName;
    nameDiv.appendChild(name);

    userDiv.appendChild(avatar);
    userDiv.appendChild(nameDiv);

    const stars = document.createElement('p');
    stars.className = 'stars small';
    stars.textContent = generateStars(review.reviewsRating);

    const comment = document.createElement('p');
    comment.className = 'comment';
    comment.textContent = review.reviewContent;

    card.appendChild(userDiv);
    card.appendChild(stars);
    card.appendChild(comment);

    return card;
}
