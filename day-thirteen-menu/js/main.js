const menuButtonElement = document.querySelector("nav span");
const navListElement = document.querySelector("nav ul");
const itemsNavList = document.querySelectorAll("ul li a");

menuButtonElement.addEventListener("click", () => {
  navListElement.classList.toggle("show");
});

itemsNavList.forEach((item) => {
  item.addEventListener("mouseover", () => {
    const activeItem = document.querySelector("a.active");
    activeItem.classList.remove("active");

    item.classList.add("active");
  });
});