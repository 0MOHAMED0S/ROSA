const hearts = document.querySelectorAll(".heart");
hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    console.log("done2");
    heart.classList.toggle("active");
  });
});

const button = document.querySelectorAll(".btn");
button.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("done");
    btn.classList.toggle("active");
  });
});