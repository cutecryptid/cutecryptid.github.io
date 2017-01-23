$('document').ready(function(){
  $.material.init();

  var sideSlider = document.getElementById('side-slider');
  var sideInput = document.getElementById('side-value');
  var canvas = document.getElementById('fractal');
  var ctx = canvas.getContext('2d');
  var vertex = [];


  var midpoint = function(p1, p2, fraction){
    var f = eval(fraction);
    return [Math.floor((p1[0] + p2[0])*f), Math.floor((p1[1] + p2[1])*f)]
  }

  var drawOutline = function(sides, ctx){
    vertex = [];
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    var w = ctx.canvas.width,
      h = ctx.canvas.height,
      size = Math.floor(w*0.9*0.5),
      Xcenter = Math.floor(w*0.5),
      Ycenter = Math.floor(h*0.5);

    ctx.beginPath();
    ctx.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));

    for (var i = 1; i <= sides;i += 1) {
        var vx = Math.floor(Xcenter + size * Math.cos(i * 2 * Math.PI / sides)),
        vy = Math.floor(Ycenter + size * Math.sin(i * 2 * Math.PI / sides));
        vertex.push([vx,vy]);
        ctx.lineTo (vx,vy);
    }

    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  var drawChaosGame = function(vertex, ctx, iter, fraction, randomstart){
    var i = iter;
    var pivot = vertex[0];
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    drawOutline($('#side-value').val(), ctx);
    ctx.strokeStyle = "#000000";
    while (i > 0) {
      var destination = vertex[Math.floor((Math.random() * vertex.length))];
      var pivot = midpoint(pivot, destination, fraction);
      ctx.fillRect( pivot[0], pivot[1], 1, 1 );
      i = i-1;
    }
  }

  ctx.canvas.width = 3*$('#fractal-container').innerWidth()/4;
  ctx.canvas.height = 3*$('#fractal-container').innerWidth()/4;

  $(window).resize(function(){
    ctx.canvas.width = 3*$('#fractal-container').innerWidth()/4;
    ctx.canvas.height = 3*$('#fractal-container').innerWidth()/4;
  });

  sideSlider.noUiSlider.on('update', function( values, handle ) {
    drawOutline($('#side-value').val(), ctx);
  });

  $('#start-stop-button').click(function(){
    drawChaosGame(vertex, ctx, $('#iteration-value').val(), $('#fraction-value').val(), $("#randomstart-checkbox").attr('checked'));
  })
});
