var blazorHelpers = blazorHelpers || {};

blazorHelpers.scrollToFragment = elementId => {
    var element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth"
        });
    }
}

blazorHelpers.lightMenu = (dotNetObject) => {
    const sections = document.querySelectorAll("#page-top, #about, #projects, #signup");
    const config = {
        rootMargin: "-80px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const offset = entry.target.id.toString();
                    dotNetObject.invokeMethodAsync("SetNavMenuClass", offset);
                }
            });
        },
        config);
    sections.forEach(section => observer.observe(section));
}