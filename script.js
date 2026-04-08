
// SEARCH FUNCTION

const searchInput = document.querySelector(".nav-right input");
const products = document.querySelectorAll(".item, .newarrival");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        let value = searchInput.value.toLowerCase().trim();

        products.forEach(product => {
            let text = product.innerText.toLowerCase();

            // ✅ IF SEARCH IS EMPTY → SHOW ALL
            if (value === "") {
                product.style.display = "inline-block";
            }
            // ✅ NORMAL SEARCH
            else if (text.includes(value)) {
                product.style.display = "inline-block";
            } 
            else {
                product.style.display = "none";
            }
        });
    });
}

// CART SYSTEM (FIXED)

const cartIcon = document.querySelector(".cart");
const buttons = document.querySelectorAll(".add-to-cart");

// get saved value
let cartCount = parseInt(localStorage.getItem("cart")) || 0;

// show cart count
if (cartIcon) {
    cartIcon.innerText = "🛒 " + cartCount;
}

// add to cart
buttons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        localStorage.setItem("cart", cartCount);

        if (cartIcon) {
            cartIcon.innerText = "🛒 " + cartCount;
        }

        alert("Item added to cart!");
    });
});



// DARK MODE

const darkBtn = document.getElementById("darkMode");

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}


// SCROLL TO TOP

const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


// SCROLL ANIMATION

const items = document.querySelectorAll(".item, .newarrival");

window.addEventListener("scroll", () => {
    items.forEach(item => {
        let position = item.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 50) {
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
        }
    });
});