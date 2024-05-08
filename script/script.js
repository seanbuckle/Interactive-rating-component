"use strict";
window.addEventListener("load", () => {
    let form = document.getElementById("form");
    let message = document.getElementById("message");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let one = document.querySelector("#one:checked");
        let two = document.querySelector("#two:checked");
        let three = document.querySelector("#three:checked");
        let four = document.querySelector("#four:checked");
        let five = document.querySelector("#five:checked");
        let rating;
        if (one) {
            rating = 1;
        }
        else if (two) {
            rating = 2;
        }
        else if (three) {
            rating = 3;
        }
        else if (four) {
            rating = 4;
        }
        else if (five) {
            rating = 5;
        }
        else {
            rating = "";
        }
        if (rating == "") {
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
