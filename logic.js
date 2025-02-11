
window.onload = function() {
    var listItems = document.querySelectorAll(".withSideLine li");
    listItems.forEach(element => {
        var liHeight = 0;
        var divsInLi = element.querySelectorAll("div");
        divsInLi.forEach(divElm => {
            liHeight += divElm.offsetHeight; 
        });

        element.style.setProperty("--workExp-li-height", liHeight + "px");
    });
}