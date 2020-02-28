/* Button event to interac with draw-area */

var whiteBoard = new SVG('draw-area');
whiteBoard.size(1500, 800);

function drawRect(){
  let id_ = database.createID("rect");
  // TO-DO list

  whiteBoard.rect().draw().attr({ fill: 'green', opacity: 0.2, class: "resize-drag", id: id_});
  console.log("asynchronous called")
//   database.addElement("rect", 50, 50, 100, 100)
}

function drawEllipse(){
  whiteBoard.ellipse().draw().attr({ fill: 'red', class: "resize-drag" });
}

function drawCircle(){
  whiteBoard.circle().draw().attr({ fill: 'red', class: "resize-drag" });
}

function drawPoligon(){
  // console.log("polygon.on()", poly1.on())  
  whiteBoard.polygon().draw().attr({class: "resize-drag" });

  whiteBoard.on('drawstart', function(e){
    alert('in event drawstart')
    document.addEventListener('keydown', function(e){
      if (e.keyCode == 13) {
      poly1.draw('done');
      poly1.off('drawstart');
    }
    })
  })


  whiteBoard.on('drawstop', function () {
  console.log("done enter button 1")
  // remove listener
  });

}
//


whiteBoard.on('drawstart', function (e) {
  console.log("done enter button")
  document.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
      poly1.draw('done');
      poly1.off('drawstart');
    }
  });
});

whiteBoard.on('drawstop', function () {
  console.log("done enter button 1")
  // remove listener
});
