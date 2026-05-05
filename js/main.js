const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const filter = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll(".band-card");

        cards.forEach(card => {
            const text = card.innerText.toLowerCase();

            if (text.includes(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

const genreFilter = document.getElementById("genreFilter");

if (genreFilter) {
    genreFilter.addEventListener("change", function () {
        const selectedGenre = genreFilter.value;
        const bandCards = document.querySelectorAll(".band-card");

        bandCards.forEach(card => {
            const cardGenre = card.dataset.genre;

            if (selectedGenre === "all" || cardGenre === selectedGenre) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

const sortSelect = document.getElementById("sortSelect");

if (sortSelect) {
    sortSelect.addEventListener("change", function () {
        const albumList = document.getElementById("albumList");
        const albums = [...document.querySelectorAll(".album-card")];
        const selectedSort = sortSelect.value;

        if (selectedSort === "rating") {
            albums.sort((a, b) => b.dataset.rating - a.dataset.rating);
        } else if (selectedSort === "year-oldest") {
            albums.sort((a, b) => a.dataset.year - b.dataset.year);
        } else if (selectedSort === "year-youngest") {
            albums.sort((a, b) => b.dataset.year - a.dataset.year);
        }

        albumList.innerHTML = "";

        albums.forEach(album => {
            albumList.appendChild(album);
        });
    });
}