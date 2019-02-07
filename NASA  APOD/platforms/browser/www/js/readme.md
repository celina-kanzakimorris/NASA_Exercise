## apodapp.js 
Load the picture of the day from (NASA's APOD API)[https://api.nasa.gov/api.html#apod]

Use the following id names on target element to be populated with the data for today:
* <img id="td-image"> (must be on an <img> element)
* id="td-copyright"
* id="td-title"
* id="td-explanation"

And these for yesterday's image:
* <img id="yd-image"> (must be on an <img> element)
* id="yd-copyright"
* id="yd-title"
* id="yd-explanation"


## NOTES 
key: update this with your own key from here: https://api.nasa.gov/index.html 

If the API data will be displayed on a page other than 'home': 
* use apodapp-altpage.js instead. This will make the call when this page is loaded. 
* you will need to update the value of 'pagename' to the route name for the page that loads the data. 