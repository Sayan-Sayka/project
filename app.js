let meBtn = document.querySelector('.menu');
let tab = document.querySelector('.tab');
let close=document.querySelector('.remove');
meBtn.addEventListener('click', ()=>{
   tab.style.left="0px";
   tab.text.style.left="20px";
});
close.addEventListener('click', ()=>{
    tab.style.left="-300px";
});
const dynamicText = document.querySelector('.dynamic-text');
const words = ["Let me introduce myself", "Let us be new friends", ];
let wordIndex = 0;
let charIndex = 0;

function typeWords() {
    const currentWord = words[wordIndex];
    
    if (charIndex < currentWord.length) {
        dynamicText.innerHTML += currentWord.charAt(charIndex);
        charIndex++;
        setTimeout(typeWords, 200); // Typing speed
    } else {
        setTimeout(deleteWords, 1000); // Pause before deleting
    }
}

function deleteWords() {
    const currentWord = words[wordIndex];
    
    if (charIndex > 0) {
        dynamicText.innerHTML = currentWord.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteWords, 100); // Deleting speed
    } else {
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word
        setTimeout(typeWords, 200);
    }
}

// Start the typing effect after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWords, 1000); // Delay before starting the typing effect
});

document.addEventListener("DOMContentLoaded", () => {
    const progressCircles = document.querySelectorAll(".progress-circle");
  
    progressCircles.forEach((progressCircle) => {
      const progress = parseInt(progressCircle.dataset.progress, 10);
      const fillElements = progressCircle.querySelectorAll(".fill");
      const textElement = progressCircle.querySelector(".inside-circle");
  
      // Animate the progress
      let startValue = 0;
      const animationDuration = 1500; // milliseconds
      const interval = 20; // milliseconds
      const increment = progress / (animationDuration / interval);
  
      const animateProgress = setInterval(() => {
        startValue += increment;
        if (startValue >= progress) {
          startValue = progress;
          clearInterval(animateProgress);
        }
  
        textElement.textContent = `${Math.round(startValue)}%`;
  
        const degrees = (startValue / 100) * 360;
        if (degrees <= 180) {
          fillElements[0].style.transform = `rotate(${degrees}deg)`;
          fillElements[1].style.transform = `rotate(0deg)`;
        } else {
          fillElements[0].style.transform = `rotate(180deg)`;
          fillElements[1].style.transform = `rotate(${degrees - 180}deg)`;
        }
      }, interval);
    });
  });