function NOTWORKING_hoverEffect(selected) {//Not actually used at all... Hover effect is handled using CSS, refer to #nav ul:hover

    //Apparently we can't use selected.style.color to grab the color if its not directly defined in html file,
    //if the color is defined in CSS then selected.style.color will return null... refer to <a> color in html file
    var home = document.getElementById("home");
    var about = document.getElementById("about");
    var portfolio = document.getElementById("portfolio");
    var resume = document.getElementById("resume");



    if(home.style.color == "white")
        home.style.color = "grey";
    else if(home.style.color == "grey")
        home.style.color = "white";
    if(about.style.color == "white")
        about.style.color = "grey";
    else if(about.style.color == "grey")
        about.style.color = "white";
    if(portfolio.style.color == "white")
        portfolio.style.color = "grey";
    else if(portfolio.style.color == "grey")
        portfolio.style.color = "white";
    if(resume.style.color == "white")
        resume.style.color = "grey";
    else if(resume.style.color == "grey")
        resume.style.color = "white";


        selected.style.color = "white";
}


function mouseOn() {
    document.getElementById("home").style.color = "grey";
    document.getElementById("about").style.color = "grey";
    document.getElementById("portfolio").style.color = "grey";
    document.getElementById("resume").style.color = "grey";

}

function mouseOut() {
    document.getElementById("home").style.color = "white";
    document.getElementById("about").style.color = "white";
    document.getElementById("portfolio").style.color = "white";
    document.getElementById("resume").style.color = "white";
}

function hoverNavigation() {
    var home = document.getElementById("home");
    var about = document.getElementById("about");
    var portfolio = document.getElementById("portfolio");
    var resume = document.getElementById("resume");


    if (home.style.color == "white")
        home.style.color = "grey";
    else if (home.style.color == "grey")
        home.style.color = "white";
    if (about.style.color == "white")
        about.style.color = "grey";
    else if (about.style.color == "grey")
        about.style.color = "white";
    if (portfolio.style.color == "white")
        portfolio.style.color = "grey";
    else if (portfolio.style.color == "grey")
        portfolio.style.color = "white";
    if (resume.style.color == "white")
        resume.style.color = "grey";
    else if (resume.style.color == "grey")
        resume.style.color = "white";
}