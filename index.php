<!doctype html>
<html>

<head>
    <title>Headphone Recommender</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Baloo+Tammudu" rel="stylesheet">
    <link href="style.css" type="text/css" rel="stylesheet">
    <script src="https://www.google.com/jsapi"></script>
    <script src="js/Chart.bundle.js"></script>
    <script src="js/graph.js"></script>
    <?php include "C:\Users\Adam\Web\php.php" ?>
</head>

<body>
	<div id="wrapper"> 
	
        <header>
        	Headphone <br> Recommender
        </header>
        
        <div class="top-text">
        	<div style="text-align: center">
    	    	<br>
    	    	<h1 style="font-style: bold; font-size: 2.3em;">What if you could find the perfect headphone using frequency response alone?</h1>
    	    	<br>
    	    	<h3 style="padding: .5em 0em .5em 0em; border-bottom: .5em groove #72758e; border-top: .5em groove #72758e;">
    	    	<b>Well now you can!</b><br> 
    	    	Whether you're a newcomer to the hobby (with experience with at least one headphone on the list)
    	    	or a headphone connoisseur who falls asleep to sine wave sweeps, this tool can help <i>you</i> find the perfect headphone!
    	    	<br>
    	    	</h3>
    	    </div>
        	<br>
            <h1><i>How It Works:</i></h1>
        	<h3 style="text-indent: 2em;">Using the massive database of headphones available on
        	<a href="http://www.Innerfidelity.com" style="color: white">Innerfidelity.com</a>, this web app allows you to
        	find new headphones by modifying the frequency resonse graphs of headphones you already know. For a more in-depth
        	look at how it works and how to use it, click <a href="about.php" style="color: white">here</a>.
        	</h3>
        	<br>
        	<h1><i>Instructions:</i></h1>
        	<h3 style="text-indent: 2em;">Begin by selecting a preset frequency response from the list of headphones beside the graph, or start from scratch.
        	To edit the graph, either use the editor beside the graph or manually edit the values for each frequency below the graph.
        	Finally, select the type of headphone you're looking for and click the button at the bottom of the page to find the closest matches.
        	</h3>
    		<br>
        </div>
    	<img src="images/headphones.png" alt="The Stax L700, Audeze LCD-3, and Sennheiser HD800" style="display: inline-block; width: 65em;">
        
        <br><br><br>
        
        <div class="graph">
            <canvas id="canvas" width="1360"></canvas>
        </div>
        
        <div class="graphSide">
        
        	<br>
        	<h2>Preloaded Frequency<br>Responses:</h2>
        	<br>
        	<select id="headphone" onchange="loadHeadphone(this.value)" style="width:20em">
    			<option value="default"></option>
    		</select>
    		<br><br>
    		
        	<h2>Quick edit:</h2>  	
        	<h3>I want to:</h3>
        	<h3></h3>
            <select id="operation" style="width:100px">
            	<option value="default"></option>
    			<option value="+">Add</option>
    			<option value="-">Subtract</option>
    		</select>
    		<br>
    		
    		<h3>a</h3>		
    		<p><span>
    			<select id="amount" onchange="updateAmountInput(this.value);" style="width:150px">
    		    	<option value="default"></option>
    				<option value="small">Small amount</option>
    				<option value="medium">Medium amount</option>
    				<option value="large">Large amount</option>
    				<option value="customAmount">Custom amount</option>
    			</select>
        		&nbsp; ( <input type="text" class="quickInput" id="customAmount" value=0
        		style="text-align: center" onclick="updateAmountSelect()" onblur="ensureInt(this)"> dB )
        	</span></p>
        	
    		<h3>of</h3>
    		 <select id="frequency" onchange="updateFrequencyBoxes(this.value);" style="width: 250px">
    		 	<option value="default"></option>
    			<option value="subBass">Sub-bass (20-60hz)</option>
    			<option value="midBass">Mid-bass (70-200hz)</option>
    			<option value="lowMids">Lower midrange (300-600hz)</option>
    			<option value="mids">Midrange (700-1000hz)</option>
    			<option value="upMids">Upper midrange (2000-4000hz)</option>
    			<option value="treble">Treble (5000-7000hz)</option>
    			<option value="upTreble">Upper treble (8000-10000hz)</option>
    			<option value="customFrequency">Custom frequencies</option>
    		</select>
    		<br><br>
    		
        	<p style="line-height: 22px;  word-spacing: 20px; white-space: nowrap">
        	<input type="checkbox" id="20box" onclick="updateFrequencySelect()">20
        	<input type="checkbox" id="30box" onclick="updateFrequencySelect()">30
        	<input type="checkbox" id="40box" onclick="updateFrequencySelect()">40
        	<input type="checkbox" id="50box" onclick="updateFrequencySelect()">50
        	<input type="checkbox" id="60box" onclick="updateFrequencySelect()">60
        	<br>
        	<input type="checkbox" id="70box" onclick="updateFrequencySelect()">70
        	<input type="checkbox" id="80box" onclick="updateFrequencySelect()">80
        	<input type="checkbox" id="90box" onclick="updateFrequencySelect()">90
        	<input type="checkbox" id="100box" onclick="updateFrequencySelect()">100
        	<input type="checkbox" id="200box" onclick="updateFrequencySelect()">200
        	<br>
        	<input type="checkbox" id="300box" onclick="updateFrequencySelect()">300
        	<input type="checkbox" id="400box" onclick="updateFrequencySelect()">400
        	<input type="checkbox" id="500box" onclick="updateFrequencySelect()">500
        	<input type="checkbox" id="600box" onclick="updateFrequencySelect()">600
        	<br>
        	<input type="checkbox" id="700box" onclick="updateFrequencySelect()">700
        	<input type="checkbox" id="800box" onclick="updateFrequencySelect()">800
        	<input type="checkbox" id="900box" onclick="updateFrequencySelect()">900
        	<input type="checkbox" id="1000box" onclick="updateFrequencySelect()">1000
        	<br>
        	<input type="checkbox" id="2000box" onclick="updateFrequencySelect()">2000
        	<input type="checkbox" id="3000box" onclick="updateFrequencySelect()">3000
        	<input type="checkbox" id="4000box" onclick="updateFrequencySelect()">4000
        	<br>
        	<input type="checkbox" id="5000box" onclick="updateFrequencySelect()">5000
        	<input type="checkbox" id="6000box" onclick="updateFrequencySelect()">6000
        	<input type="checkbox" id="7000box" onclick="updateFrequencySelect()">7000
        	<br>
        	<input type="checkbox" id="8000box" onclick="updateFrequencySelect()">8000
        	<input type="checkbox" id="9000box" onclick="updateFrequencySelect()">9000
        	<input type="checkbox" id="10000box" onclick="updateFrequencySelect()">10000
        	</p>    	
        	<br>
        	
    		<button id="update" onclick="quickUpdate()" style="width: 150px; height: 32px">Update Graph</button>
    		
    	</div>
    	
    	<div class="graphBottom">
            <label>20 <input class="manualInput" type="text" id="20hz" value=0 onblur="manualUpdate()"></label>
            <label>30<input class="manualInput" type="text" id="30hz" value=0 onblur="manualUpdate()"></label>
            <label>40<input class="manualInput" type="text" id="40hz" value=0 onblur="manualUpdate()"></label>
            <label>50<input class="manualInput" type="text" id="50hz" value=0 onblur="manualUpdate()"></label>
            <label>60<input class="manualInput" type="text" id="60hz" value=0 onblur="manualUpdate()"></label>
            <label>70<input class="manualInput" type="text" id="70hz" value=0 onblur="manualUpdate()"></label>
            <label>80<input class="manualInput" type="text" id="80hz" value=0 onblur="manualUpdate()"></label>
            <label>90<input class="manualInput" type="text" id="90hz" value=0 onblur="manualUpdate()"></label>
            <label>100<input class="manualInput" type="text" id="100hz" value=0 onblur="manualUpdate()"></label>
            <label>200<input class="manualInput" type="text" id="200hz" value=0 onblur="manualUpdate()"></label>
            <label>300<input class="manualInput" type="text" id="300hz" value=0 onblur="manualUpdate()"></label>
            <label>400<input class="manualInput" type="text" id="400hz" value=0 onblur="manualUpdate()"></label>
            <label>500<input class="manualInput" type="text" id="500hz" value=0 onblur="manualUpdate()"></label>
            <label>600<input class="manualInput" type="text" id="600hz" value=0 onblur="manualUpdate()"></label>
            <label>700<input class="manualInput" type="text" id="700hz" value=0 onblur="manualUpdate()"></label>
            <label>800<input class="manualInput" type="text" id="800hz" value=0 onblur="manualUpdate()"></label>
            <label>900<input class="manualInput" type="text" id="900hz" value=0 onblur="manualUpdate()"></label>
            <label>1000<input class="manualInput" type="text" id="1000hz" value=0 onblur="manualUpdate()"></label>
            <label>2000<input class="manualInput" type="text" id="2000hz" value=0 onblur="manualUpdate()"></label>
            <label>3000<input class="manualInput" type="text" id="3000hz" value=0 onblur="manualUpdate()"></label>
            <label>4000<input class="manualInput" type="text" id="4000hz" value=0 onblur="manualUpdate()"></label>
            <label>5000<input class="manualInput" type="text" id="5000hz" value=0 onblur="manualUpdate()"></label>
            <label>6000<input class="manualInput" type="text" id="6000hz" value=0 onblur="manualUpdate()"></label>
            <label>7000<input class="manualInput" type="text" id="7000hz" value=0 onblur="manualUpdate()"></label>
            <label>8000<input class="manualInput" type="text" id="8000hz" value=0 onblur="manualUpdate()"></label>
            <label>9000<input class="manualInput" type="text" id="9000hz" value=0 onblur="manualUpdate()"></label>
            <label>10000<input class="manualInput" type="text" id="10000hz" value=0 onblur="manualUpdate()"></label>
            &nbsp; &nbsp; <button id="reset" onclick="reset()" style="width: 86px; height: 24px">Reset</button>
            
            <br><br><br><br>
            
    	</div>
    	
    	<div class="results">
    	
    	    <div class="result-options">
    	    
    	        <h2><span>Type of results:
    	        <select id="type" style="vertical-align: middle; width:160px">
    	        	<option value="default"></option>
    	        	<option value="All">All Types</option>
    				<option value="Full-Size Open">Full-Size Open</option>
    				<option value="Full-Size Sealed">Full-Size Sealed</option>
    				<option value="Earpad Open">Earpad Open</option>
    				<option value="Earpad Sealed">Earpad Sealed</option>
    				<option value="In-Ear">In-Ear</option>
    				<option value="Earbud">Earbud</option>
    				<option value="Noise-Cancelling">Noise-Cancelling</option>
    				<option value="Wireless">Wireless</option>
    			</select>
    			</span></h2>
    			
    			<br>
    			
    			<h2><span>
    			Number of results:
    			<input type="text" class="resultInput" id="returnAmt" value=5 onblur="ensureInt(this)">
    			</span></h2>
    			
    	        <br>
    			
    			<button id="analyze" onclick="analyze()" style="width: 240px; height: 40px">Find your headphone(s)!</button>
    			
    		</div>
    		
    		<div class="slideshow-container">
    			<a class="prev" onclick="plusSlides(-1)"><b>&#10094;</b> Prev</a>
    			<a class="next" onclick="plusSlides(1)">Next <b>&#10095;</b></a>
    		</div>
    		
    		<br>
    	
    	</div>
            
    	<br><br><br>
	</div>
</body>

</html>
