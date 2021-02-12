const refs = {
  iconOpenRef: document.querySelector(".open"),
  iconCloseRef: document.querySelector(".close"),
  mobileMenuRef: document.querySelector(".header__nav"),
};

const { iconOpenRef, iconCloseRef, mobileMenuRef } = refs;

iconOpenRef.addEventListener("click", onOpen);

iconCloseRef.addEventListener("click", onClose);

function onClose() {
  setTimeout(() => {
    iconOpenRef.style.display = "block";
    iconCloseRef.style.display = "none";
    mobileMenuRef.classList.remove("active");
  }, 300);
}

function onOpen() {
  setTimeout(() => {
    iconOpenRef.style.display = "none";
    mobileMenuRef.classList.add("active");
    iconCloseRef.style.display = "block";
  }, 300);

  mobileMenuRef.addEventListener("click", (event) => {
    if ((event.currentTarget = mobileMenuRef)) {
      setTimeout(() => {
        return onClose();
      }, 300);
    }
  });
}
