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

const sectioncard = [
    {
            Image: '../foto/ladies/cewek.png',
            HoverImage: '../foto/ladies/cewek-hover.png',
            heading: 'shirt',
            price: 'Rp. 350.000',
            description: 'this is shirt desc',
            color: 'Aqua',
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
            category: 'kids'
        },{
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
    function renderProducts(products) {
const productsContainer = document.getElementById('products');
productsContainer.innerHTML = '';

products.forEach(product => {
   
    const productLink = document.createElement('a');
    productLink.href = '/detail/Detail.html?category=' + product.category + '&product=' + product.heading; // Sesuaikan URL sesuai kebutuhan Anda


    const productDiv = document.createElement('div');
    productDiv.classList.add('cardsection');

 
    const image = document.createElement('img');
    image.src = product.Image;
    image.alt = product.heading;
    image.setAttribute('data-hover', product.HoverImage);


    const heading = document.createElement('h1');
    heading.textContent = product.heading;


    const price = document.createElement('h2');
    price.textContent = product.price;


    productDiv.appendChild(image);
    productDiv.appendChild(heading);
    productDiv.appendChild(price);
    productLink.appendChild(productDiv); 
    

    productsContainer.appendChild(productLink);
});
}

    function filterProducts(category) {
        const filteredProducts = sectioncard.filter(product => product.category === category);
        renderProducts(filteredProducts);
    }

 
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if (category) {
        renderSectionDetails(category);
        filterProducts(category); 
    }

    function renderSectionDetails(category) {
const sectionTitle = document.getElementById('sectionTitle');
const sectionSubtitle = document.getElementById('sectionSubtitle');
const sectionHeader = document.getElementById('sectionHeader');
const sectionPrice = document.getElementById('sectionPrice');
const sectionimg = document.getElementById('pictsectioncontaienr');


const categoryLinks = document.querySelectorAll('#category a');
categoryLinks.forEach(link => {
    link.style.textDecoration = 'none';
});

switch (category) {
    case 'man':
        sectionTitle.textContent = 'Men Section';
        sectionSubtitle.textContent = 'Stylish Picks for Him';
        sectionHeader.textContent = 'Elevate Your Look';
        sectionPrice.textContent = 'Start from Rp. 250.000';
        document.getElementById('man').style.textDecoration = 'underline';
        document.getElementById('man').style.color='black';
        sectionimg.style.backgroundImage = "url('../foto/man/poster.png')";
        break;
    case 'ladies':
        sectionTitle.textContent = 'Ladies Section';
        sectionSubtitle.textContent = 'Trendy Choices for Her';
        sectionHeader.textContent = 'Discover Your Style';
        sectionPrice.textContent = 'Start from Rp. 150.000';
        sectionimg.style.backgroundImage= '';
        
        document.getElementById('ladies').style.color='black';
        document.getElementById('ladies').style.textDecoration = 'underline';
        break;
    case 'kids':
        sectionTitle.textContent = 'Kids Section';
        sectionSubtitle.textContent = 'Adorable Collections for Little Ones';
        sectionHeader.textContent = 'Cute Styles for Kids';
        sectionPrice.textContent = 'Start from Rp. 100.000';
        sectionimg.style.backgroundImage= '';
        
        document.getElementById('kids').style.color='black';
        document.getElementById('kids').style.textDecoration = 'underline';
        sectionimg.style.backgroundImage = "url('../foto/kids/kids_banner.png')";
        break;
    case 'baby':
        sectionTitle.textContent = 'Baby Section';
        sectionSubtitle.textContent = 'Sweet Essentials for Newborns';
        sectionHeader.textContent = 'Care for Your Baby';
        sectionPrice.textContent = 'Start from Rp. 75.000';
        sectionimg.style.backgroundImage= '';
        
        document.getElementById('baby').style.color='black';
        document.getElementById('baby').style.textDecoration = 'underline';
        sectionimg.style.backgroundImage = "url('../foto/baby/baby_banner.png')";
        break;
    case 'sale':
        sectionTitle.textContent = 'Sale Section';
        sectionSubtitle.textContent = 'Unbeatable Deals for Everyone';
        sectionHeader.textContent = 'Don\'t Miss Out';
        sectionPrice.textContent = 'Start from Rp. 50.000';
        sectionimg.style.backgroundImage= '';
        
        document.getElementById('sale').style.color='black';
        document.getElementById('sale').style.textDecoration = 'underline';
        sectionimg.style.backgroundImage = "url('../foto/sale/sale_banner.png')";
        break;
    default:
        sectionTitle.textContent = 'Featured Section';
        sectionSubtitle.textContent = 'Check Out Our Featured Products';
        sectionHeader.textContent = 'Explore the Latest Trends';
        sectionPrice.textContent = 'Start from Rp. 100.000';
        sectionimg.style.backgroundImage= '';
}
}


const cardSections = document.querySelectorAll('.cardsection');
cardSections.forEach((card) => {
const img = card.querySelector('img');
const originalImage = img.getAttribute('src');
const hoverImage = img.getAttribute('data-hover'); 
img.addEventListener('mouseenter', () => {
    img.setAttribute('src', hoverImage); 
});
img.addEventListener('mouseleave', () => {
    img.setAttribute('src', originalImage); 
});
});




document.querySelector('#drop').addEventListener("click", () => {
    window.scrollTo({
        top: 778,
        left: 0,
        behavior: 'smooth' 
    });
});
