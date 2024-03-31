let MIN = 1;
let MAX = 900;
function rand(Min, Max) {
    return Number(Math.floor(Math.random() * (Max - Min))+Number(Min));
}
document.getElementById("roll").onclick = () => {
    document.getElementById("Text").textContent = rand(MIN, MAX);
}
document.getElementById("confirm").onclick = () => {
    MIN = document.getElementById("minimum").value;
    MAX = document.getElementById("maximum").value;
}
