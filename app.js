const slideshow = document.querySelector(".slideshow");

setInterval(() => {
  const firstIcon = slideshow.firstElementChild;
  firstIcon.classList.add("fade-out");

  const forthIcon = slideshow.children[4];
  forthIcon.classList.add("light");
  forthIcon.previousElementSibling.classList.remove("light");

  setTimeout(() => {
    slideshow.removeChild(firstIcon);
    slideshow.appendChild(firstIcon);
    setTimeout(() => {
      firstIcon.classList.remove("fade-out");
    }, 500);
  }, 500);
}, 3000);

const navBarButton = document.querySelector(".navBarButton");

navBarButton.addEventListener("click", () => {
  document.querySelector(".navspan").classList.toggle("change");
});
