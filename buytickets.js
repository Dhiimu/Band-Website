// JavaScript to display and hide the popup
document.getElementById('buyticketsbtn').onclick = function() {
    var modal = document.getElementById('mypopup');
    var span = document.getElementsByClassName('close')[0];

    popup.style.display = "block";

    // When the user clicks on <span> (x), close the popup
    span.onclick = function() {
        popup.style.display = "none";
    }

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
}