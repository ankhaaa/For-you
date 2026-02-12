const noBtn = document.querySelector(".no");

noBtn.addEventListener("mouseover", () => {
    const i = Math.floor(Math.random() * 250);
    const j = Math.floor(Math.random() * 150);

    noBtn.style.left = i + "px";
    noBtn.style.top = j + "px";
});
document.querySelector(".yes").addEventListener("click", () => {
    alert("Yaaay ❤️ I love you too!");
});
