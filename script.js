const text = `Red Roses - passionate love.
Pink Carnations - love, affection.
Heart Orchids - heart-shaped leaves.
Lilies - devotion, humility.
Mixed Bouquet - personalized expression of your love.

now scroll down!`;

let index = 0;
const typingSpeed = 25; 
const delayAfterTyping = 5000; 

function type() {
    if (index < text.length) {
        document.getElementById('typing-text').innerHTML += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
    } else {
       
        setTimeout(() => {
            document.getElementById('typing-text').innerHTML = '';
        }, delayAfterTyping);
    }
}

window.onload = type;
