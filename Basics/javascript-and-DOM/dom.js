/***************************************************
                 DOM - DOCUMENT OBJECT MODEL(REPRESENTATION)

 -JavaScript views the web page as an object with methods, attributes and properties.
|
The window object corresponds to the browser window and it has 3 sub-objects namely: document, location, history.

The document object houses the html code for the web page. It has its own attributes, properties and methods.

The elements in the web page are treated as properties of the document object, they can also be referred to as nodes.

To traverse the document and its nodes, you will need to use the document methods provided by JavaScript.
We use the dot notation/syntax to access the document object’s properties and methods, and we also use it to traverse the document.

The getElementById() method is used to get access to an element through its id attribute. 
The id of an element must be unique to that element i.e. once it is used by that element, no other element should be able to use it.

When you get access to an element, you can access its style property and its properties using the dot notation/syntax. You can effectively affect the style of an element by assigning values to the properties of the element’s style property.

If your script element is at the bottom of your body element, the browser renders the code before the script element first. If the script element has code that affects the elements that come before it, the browser then affects them and this causes the page to re-render the affected elements. This happens so fast that you may not notice it. 
***************************************************/
