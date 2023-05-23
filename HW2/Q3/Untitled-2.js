<!DOCTYPE html>
<meta charset="utf-8">

<style type="text/css">



/* 13. Basic Styling with CSS */

/* Style the lines by removing the fill and applying a stroke */

h2 {
  position: absolute;
  left: 700px;
  top:  600px;
}

.line {
    fill: none;
    stroke: #ffab00;
    stroke-width: 3;
}  
.overlay {
  fill: none;
  pointer-events: all;
}

.rect {

fill: #FFC300;
stroke: none;
stroke-width: 1.5px;
}

/* Style the dots by assigning a fill and stroke */
.dot {
    fill: #ffab00;
    stroke: #fff;
}
  
  .focus circle {
  fill: none;
  stroke: steelblue;
}

</style>

<h2>GT Username: fsedaghati4</h2>

<!-- Body tag is where we will append our SVG and SVG objects-->
<body>
</body>

<!-- Load in the d3 library -->
<script type="text/javascript" src="../lib/d3.v5.min.js"></script>
<script>

var dataset = []
var parseTime = d3.timeParse("%Y-%m-%d");
var formatTime = d3.timeFormat("%b%y");
var colors = ['#FF4500','#FF7F50','#FFA500','#FFD700','#FFE4B5','#FFEBCD','#FF1493','#F08080']
var types = ["Catan=count", "Dominion=count", "Codenames=count", "Terraforming Mars=count", "Gloomhaven=count", "Magic: The Gathering=count","Dixit=count","Monopoly=count"]
var types_name = ["Catan", "Dominion", "Codenames", "Terraforming Mars", "Gloomhaven", "Magic: The Gathering","Dixit","Monopoly"]

// 1. Load the data
d3.csv("boardgame_ratings.csv").then(function (data) {

    data.forEach(function(d) {
    d["date"] = parseTime(d["date"]);
    d["Catan=count"] = + d["Catan=count"];
    d["Dominion=count"] = + d["Dominion=count"];
    d["Codenames=count"] = + d["Codenames=count"];
    d["Terraforming Mars=count"] = + d["Terraforming Mars=count"];
    d["Magic: The Gathering=count"] = + d["Magic: The Gathering=count"];
    d["Gloomhaven=count"] = + d["Gloomhaven=count"];
    d["Dixit=count"] = + d["Dixit=count"];
    d["Monopoly=count"] = + d["Monopoly=count"];
  })