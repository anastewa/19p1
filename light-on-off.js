
document.querySelector('body').style.backgroundColor = '#000000';
document.querySelector("img").addEventListener("click", function (){
    if (this.src === "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png") {
        this.src = "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png";
       document.querySelector('body').style.backgroundColor = '#ffffff'; 
      } else {
        this.src = "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png";
     document.querySelector('body').style.backgroundColor = '#000000'; }
})