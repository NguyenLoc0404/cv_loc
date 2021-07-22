
if (window.innerWidth > 992) {
    document.getElementById('navbar_content').style.position = "fixed";
    var navbar = document.getElementById('navbar');
    navbar.classList.remove("fixed-top")

} else {
    var navbar = document.getElementById('navbar');
    navbar.classList.add("fixed-top")
    document.getElementById('navbar_content').style.position = "unset";
}



