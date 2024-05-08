window.addEventListener("load", () => {
  const form: HTMLFormElement = document.getElementById(
    "form"
  ) as HTMLFormElement;
  const message: HTMLElement = document.getElementById(
    "message"
  ) as HTMLElement;

  form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const one = (document.getElementById("one") as HTMLInputElement)?.checked;
    const two = (document.getElementById("two") as HTMLInputElement)?.checked;
    const three = (document.getElementById("three") as HTMLInputElement)
      ?.checked;
    const four = (document.getElementById("four") as HTMLInputElement)?.checked;
    const five = (document.getElementById("five") as HTMLInputElement)?.checked;
    let rating: number | string;
    rating = one ? 1 : two ? 2 : three ? 3 : four ? 4 : five ? 5 : "";
    if (rating === "") {
      return false;
    } else {
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
