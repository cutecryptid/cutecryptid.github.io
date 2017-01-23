$('document').ready(function(){
  var sideSlider = document.getElementById('side-slider');
  var iterSlider = document.getElementById('iteration-slider');
  var fractionSlider = document.getElementById('fraction-slider');
  var sideInput = document.getElementById('side-value');
  var iterInput = document.getElementById('iteration-value');
  var fractionInput = document.getElementById('fraction-value');

  noUiSlider.create(sideSlider, {
    start: 4,
    step: 1,
    connect: "lower",
    range: {
      min: 3,
      max: 12
    },
    format: wNumb({
  		decimals: 0
  	})
  });

  noUiSlider.create(iterSlider, {
    start: 2000,
    connect: "lower",
    step: 5,
    range: {
      min: 10,
      max: 100000
    },
    format: wNumb({
  		decimals: 0
  	})
  });

  noUiSlider.create(fractionSlider, {
    start: 2,
    connect: "lower",
    step: 1,
    range: {
      min: 2,
      max: 10
    },
    format: wNumb({
  		decimals: 0,
      prefix: '1/'
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

  fractionSlider.noUiSlider.on('update', function( values, handle ) {
    fractionInput.value = values[handle];
  });

  fractionInput.addEventListener('change', function(){
    fractionSlider.noUiSlider.set(this.value);
  });
});
