Reveal.addEventListener('slidechanged', function (event) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv

    var title = event.currentSlide.attributes.getNamedItem('data-title') || event.currentSlide.parentNode.attributes.getNamedItem('data-title');
    if (typeof title != 'undefined' && title != null) {
        zuehlkeRemoveClass('zuehlke-header', 'hide');
        document.getElementById("zuehlke-header").innerHTML = title.value;
        //Cufon.replace('h1');
    } else {
        zuehlkeAddClass('zuehlke-header', 'hide');
    }
    var parallaxStep = event.currentSlide.attributes.getNamedItem('data-parallax-step');
    if (parallaxStep) {
        var parallaxOffset = 100;
        if (typeof zuehlkeParralaxOffset != 'undefined') {
            parallaxOffset = zuehlkeParralaxOffset;
        }
        var backgroundXDelta = parallaxStep.value * parallaxOffset;
        document.body.style.backgroundPosition = "-" + backgroundXDelta + "px 0";
    } else {
        document.body.style.backgroundPosition = "";
    }
})
zuehlkeRemoveClass = function (id, className) {
    var myClassName = " " + className; //must keep a space before class name
    var d;
    d = document.getElementById(id);
    d.className = d.className.replace(myClassName, "");
}

zuehlkeAddClass = function (id, className) {
    var myClassName = " " + className; //must keep a space before class name
    var d;
    d = document.getElementById(id);
    d.className = d.className.replace(myClassName, ""); // first remove the class name if that already exists
    d.className = d.className + myClassName; // adding new class name
}