/*Javascript function for validating form in Javascript page that asks you to sign into newsletter*/
function validateForm() {
    var x = document.forms["Newsletter"]["fname"].value;
    var y = document.forms["Newsletter"]["lname"].value;
    var z = document.forms["Newsletter"]["email"].value;
    if (x == "" || y == "" || z == "") {
        alert("You have left one of the fields empty.");
        return false;
    }

}