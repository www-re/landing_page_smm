const refs = {
  iconOpenRef: document.querySelector(".open"),
  iconCloseRef: document.querySelector(".close"),
  mobileMenuRef: document.querySelector(".header__nav"),
};

refs.iconOpenRef.addEventListener("click", () => {
  refs.iconOpenRef.style.display = "none";
  refs.mobileMenuRef.classList.add("active");
  refs.iconCloseRef.style.display = "block";
});

refs.iconCloseRef.addEventListener("click", () => {
  refs.iconOpenRef.style.display = "block";
  refs.iconCloseRef.style.display = "none";
  refs.mobileMenuRef.classList.remove("active");
});
