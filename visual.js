//arrays for categories the data will be mapped to (tp = transparency)
var dataSource = [];
var tpScore = [];
var tpDescription = [];

//load data and assign values to arrays
d3.json("datas.json").then((data) => {
  var entries = data.datas;
  // console.log(entries);

  for (var i = 0; i < entries.length; i++) {
    dataSource.push(entries[i].sourceName);
    tpScore.push(entries[i].transparency);
    tpDescription.push(entries[i].transparencyDescription);
  }

  console.log(dataSource);
  //run the function to draw circles based on data loaded
  drawCircles();
});

function drawCircles() {
 
  var circle = d3.selectAll("circle"); //selecting all w/ circle tags
  circle.data(tpScore); // pinning our transparency scores to the circles
  circle.style("fill", "blue");

  //setting radius of circles to the score of the data source
  circle.attr("r", (d) => {
    return d * 5;
  });

  //display name of data source when hovering over circle
  circle.on("mouseover", function (a, d) {
    var dataIndex = tpScore.indexOf(d);
    console.log(dataIndex);
    document.getElementById("dataName").innerHTML = dataSource[dataIndex];
  });

  //click on circle to get description of transparency label
  circle.on("click", function (a, d) {
    var dataDes = tpScore.indexOf(d);
    document.getElementById("transparencyDescription").innerHTML =
      tpDescription[dataDes];
  });
}
