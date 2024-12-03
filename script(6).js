const text = "Uh-oh! Did things get a little heated? Time to bring out the flowers and say, ‘I’m sorry’ in style! scroll down!" ;
const typingElement = document.getElementById("typing-text");
let index = 0;

function typeText() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 100); 
  }
}

window.onload = typeText;
