
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
var total_no_cart_items = 0;
function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    console.log(localStorage.getItem("fav"))

    var order = JSON.parse(
        localStorage.getItem("fav"))

    addItemToCart(order.title, order.price, order.src)
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
    total_no_cart_items = cartItemNames.length
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('LKR', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total_no_cart_items = cartRows.length
    document.getElementsByClassName('cart-total-price')[0].innerText = 'LKR ' + total
}







document.getElementsByClassName("btn-loyalty")[0].addEventListener("click", loyaltyClicked)


function loyaltyClicked(e) {



    if (total_no_cart_items >= 3) {

        var total_loyalty_points = total_no_cart_items * 20
        localStorage.setItem("item", total_loyalty_points);

        console.log(localStorage.getItem("item"))
        alert("You have" + total_loyalty_points + "loyalty points")
    }



    e.preventDefault()
}


document.getElementById("jersey_af").addEventListener("click", btnclicked)
document.getElementById("bottom_af").addEventListener("click", btn1clicked)
document.getElementById("mug_af").addEventListener("click", btn2clicked)
document.getElementById("mask_af").addEventListener("click", btn3clicked)
document.getElementById("books_af").addEventListener("click", btn4clicked)
document.getElementById("wallet_af").addEventListener("click", btn5clicked)
document.getElementById("water_af").addEventListener("click", btn6clicked)
document.getElementById("watch_af").addEventListener("click", btn7clicked)

function btnclicked() {
    localStorage.setItem("fav", JSON.stringify(
        { title: "SriLanka Cricket Jersey", price: 2000, src: "./Images/SL jersey.jpg" }
    ))
}

function btn1clicked() {
    localStorage.setItem("fav", JSON.stringify(
        { title: "SriLanka Cricket Bottom", price: 2500, src: "./Images/SL bottom.jpg" }
    ))
}

function btn2clicked() {
    localStorage.setItem("fav", JSON.stringify(
        { title: "Mug", price: 1500, src: "./Images/mugs.jpg" }
    ))
}

function btn3clicked() {
    localStorage.setItem("fav", JSON.stringify(
        { title: "Mask", price: 600, src: "./Images/mask.jpg" }
    ))
}

function btn4clicked() {
    localStorage.setItem("fav", JSON.stringify(
        { title: "Books", price: 1000, src: "./Images/books.jpg" }
    ))
}
function btn5clicked() {
    localStorage.setItem("fav", JSON.stringify(
        { title: "Wallet", price: 2000, src: "./Images/wallet.jpg" }
    ))


}

function btn6clicked() {
    localStorage.setItem("fav", JSON.stringify(
        { title: "Water", price: 1000, src: "./Images/water.jpg" }
    ))

}

function btn7clicked() {
    localStorage.setItem("fav", JSON.stringify(
        { title: "Watch", price: 5000, src: "./Images/watch.jpg" }
    ))

}

