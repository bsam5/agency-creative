// toggle nav

let myNavbar = document.getElementById("navbarNav"), // Change "navbarNav" to the ID of your collapsible navbar
    myLayer = document.getElementById("layer"); // Change "navbarNav" to the ID of your collapsible navbar
navbarCollapse = document.querySelector(".navbar-collapse");
navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
myNavbar.addEventListener("shown.bs.collapse", _ => myLayer.style.display = 'block');

myNavbar.addEventListener("hidden.bs.collapse", _ => myLayer.style.display = 'none');
function closeNavbar() {
    if (navbarCollapse.classList.contains("show")) {
        var startHeight = navbarCollapse.scrollHeight;
        var step = Math.ceil(startHeight / 10); // Change the number of steps for animation smoothness

        function animateCollapse() {
            startHeight -= step;
            if (startHeight <= 0) {
                navbarCollapse.style.height = "0"; // Set the height to 0 to initiate the collapse animation
                navbarCollapse.classList.remove("show"); // After the animation, remove the "show" class
                navbarCollapse.removeEventListener("animationFrame", animateCollapse);
            } else {
                navbarCollapse.style.height = startHeight + "px";
                requestAnimationFrame(animateCollapse);
            }
        }

        requestAnimationFrame(animateCollapse);
    }
    myLayer.style.display = 'none';
}

myLayer.onclick = function () {
    closeNavbar();
}
navbarLinks.forEach(function (link) {
    link.addEventListener("click", closeNavbar);
});
