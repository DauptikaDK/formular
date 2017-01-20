/*globals form*/




var addClass = function (elem, classString) {
    "use strict";
    var oldClassString,
        newClassString;

    oldClassString = elem.className;
    if (oldClassString.search(classString) === -1) {
        newClassString = oldClassString.concat(" " + classString);
        elem.className = newClassString;
    }
},

removeClass = function (elem, classString) {
    "use strict";
    var oldClassString = elem.className,
        newClassString = oldClassString.replace(" " + classString, "") || oldClassString.replace(classString, "");

    elem.className = newClassString;
};
