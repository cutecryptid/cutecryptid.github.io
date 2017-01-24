$('document').ready(function(){
  var sideSlider = document.getElementById('side-slider');
  var iterSlider = document.getElementById('iteration-slider');
  var exclSlider = document.getElementById('excluded-slider');

  var sideInput = document.getElementById('side-value');
  var iterInput = document.getElementById('iteration-value');
  var exclInput = document.getElementById('excluded-value');

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

  noUiSlider.create(exclSlider, {
    start: 1,
    connect: "lower",
    step: 1,
    range: {
      min: 1,
      max: 4
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

  exclSlider.noUiSlider.on('update', function( values, handle ) {
    exclInput.value = values[handle];
  });

  exclInput.addEventListener('change', function(){
    exclSlider.noUiSlider.set(this.value);
  });
});
