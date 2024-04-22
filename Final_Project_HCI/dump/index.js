

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

function ddfunc(){
    var a= document.getElementById('categorycontainer');
    var b=document.getElementById('navcontainer')
    if(window.getComputedStyle(x).display=="none"){
        a.style.display="inline";
        b.style.height="50vh";
    }else{
        a.style.display="none";
        b.style.height="15vh";
    }
}

window.addEventListener("resize", () => {
    var a = document.getElementById("categorycontainer");
    var b=document.getElementById('navcontainer')
    if (window.innerWidth > 600) {
        a.style.display = "inline";
        b.style.height="15vh";
    } else {
        a.style.display = "none";
        b.style.height="15vh";
    }

});

document.getElementById('email').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        validateEmail(event);
    }
});

function validateEmail(event) {
    var emailInput = document.getElementById('email').value;
    var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailFormat.test(emailInput)) {
        document.getElementById('errormail').style.display = 'inline';
        event.preventDefault(); // Mencegah formulir dikirimkan jika email tidak valid
    } else {
        document.getElementById('errormail').style.display = 'none';
    }
}






