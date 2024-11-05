const text = `Yellow roses - friendship and joy
an excellent choice for expressing appreciation to a teacher who has been a guiding light.
Hydrangeas - gratitude, grace, beauty 
Sunflowers -  positivity, joy, adoration, bright, cheerful appearance
Carnations -  love, fascination, distinction
Yellow tulips - cheerful thoughts, making a bright and joyful gift for a teacher. 
Peonies - prosperity, honor, romance, great choice for expressing deep admiration and respect.
Alstroemerias -  friendship, devotion, and prosperity
a perfect way to express your appreciation for a teacher who has shown you unwavering support and guidance.

now scroll down!`;

let index = 0;
const typingSpeed = 25; 

function type() {
    if (index < text.length) {
        document.getElementById('typing-text').innerHTML += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
    }
}

window.onload = type;

