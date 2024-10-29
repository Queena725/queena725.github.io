const text = `Red Roses - passionate love.
Pink Carnations - love, affection.
Heart Orchids - heart-shaped leaves.
Lilies - devotion, humility.
Mixed Bouquet - personalized expression of your love.`;

let index = 0;
const typingSpeed = 100;

function type() {
    if (index < text.length) {
        document.getElementById('typing-text').innerHTML += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
    }
}

window.onload = type; 

