// document.getElementById("registrationForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get form values
//     var fullName = document.getElementById("fullName").value;
//     var email = document.getElementById("email").value;
//     var phoneNumber = document.getElementById("phoneNumber").value;
//     var mehndiDesign = document.getElementById("design").value;
//     var eventDate = document.getElementById("eventDate").value;
//     var count = document.getElementById("count").value;
//     var address = document.getElementById("address").value;

//     // You can add further validation or processing here

//     // Display a confirmation message (you can replace this with actual submission logic)
//     alert("Registration successful! Thank you, " + fullName + "!");
// });


const scriptURL = 'https://script.google.com/macros/s/AKfycbxVz06HJ-NHPtP0gaFMvLk_KYLhB1VFsETjsC4BK9l0xtm6n7po-7sjkZ2sRcHmiWM/exec'
const form = document.forms['submit-to-google-sheet']

const msg= document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {

      msg.innerHTML="Messages sent successfully"
      setTimeout(function(){
        msg.innerHTML=""
      },5000)
      form.reset() 
    })
    
    .catch(error => console.error('Error!', error.message))
    var fullName = document.getElementById("fullName").value;
    alert("Registration successful! Thank you, " + fullName + "!");
})