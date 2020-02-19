var blazorHelpers = blazorHelpers || {};
blazorHelpers.scrollToFragment = function (elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth"
        });
    }
};
blazorHelpers.lightMenu = function (dotNetObject) {
    var sections = document.querySelectorAll("#page-top, #about, #projects, #signup");
    var config = {
        rootMargin: "-80px 0px"
    };
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var offset = entry.target.id.toString();
                dotNetObject.invokeMethodAsync("SetNavMenuClass", offset);
            }
        });
    }, config);
    sections.forEach(function (section) { return observer.observe(section); });
};
//# sourceMappingURL=greyscale.js.map