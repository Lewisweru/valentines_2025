const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const wrapper = document.querySelector(".wrapper");

// Create the Reset button (hidden initially)
const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
resetBtn.classList.add("reset-btn");
resetBtn.style.display = "none"; // Hidden by default
wrapper.appendChild(resetBtn); // Add Reset button to the wrapper

// Array of messages and GIFs
const messages = [
    "Being with you is my biggest blessing. I love you. ❤️",
    "You are my happiness, I want to spend the rest of my life with you. 💍💖",
    "You're my world! 🌍💑",
    "You bring colour into my world 💜I love you.🌷"
];

const gifs = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTVrYXJyMDFjNmUwa3E3cWZic2RqaG9seW9ndWh1MXR0MjJveHd1YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2NeUnAVoZ6Xt8ITvVn/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3A5YTllcWppYnZtbG4wOXBrYjBrOHNoMG1ydzN6anlvZWg5YzQxZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26FLdmIp6wJr91JAI/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDkycmhiZTBwN3dmczR4eHBqcmJkNHFvYm5td2FoMDZrdjkxZzBhaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif"
];

let clickCount = 0; // Track clicks

yesBtn.addEventListener("click", () => {
    // Update text and GIF based on the click count
    question.innerHTML = messages[clickCount];
    gif.src = gifs[clickCount];

    // Hide the No button after the first click
    if (clickCount === 0) {
        noBtn.style.display = "none";
    }

    // Show Reset button after the last message
    if (clickCount === messages.length - 1) {
        resetBtn.style.display = "block"; // Show Reset button
        yesBtn.style.display = "none"; // Hide Yes button
    }

    // Increment click count but prevent overflow
    clickCount = Math.min(clickCount + 1, messages.length - 1);
});

// Reset everything when Reset button is clicked
resetBtn.addEventListener("click", () => {
    clickCount = 0;
    question.innerHTML = "Do you love me?";
    gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjJvdWZzYXc1NGJ6aGp1cDE3b2dyNnVzOGN1andkMjVrMmRzeGwwZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3OhXBaoR1tVPW/giphy.gif";
    yesBtn.style.display = "block"; // Show Yes button
    noBtn.style.display = "block"; // Show No button
    resetBtn.style.display = "none"; // Hide Reset button
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Generate random positions within the wrapper
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
