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


     const sectioncard = [
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
                
            },{
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
                
            }, {
                Image: '../foto/ladies/cewek.png',
                HoverImage: '../foto/ladies/cewek-hover.png',
                heading: 'shirt',
                price: 'Rp. 350.000',
                description: 'this is shirt desc',
                color: 'aqua',
                material: 'cotton',
                itemNumber:'21789210',
                article:'jid-28190218kp',
                img1:'../foto/ladies/cewek.png',
                img2:'../foto/ladies/cewek-hover.png',
                img3:'../foto/ladies/cewek-hover.png',
                category: 'ladies'


            },{
                Image: '../foto/ladies/skirt1.jpg',
                HoverImage: '../foto/ladies/skirt2.jpg',
                heading: 'skirt',
                price: 'Rp. 850.000',
                description: 'this is skirt desc',
                color: 'Dark blue',
                material: 'cotton',
                itemNumber:'26718901',
                article:'kpe-37829108jd',
                img1:'../foto/ladies/skirt.jpg',
                img2:'../foto/ladies/skirt1.jpg',
                img3:'../foto/ladies/skirt2.jpg',
                category: 'ladies'
            },{
                Image: '../foto/ladies/skirt1.jpg',
                HoverImage: '../foto/ladies/skirt2.jpg',
                heading: 'skirt2',
                price: 'Rp. 550.000',
                description: 'this is skirt desc',
                color: 'Dark blue',
                material: 'cotton',
                itemNumber:'26718901',
                article:'kpe-37829108jd',
                img1:'../foto/ladies/skirt.jpg',
                img2:'../foto/ladies/skirt1.jpg',
                img3:'../foto/ladies/skirt2.jpg',
                category: 'ladies'
            },{
                Image: '../foto/ladies/skirt1.jpg',
                HoverImage: '../foto/ladies/skirt2.jpg',
                heading: 'skirt3',
                price: 'Rp. 450.000',
                description: 'this is skirt desc',
                color: 'Dark blue',
                material: 'cotton',
                itemNumber:'26718901',
                article:'kpe-37829108jd',
                img1:'../foto/ladies/skirt.jpg',
                img2:'../foto/ladies/skirt1.jpg',
                img3:'../foto/ladies/skirt2.jpg',
                category: 'ladies'
            },{
                Image: '../foto/ladies/skirt1.jpg',
                HoverImage: '../foto/ladies/skirt2.jpg',
                heading: 'skirt4',
                price: 'Rp. 250.000',
                description: 'this is skirt desc',
                color: 'Dark blue',
                material: 'cotton',
                itemNumber:'26718901',
                article:'kpe-37829108jd',
                img1:'../foto/ladies/skirt.jpg',
                img2:'../foto/ladies/skirt1.jpg',
                img3:'../foto/ladies/skirt2.jpg',
                category: 'ladies'
            },{
                Image: '../foto/ladies/skirt1.jpg',
                HoverImage: '../foto/ladies/skirt2.jpg',
                heading: 'skirt5',
                price: 'Rp. 150.000',
                description: 'this is skirt desc',
                color: 'Dark blue',
                material: 'cotton',
                itemNumber:'26718901',
                article:'kpe-37829108jd',
                img1:'../foto/ladies/skirt.jpg',
                img2:'../foto/ladies/skirt1.jpg',
                img3:'../foto/ladies/skirt2.jpg',
                category: 'ladies'
            },{
                Image: '../foto/ladies/skirt1.jpg',
                HoverImage: '../foto/ladies/skirt2.jpg',
                heading: 'skirt6',
                price: 'Rp. 650.000',
                description: 'this is skirt desc',
                color: 'Dark blue',
                material: 'cotton',
                itemNumber:'26718901',
                article:'kpe-37829108jd',
                img1:'../foto/ladies/skirt.jpg',
                img2:'../foto/ladies/skirt1.jpg',
                img3:'../foto/ladies/skirt2.jpg',
                category: 'ladies'
            },{
                Image: '../foto/hotproduct/cargo.jpg',
                HoverImage: '../foto/hotproduct/cargo1.jpg',
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
                category: 'man'
                
            } ,{
                Image: '../foto/hotproduct/bomber.jpg',
                HoverImage: '../foto/hotproduct/bomber1.jpg',
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
                category: 'man'
                
            }, {
                Image: '../foto/baby/bayi.png',
                HoverImage: '../foto/baby/bayi_hover.png',
                heading: 'shirt',
                price: 'Rp. 350.000',
                description: 'this is shirt desc',
                color: 'white milk',
                material: 'cotton',
                itemNumber:'21789210',
                article:'jid-28190218kp',
                img1:'../foto/baby/bayi.png',
                img2:'../foto/baby/bayi_hover.png',
                img3:'../foto/baby/bayi.png',
                category: 'baby'
            },{
                Image: '../foto/kids/kids.png',
                HoverImage: '../foto/kids/kids-hover.png',
                heading: 'shirt',
                price: 'Rp. 350.000',
                description: 'this is shirt desc',
                color: 'white milk',
                material: 'cotton',
                itemNumber:'21789210',
                article:'jid-28190218kp',
                img1:'../foto/kids/kids.png',
                img2:'../foto/kids/kids_hover.png',
                img3:'../foto/kids/kids.png',
                category: 'kids'
            }, {
                Image: '../foto/baby/bayi.png',
                HoverImage: '../foto/baby/bayi_hover.png',
                heading: 'shirt',
                price: 'Rp. 350.000',
                description: 'this is shirt desc',
                color: 'white milk',
                material: 'cotton',
                itemNumber:'21789210',
                article:'jid-28190218kp',
                img1:'../foto/baby/bayi.png',
                img2:'../foto/baby/bayi_hover.png',
                img3:'../foto/baby/bayi.png',
                category: 'sale'
            },{
                Image: '../foto/kids/kids.png',
                HoverImage: '../foto/kids/kids_hover.png',
                heading: 'shirt',
                price: 'Rp. 350.000',
                description: 'this is shirt desc',
                color: 'white milk',
                material: 'cotton',
                itemNumber:'21789210',
                article:'jid-28190218kp',
                img1:'../foto/kids/kids.png',
                img2:'../foto/kids/kids_hover.png',
                img3:'../foto/kids/kids.png',
                category: 'sale'
            },{
                Image: '../foto/ladies/skirt1.jpg',
                HoverImage: '../foto/ladies/skirt2.jpg',
                heading: 'skirt6',
                price: 'Rp. 650.000',
                description: 'this is skirt desc',
                color: 'Dark blue',
                material: 'cotton',
                itemNumber:'26718901',
                article:'kpe-37829108jd',
                img1:'../foto/ladies/skirt.jpg',
                img2:'../foto/ladies/skirt1.jpg',
                img3:'../foto/ladies/skirt2.jpg',
                category: 'sale'
            },{
                Image: '../foto/hotproduct/cargo.jpg',
                HoverImage: '../foto/hotproduct/cargo1.jpg',
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
                category: 'sale'
                
            } 
        ];

        document.addEventListener('DOMContentLoaded', function() {

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const productHeading = urlParams.get('product');

    const selectedProduct = sectioncard.find(product => product.category === category && product.heading === productHeading);

    if (selectedProduct) {

const productDetailContainer = document.getElementById('productDetail');
productDetailContainer.innerHTML = `
    <div class="containerright">
        <h1>${selectedProduct.heading}</h1>
        <h2>${selectedProduct.price}</h2>
        <div class="containersize">
            <div class="sizeguide">
                <h3>Size</h3>
                <a href="#">Size Guide</a>
            </div>
            <div class="sizedetail">
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
            </div>
        </div>
    </div>
    <div class="containerdetailmaterial">
        <div class="detailmaterial">
            <h4>Description:</h4>
            <p>${selectedProduct.description}</p>
        </div>
        <div class="detailmaterial">
            <h4>Color:</h4>
            <p>${selectedProduct.color}</p>
        </div>
        <div class="detailmaterial">
            <h4>Material:</h4>
            <p>${selectedProduct.material}</p>
        </div>
        <div class="detailmaterial">
            <h4>Article Number:</h4>
            <p>${selectedProduct.article}</p>
        </div>
    </div>
`;

const addToCartButton = document.createElement('button');
addToCartButton.className = 'cartbutton';
addToCartButton.textContent = 'Add to Cart';
addToCartButton.onclick = function() {
    addToCart(selectedProduct);
};

const sizeDetailContainer = productDetailContainer.querySelector('.sizedetail');
sizeDetailContainer.insertAdjacentElement('afterend', addToCartButton);


        const slider = document.querySelector(".sliderdetail");
        slider.innerHTML = ''; 
        [selectedProduct.img1, selectedProduct.img2, selectedProduct.img3].forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = selectedProduct.heading;
            slider.appendChild(img);
        });

        let currentSlide = 0;
        const slides = slider.querySelectorAll("img");
        const prevButton = document.querySelector('.prev-btn');
        const nextButton = document.querySelector('.next-btn');

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlide();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlide();
        }

        function updateSlide() {
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);
    } else {
        console.log('Product not found.');
    }
});
document.addEventListener('DOMContentLoaded', function() {

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const productHeading = urlParams.get('product');

    const selectedProduct = sectioncard.find(product => product.category === category && product.heading === productHeading);

    if (selectedProduct) {
        const photouploadContainer = document.querySelector('.photoupload');
        photouploadContainer.style.backgroundImage = `url('${selectedProduct.img1}')`;
      

    }
});




function addToCart(product) {
      
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        cartItems.push(product);

        localStorage.setItem('cart', JSON.stringify(cartItems));
    }


    
document.addEventListener('DOMContentLoaded', function() {
 
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const productHeading = urlParams.get('product');

    const selectedProduct = sectioncard.find(product => product.category === category && product.heading === productHeading);

    if (selectedProduct) {
        const sizeButtons = document.querySelectorAll('.sizedetail button');

        sizeButtons.forEach(button => {
            button.addEventListener('click', function() {
                sizeButtons.forEach(btn => {
                    btn.style.backgroundColor = '';
                });

               
                button.style.backgroundColor = 'gray';
            });
        });
    }
});
