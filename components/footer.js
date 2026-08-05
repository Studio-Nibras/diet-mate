const base = document.body.dataset.base || ".";

fetch(`${base}/components/footer.html`)
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch(error => console.error("Failed to load footer:", error));