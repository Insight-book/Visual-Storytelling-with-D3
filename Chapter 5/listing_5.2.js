var barLabelGroup = svg.append("g")
     .attr("transform", translateText)
     .attr("class","bar-label");

barLabelGroup.selectAll("text") 
    .data(barLabels).enter()
    .append("text") 
    .attr("x",-10)
    .attr("y", function(d,i) {return i * barSpacing + barHeight*(2/3)}) 
    .text(function(d) {return d});

 var axisTickGroup = svg.append("g") 
    .attr("transform", translateText) 
    .attr("stroke", "black");

 axisTickGroup.selectAll("line") 
    .data(axisData).enter()
    .append("line")
    .attr("x1", function(d) {return d*scaleFactor}) 
    .attr("x2", function(d) {return d*scaleFactor}) 
    .attr("y1", 0)
    .attr("y2", -tickHeight);

 var axisLabelGroup = svg.append("g") 
    .attr("transform", translateText) 
    .attr("class", "axis-label");

 axisLabelGroup.selectAll("text") 
    .data(axisData).enter()
    .append("text")
    .attr("x", function(d) {return d * scaleFactor})
    .attr("y", -tickHeight - tickGap)
    .text(function(d) {return d + "%"});
