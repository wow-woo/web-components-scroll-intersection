document.addEventListener("DOMContentLoaded", function () {
    var options = {
        root: null,
        rootMargin: "-250px -50px",
        threshold: 0.000001
    };
    var observer = new IntersectionObserver(beTouching, options);
    document.querySelectorAll(".container p").forEach(function (p) {
        observer.observe(p);
        //console.log("watching", p.textContent);
    });
});
function beTouching(entries, ob) {
    //entries all 30 paragraphs
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            console.log("intersecting");
            //console.log(entry.target);
            //console.log(entry.time, entry.intersectionRatio);
            entry.target.classList.add("active");
            //ob.unobserve(entry.target);
        }
        else {
            entry.target.classList.remove("active");
        }
    });
}
