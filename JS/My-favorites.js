const hearts = document.querySelectorAll(".heart"),
  cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    console.log("done1")
    hearts.forEach((heart) => {
      heart.addEventListener("click", () => {
        console.log("done2")
        //     heart.classList.toggle("active");
        card.classList.toggle("active");
      });
    });
  });
});

