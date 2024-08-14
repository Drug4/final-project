const changeText = document.querySelector(".userlist__but");

changeText.addEventListener("click", function () {
   if (changeText.textContent === "Subscribe") {
      changeText.textContent = "Unsubscribe";
   } else {
      changeText.textContent = "Subscribe"
   }
   changeText.classList.toggle("userlist__but--disabled")
   
});


function darkmode() {
   const body = document.body
   const wasDarkmode = localStorage.getItem('darkmode') === 'true'

   localStorage.setItem('darkmode', !wasDarkmode)
   body.classList.toggle('dark-mode', !wasDarkmode)

}

document.querySelector('.switch__darkmode').addEventListener('click', darkmode)

function onload() {
   document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode'))
}
document.addEventListener('DOMContentLoaded', onload)

























// const footer__info = userList.querySelectorAll(".footer__info");

// footer__info.forEach((userItem) => {
//   deleteUser(userItem);
// });

// const err = document.querySelectorAll(".footer__info");

// err.addEventListener('click', function () {
//    swal ( "Error" ,  "you have no saved photos" ,  "error" )

//  })