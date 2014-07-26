

/*
{
    "itemsPerPage" : 4, // Defines the number of items to be displayed per page
    "container" : "div#paginate", // The container which contains a list of divs, each of which needs to be paginated
    "next": "button#next", // The next button to see the next set of items
    "previous": "button#previous", // The previous button to see the previous set of items
}
*/

function Paginate()  {}

 // Default parameters which can be changed from the custom parameters
var itemsPerPage = 4;
var container = "div#paginate"
var maxItems = 0;
var next = "button#next";
var previous = "button#previous";
var navCSSDisable = "disabled"

// Change default parameters based on the custom parameters
// Loop through the items in the container and assign them data-values
Paginate.load = function load(parameters) {
        init(parameters);
        var items = $(container);
        var max_items = 0;
        $(items).children().each(function(e) {
            $(this).attr("data-value", e+1);
            max_items+=1;
        });
        maxItems = max_items;
        $(next).attr("data-value",itemsPerPage);
        $(previous).attr("data-value",1);
        paginate(1,itemsPerPage);
}

function init(parameters) {
    if(isValid(parameters.itemsPerPage)) {
        itemsPerPage = parameters.itemsPerPage;
    }
    if(isValid(parameters.container)) {
        container = "div#"+parameters.container;
    }
    if(isValid(parameters.next)) {
        next = "button#"+parameters.next;
    }
    if(isValid(parameters.previous)) {
        previous = "button#"+parameters.previous;
    }
    if(isValid(parameters.navCSSDisable)) {
        navCSSDisable = parameters.navCSSDisable;
    }
}

function isValid(item) {
    return (null!=item && item!="");
}

$(next).click(function(){
    var index = parseInt($(this).attr("data-value"));
    var start = index + 1;
    var end = index + itemsPerPage;
    $(this).attr("data-value", end);
    $(previous).attr("data-value", start);
    paginate(start, end);
});

$(previous).click(function(){
    var index = parseInt($(this).attr("data-value"));
    var start = index - itemsPerPage;
    var end = index - 1;
    $(this).attr("data-value", start);
    $(next).attr("data-value", end);
    paginate(start, end);
});

function paginate(start, end) {
    var items = $(container);
    $(items).children().each(function(e) {
        var index = parseInt($(this).attr("data-value"));
        if(index > end || index < start) {
            $(this).css("display", "none");
        } else $(this).css("display", "block");
    });
    toggle_navigation();
}

function toggle_navigation() {
    var nextBtn = $(next);
    var previousBtn = $(previous);

    if (parseInt($(nextBtn).attr("data-value"))>=maxItems) {
        disableNav(next);
    } else {
        enableNav(next);
    }
    if (parseInt($(previousBtn).attr("data-value"))<=1) {
        disableNav(previous);
    } else {
        enableNav(previous);
    }
}

function disableNav(navBtn) {
    $(navBtn).addClass(navCSSDisable);
    $(navBtn).attr("disabled", true);
}

function enableNav(navBtn) {
    $(navBtn).removeClass(navCSSDisable);
    $(navBtn).attr("disabled", false);
}