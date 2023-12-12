const menu = document.querySelector(".menu");
const show = document.querySelector(".show");

show.addEventListener("click", () => {
  console.log("done");

  // Toggle classes for menu and show
  menu.classList.toggle("active");
  show.classList.toggle("active");

  // // Check if the menu is active
  // if (menu.classList.contains("active")) {
  //   // Set opacity for all elements inside the body
  //   const bodyElements = document.body.children;
  //   for (let i = 0; i < bodyElements.length; i++) {
  //     const element = bodyElements[i];
  //     if (element !== menu) {
  //       element.style.cssText = "transition: all 1s; opacity: .5;";
  //     }
  //   }

  //   // Set opacity for the menu itself
  //   menu.style.opacity = 1;
  // } else {
  //   // Reset opacity for all elements when the menu is not active
  //   const bodyElements = document.body.children;
  //   for (let i = 0; i < bodyElements.length; i++) {
  //     const element = bodyElements[i];
  //     element.style.cssText = "transition: all 1s; opacity: 1;";
  //   }
  // }
});

document.body.addEventListener("click", (event) => {
  if (!menu.contains(event.target)) {
    menu.classList.remove("active");
    show.classList.remove("active");
    const bodyElements = document.body.children;
    for (let i = 0; i < bodyElements.length; i++) {
      const element = bodyElements[i];
      element.style.cssText = "transition: all 1s; opacity: 1;";
    }
  }
});

// show.onclick = () => {
//   console.log("done");
// };
