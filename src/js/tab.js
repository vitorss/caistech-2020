const openCity = (evt, dayName) => {

    var i;

    var tabcontent = document.getElementsByClassName("tab-programs");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    var tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(dayName).style.display = "block";
    evt.currentTarget.className += " active";
}