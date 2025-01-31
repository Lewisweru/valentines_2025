const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Array of messages and GIFs
const messages = [
    "Being with you is my biggest blessing. I love you. ❤️",
    "You are my happiness, my everything. 💖",
    "I can't imagine life without you. You're my world! 🌍💑"
];

const gifs = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnBjMGZhZWZkcm5xZTEwZm5tMXl6aXNnYWdqM2FyYjU0aWVqaXJmNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FgBkUQ8VcnrtXGxhJD/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnZkaGpsczRidm03dmt2N2gzbWlnOHgwaDY2YzN6NGJmN21wazI4aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hWA13JnjdnwPAk2e1h/giphy.gif"
];

let clickCount = 0; // Track clicks

yesBtn.addEventListener("click", () => {
    // Update text and GIF based on the click count
    question.innerHTML = messages[clickCount];
    gif.src = gifs[clickCount];

    // Hide the No button after first click
    if (clickCount === 0) {
        noBtn.style.display = "none";
    }

    // Increment click count, but reset to 0 after third click
    clickCount = (clickCount + 1) % messages.length;
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
