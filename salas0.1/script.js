const searchButton = document.getElementById("searchButton");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");

searchButton.addEventListener("click", () => {
    searchBox.classList.toggle("active");

    if (searchBox.classList.contains("active")) {
        searchInput.focus();
    }
});const gameCards = document.querySelectorAll(".game-card");

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();

    gameCards.forEach(card => {
        const gameName = card.querySelector("h3").textContent.toLowerCase();

        if (gameName.includes(searchTerm)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});gameCards.forEach(card => {
    card.addEventListener("click", () => {
        const link = card.dataset.link;

        if (link && link !== "#") {
            window.location.href = link;
        }
    });
});