console.log("hello world");


$(document).ready(function() {
  alert("Ready for DOM manipulation");
});

$(function() {
  alert("Ready for DOM manipulation");

$('#secretBox').css('background', 'white');

$('#row1 div').addClass('boxType3');

// $('#row4 div:last-child').css('display', 'none');
$('#row4 div').last().css('display', 'none');

$('.boxType1').css('background', 'white');

$('div #row4 > *:lt(2)').removeClass();

$('.box').not('#secretBox').width('2px');

$('#container').on('click', function(event) {
  console.log("This is mouse position on click: (" + event.pageX + ", " + event.pageY + ").");
});

$('.boxType1').html('<a href="http://www.galvanize.com">TAKE ME TO GALVANIZE</a>').on('click', function(event){
  event.preventDefault();
  alert('YOU CAN NEVER LEAVE THIS UGLY PAGE');
});

$('.box').click(function() {
  $(this).removeAttr('style').toggleClass('toggleImg');
});

$('#container').click(function(event) {
  if(event.classList.contains('box')) {
   $(this).css('background', 'white');
   $('#container').css('background', 'black');
  } else {
    $(this).css('background', 'limeGreen');
  };
});

});

