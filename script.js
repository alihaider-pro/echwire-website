// =========================
// READ MORE
// =========================

const readMoreButton =
    document.getElementById("readMoreButton");


readMoreButton.addEventListener("click", function () {

    document.querySelector(".news").scrollIntoView({
        behavior: "smooth"
    });

});



// =========================
// SEARCH
// =========================

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const searchMessage =
    document.getElementById("searchMessage");

const cards =
    document.querySelectorAll(".card");


function searchNews() {

    const searchText =
        searchInput.value.toLowerCase().trim();

    let found = false;


    if (searchText === "") {

        cards.forEach(function (card) {

            card.classList.remove("hidden");

        });

        searchMessage.textContent = "";

        return;
    }


    cards.forEach(function (card) {

        const title =
            card.querySelector("h3")
                .textContent
                .toLowerCase();

        const description =
            card.querySelector("p")
                .textContent
                .toLowerCase();


        if (
            title.includes(searchText) ||
            description.includes(searchText)
        ) {

            card.classList.remove("hidden");

            found = true;

        } else {

            card.classList.add("hidden");

        }

    });


    if (found) {

        searchMessage.textContent =
            "News found!";

        searchMessage.style.color = "green";

    } else {

        searchMessage.textContent =
            "No news found.";

        searchMessage.style.color = "red";
    }

}


searchButton.addEventListener(
    "click",
    searchNews
);


searchInput.addEventListener(
    "keypress",
    function (event) {

        if (event.key === "Enter") {

            searchNews();

        }

    }
);



// =========================
// ARTICLE MODAL
// =========================

const modal =
    document.getElementById("articleModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const closeModal =
    document.getElementById("closeModal");

const modalCloseButton =
    document.getElementById("modalCloseButton");


const articleButtons =
    document.querySelectorAll(".article-button");


articleButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card =
            button.parentElement;

        const title =
            card.querySelector("h3").textContent;


        if (title === "Artificial Intelligence") {

            modalTitle.textContent =
                "Artificial Intelligence";

            modalText.textContent =
                "Artificial Intelligence is changing " +
                "the way people work, communicate and " +
                "use technology. Modern AI systems can " +
                "analyze information, understand language " +
                "and help people solve complex problems.";

        }


        else if (title === "New Gadgets") {

            modalTitle.textContent =
                "New Gadgets";

            modalText.textContent =
                "Modern gadgets are becoming smarter " +
                "and more connected. Smartphones, " +
                "laptops, smart watches and other " +
                "devices are introducing new features " +
                "that make everyday tasks easier.";

        }


        else if (title === "Technology") {

            modalTitle.textContent =
                "Technology";

            modalText.textContent =
                "Technology continues to evolve rapidly. " +
                "From cloud computing and software to " +
                "artificial intelligence and smart devices, " +
                "new innovations are changing businesses " +
                "and everyday life.";

        }


        modal.classList.add("show");

    });

});



// =========================
// CLOSE MODAL
// =========================

closeModal.addEventListener("click", function () {

    modal.classList.remove("show");

});


modalCloseButton.addEventListener("click", function () {

    modal.classList.remove("show");

});


modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        modal.classList.remove("show");

    }

});


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        modal.classList.remove("show");

    }

});



// =========================
// DARK MODE
// =========================

const themeButton =
    document.getElementById("themeButton");


// Check saved theme

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeButton.textContent =
        "☀️ Light Mode";

}


themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    if (
        document.body.classList.contains("dark-mode")
    ) {

        themeButton.textContent =
            "☀️ Light Mode";

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        themeButton.textContent =
            "🌙 Dark Mode";

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});



// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.style.color =
            "red";

        return;

    }


    formMessage.textContent =
        "Thank you, " +
        name +
        "! Your message has been submitted successfully.";

    formMessage.style.color =
        "green";


    contactForm.reset();

});



// =========================
// BACK TO TOP
// =========================

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});