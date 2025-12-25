import { postReview } from "./api/reviewApi.js";

const form = document.getElementById("form");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const reviewData = {
    reviewerName: document.getElementById("reviewerName").value,
    reviewsRating: Number(document.getElementById("reviewsRating").value),
    reviewerGender: document.getElementById("reviewerGender").value,
    reviewContent: document.getElementById("reviewContent").value,
  };

  try {
    const response = await postReview(reviewData);

    if (response && response._id) {
      status.textContent = "Submitted successfully!";
      status.style.color = "green";
      form.reset();
    } else {
      status.textContent = "Failed to submit";
      status.style.color = "red";
    }
  } catch (error) {
    status.textContent = "Server error";
    status.style.color = "red";
    console.error(error);
  }
});
