// declare function for get html elements

const $ = document
function _class(query) {
    return $.querySelector(query)
}
function _classAll(queryAll) {
    return $.querySelectorAll(queryAll)
}

// declare variables

const menuIcon = _class('.menu-lines')
const menuBar = _class('.mobile-bar')
let formInput = _class('.home-form__input')
let formButton = _class('.home-form__button')
let pricingItemLink = _classAll('.package__link')
const questionArrows = _classAll('.faq__icon')
const questionCaptions = _classAll('.faq__caption')
let mobileMenuLink = _class('.mobile-menu__link')
console.log(mobileMenuLink);

// set event and function

menuIcon.addEventListener('click', function () {
    menuBar.classList.toggle('hidMenuBar')
})
formButton.addEventListener('click', function (event) {
    let formInputValue = formInput.value.trim()
    if (formInputValue) {
        formButton.innerHTML = "Send Email"
    } else {
        formButton.innerHTML = "empty"
    }
    setTimeout(function () {
        formButton.innerHTML = "Get Started"
    }, 5000)
})
pricingItemLink.forEach(function (item) {
    item.addEventListener('click', function () {
        item.innerHTML = "please Wait..."
        setTimeout(function () {
            item.innerHTML = "Get Started"
        }, 3000)
    })
})
questionArrows.forEach(function (arrow) {
    arrow.addEventListener('click', function (event) {
        arrow.classList.toggle('rotate');
    });
});
mobileMenuLink.addEventListener('touchstart', function () {
    mobileMenuLink.innerHTML = "touched it"
})