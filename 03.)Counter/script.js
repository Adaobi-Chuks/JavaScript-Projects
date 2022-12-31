const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const count = document.getElementById("count");

decrease.addEventListener("click", () => {
    count.textContent = parseInt(count.textContent) - 1;
    changeColor();
});

increase.addEventListener("click", () => {
    count.textContent = parseInt(count.textContent) + 1;
    changeColor();
});

function changeColor () {
    if (count.textContent === "0") {
        count.style.color = "black"
    } else if (count.textContent > "0") {
        count.style.color = "green"
    } else{
        count.style.color = "red"
    }
}
