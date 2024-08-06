const but = document.querySelectorAll("userlist__but");
buttons.forEach(button => {
   button.addEventListener("click", event => {
      but.forEach(b => b.classList.remove("selected"));
      event.target.classList.toggle("You are a subscribs");
   });
});
const but = document.querySelectorAll("userlist__but");
buttons.forEach(userlist__but => {
   button.addEventListener("click", function(){
      this.classList.toggle("selected");
   });
});
