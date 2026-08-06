document.getElementById("appSidebar").innerHTML = `

<!-- Desktop Sidebar -->

<aside class="sidebar d-none d-lg-flex">

    ${menu()}

</aside>

<!-- Mobile Sidebar -->

<div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="mobileSidebar">

    <div class="offcanvas-body">

        ${menu()}

    </div>

</div>

`;

function menu(){

    return `

        <div class="logo">

            🥗 DietMate

        </div>

        <nav>

            <a href="dashboard.html">

                <i class="bi bi-grid"></i>

                Dashboard

            </a>

            <a href="meal-plan.html">

                <i class="bi bi-egg-fried"></i>

                Meal Plan

            </a>

            <a href="progress.html">

                <i class="bi bi-graph-up"></i>

                Progress

            </a>

            <a href="education.html">

                <i class="bi bi-book"></i>

                Edukasi

            </a>

            <a href="profile.html">

                <i class="bi bi-person"></i>

                Profil

            </a>

        </nav>

    `;

}