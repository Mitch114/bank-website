'use strict';
var $ = function(id) {
    return document.getElementById(id);
};

var validateReset = function() {
    var key = document.getElementById('password').value;
    localStorage.removeItem(key);
    console.log("User's password reset")

}

window.onload = function() {
    $("reset").onclick = validateReset;
    $("username").focus();
};