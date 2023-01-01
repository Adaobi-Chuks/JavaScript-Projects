const hex1 = document.getElementById("hex1");
const hex2 = document.getElementById("hex2");
const rgb1 = document.getElementById("rgb1");
const rgb2 = document.getElementById("rgb2");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const input = document.getElementById("input");
const form = document.getElementById("form");
const generate = document.getElementById("generate");

function getRandomHexColor () {
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random()*16).toString(16);
    }
    return color;
}

function hexToRGB (hexColor) {
    let red = parseInt(hexColor.substring(1, 3), 16);
    let green = parseInt(hexColor.substring(3, 5), 16);
    let blue = parseInt(hexColor.substring(5, 7), 16);

    return {red: red, green: green, blue: blue};
}

function getComplementaryColor (hexColor) {
    const color = hexToRGB(hexColor);

    const red = 255 - color["red"];
    const green = 255 - color["green"];
    const blue = 255 - color["blue"];

    const hex = "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
    return hex;
}

function getRGBValue (rgb) {
    return `rgb(${rgb["red"]}, ${rgb["green"]}, ${rgb["blue"]})`
}

function hexIsValid(hex) {
    if (hex[0] !== "#") {
        return false;
    } else if (hex.length !== 7) {
        return false;
    }
    for (let i = 0; i < hex.length; i++) {
        if ("0123456789ABCDEF#".indexOf(hex[i].toUpperCase()) === -1) {
            return false;
        }
    }
    return true;
}

generate.addEventListener("click", () => {
    let hex;
    if (input.value === "") {
        hex = getRandomHexColor();
    } else if (hexIsValid(input.value)) {
        hex = input.value;
    } else {
        alert("INVALID HEX CODE");
        input.value = "";
        return;
    }
    hex1.textContent = hex;
    color1.style.backgroundColor = hex;
    hex2.textContent = getComplementaryColor(hex);
    color2.style.backgroundColor = getComplementaryColor(hex);
    rgb1.textContent = getRGBValue(hexToRGB(hex));
    rgb2.textContent = getRGBValue(hexToRGB(getComplementaryColor(hex)));
    input.value = "";
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (hexIsValid(input.value)) {
    const hex = input.value;
    hex1.textContent = hex;
    color1.style.backgroundColor = hex;
    hex2.textContent = getComplementaryColor(hex);
    color2.style.backgroundColor = getComplementaryColor(hex);
    rgb1.textContent = getRGBValue(hexToRGB(hex));
    rgb2.textContent = getRGBValue(hexToRGB(getComplementaryColor(hex)));
    } else {
        alert("INVALID HEX CODE");
    }
    input.value = "";
});
