//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  })
}

function pressIt() {
  $('input:first-child').on('keydown', function() {
    if(key.which == 'g')
  })
}

function submitIt() {}

$(document).ready(function(){

// call functions here

});
