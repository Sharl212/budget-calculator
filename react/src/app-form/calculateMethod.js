import $ from 'jquery'; 

export function calc(){
   $('.price').keyup(function () {

    var sum = 0;
    $('.price').each(function() {
      sum += Number($(this).val());
    });

    $('#totalbudget').val(sum);
  });
}