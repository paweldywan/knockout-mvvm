ko.utils.stringStartsWith = function (string, startsWith) {
    string = string || "";
    if (startsWith.length > string.length)
        return false;
    return string.substring(0, startsWith.length) === startsWith;
};

//my.ensureTemplates = function(list, vm) {
//    var loadedTemplates = [];
//    ko.utils.arrayForEach(list, function(name) {
//        $.get("/templates/" + name + ".html", function(template) {
//            $("body").append("<script id=\"" + name + "\" type=\"text/html\">" + template + "<\/script>");
//            loadedTemplates.push(name);
//            if (list.length === loadedTemplates.length) {
//                ko.applyBindings(vm);
//            } 
//        });
//    });
//};
// Call it like this: my.ensureTemplates(["headerTemplate"], my.vm);

