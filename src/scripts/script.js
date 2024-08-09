const changeText = document.querySelector(".userlist__but");

changeText.addEventListener("click", function () {
   if (changeText.textContent === "Subscribe") {
      changeText.textContent = "Unsubscribe";
   }else {
      changeText.textContent = "Subscribe"
   }
   changeText.classList.toggle("userlist__but--disabled")
});

