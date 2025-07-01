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
    document.querySelectorAll(".dropdown-content .option").forEach(opt => {
      opt.classList.remove('selected');
    });
    this.classList.add('selected');
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
  const heartIcon = this.querySelector("i");
  heartIcon.classList.toggle("clicked");
});

document.querySelector(".download-btn").addEventListener("click", function() {
  const popupImg = document.querySelector(".popup-container img");
  if (popupImg && popupImg.src) {
    const link = document.createElement("a");
    link.href = popupImg.src;
    link.download = "Vividly_Wallpaper.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
});

document.querySelector(".copy-btn").addEventListener("click", async function() {
  const popupImg = document.querySelector(".popup-container img");
  const copyIcon = this.querySelector("i");
  if (popupImg && popupImg.src && navigator.clipboard && window.ClipboardItem) {
    try {
      const res = await fetch(popupImg.src);
      const blob = await res.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob})
      ]);
      copyIcon.className = "fa-solid fa-sharp fa-copy";
      setTimeout(() => {
        copyIcon.className = "fa-solid fa-sharp fa-paperclip";
      }, 1500);
    } catch (err) {
      copyIcon.className = "fa-solid fa-sharp fa-xmark";
      setTimeout(() => {
        copyIcon.className = "fa-solid fa-sharp fa-paperclip";
      }, 1500);
    }
  } else {
    alert("Clipboard API not supported in this browser.");
  }
});

document.querySelector(".fullsize-btn").addEventListener("click", function() {
  const popupImg = document.querySelector(".popup-container img");
  if (popupImg && popupImg.src) {
    window.open(popupImg.src, "_blank")
  }
});