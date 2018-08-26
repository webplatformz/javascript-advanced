var zuehlkeParralaxOffset = 200;

Reveal.addEventListener('ready', function (event) {
    if (isPrintingMode()) {
        drawCharts();
        drawZuehlkeBgForPrinting();
        drawHeaderForPrinting();
    }
});

var isPrintingMode = function () {
    return window.location.search.match(/print-pdf/gi);
};

var createMobileDevicesChart = function () {
    var mobileDeviceDistributionData = {
        labels: ["IPhone", "IPad", "Galaxy S4", "Galaxy S3", "Galaxy S2", "Galaxy S4 Mini", "HTC One", "Galaxy Tab 2", "Galaxy Tab 3", "Galaxy S3 Mini", "Galaxy Note 3", "Galaxy Young", "Sony Xperia Z", "IPod Touch"],
        datasets: [
            {
                fillColor: "rgba(45,144,236,0.7)",
                strokeColor: "rgba(45,144,236,1)",
                data: [630200, 371500, 59500, 46000, 29000, 15900, 15400, 12900, 10400, 10300, 8400, 8100, 6700, 6100]
            }
        ]
    };

    var mobileDeviceOptions = {
        animationSteps: 80
    };

    var mobileDeviceChartContext = document.getElementById("mobileDeviceChart").getContext("2d");
    var mobileDeviceChart = new Chart(mobileDeviceChartContext).Bar(mobileDeviceDistributionData, mobileDeviceOptions);
};

var createDesktopMobileDistributionChart = function () {
    var desktopMobileDistributionData = [
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

    var desktopMobileDistributionChartContext = document.getElementById("desktopMobileDistributionChart").getContext("2d");
    var desktopMobileDistributionChart = new Chart(desktopMobileDistributionChartContext).Pie(desktopMobileDistributionData);
};

var drawCharts = function () {
    createMobileDevicesChart();
    createDesktopMobileDistributionChart();
};

var drawZuehlkeBgForPrinting = function () {
    var zuehlkeBgSlides = document.querySelectorAll('[data-state]');
    for (var i = 0; i < zuehlkeBgSlides.length; i++) {
        zuehlkeBgSlides[i].className = zuehlkeBgSlides[i].className + " " + zuehlkeBgSlides[i].getAttribute("data-state");
    }
};

var drawHeaderForPrinting = function () {

    var zuehlkeSlidesWithTitle = document.querySelectorAll('[data-title]');
    for (var i = 0; i < zuehlkeSlidesWithTitle.length; i++) {
        console.log('print header...' + zuehlkeSlidesWithTitle.length);
        var slideTitle = zuehlkeSlidesWithTitle[i].getAttribute("data-title");
        var printHeader = document.getElementById("zuehlke-header").cloneNode(true);
        printHeader.setAttribute('id', '');
        printHeader.setAttribute('class', 'zuehlke-header print');
        printHeader.innerHTML = zuehlkeSlidesWithTitle[i].getAttribute("data-title");
        zuehlkeSlidesWithTitle[i].insertBefore(printHeader, zuehlkeSlidesWithTitle[i].firstChild);
    }
};



Reveal.addEventListener('slidechanged', function () {
    drawCharts();
}, false);