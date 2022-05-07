'use strict';
var $ = function(id) {
    return document.getElementById(id);
};

var validateForm = function() {
    var isValid = true;

    var header = "";
    var html = "";
    var required = "<span>Required field</span>"
    var msg = "Please review your entries and complete all required fields.";

    var email = $('email').value;
    var email2 = $('email2').value;
    var firstName = $("firstName").value;
    var lastName = $('lastName').value;
    var city = $('city').value;
    var state = $('state').value;
    var zip = $('zip').value;
    var grossIncome = $('grossIncome').value;
    var lastFour = $('lastFour').value;
    var terms = $('terms').checked;


    if (email == "") {
        email = required;
        header = msg;
        isValid = false;
    }
    if (email2 == "") {
        email2 = required;
        header = msg;
        isValid = false;
    }
    if (firstName == "") {
        firstName = required;
        header = msg;
        isValid = false;
    }
    if (lastName == "") {
        lastName = required;
        header = msg;
        isValid = false;
    }
    if (city == "") {
        city = required;
        header = msg;
        isValid = false;
    }
    if (state == "") {
        state = required;
        header = msg;
        isValid = false;
    }
    if (zip == "") {
        zip = required;
        header = msg;
        isValid = false;
    }
    if (grossIncome == "") {
        grossIncome = required;
        header = msg;
        isValid = false;
    }
    if (lastFour == "") {
        lastFour = required;
        header = msg;
        isValid = false;
    }
    if (terms == "") {
        terms = required;
        header = msg;
        isValid = false;
    }
    
    //submit the form if all fields are valid
    if(isValid == true){
        $("theForm").submit();
    }

    $("registration_header").firstChild.nodeValue = header;
    if (header == msg) {
        html = html + "<tr><td>Email:</td><td>" + email + "</td></tr>";
        html = html + "<tr><td>Email:</td><td>" + email2 + "</td></tr>";
        html = html + "<tr><td>First name:</td><td>" + firstName + "</td></tr>";
        html = html + "<tr><td>Last name:</td><td>" + lastName + "</td></tr>";
        html = html + "<tr><td>City:</td><td>" + city + "</td></tr>";
        html = html + "<tr><td>State:</td><td>" + state + "</td></tr>";
        html = html + "<tr><td>Zip:</td><td>" + zip + "</td></tr>";
        html = html + "<tr><td>Gross income:</td><td>" + grossIncome + "</td></tr>";
        html = html + "<tr><td>Last four:</td><td>" + lastFour + "</td></tr>";
        html = html + "<tr><td>terms:</td><td>" + terms + "</td></tr>";
        $("registration_info").innerHTML = html;
    } else {
        $("registration_info").innerHTML = "";
    }

    if (grossIncome >= 45000) {
        alert("Congratulations, Your are prequalified for a loan. A representative will contact you soon.");
    } else {
        alert("We're sorry, you do not qualify for a loan at this time.")
    }
};

var resetForm = function() {
    $("theForm").reset();
    $("registration_header").firstChild.nodeValue = "";
    $("registration_info").innerHTML = "";
    $("email").focus();
}

window.onload = function() {
    $("submit").onclick = validateForm;
    $("reset_form").onclick = resetForm;
    $("email").focus();
};