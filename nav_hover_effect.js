function hoverEffect(selected) {

    //Apparently we can't use selected.style.color to grab the color if its not directly defined in html file,
    //if the color is defined in CSS then selected.style.color will return null... refer to <a> color in html file
    var home = document.getElementById("home");
    var about = document.getElementById("about");
    var contact = document.getElementById("contact");
    var resume = document.getElementById("resume");


    if(home.style.color == "white")
        home.style.color = "grey";
    else if(home.style.color == "grey")
        home.style.color = "white";
    if(about.style.color == "white")
        about.style.color = "grey";
    else if(about.style.color == "grey")
        about.style.color = "white";
    if(contact.style.color == "white")
        contact.style.color = "grey";
    else if(contact.style.color == "grey")
    contact.style.color = "white";
    if(resume.style.color == "white")
        resume.style.color = "grey";
    else if(resume.style.color == "grey")
        resume.style.color = "white";


    selected.style.color = "white";
}