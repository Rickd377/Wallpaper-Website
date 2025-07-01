document.querySelector(".dropdown-btn").addEventListener("click", (event) => {
  const dropdownContent = document.querySelector('.dropdown-content');
  const btn = event.currentTarget;
  btn.classList.toggle("clicked");
  dropdownContent.classList.toggle("open");
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