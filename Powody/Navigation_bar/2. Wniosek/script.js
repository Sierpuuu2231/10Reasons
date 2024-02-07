document.addEventListener("DOMContentLoaded", function() {
    var emailIcon = document.getElementById("emailIcon");
    var popup = document.getElementById("popup");
    var close = document.getElementById("close");

    emailIcon.addEventListener("click", function() {
        popup.style.display = "block";
    });

    close.addEventListener("click", function() {
        popup.style.display = "none";
    });
});