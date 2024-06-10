function select(val) {
    return document.querySelector(val)
}

let menubtn = select(".menu")
let closebtn = select(".close")
let menu = select("#navbar")

menubtn.addEventListener("click", function () {
    menu.style.right = "0px"
});
closebtn.addEventListener("click", function () {
    menu.style.right = "-400px"
});


function changeValue(delta) {
    const input = document.getElementById('quantity');
    let value = parseInt(input.value) || 0;
    value += delta;
    if (value >= input.min && value <= input.max) {
        input.value = value;
    }
}

; (() => {
    let mainImg = document.querySelector("#mainImage");
    let smallImgs = document.querySelectorAll("#smallImage");

    smallImgs.forEach((smallImg) => {
        smallImg.addEventListener("click", (event) => {
            let mainImgSrc = mainImg.src;
            mainImg.src = event.target.src;
            event.target.src = mainImgSrc;
        });
    });
})()
    ;
(() => {
    let mainImg = document.querySelector("#mainImage");
    let products = document.querySelectorAll(".pro");
    let smallImgs = document.querySelectorAll("#smallImage");

    products.forEach((pro) => {
        pro.addEventListener("click", (elem) => {
            let imgSrc = elem.target.src
            window.location.href = `singleProduct.html?value=${encodeURIComponent(imgSrc)}`;
        })
    })

    function getQueryParam(param) {
        let params = new URLSearchParams(window.location.search);
        return params.get(param);
    }

    let receivedValue = getQueryParam('value');
    mainImg.src = receivedValue;

    smallImgs.forEach((img) => {
        let random = Math.floor(Math.random() * 10) + 1
        img.src = `images/products/f${ random }.jpg`
    })
})()
