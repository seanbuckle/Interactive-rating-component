window.addEventListener("load", () => {
    const form = document.getElementById("form") as HTMLFormElement;
    const message = document.getElementById("message") as HTMLElement;
    
    form.addEventListener("submit", (e: Event) => {
        e.preventDefault();
        const ratings = {
            one: (document.getElementById("one") as HTMLInputElement).checked,
            two: (document.getElementById("two") as HTMLInputElement).checked,
            three: (document.getElementById("three") as HTMLInputElement).checked,
            four: (document.getElementById("four") as HTMLInputElement).checked,
            five: (document.getElementById("five") as HTMLInputElement).checked,
        };

        const rating = Object.keys(ratings).find(key => ratings[key as keyof typeof ratings]) || "";
        const ratingNumber = rating !== "" ? parseInt(rating) : "";

        if (ratingNumber === "") {
            return false;
        } else {
            message.innerHTML = generateMessage(ratingNumber);
        }
    });
});

function generateMessage(rating: number): string {
    return `
        <section class="card__message">
        <img class="card__thank-img" src="./images/illustration-thank-you.svg" alt="Heart icon" />
        <span class="card__rating">You selected ${rating} out of 5</span>
        <h2>Thank you!</h2>
        <p class="card__message-txt">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </section>
    `;
}