function openSlideMenu() {
    document.getElementById("side-menu").style.width = "250px";
    document.getElementById("about-me").style.marginLeft = "250px";
    document.getElementById("portfolio-section").style.marginLeft = "250px";
    document.getElementById("contact-me").style.marginLeft = "250px";
    document.getElementById("home").style.marginLeft = "250px";
    document.getElementById("title").setAttribute("style", "margin: 20%");
}
function closeSlideMenu() {
    document.getElementById("side-menu").style.width = "0px";
    document.getElementById("about-me").style.marginLeft = "60px";
    document.getElementById("portfolio-section").style.marginLeft = "60px";
    document.getElementById("contact-me").style.marginLeft = "60px";
    document.getElementById("home").style.marginLeft = "0px";
    document.getElementById("title").setAttribute("style", "margin: 20% auto");
}
