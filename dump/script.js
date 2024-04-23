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
    console.log("Hello world!");
    if(window.getComputedStyle(a).display=="none"){
        a.style.display="inline ";
        
        b.style.height="50vh ";
    }else{
        a.style.display="none";
        b.style.height="10vh";
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
        b.style.height="10vh";
    }

});


document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let slides = document.querySelectorAll(".slider img");
    let currentSlide = 0;
    const slideInterval = 2000; // Ganti dengan interval yang diinginkan (dalam milidetik)
    const paginationContainer = document.querySelector('.slider-pagination');

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    }

    function updateSlide() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        updatePagination();
    }

    function updatePagination() {
        const buttons = paginationContainer.querySelectorAll('button');
        buttons.forEach((button, index) => {
            if (index === currentSlide) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    setInterval(nextSlide, slideInterval);

    // Generate pagination buttons
    slides.forEach((_, index) => {
        const button = document.createElement('button');
        button.addEventListener('click', () => {
            currentSlide = index;
            updateSlide();
        });
        paginationContainer.appendChild(button);
    });

    // Set initial active state
    updatePagination();
});



const productcard  =[
    {
        Image:'../foto/jaket_bli.jpg',
        heading:'Jacket Bli',
        price:'Rp. 250.000'
    },
    {
        Image:'../foto/almet_binus.png',
        heading:'Almet Binus',
        price:'Rp. 300.000'
    },
    {
        Image:'../foto/almet_ui.png',
        heading:'Almet UI',
        price:'Rp. 450.000'
    },
    {
        Image:'../foto/almet_ugm.png',
        heading:'Almet UGM',
        price:'Rp. 550.000'
    },
    {
        Image:'../foto/almet_unpad.png',
        heading:'Almet UNPAD',
        price:'Rp. 650.000'
    },
    {
        Image:'../foto/almet_unair.png',
        heading:'Almet UNAIR',
        price:'Rp. 150.000'
    }
]

const postproductcontainer = document.querySelector('.hotproductlist');

const postmethodsproduct = () => {
    productcard.map((postdataproduct) => {
        const postelementproduct = document.createElement('div');
        postelementproduct.classList.add('hotproductarray');
        postelementproduct.innerHTML = `
        <div class="hotproductarray" style="background-image: url('${postdataproduct.Image}');">
            <h1>${postdataproduct.heading}</h1>
            <h2>${postdataproduct.price}</h2>
        </div>`;
        postproductcontainer.appendChild(postelementproduct);
    });
}
postmethodsproduct();




















