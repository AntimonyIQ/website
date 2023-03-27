const text = ["Connoisseurs", "Cognoscente", "Maven"];

let index = 0;
let charIndex = 0;
const speed = 100;

function type() {
    if (charIndex < text[index].length) {
        document.querySelector('.text').textContent += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, speed);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (charIndex > 0) {
        document.querySelector('.text').textContent = text[index].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, speed);
    } else {
        index++;
        if (index >= text.length) {
            index = 0;
        }
        setTimeout(type, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});