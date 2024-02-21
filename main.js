// Variables

const inputFirstColor = document.getElementById("fistColor");
const inputSecndColor = document.getElementById("scendColor");
const first = document.querySelector(".first");
const boddy = document.querySelector("body");
const h = document.querySelectorAll(".h");
//

//console.log(Number(inputFirstColor.value.replace("#", "")));

//if(Number(inputFirstColor.value.replace("#", "")))

//boddy.style.backgroundImage = `linear-gradient(to right, ${inputFirstColor.value},${inputSecndColor.value})`;

inputFirstColor.addEventListener("input", function() {
    if (Number(inputFirstColor.value.replace("#", "")) <= 808080) {
        for (const n of h) {
            n.style.color = "white";
        }
    } else {
        for (const n of h) {
            n.style.color = "black";
        }
    }
    boddy.style.backgroundImage = `linear-gradient(to right, ${inputFirstColor.value},${inputSecndColor.value})`;
    first.textContent = `${inputFirstColor.value},${inputSecndColor.value}`;
});

inputSecndColor.addEventListener("input", function() {
    if (Number(inputSecndColor.value.replace("#", "")) <= 808080) {
        for (const n of h) {
            n.style.color = "white";
        }
    } else {
        for (const n of h) {
            n.style.color = "black";
        }
        boddy.style.backgroundImage = `linear-gradient(to right, ${inputFirstColor.value},${inputSecndColor.value})`;
        first.textContent = `${inputFirstColor.value},${inputSecndColor.value}`;
    }
});