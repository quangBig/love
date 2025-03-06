document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no-button");

    noButton.addEventListener("mouseenter", function () {
        const x = Math.random() * (window.innerWidth - noButton.clientWidth);
        const y = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
});
