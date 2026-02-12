const noButton = document.querySelector(".no-button");
const yesButton = document.querySelector(".yes-button");

const messages = [
    "Are you sure?",
    "Really sure? 😢",
    "Think again 💔",
    "Please? 🥺",
    "Don’t break my heart 💖",
    "Last chance 😭"
];

let messageIndex = 0;
let size = 18;

// No button effect
noButton.addEventListener("mouseover", () => {

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const x = Math.random() * 250;
    const y = Math.random() * 120;

    noButton.style.left = x + "px";
    noButton.style.top = y + "px";

    size += 6;
    yesButton.style.fontSize = size + "px";
});

// Yes click effect
yesButton.addEventListener("click", () => {

    confetti({
        particleCount: 250,
        spread: 120,
        origin:{y:0.6}
    });

    setTimeout(() => {
        document.body.innerHTML = `
        <div style="margin-top:200px;color:white;">
            <h1 style="font-size:3rem;">YAYYYY 💖</h1>
            <h2>I Knew It 😍</h2>
        </div>
        `;
    }, 1000);
});
