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


document.querySelector('.registerinput').addEventListener('submit', function(event) {
    var email = document.getElementById('emailreg').value;
    var password = document.getElementById('passwordreg').value;
    var phone = document.getElementById('phonereg').value;
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;

    var validEmail = /\S+@\S+\.\S+/;
    var validPhone = /^\d+$/;

    var isValid = true;

    // Validasi Email
    if (!validEmail.test(email)) {
        document.getElementById('errorregmail').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('errorregmail').style.display = 'none';
    }

    // Validasi Password
    if (password.length < 8) {
        document.getElementById('errorregpass').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('errorregpass').style.display = 'none';
    }

    // Validasi Phone
    if (!validPhone.test(phone)) {
        document.getElementById('errorphone').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('errorphone').style.display = 'none';
    }

    // Validasi First Name
    if (firstName.trim() === '') {
        document.getElementById('errorfirstname').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('errorfirstname').style.display = 'none';
    }

    // Validasi Last Name
    if (lastName.trim() === '') {
        document.getElementById('errorlastname').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('errorlastname').style.display = 'none';
    }

    // Menghentikan pengiriman formulir jika tidak valid
    if (!isValid) {
        event.preventDefault();
    }
});


    


// Mendapatkan semua elemen radio button
var radioButtons = document.querySelectorAll('input[type=radio][name="gender"]');

// Menambahkan event listener pada setiap radio button
radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
        // Jika radio button yang dipilih adalah 'female', nonaktifkan radio button 'male', dan sebaliknya
        if (this.value === 'male') {
            document.querySelector('input[type=radio][name="gender"][value="female"]').checked = false;
        } else if (this.value === 'female') {
            document.querySelector('input[type=radio][name="gender"][value="male"]').checked = false;
        }
    });
});
