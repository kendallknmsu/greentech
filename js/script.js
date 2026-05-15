/* PRODUCT SEARCH FILTER */

const searchInput = document.getElementById("searchInput");

if (searchInput) {

searchInput.addEventListener("keyup", function () {

const filter = searchInput.value.toLowerCase();

const products = document.querySelectorAll(".product-card");

products.forEach(product => {

const text = product.innerText.toLowerCase();

if (text.includes(filter)) {
product.style.display = "block";
} else {
product.style.display = "none";
}

});

});

}

/* CONTACT FORM VALIDATION */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

contactForm.addEventListener("submit", function (event) {

event.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

const formMessage = document.getElementById("formMessage");

if (name === "" || email === "" || message === "") {

formMessage.textContent = "Please fill out all fields.";

formMessage.style.color = "red";

} else {

formMessage.textContent =
"Thank you! Your message has been submitted.";

formMessage.style.color = "green";

contactForm.reset();

}

});

}