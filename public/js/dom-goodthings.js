const btnTeachMe = document.getElementById("teach-btn");

function displayInstructions() {
    const list = document.getElementById("instructions-list");
    list.classList.remove('hidden');
    btnTeachMe.classList.add("hidden");
}

btnTeachMe.addEventListener("click", displayInstructions);

