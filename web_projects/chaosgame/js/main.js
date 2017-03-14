$('document').ready(function(){
  $.material.init();

  var sideSlider = document.getElementById('side-slider');
  var sideInput = document.getElementById('side-value');
  var canvas = document.getElementById('fractal');
  var ctx = canvas.getContext('2d');
  var vertex = [];

  var mod = function(n, m) {
    return ((n % m) + m) % m;
  }


  var midpoint = function(p1, p2){
    return [Math.floor((p1[0] + p2[0])/2), Math.floor((p1[1] + p2[1])/2)]
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

  var nextIndex = function(count, lastindexlist, mode){
    var lastindex = lastindexlist[lastindexlist.length-1];
    var prelastindex = lastindexlist[lastindexlist.length-2];
    var available = Array.apply(null, {length: count}).map(Number.call, Number);
    switch(mode){
      case 'exclude-last':
        available.splice(available.indexOf(lastindex),1);
        break;
      case 'exclude-next':
        available.splice(available.indexOf(mod(lastindex+1,count)),1);
        break;
      case 'exclude-skip':
        available.splice(available.indexOf(mod(lastindex+2,count)),1);
        break;
      case 'exclude-fringe':
        available.splice(available.indexOf(mod(lastindex+1,count)),1);
        available.splice(available.indexOf(mod(prelastindex+count-1,count)),1);
        break;
      case 'exclude-distance':
        available.splice(available.indexOf(mod(prelastindex+2,count)),1);
        available.splice(available.indexOf(mod(lastindex+2,count)),1);
        break;
    }
    r = Math.floor((Math.random() * available.length));
    return available[r];
  }

  var drawChaosStep = function(vertex, ctx, iter, mode){
    var i = iter;
    var pivot = vertex[0];
    var lastindexlist = [0,0];
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    drawOutline($('#side-value').val(), ctx);
    while (i > 0) {
      var destinationindex = nextIndex(vertex.length, lastindexlist, mode);
      lastindexlist.push(destinationindex);
      var destination = vertex[destinationindex];
      var pivot = midpoint(pivot, destination);
      var redint = Math.floor((i*255)/iter);
      ctx.fillStyle = "rgb("+redint+",0,0)";
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

  $('.vertex-buttons a').click(function(){
    $('.vertex-buttons').children().removeClass('btn-info');
    $(this).addClass('btn-info');
  })

  $('#start-stop-button').click(function(){
    drawChaosStep(vertex, ctx, $('#iteration-value').val(), $('.vertex-buttons .btn-info').attr('id'));
  })
});
