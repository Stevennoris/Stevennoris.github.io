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


document.querySelector(".logininput button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Ambil nilai input email dan password
    var email = document.getElementById("emailreg").value;
    var password = document.getElementById("passwordnye").value;

    // Periksa apakah email dan password sesuai
    if (email === "joko@gmail.com" && password === "yasudahlah") {
        // Jika sesuai, tampilkan notifikasi login berhasil
        showNotification("Login successful!", "success");

        // Arahkan pengguna ke halaman index.html setelah 2 detik
        setTimeout(function() {
            window.location.href = "/index.html";
        }, 2000);
    } else {
        // Jika tidak sesuai, tampilkan notifikasi login gagal
        showNotification("Incorrect email or password", "error");
    }
});

function showNotification(message, type) {
    // Buat elemen div untuk notifikasi
    var notification = document.createElement("div");
    notification.classList.add("notification");
    notification.classList.add(type); // Tambahkan kelas sesuai tipe notifikasi

    // Tambahkan pesan notifikasi ke dalam div
    notification.innerText = message;

    // Sisipkan notifikasi ke dalam dokumen
    document.body.appendChild(notification);

    // Hilangkan notifikasi setelah beberapa detik
    setTimeout(function() {
        notification.remove();
    }, 3000); // Notifikasi akan hilang setelah 3 detik
}







