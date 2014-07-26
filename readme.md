# Simple jQuery Pagination

This is a very simple pagination functionality from client side. Just include the pagination.js link to the HTML to create pagination. This can be applied to any kind of content. Be it images, tables or just simple content. Wrap each of the item to paginate in a div and the entire set of items in a main div.

## Parmeters
```
{
    "itemsPerPage" : Set how many items to see on one page.
    "container": The main div ID which consists of many child divs. Each of which is treated  as an item to paginate.
    "next" : The ID of the next button.
    "previous" : The ID of the previous button.
    "navCSSDisable": The CSS which is to be applied when the button has been disabled.
}
```
## Default Parameter Values
```
{
    "itemsPerPage" : 4,
    "container": "paginate",
    "next" : "next"
    "previous" : "previous"
    "navCSSDisable": "disabled"
}
```
## Example
<a href="https://github.com/RaD0/simpleJSpagination/tree/master/Example"> Detailed Example </a>
```
<div id="paginatex">
    <div> 
        <img src="image1.jpg"/>
    </div>
    <div> 
        <img src="image2.jpg"/>
    </div>
    <div> 
        <img src="image3.jpg"/>
    </div>
    <div> 
        <img src="image4.jpg"/>
    </div>
    <div> 
        <img src="image5.jpg"/>
    </div>    
</div>

<div class="nav">
    <button id="nextx">Next</button>
    <button id="previousx">previous</button>
</div>

```
To apply paginate for the above HTML code with two items per page:
```
Paginate.load({
    "itemsPerPage" : 2,
    "container": "paginatex",
    "next": "nextx",
    "previous": "previousx"
});
```
And That's it. This can be applied to any type of content. 
