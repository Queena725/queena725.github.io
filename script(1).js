
document.addEventListener("scroll", function () {
    const flowerImage = document.querySelector(".falling-flower");
    const triggerPoint = flowerImage.offsetTop - window.innerHeight / 1.5;
  
    if (window.scrollY > triggerPoint) {
      flowerImage.classList.add("show");
    }
  });
  
  
  function randomizeFlower(flower) {
    const screenWidth = window.innerWidth;
    const randomLeft = Math.random() * screenWidth;
    const randomDuration = Math.random() * 5 + 5; 
    const randomDelay = Math.random() * 5; 
  
    flower.style.left = `${randomLeft}px`;
    flower.style.animationDuration = `${randomDuration}s`;
    flower.style.animationDelay = `${randomDelay}s`;
    flower.style.opacity = 0;  
    flower.style.animationPlayState = "paused";  
  }
  
  
  const flowers = document.querySelectorAll('.falling-flower');
  
  flowers.forEach((flower) => {
    randomizeFlower(flower);
  });
  
  
  const triggerImage = document.querySelector('.trigger');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
           
            flowers.forEach((flower) => {
                flower.style.opacity = 2; 
                flower.style.animationPlayState = "running"; 
            });
        }
    });
  });
  
  
  observer.observe(triggerImage);
  
