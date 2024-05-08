"use strict";
window.addEventListener("load", () => {
    const form = document.getElementById("form");
    const message = document.getElementById("message");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const one = document.getElementById("one")?.checked;
        const two = document.getElementById("two")?.checked;
        const three = document.getElementById("three")
            ?.checked;
        const four = document.getElementById("four")?.checked;
        const five = document.getElementById("five")?.checked;
        let rating;
        rating = one ? 1 : two ? 2 : three ? 3 : four ? 4 : five ? 5 : "";
        if (rating === "") {
            return false;
        }
        else {
            message.innerHTML = `
            <section class="card__message">
            <img class="card__thank-img" src="./images/illustration-thank-you.svg" alt="Heart icon" />
            <span class="card__rating">You selected ${rating} out of 5</span>
            <h2>Thank you!</h2>
            <p class="card__message-txt">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </section>
        `;
        }
    });
});
