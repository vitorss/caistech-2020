window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("navbar").style.padding = "0px";
        document.getElementById("navbar").style.background = "#030303";
    } else {
        document.getElementById("navbar").style.padding = "15px 0";
        document.getElementById("navbar").style.background = "#03030383";
    }
}