This is a very simple pagination functionality from client side. Just include the pagination.js link to the HTML to create pagination. This can be applied to any kind of content. Be it images, tables or just simple content. Wrap each of the item to paginate in a div and the entire set of items in a main div.

The following are the parameters which can be passed:
    {
        "itemsPerPage" : Set how many items to see on one page. "4" by default,
        "container": The main div ID which consists of many child divs. Each which is treated  as an item to paginate. "paginate" by default
        "next" : The ID of the next button. "next" by default
        "previous" : The ID of the previous button. "previous" by default
        "navCSSDisable": The CSS which is to be applied when the button has been disabled. "disabled" by default
    }
    
