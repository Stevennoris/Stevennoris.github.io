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
    var b=document.getElementById('navcontainer');
    console.log("Hello world!");
    if(window.getComputedStyle(a).display=="none"){
        a.style.display="inline ";
        b.style.position="fixed";
        b.style.height="50vh ";
    }else{
        a.style.display="none";
        b.style.position="relative";
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
    const slideInterval = 2000; 
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

    slides.forEach((_, index) => {
        const button = document.createElement('button');
        button.addEventListener('click', () => {
            currentSlide = index;
            updateSlide();
        });
        paginationContainer.appendChild(button);
    });

    updatePagination();
});

const productcard = [
{
                Image: '../foto/hotproduct/jeans.jpg',
                HoverImage: '',
                heading: 'Jeans',
                price: 'Rp. 750.000',
                description: 'Discover the perfect balance of style and comfort with our premium denim jeans. Crafted from high-quality materials, our jeans offer timeless appeal and durability for everyday wear',
                color: 'Sky Blue',
                material: 'sturdy cotton twill textilel',
                itemNumber:'37829018',
                article:'dsk-218jk',
                img1:'../foto/hotproduct/jeans.jpg',
                img2:'../foto/hotproduct/jeans1.jpg',
                img3:'../foto/hotproduct/jeans2.jpg',
                category: 'hotproduct'
            },{
                Image: '../foto/hotproduct/cargo.jpg',
                HoverImage: '',
                heading: 'Cargo Pants',
                price: 'Rp. 550.000',
                description: 'Cargo pants combine practicality with style, featuring multiple pockets for storing essentials without sacrificing comfort. Their rugged yet versatile design makes them perfect for outdoor adventures or casual urban outings. With a relaxed fit and durable fabric, cargo pants effortlessly blend functionality with fashion for the modern explorer. ',
                color: 'Black',
                material: 'Ripstop nylon',
                itemNumber:'271892189',
                article:'koe-27191289ko',
                img1:'../foto/hotproduct/cargo.jpg',
                img2:'../foto/hotproduct/cargo1.jpg',
                img3:'../foto/hotproduct/cargo2.jpg',
                category: 'hotproduct'
                
            } ,{
                Image: '../foto/hotproduct/bomber.jpg',
                HoverImage: '',
                heading: 'Zipper Bomber',
                price: 'Rp. 650.000',
                description: 'bomber jacket is the epitome of timeless style and versatility. Crafted with a sleek silhouette and ribbed cuffs, this bomber exudes urban sophistication while offering practicality with its functional pockets and zippered front ',
                color: 'Green',
                material: 'Nylon',
                itemNumber:'2183910912',
                article:'idj-28139jd',
                img1:'../foto/hotproduct/bomber.jpg',
                img2:'../foto/hotproduct/bomber1.jpg',
                img3:'../foto/hotproduct/bomber2.jpg',
                category: 'hotproduct'
                
            },{
                Image: '../foto/hotproduct/chino.jpg',
                HoverImage: '',
                heading: 'Chino pants',
                price: 'Rp. 650.000',
                description: ' Chino pants offer a timeless blend of style and comfort, with a versatile design suitable for any occasion. Crafted from durable chino cloth, they feature a classic straight-leg silhouette and a smooth, refined texture. Whether paired with a crisp button-down for a polished look or dressed down with a casual tee, chino pants effortlessly elevate your wardrobe with their understated elegance.',
                color: 'wheat',
                material: 'cotton-polyester blends',
                itemNumber:'378902838290',
                article:'hus-739087290op',
                img1:'../foto/hotproduct/chino.jpg',
                img2:'../foto/hotproduct/chino1.jpg',
                img3:'../foto/hotproduct/chino2.jpg',
                category: 'hotproduct'
                
            },{
                Image: '../foto/hotproduct/totebag.jpg',
                HoverImage: '',
                heading: 'Tote bag',
                price: 'Rp. 250.000',
                description: 'Tote bags are practical and stylish accessories, perfect for everyday use. Made from durable materials, they offer a simple yet functional design, ideal for various activities. With spacious compartments, tote bags are a convenient choice for carrying your essentials.',
                color: 'wheat',
                material: 'canvas',
                itemNumber:'378190182390',
                article:'uhda-2719038712ok',
                img1:'../foto/hotproduct/totebag.jpg',
                img2:'../foto/hotproduct/totebag1.jpg',
                img3:'../foto/hotproduct/totebag2.jpg',
                category: 'hotproduct'
                
            },{
                Image: '../foto/hotproduct/shoes.jpg',
                HoverImage: '',
                heading: 'Shoes',
                price: 'Rp. 450.000',
                description: 'Our shoes blend comfort and style seamlessly, providing all-day support without compromising on fashion. Crafted with premium materials and meticulous attention to detail, they are the perfect choice for both casual outings and formal occasions.',
                color: 'white milk',
                material: 'canvas',
                itemNumber:'98372890',
                article:'ieo-37890390es',
                img1:'../foto/hotproduct/shoes.jpg',
                img2:'../foto/hotproduct/shoes1.jpg',
                img3:'../foto/hotproduct/shoes2.jpg',
                category: 'hotproduct'
                
            }
];

const postproductcontainer = document.querySelector('.hotproductlist');

const postmethodsproduct = () => {
    productcard.map((postdataproduct, index) => {
        const postelementproduct = document.createElement('div');
        postelementproduct.classList.add('hotproductarray');
        postelementproduct.innerHTML = `
        <a href="/detail/Detail.html?category=${postdataproduct.category}&product=${postdataproduct.heading}">
            <div class="hotproductarray" style="background-image: url('${postdataproduct.Image}');">
                <h1>${postdataproduct.heading}</h1>
                <h2>${postdataproduct.price}</h2>
            </div>
        </a>`;
        postproductcontainer.appendChild(postelementproduct);
    });
};
postmethodsproduct();


