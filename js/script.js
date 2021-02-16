const refs = {
  iconOpenRef: document.querySelector(".open"),
  iconCloseRef: document.querySelector(".close"),
  mobileMenuRef: document.querySelector(".header__nav"),
  responsibilitiesRef: document.querySelector("#resp"),
};

const { iconOpenRef, iconCloseRef, mobileMenuRef } = refs;

iconOpenRef.addEventListener("click", onOpen);

iconCloseRef.addEventListener("click", onClose);

function onClose() {
  iconOpenRef.style.display = "block";
  iconCloseRef.style.display = "none";
  mobileMenuRef.classList.remove("active");
}

function onOpen() {
  iconOpenRef.style.display = "none";
  mobileMenuRef.classList.add("active");
  iconCloseRef.style.display = "block";

  mobileMenuRef.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      return onClose();
    }
    if (event.target === mobileMenuRef) {
      return onClose();
    }
  });
}
