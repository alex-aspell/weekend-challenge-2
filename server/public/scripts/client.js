console.log('Heyyyy')
$(document).ready(onReady);

function onReady(){
  console.log('JQ');
  $('#calculateButton').on('click', function(){
    // console.log('clicked');
    // console.log($('#number1Input').val());
    // console.log($('#symbol').val());
    // console.log($('#number2Input').val());
    $.ajax({
      type: 'POST',
      url: '/calculate',
      data: { n1: $('#number1Input').val(),
              v: $('#symbol').val(),
              n2: $('#number2Input').val()
            }
      }).done(function(response){
        console.log(response, 'response');
        getCalculation();
      }).fail(function(response){
        console.log('You done messed up A A ron');
      })//end .fail function
    })//end .ajax post
  // end onClick
}// end onReady

function getCalculation(){
  $.ajax({
    type: 'GET',
    url: '/calculate/get'
  }).done(function(response) {
      // Request was successful
      console.log('Request was successful', response);
      showAnswer(response);
      showHistory(response);
    }).fail(function(response) {
      // If stuff goes wrong on the server...
      console.log(response);
    })
}

function showAnswer(number){
  $('#printAnswer').children().empty();
  $('#printAnswer').append('<div>' + number.calc + '</div>');
}

function showHistory(number){
  $('#history').append('<div>' + $('#number1Input').val() + $('#symbol').val() + $('#number2Input').val() + '=' + number.calc + '</div>');
}
