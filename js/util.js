

$('#left').on('click', function() {
  var count = $('.slider-body .slide').length;
  var columns = 6;
  var columnWidth = 100 / columns;

  if (count <= columns) return;

  var leftItem = $('.slider-body').data('left item');
  if (typeof leftItem === "undefined") {
    leftItem = 0;
  }

  leftItem = leftItem - 1;
  if (leftItem < 0) leftItem = 0;
  $('.slider-body').data('left item', leftItem);

  $('.slider-body').css('margin-left', -columnWidth * leftItem + '%');

});

$('#right').on('click', function() {
  var count = $('.slider-body .slide').length;
  var columns = 3;
  var columnWidth = 100 / columns;

  if (count <= columns) return;

  var leftItem = $('.slider-body').data('left item');
  if (typeof leftItem === "undefined") {
    leftItem = 0;
  }

  leftItem = leftItem + 1;
  if ((leftItem + columns) > count) leftItem = count - columns;
  $('.slider-body').data('left item', leftItem);

  $('.slider-body').css('margin-left', -columnWidth * leftItem + '%');

});

$(document).ready(function() {
  $('.minus').click(function () {
    var $input = document.getElementById('inputCount');
    var count = parseInt($input.value) - 1;
    count = count < 1 ? 1 : count;
    $input.value = count;
    ChangePrice();
    return false;
  });
  $('.plus').click(function () {
    var $input = document.getElementById('inputCount');
    $input.value = (parseInt($input.value) + 1);
    ChangePrice();
    return false;
  });

  $('#inputCount').change(function(){
    ChangePrice();
  });
  $('input[type=checkbox]').click(function(){
    ChangePrice();
  });

  $('#inputCount').on('keyup', function() {
    $(this).val($(this).val().replace(/\D/, ''));
  });


});

function ChangePrice(){
      var hifloat = 0;
      var oxigen = 0;
      var count = parseInt(document.getElementById('inputCount').value);
      var sale = parseInt(document.getElementById('sale').value);
      var finalprice = document.getElementById('final-price');
      var price = parseInt(document.getElementById('price').value);

  if(document.getElementById('hifloat').checked){
    hifloat = 5;
  }
  if(document.getElementById('oxigen').checked){
    oxigen = 25;
  }
      count = count < 1 ? 1 : count;
      finalprice.innerHTML = count * (price + hifloat + oxigen);

}

function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}