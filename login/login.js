function clickfunc() {
    var x = document.getElementById('searchnav');
    

    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "flex";
     
    } else {
        x.style.display = "none";
       
    
    }
}

window.addEventListener("resize", () => {
    var x = document.getElementById("searchnav");
    if (window.innerWidth > 600) {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
});

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function handleInputChange() {
    var emailInput = document.getElementById("emailreg");
    var errorElement = document.getElementById("errorregmail");


    if (validateEmail(emailInput.value)) {

        errorElement.style.display = "none";
    } else {
   
        errorElement.style.display = "block";
    }
}


document.getElementById("emailreg").addEventListener("input", handleInputChange);


function validatePassword(password) {

    return password.length >= 8;
}


function handlePasswordChange() {
    var passwordInput = document.getElementById("passwordreg");
    var errorElement = document.getElementById("errorregpass");

   
    if (validatePassword(passwordInput.value)) {
  
        errorElement.style.display = "none";
    } else {
  
        errorElement.style.display = "block";
    }
}

document.getElementById("passwordreg").addEventListener("input", handlePasswordChange);

function validatePhoneNumber(phoneNumber) {

    var regex = /^[0-9]+$/;
    return regex.test(phoneNumber);
}


function handlePhoneChange() {
    var phoneInput = document.getElementById("phonereg");
    var errorElement = document.getElementById("errorphone");

 
    if (validatePhoneNumber(phoneInput.value)) {
 
        errorElement.style.display = "none";
    } else {
        
        errorElement.style.display = "block";
    }
}

document.getElementById("phonereg").addEventListener("input", handlePhoneChange);

document.addEventListener('DOMContentLoaded', function() {
    const dobInput = document.getElementById('dobInput');
    
    dobInput.addEventListener('click', function() {
        dobInput.type = 'date';
    });
}); 