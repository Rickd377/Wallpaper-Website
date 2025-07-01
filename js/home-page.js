document.querySelector(".dropdown-btn").addEventListener("click", (event) => {
  const btn = event.currentTarget;
  const dropdownContent = document.querySelector('.dropdown-content');
  const icon = btn.querySelector(".dropdown-icon");
  btn.classList.toggle("clicked");
  dropdownContent.classList.toggle("open");
  if (icon) {
    icon.classList.toggle("rotated", dropdownContent.classList.contains("open"));
  }
});

document.querySelectorAll(".dropdown-content .option").forEach(option => {
  option.addEventListener('click', function() {
    document.querySelector(".selected-device").textContent = this.textContent;
    document.querySelector('.dropdown-content').classList.remove('open');
    document.querySelector('.dropdown-btn').classList.remove('clicked');
  });
});

function createImages() {
  const imageContainer = document.querySelector(".image-container");

  for (let i = 0; i < 50; i++) {
    const img = document.createElement("img");
    const randomHeight = Math.floor(Math.random() * 400) + 400;
    img.src = `https://picsum.photos/id/${i}/600/${randomHeight}`;
    imageContainer.append(img)
  }
}

createImages();

document.querySelector(".image-container").addEventListener("click", function(e) {
  if (e.target.tagName === "IMG") {
    const popup = document.querySelector(".image-popup");
    const popupContainer = popup.querySelector(".popup-container");
    const imageFunctions = popup.querySelector(".image-functions");
    popup.style.display = "flex";
    document.body.style.overflow = "hidden";
    let popupImg = popupContainer.querySelector("img");
    if (!popupImg) {
      popupImg = document.createElement("img");
      popupContainer.insertBefore(popupImg, imageFunctions);
    }
    popupImg.src = e.target.src;
  }
});

document.querySelector(".image-popup").addEventListener("click", function(e) {
  if (e.target.classList.contains("close-popup")) {
    this.style.display = "none";
    document.body.style.overflow = "";
  }
});

document.querySelector(".favorite-btn").addEventListener("click", function(e) {

});

document.querySelector(".download-btn").addEventListener("click", function(e) {

});

document.querySelector(".share-btn").addEventListener("click", function(e) {

});

document.querySelector(".fullsize-btn").addEventListener("click", function(e) {
  const popupImg = document.querySelector(".popup-container img");
  if (popupImg && popupImg.src) {
    window.open(popupImg.src, "_blank")
  }
});