function handleActiveClass() {
  this.classList.toggle("active");

  document.querySelector(".navigation").classList.toggle("active");
}

const toggleMobileMenu = () => {
  document
    .querySelector(".mobile-menu-btn")
    .addEventListener("click", handleActiveClass);
};

window.addEventListener("load", function () {
  toggleMobileMenu();
});
