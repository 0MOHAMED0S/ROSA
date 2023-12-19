const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    console.log("done1");
    card.classList.toggle("active");
    const heart = card.querySelector(".heart");
    heart.classList.toggle("active");
  });

  const button = card.querySelector(".btn");
  button.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevents the card click event from being triggered
    console.log("done");
    button.classList.toggle("active");
  });
});
