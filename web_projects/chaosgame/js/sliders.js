$('document').ready(function(){
  var sideSlider = document.getElementById('side-slider');
  var iterSlider = document.getElementById('iteration-slider');

  var sideInput = document.getElementById('side-value');
  var iterInput = document.getElementById('iteration-value');

  noUiSlider.create(sideSlider, {
    start: 3,
    step: 1,
    connect: "lower",
    range: {
      min: 3,
      max: 6
    },
    format: wNumb({
  		decimals: 0
  	})
  });

  noUiSlider.create(iterSlider, {
    start: 5000,
    connect: "lower",
    step: 5,
    range: {
      min: 500,
      max: 100000
    },
    format: wNumb({
  		decimals: 0
  	})
  });

  sideSlider.noUiSlider.on('update', function( values, handle ) {
  	sideInput.value = values[handle];
  });

  sideInput.addEventListener('change', function(){
  	sideSlider.noUiSlider.set(this.value);
  });

  iterSlider.noUiSlider.on('update', function( values, handle ) {
    iterInput.value = values[handle];
  });

  iterInput.addEventListener('change', function(){
    iterSlider.noUiSlider.set(this.value);
  });
});
