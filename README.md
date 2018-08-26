# reveal-zuehlke-template
=======================

A demo presentation for zuehlke based on the [revealjs framework](https://github.com/hakimel/reveal.js/)

#### additional plugins added:
- [Chart](#chart): Easy, object oriented client side graphs for designers and developers [see chartjs.org](http://www.chartjs.org/)


## Instructions

### File Structure

Explain what lies where and show concept of dividing zuehlke-theme and presentation stuff
#### index.html
The presentation content is in the index.html. Each section defines a slide.

#### js/presentation.js
In this file you can implement your presentation specific JavaScript like chartjs, animations, custom slide-actions...

#### css/presentation.css
All the presentation specific stylings belongs to the presentation.css.
In this file you have to adjust the presentation title. For further information see Chapter "Zuehlke Header".

#### css/theme/zuehlke.css
There are several themes (check all out at [revealjs framework](https://github.com/hakimel/reveal.js/)) and also a zuehlke theme. This is activated per default. You shouldn't have to make changes to this file, but you can discover several helper classes which you can use in your presentation.

### Zuehlke Header

With the zuehlke theme you can set a header with title and logo with data-title attribute.

To adjust the presentation title (per default "Demo") you have to make changes to the presentation.css:
```
span#zuehlke-header:before { 
    content: "Demo - "; /*change presentation title here*/
    font-weight: normal; 
    color: #dddddd; 
}
```

If you define a slide specific title with data-title="My Slide" then it shows the "Demo - My Slide" text in the header right next to the zuehlke logo.
If you do not want any titlea and header you only have to remove the data-title attribute and the zuehlke logo and title will disappear.

### Chart

Using pie, bar and other fancy charts.

First you have to define a canvas for the drawing area in the index.html
```
<canvas height="400px" width="900px" id="canvasId"></canvas>
```
It's important to set a height and width. This canvas is referenced in the presentation.js for the chart initialization and darwings.

#### Pie
```     
var chartData = [
    {
        value: 69,
        color: "rgba(45,144,236,1)",
        label: "Desktop",
        labelColor: "white"
    },
    {
        value: 22,
        color: "rgba(45,144,236,0.7)",
        label: "Phone",
        labelColor: "white"
    },
    {
        value: 9,
        color: "rgba(45,144,236,0.5)",
        label: "Tablet",
        labelColor: "white"
    }
];


var chartContext = document.getElementById("canvasId").getContext("2d");
var chart = new Chart(chartContext).Pie(chartData);
    
```

#### Bar
```
var chartData = {
    labels: ["IPhone", "IPad", "Galaxy S4", "Galaxy S3"],
    datasets: [
        {
            fillColor: "rgba(45,144,236,0.7)",
            strokeColor: "rgba(45,144,236,1)",
            data: [630200, 371500, 59500, 46000]
        }
    ]
};

var chartOptions = {
    animationSteps: 80
};

var chartContext = document.getElementById("canvasId").getContext("2d");
var mobileDeviceChart = new Chart(chartContext).Bar(chartData, chartOptions);
```

#### Further Information
For further information and other charts [see chartjs.org](http://www.chartjs.org/). 

### PDF Export

Your presentations can be exported to PDF via a special print stylesheet. This feature requires that you use [Google Chrome](http://google.com/chrome).
Printing on FF might need specific settings for each page and background-images have to be checked if they should appear on the slides.

For printing parallax slides see section [Parallax Background](#paralax-background)

1. Open your presentation with the url parameter ```?print-pdf```
2. Open the in-browser print dialog (CMD+P).
3. Change the **Destination** setting to **Save as PDF**.
5. Change the **Margins** to **None**.
6. Click **Save**.

### Parallax Background

This nice effect with moving background images can be achieved in 2 ways:

###### Option 1
Use the default mode from the reveal project [revealjs framework](https://github.com/hakimel/reveal.js/) (see README -> Parallax Background)

###### Option 2
Use the custom styling from the zuehlke template. This will scale the image to the window size. On the downside you have to enter the px amount which should be moved after each slide.

Edit ```presentation.js``` and change ```var zuehlkeParralaxOffset = 200;```. This will override the default 100px value.  
Edit ```presentation.css```. Below is the demo example... change to fit your needs:  
```html
html.zuehlke-bg-parallax body {
    background-image: url("../images/presentation/sidney_night.jpg");
}

/* Style for print parallax */
body.print-pdf section.zuehlke-bg-parallax{
    /*Make sure paralax background is visible when print mode is active*/
    background: url("../../images/presentation/sidney_night.jpg");
    background-size: auto 100%;
    background-repeat: no-repeat;
}
```
