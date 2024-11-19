const text = `1st Anniversary 
Carnations, depicting youthful and passionate love.

5th Anniversary
Daisies, representing innocence and gentleness.

10th Anniversary
Daffodils, symbolising renewal and the promise of future happiness.

15th Anniversary
Roses, embodying love, appreciation, and the strength of the relationship that has blossomed over fifteen years.

25th Anniversary
Irises, representing wisdom, and valour, compliment the silver milestone of marriage with their elegant blooms.

50th Anniversary
Violets, paired with yellow roses, signify the golden jubilee of love, virtue, humility, and faithfulness.

!`;


let index = 0;
const typingSpeed = 25;


function type() {
    if (index < text.length) {
        document.getElementById('typing-text').innerHTML += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
    }
}

window.onload = () => {
    type();

   
    const hoverTexts = document.querySelectorAll('.hover-text');
    const popupImage = document.getElementById('popupImage');
    const popupImg = document.getElementById('popupImg');

    hoverTexts.forEach(text => {
        text.addEventListener('mouseenter', (e) => {
            const imgSrc = text.getAttribute('data-image');
            popupImg.src = imgSrc;
            popupImage.style.display = 'block';

    
            const rect = text.getBoundingClientRect();
            popupImage.style.left = `${rect.left}px`;
            popupImage.style.top = `${rect.bottom + window.scrollY}px`;
        });

        text.addEventListener('mouseleave', () => {
            popupImage.style.display = 'none';
        });
    });
};
