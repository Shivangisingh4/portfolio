// Typing animation
// const words = [
//     "Artificial Intelligence",
//     "Machine Learning",
//     "Competitive Programming",
//     "Data Structures & Algorithms"
// ];

let wordIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function type() {
    if (charIndex < words[wordIndex].length) {
        typingElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent =
            words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 300);
    }
}

document.addEventListener("DOMContentLoaded", type);
