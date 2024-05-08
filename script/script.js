"use strict";
window.addEventListener("load", () => {
    const form = document.getElementById("form");
    const message = document.getElementById("message");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const ratings = {
            one: document.getElementById("one").checked,
            two: document.getElementById("two").checked,
            three: document.getElementById("three").checked,
            four: document.getElementById("four").checked,
            five: document.getElementById("five").checked,
        };
        const rating = Object.keys(ratings).find(key => ratings[key]) || "";
        const ratingNumber = rating !== "" ? parseInt(rating) : "";
        if (ratingNumber === "") {
            return false;
        }
        else {
            message.innerHTML = generateMessage(ratingNumber);
        }
    });
});
function generateMessage(rating) {
    return `
        <section class="card__message">
        <img class="card__thank-img" src="./images/illustration-thank-you.svg" alt="Heart icon" />
        <span class="card__rating">You selected ${rating} out of 5</span>
        <h2>Thank you!</h2>
        <p class="card__message-txt">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </section>
    `;
}
