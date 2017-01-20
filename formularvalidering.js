/*globals addClass, removeClass, encodeJSONonURI, console*/

var form = {
    validate: {
        name: function (request, response) {
            "use strict";

            var error;

            if (request.length < 2) {
                error = true;
            } else {
                if (/\d/.test(request)) {
                    error = true;
                } else {
                    error = false;
                }
            }

            if (error) {
                response(false);
            } else {
                response(true);
            }
        },
        email: function (request, response) {
            "use strict";


            var error,
                regex = /^([\w\-]+(?:\.[\w\-]+)*)@((?:[\w\-]+\.)*\w[\w\-]{0,66})\.([a-z]{2,6}(?:\.[a-z])?)$/i;

            if (regex.test(request)) {
                error = false;
            } else {
                error = true;
            }


            if (error) {
                response(false);
            } else {
                response(true);
            }
        },
        message: function (request, response) {
            "use strict";

            var error;

            if (request.length > 40) {
                error = false;
            } else {
                error = true;
            }

            if (error) {
                response(false);
            } else {
                response(true);
            }
        }
    },
    send: function (formObject) {
        "use strict";

        var validateName,
            validateEmail,
            validateMessage,
            xmlHttp = new XMLHttpRequest(),
            status;


        form.validate.name(formObject.name.value, function (response) {
            validateName = response;
        });

        form.validate.email(formObject.email.value, function (response) {
            validateEmail = response;
        });

        form.validate.message(formObject.message.value, function (response) {
            validateMessage = response;
        });

        if (validateName && validateEmail && validateMessage) {
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                    status = JSON.parse(xmlHttp.responseText).status;
                    if (status === "success") {
                        console.log("SENDT WUUHUU");
                    } else {
                        console.log("DEN blev IKKE sendt: " + status);
                    }
                } else {
                    console.log("NOGET ER GALT MUTTERFUCKER");
                }
            };

            xmlHttp.open("post", "sendmail.php");
            xmlHttp.send("name=hej");


        } else {
            console.log("IKKE SENDT BIATCH");
        }

        return false;
    }

};
