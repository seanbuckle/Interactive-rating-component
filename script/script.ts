window.addEventListener("load", () => {
  let form: HTMLFormElement = document.getElementById(
    "form"
  ) as HTMLFormElement;
  let message: HTMLElement = document.getElementById("message") as HTMLElement;

  form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    let one: HTMLInputElement = document.querySelector(
      "#one:checked"
    ) as HTMLInputElement;
    let two: HTMLInputElement = document.querySelector(
      "#two:checked"
    ) as HTMLInputElement;
    let three: HTMLInputElement = document.querySelector(
      "#three:checked"
    ) as HTMLInputElement;
    let four: HTMLInputElement = document.querySelector(
      "#four:checked"
    ) as HTMLInputElement;
    let five: HTMLInputElement = document.querySelector(
      "#five:checked"
    ) as HTMLInputElement;
    let rating: number | string;
    if (one) {
      rating = 1;
    } else if (two) {
      rating = 2;
    } else if (three) {
      rating = 3;
    } else if (four) {
      rating = 4;
    } else if (five) {
      rating = 5;
    } else {
      rating = "";
    }
    if (rating == "") {
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
