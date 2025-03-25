window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});


document.getElementById("agreeBtn").addEventListener("click", function () {
    document.getElementById("disclaimer").style.display = "none";
});