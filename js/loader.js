document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("page-loader");

  if (!loader) return;

  const startTime = performance.now();
  const minimumLoadingTime = 1200;

  window.addEventListener("load", () => {
    const elapsedTime = performance.now() - startTime;

    const remainingTime = Math.max(
      minimumLoadingTime - elapsedTime,
      0
    );

    setTimeout(() => {
      loader.classList.add("hidden");

      setTimeout(() => {
        loader.remove();
      }, 700);

    }, remainingTime);
  });
});