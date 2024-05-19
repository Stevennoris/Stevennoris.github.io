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


       
document.addEventListener('DOMContentLoaded', function() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let showAllProducts = false; 

    function itemExists(item) {
        return cartItems.some(cartItem => cartItem.itemNumber === item.itemNumber);
    }

    function addToCart(item) {
  
        if (item.itemNumber === 1) {
            const existingItemIndex = cartItems.findIndex(cartItem => cartItem.itemNumber === item.itemNumber);
            if (existingItemIndex !== -1) {
                cartItems[existingItemIndex].quantity++;
            } else {
                item.quantity = 1;
                cartItems.push(item);
            }
            localStorage.setItem('cart', JSON.stringify(cartItems));
            updateCartDisplay();
        }
    }

    function updateCartDisplay() {
        const cartContainer = document.getElementById('cartContainer');
        cartContainer.innerHTML = '';

        const productsToDisplay = showAllProducts ? cartItems : cartItems.slice(0, 1);

        productsToDisplay.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('productarray');
            itemDiv.innerHTML = `
                <div class="productdiv">
                    <div class="pictcartcontainer">
                        <img src="${item.Image}" alt="${item.heading}">
                    </div>
                    <div class="productmaincontainer">
                        <div class="producttitle">
                            <h1>${item.heading}</h1>
                            <h2>${item.price}</h2>
                        </div>
                        <div class="productmain">
                            <div class="leftproduct">
                                <div class="item">
                                    <h4>Item no :</h4>
                                    <p>${item.itemNumber}</p>
                                </div>
                                <div class="size">
                                    <h4>Size :</h4>
                                    <p>${item.size}</p>
                                </div>
                            </div>
                            <div class="color">
                                <h4>Color :</h4>
                                <p>${item.color}</p>
                            </div>
                        </div>
                        <div class="productquantity">
                            <h4>Quantity :</h4>
                            <input type="number" value="${item.quantity || 1}"> <!-- Set default value to 1 -->
                            <button class="resetQuantity">Delete</button> <!-- Add reset button -->
                        </div>
                    </div>
                </div>
            `;
            cartContainer.appendChild(itemDiv);
        });

        const resetButtons = document.querySelectorAll('.resetQuantity');
        resetButtons.forEach(button => {
            button.addEventListener('click', function() {
                const inputQuantity = button.previousElementSibling;
                if (inputQuantity.value === '0') {
                    const itemIndex = Array.from(cartContainer.children).indexOf(button.closest('.productarray'));
                    cartItems.splice(itemIndex, 1);
                    localStorage.setItem('cart', JSON.stringify(cartItems));
                    button.closest('.productarray').remove();
                }
            });
        });

        const showAllButton = document.getElementById('showAllButton');
        showAllButton.textContent = showAllProducts ? 'Show One Product' : 'Show All Products';
    }

    const showAllButton = document.getElementById('showAllButton');

    showAllButton.addEventListener('click', function() {
        showAllProducts = !showAllProducts;
        updateCartDisplay(); 
    });

    updateCartDisplay();
});
