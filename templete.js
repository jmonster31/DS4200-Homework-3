// Load the data
const penguins = d3.csv("penguins.csv");

// Once the data is loaded, proceed with plotting
penguins.then(function(data) {
    // Convert string values to numbers
    data.forEach(function(d) {
        d.bill_length_mm = +d.bill_length_mm;
        d.flipper_length_mm = +d.flipper_length_mm;
    });

    // Define the dimensions and margins for the SVG
    let 
        width = 600,
        height = 400;
  
    let margin = {
        top: 40,
        bottom: 30,
        left: 30,
        right: 30
    };

    // Create the SVG container
    let svg = d3
        .select('body')
        .append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('background', '#e9f7f2');
    
    // Set up scales for x and y axes
    let yScale = d3.scaleLinear()
        .domain([0, 10])
        .range([height - margin.bottom, margin.top]);

    let xScale = d3.scaleLinear()
        .domain(
            data.map(d => d.flipper_length_mm)
        )
        .range([margin.left, width - margin.right])
        .padding(0.5);
    //Draw Axes
    let yAxis = svg
        .append('g')
            .attr('transform', `translate(${margin.left},0)`)
            .call(d3.axisLeft().scale(yScale));

    let xAxis = svg
        .append('g')
            .attr('transform', `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom().scale(xScale));

     d3.min(data, d => d.bill_length_mm)-5

    const colorScale = d3.scaleOrdinal()
        .domain(data.map(d => d.species))
        .range(d3.schemeCategory10);

    // Add scales     


    // Add circles for each data point
    let circle = svg
        .selectAll('circle')
            .data(data)
        .enter()
        .append('circle')
            .attr('cx', d => xScale(d.flipper_length_mm) +
                .5 * xScale.bandwidth())
            .attr('cy', d => yScale(d.bill_length_mm))
            .attr('r', 6)
            .attr('fill', 'steelblue');

    // Add x-axis label
    xAxis
        .append('text')
            .attr('x', width - margin.left)
            .attr('y', -10)
            .style('stroke', 'black')
            .text('Flipper Length (mm)');   

    // Add y-axis label
    yAxis
        .append('text')
            .attr('y', 30)
            .attr('x', 20)
            .style('stroke', 'black')
            .text('Bill Length (mm)');

    // Add legend
    const legend = svg.selectAll(".legend")
        .data(colorScale.domain())
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", (d, i) => "translate(0," + i * 20 + ")");

});

penguins.then(function(data) {
    // Convert string values to numbers
    data.forEach(function(d) {
        d.bill_length_mm = +d.bill_length_mm;
        d.flipper_length_mm = +d.flipper_length_mm;

    // Define the dimensions and margins for the SVG
    let 
        width = 600,
        height = 400;
  
    let margin = {
        top: 40,
        bottom: 30,
        left: 30,
        right: 30
    };    

    // Create the SVG container
    let 
        width = 600,
        height = 400;
  
    let margin = {
        top: 40,
        bottom: 30,
        left: 30,
        right: 30
    };

    let svg = d3
        .select('body')
        .append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('background', '#e9f7f2');

    // Set up scales for x and y axes
    let yScale = d3.scaleLinear()
        .domain([0, 10])
        .range([height - margin.bottom, margin.top]);

    let xScale = d3.scaleLinear()
        .domain(
            data.map(d => d.flipper_length_mm)
    )
    .range([margin.left, width - margin.right])
    .padding(0.5);

    // Add x-axis label
    xAxis
        .append('text')
            .attr('x', width - margin.left)
            .attr('y', -10)
            .style('stroke', 'black')
            .text('Flipper Length (mm)');   

    // Add y-axis label
    yAxis
        .append('text')
            .attr('y', 30)
            .attr('x', 20)
            .style('stroke', 'black')
            .text('Bill Length (mm)');    

    const rollupFunction = function(groupData) {
        const values = groupData.map(d => d.flipper_length_mm).sort(d3.ascending);
        const q1 = d3.quantile(values, 0.25);
        return { q1};
    };

    const quartilesBySpecies = d3.rollup(data, rollupFunction, d => d.species);

    quartilesBySpecies.forEach((quartiles, species) => {
        const x = xScale(species);
        const boxWidth = xScale.bandwidth();

        // Draw vertical lines
        
        // Draw box
        
        // Draw median line
        
        
    });
});