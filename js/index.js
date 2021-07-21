function addCssNavBar(event) {
    var idSelected = event.path[1].attributes[1].nodeValue;
    var li = document.getElementsByClassName('nav-item');
    var index_select;
    for (i = 0; i < li.length; i++) {
        if (li[i].id == idSelected) {
            index_choose = i;
        }
        if (li[i].classList.length == 2) {
            index_select = i;
        }

    }
    console.log('index_choose',index_choose)
    console.log('index_select',index_select)
    if (index_choose != index_select) {
        li[index_choose].classList.add("selected");
        li[index_select].classList.remove("selected");
    }

}




document.addEventListener('scroll', function (event) {
    var home = document.getElementById("home");
    home = home.offsetHeight;
    var about = document.getElementById("about");
    about = about.offsetHeight;
    var skills = document.getElementById("skills");
    skills = skills.offsetHeight;
    var experience = document.getElementById("experience");
    experience = experience.offsetHeight;
    var education = document.getElementById("education");
    education = education.offsetHeight;
    var portfolio = document.getElementById("portfolio");
    portfolio = portfolio.offsetHeight;
    var contact = document.getElementById("contact");
    contact = contact.offsetHeight;

    var height = window.innerHeight + window.pageYOffset;


    // console.log('height', height);
    var array_scroll = [0, home + window.innerHeight, about + home + window.innerHeight, skills + about + home + window.innerHeight, experience + skills + about + home + window.innerHeight, experience + skills + about + home + window.innerHeight, education + experience + skills + about + home + window.innerHeight, portfolio + education + experience + skills + about + home + window.innerHeight]
    // console.log('array_scroll', array_scroll)

    if (window.innerWidth > 992) {
        document.getElementById('navbar_content').style.position = "fixed";
        var navbar = document.getElementById('navbar');
        navbar.classList.remove("fixed-top")
    
    } else {
        var navbar = document.getElementById('navbar');
        navbar.classList.add("fixed-top")
        document.getElementById('navbar_content').style.position = "unset";
    }

}, true);



if (window.innerWidth > 992) {
    document.getElementById('navbar_content').style.position = "fixed";
    var navbar = document.getElementById('navbar');
    navbar.classList.remove("fixed-top")

} else {
    var navbar = document.getElementById('navbar');
    navbar.classList.add("fixed-top")
    document.getElementById('navbar_content').style.position = "unset";
}