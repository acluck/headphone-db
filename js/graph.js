var FREQUENCIES = [20, 30, 40, 50, 60, 70, 80, 90, 100,
	200, 300, 400, 500, 600, 700, 800, 900, 1000,
	2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];
var SUBBASS = [20, 30, 40, 50, 60];
var MIDBASS = [70, 80, 90, 100, 200];
var LOWMIDS = [300, 400, 500, 600];
var MIDS = [700, 800, 900, 1000];
var UPMIDS = [2000, 3000, 4000];
var TREBLE = [5000, 6000, 7000];
var UPTREBLE = [8000, 9000, 10000];
var config = {
    type: 'line',
    data: {
        datasets: [{
            backgroundColor: 'rgb(255, 159, 64)',
            borderColor: 'rgb(255, 159, 64)',
            data: [
            	{x: 20, y: 0},
            	{x: 30, y: 0},
            	{x: 40, y: 0},
            	{x: 50, y: 0},
            	{x: 60, y: 0},
            	{x: 70, y: 0},
            	{x: 80, y: 0},
            	{x: 90, y: 0},
            	{x: 100, y: 0},
            	{x: 200, y: 0},
            	{x: 300, y: 0},
            	{x: 400, y: 0},
            	{x: 500, y: 0},
            	{x: 600, y: 0},
            	{x: 700, y: 0},
            	{x: 800, y: 0},
            	{x: 900, y: 0},
            	{x: 1000, y: 0},
            	{x: 2000, y: 0},
            	{x: 3000, y: 0},
            	{x: 4000, y: 0},
            	{x: 5000, y: 0},
            	{x: 6000, y: 0},
            	{x: 7000, y: 0},
            	{x: 8000, y: 0},
            	{x: 9000, y: 0},
            	{x: 10000, y: 0},
			],
            fill: false,
        }]
    },
    options: {
        responsive: true,
        title:{
            display: true,
            text:'Custom Frequency Response',
            fontStyle: 'italic',
        	fontColor: 'rgba(255, 255, 255, 0.75)',
        	fontSize: 32,
        	padding: 20,
        },
        tooltips: {enabled: false},
        hover: {mode: null},
        legend: { display: false},
        scales: {
            xAxes: [{
            	display: true,
            	type: 'logarithmic',
            	gridLines: {
            		color: 'rgba(255, 255, 255, 0.25)',
            		zeroLineWidth: 3,
            		lineWidth: 3,
            		tickMarkLength: 15,
            	},
            	ticks: {
            		fontColor: 'rgba(255, 255, 255, 0.75)',
            		fontSize: 18,
            		min: 20,
                    max: 10000,
                    callback: function(tick) {
        				var remain = tick / (Math.pow(10, Math.floor(Chart.helpers.log10(tick))));
        				if (remain === 2 || remain === 4 || remain === 6 || remain === 8 || remain === 1) {
        					return tick.toString();
        				}
        				return '';
        			},
        			autoSkip: false
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Frequency (Hz)',
            		fontColor: 'rgba(255, 255, 255, 0.75)',
            		fontSize: 24,
                }
            }],
            yAxes: [{
                display: true,
            	gridLines: {
            		color: 'rgba(255, 255, 255, 0.25)',
            		zeroLineWidth: 3,
            		lineWidth: 3,
            		tickMarkLength: 15,
            	},
            	ticks: {
            		fontColor: 'rgba(255, 255, 255, 0.75)',
            		fontSize: 18,
            		min: -50,
                    max: 20,
                    stepSize: 5,
                    autoSkip: false
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Amplitude (dB)',
            		fontColor: 'rgba(255, 255, 255, 0.75)',
            		fontSize: 24,
                }
            }]
        }
    }
};

onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    myLine = new Chart(ctx, config);
    addOptions();
};

function pushHeadphone(name, type, url, dBVals) {
	var headphone = {name: name, type: type, url: url, dBVals: dBVals};
	headphones.push(headphone);
}

function addOptions() {
	var select = document.getElementById('headphone');
	for (var i = 0; i < headphones.length; i++) {
	    var option = document.createElement('option');
	    option.value = i;
	    option.text = headphones[i].name;
	    select.add(option);
	}
}

function loadHeadphone(headphoneNumber) {
	config.data.datasets.forEach(function(dataset) {
        for (var i = 0; i < dataset.data.length; i++) {
        	var val = headphones[headphoneNumber].dBVals[i];
        	val = boundVal(val);
        	dataset.data[i].y = val;
        	document.getElementById('' + FREQUENCIES[i] + 'hz').value = val;
        };
    });
    myLine.update();
}

function ensureNumber(element) {
	var val = parseFloat(element.value);
	if (isNaN(val)) {
		element.value = 0;
	}
	else {
		element.value = val.toFixed(2);
	}
}

function boundVal(val) {
	if (val > 20) {
		val = 20.00;
	} else if (val < -50) {
		val = -50.00;
	}
	return val;
}

function updateAmountInput(amountSelection) {
    if (amountSelection == 'small') {
        document.getElementById('customAmount').value = 1;
    } else if (amountSelection == 'medium') {
    	document.getElementById('customAmount').value = 3;
    } else if (amountSelection == 'large') {
    	document.getElementById('customAmount').value = 5;
    }    
}

function updateAmountSelect() {
    document.getElementById('amount').value = 'customAmount';
}

function checkBoxes(frequencies) {
	for (var i = 0; i < frequencies.length; i++) {
		document.getElementById('' + frequencies[i] + 'box').checked = true;
	}
}

function updateFrequencyBoxes(frequencySelection) {
	for (var i = 0; i < FREQUENCIES.length; i++) {
		document.getElementById('' + FREQUENCIES[i] + 'box').checked = false;
	}
    if (frequencySelection == 'subBass') {
        checkBoxes(SUBBASS);
    }
    else if (frequencySelection == 'midBass') {
        checkBoxes(MIDBASS);
    }
    else if (frequencySelection == 'lowMids') {
        checkBoxes(LOWMIDS);
    }
    else if (frequencySelection == 'mids') {
        checkBoxes(MIDS);
    }
    else if (frequencySelection == 'upMids') {
        checkBoxes(UPMIDS);
    }
    else if (frequencySelection == 'treble') {
        checkBoxes(TREBLE);
    }
    else if (frequencySelection == 'upTreble') {
        checkBoxes(UPTREBLE);
    }
}

function updateFrequencySelect() {
	document.getElementById('frequency').value = 'customFrequency';
}

function manualUpdate() {
    config.data.datasets.forEach(function(dataset) {
        for (var i = 0; i < dataset.data.length; i++) {
        	ensureNumber(document.getElementById('' + FREQUENCIES[i] + 'hz'));
        	var val = document.getElementById('' + FREQUENCIES[i] + 'hz').value;
        	val = boundVal(val);
        	ensureNumber(val);
        	dataset.data[i].y = val;
        	document.getElementById('' + FREQUENCIES[i] + 'hz').value = val;
        };
    });
    myLine.update();
};

function quickUpdate() {
    config.data.datasets.forEach(function(dataset) {
    	var operator = document.getElementById('operation').value;
    	if (operator != '+' && operator != '-') {
    		return;
    	}
    	ensureNumber(document.getElementById('customAmount'));
    	var combineVal = document.getElementById('customAmount').value;
    	for (var i = 0; i < FREQUENCIES.length; i++) {
    		if (document.getElementById('' + FREQUENCIES[i] + 'box').checked) {
    			var oldVal = dataset.data[i].y;
    			var newVal = eval('' + oldVal + ' ' + operator +  ' ' + combineVal);
    			newVal = boundVal(newVal);
    			newVal = newVal.toFixed(2);
    			dataset.data[i].y = newVal;
            	document.getElementById('' + FREQUENCIES[i] + 'hz').value = newVal;
    		}
    	}
    });
    myLine.update();
}

function reset() {
    config.data.datasets.forEach(function(dataset) {
        for (var i = 0; i < dataset.data.length; i++) {
        	dataset.data[i].y = 0;
        	document.getElementById('' + FREQUENCIES[i] + 'hz').value = 0;
        };
    });
    myLine.update();
}

function calculateAverage(values) {
	var average = 0;
	for (var i = 0; i < values.length; i++) {
		average += values[i];
	}
	average /= values.length;
	return average;
}

function insertHeadphone(index, totalSD, lSDArr, headphone, closestHeadphones) {
	for (var i = lSDArr.length - 1; i > index; i--) {
		lSDArr[i] = lSDArr[i - 1];
		closestHeadphones[i] = closestHeadphones[i - 1];
	}
	lSDArr[index] = totalSD;
	closestHeadphones[index] = headphone;
}

function analyze() {
	var type = document.getElementById('type').value;
	var compareList = [];
	if (type == 'All') {
		compareList = headphones;
	}
	else {
		for (var i = 0; i < headphones.length; i++) {
			var headphone = headphones[i];
			if (headphone.type == type) {
				compareList.push(headphone);
			}
		}
	}
	
	var returnAmt = document.getElementById('returnAmt').value;
	if (compareList.length < returnAmt) {
		returnAmt = compareList.length;
	}
	
	var optimalF = [];
	for (var i = 0; i < FREQUENCIES.length; i++) {
		optimalF[i] = parseFloat(document.getElementById('' + FREQUENCIES[i] + 'hz').value);
	}
	
	var lSDArr = [];
	lSDArr.length = returnAmt;
	lSDArr.fill(-1);
	var closestHeadphones = [];
	closestHeadphones.length = returnAmt;
	for (var i = 0; i < compareList.length; i++) {
		var headphone = compareList[i];
		if (headphone == headphones[document.getElementById('headphone').value]) {
			continue;
		}
		var hpF = headphone.dBVals;
		var totalSD = 0;
		var aveDiff = calculateAverage(optimalF) - calculateAverage(hpF);
		for (var j = 0; j < FREQUENCIES.length; j++) {
			var difference = optimalF[j] - hpF[j] - aveDiff;
			totalSD += difference * difference;
		}
		for (var j = 0; j < lSDArr.length; j++) {
			if (lSDArr[j] < 0 || totalSD < lSDArr[j]) {
				insertHeadphone(j, totalSD, lSDArr, headphone, closestHeadphones);
				break;
			}
		}
	}
	displayHeadphones(closestHeadphones);
}

function displayHeadphones(headphones) {
	var slideshow = document.getElementsByClassName('slideshow-container')[0];
	while (slideshow.lastChild.className != 'next') {
		slideshow.removeChild(slideshow.lastChild);
	}
	for (var i = 0; i < headphones.length; i++) {
		var choiceNum = i + 1;
		var slide = document.createElement('div');
		slide.className = 'slide';
		slide.innerHTML = '<h4> Match #' + choiceNum + ': </h4> <h5> ' + '<a href="http://www.google.com/search?q=' + headphones[i].name + '" style="color: white">' + headphones[i].name + '</a> <br> </h5>' +
							'<h4> Type: </h4> <h5> ' + headphones[i].type + '<br> </h5>' +
							'<h4>Measurements: </h4> <h5> <br> <a href="' + headphones[i].url + '" style="color: white; font-size: 32px">' + headphones[i].url + '</a> </h5>';
		slideshow.appendChild(slide);
	}
	slideshow.style.display = 'inline-block';
	slideIndex = 1;
	showSlides(slideIndex);
}

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('slide');
	if (n > slides.length) {slideIndex = 1} 
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none'; 
	}
	slides[slideIndex-1].style.display = 'inline-block'; 
}