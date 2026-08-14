let currentCategory = "all";


document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderFeaturedArticle();

        renderEducationArticles();

        setupCategoryFilter();

    }
);

function renderFeaturedArticle() {

    const container =
        document.getElementById(
            "featuredArticle"
        );

    if (!container) return;


    const article =
        educationArticles.find(
            item => item.featured
        );

    if (!article) return;


    container.innerHTML = `

        <div class="featured-content">

            <span class="featured-category">
                ${article.categoryLabel}
            </span>

            <h3>
                ${article.title}
            </h3>

            <p>
                ${article.description}
            </p>

            <span class="featured-read">

                Baca artikel

                <i class="bi bi-arrow-right"></i>

            </span>

        </div>


        <div class="featured-decoration">

            <i class="bi ${article.icon}"></i>

        </div>

    `;


    container.addEventListener(
        "click",
        () => openArticleDetail(article.id)
    );

}

function renderEducationArticles() {

    const container =
        document.getElementById(
            "educationArticleGrid"
        );

    const emptyState =
        document.getElementById(
            "educationEmpty"
        );


    if (!container) return;


    const filteredArticles =
        currentCategory === "all"

            ? educationArticles

            : educationArticles.filter(
                article =>
                    article.category ===
                    currentCategory
            );


    const articles =
        filteredArticles.filter(
            article =>
                !article.featured
        );


    if (!articles.length) {

        container.innerHTML = "";

        emptyState?.classList.remove("d-none");

        return;
    }


    emptyState?.classList.add("d-none");


    container.innerHTML =
        articles
            .map(createArticleCard)
            .join("");


    setupArticleClick();

}


function createArticleCard(article) {

    return `

        <div class="col-xl-4 col-md-6">

            <article
                class="education-card"
                data-article-id="${article.id}"
            >

                <div
                    class="
                        education-card-image
                        ${article.background}
                    "
                >

                    <i
                        class="
                            bi
                            ${article.icon}
                        "
                    ></i>

                </div>


                <div class="education-card-body">

                    <span
                        class="education-card-category"
                    >
                        ${article.categoryLabel}
                    </span>


                    <h3
                        class="education-card-title"
                    >
                        ${article.title}
                    </h3>


                    <p
                        class="education-card-description"
                    >
                        ${article.description}
                    </p>


                    <span
                        class="education-card-read"
                    >

                        Baca artikel

                        <i
                            class="bi bi-arrow-right"
                        ></i>

                    </span>

                </div>

            </article>

        </div>

    `;
}


function setupArticleClick() {

    const cards =
        document.querySelectorAll(
            ".education-card"
        );


    cards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const id =
                    Number(
                        card.dataset.articleId
                    );

                openArticleDetail(id);

            }
        );

    });

}

function setupCategoryFilter() {

    const filters =
        document.querySelectorAll(
            ".education-filter"
        );


    filters.forEach(filter => {

        filter.addEventListener(
            "click",
            () => {

                filters.forEach(item =>
                    item.classList.remove(
                        "active"
                    )
                );


                filter.classList.add(
                    "active"
                );


                currentCategory =
                    filter.dataset.category;


                renderEducationArticles();

            }
        );

    });

}


function openArticleDetail(id) {

    const article =
        educationArticles.find(
            item => item.id === id
        );


    if (!article) return;


    document.getElementById(
        "modalArticleCategory"
    ).textContent =
        article.categoryLabel;


    document.getElementById(
        "modalArticleTitle"
    ).textContent =
        article.title;


    const image =
        document.getElementById(
            "modalArticleImage"
        );


    image.className =
        `modal-article-image ${article.background}`;


    image.innerHTML = `

        <i class="
            bi
            ${article.icon}
        "></i>

    `;


    document.getElementById(
        "modalArticleContent"
    ).innerHTML =
        article.content;


    const modalElement =
        document.getElementById(
            "educationDetailModal"
        );


    const modal =
        bootstrap.Modal.getOrCreateInstance(
            modalElement
        );


    modal.show();

}