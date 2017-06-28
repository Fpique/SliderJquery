$(document).ready(function(){
  initializeSlider();

  function initializeSlider()
  {
    // Load the HTML hook
    var sliderData = $('#slider-container img');
    if(sliderData.length == 0) {
      // If the hook is borker, throw error to stop script
      throw "Erreur de selection"
    }
    $('#slider-container').remove();
  }

});
