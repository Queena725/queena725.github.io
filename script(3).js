
function displayRandomFlowers() {
    let Flowers = ["🌸", "🌺", "🌻", "🌼", "🍀", "💐", "🌹", "🌷", "🏵️"];
    let randomFlowers = Flowers[Math.floor(Math.random() * Flowers.length)];
    document.getElementById("Flowers").innerText = randomFlowers;
  }


