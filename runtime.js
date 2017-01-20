/*globals form*/

document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    var formular = document.getElementById("kontaktFormular");

    formular.onsubmit = function () {
        return form.send(this);
    };



});
