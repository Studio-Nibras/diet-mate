document.getElementById("appSidebar").innerHTML = `

<!-- =====================================================
     DESKTOP SIDEBAR
     ===================================================== -->

<aside class="sidebar">

    <div class="sidebar-brand">
        <div class="brand-mark">
            🥗
        </div>

        <span>
            DietMate
        </span>
    </div>


    <nav class="sidebar-nav">

        ${desktopMenu()}

    </nav>


    <div class="sidebar-bottom">

        <a href="profile.html">
            <i class="bi bi-person"></i>
            <span>Profil</span>
        </a>

    </div>

</aside>


<!-- =====================================================
     MOBILE BOTTOM NAVIGATION
     ===================================================== -->

<nav class="mobile-bottom-nav">

    ${mobileMenu()}

</nav>

`;


/* =========================================================
   DESKTOP MENU
   ========================================================= */

function desktopMenu() {

    return `

        <a
            href="dashboard.html"
            data-page="dashboard"
        >

            <i class="bi bi-grid"></i>

            <span>
                Dashboard
            </span>

        </a>


        <a
            href="meal-plan.html"
            data-page="meal-plan"
        >

            <i class="bi bi-egg-fried"></i>

            <span>
                Meal Plan
            </span>

        </a>


        <a
            href="progress.html"
            data-page="progress"
        >

            <i class="bi bi-graph-up"></i>

            <span>
                Progress
            </span>

        </a>


        <a
            href="education.html"
            data-page="education"
        >

            <i class="bi bi-book"></i>

            <span>
                Edukasi
            </span>

        </a>

    `;

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function mobileMenu() {

    return `

        <a
            href="dashboard.html"
            data-page="dashboard"
        >

            <i class="bi bi-grid"></i>

            <span>
                Home
            </span>

        </a>


        <a
            href="meal-plan.html"
            data-page="meal-plan"
        >

            <i class="bi bi-egg-fried"></i>

            <span>
                Meal
            </span>

        </a>


        <a
            href="progress.html"
            data-page="progress"
        >

            <i class="bi bi-graph-up"></i>

            <span>
                Progress
            </span>

        </a>


        <a
            href="education.html"
            data-page="education"
        >

            <i class="bi bi-book"></i>

            <span>
                Edukasi
            </span>

        </a>


        <a
            href="profile.html"
            data-page="profile"
        >

            <i class="bi bi-person"></i>

            <span>
                Profil
            </span>

        </a>

    `;

}


/* =========================================================
   ACTIVE PAGE
   ========================================================= */

(function setActivePage() {

    const currentFile =
        window.location.pathname
            .split("/")
            .pop()
            .replace(".html", "");

    const links =
        document.querySelectorAll(
            "#appSidebar a[data-page]"
        );

    links.forEach((link) => {

        const page =
            link.dataset.page;

        if (
            currentFile === page ||
            (
                currentFile === "" &&
                page === "dashboard"
            )
        ) {

            link.classList.add("active");

        }

    });

})();