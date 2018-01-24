function check(){
  var firstTitle = $("input[name*='firstTitle']").val(),
       firstPrice = $("input[name*='firstPrice']").val(),
       secondTitle = $("input[name*='secondTitle']").val(),
       secondPrice = $("input[name*='secondPrice']").val();

function firstTitleError(){
  $("#stitle").addClass('alert-warning').removeClass('alert-success');
  $("#stitle").text('first item is empty!!');
  $('#stitle').css({
    display: 'inline-block'
  });
  $("#stitle").fadeOut(3000, function() { $(this).css({display: 'none'})});
}

if(firstTitle === ""){
    return firstTitleError();
  }else if(firstPrice === ""){
    $("input[name*='firstPrice']").css({
      border: '12px solid  greem;'
    });
    $("#stitle").addClass('alert-warning').removeClass('alert-success');
    $("#stitle").text('first price is empty!!');
    $('#stitle').css({
      display: 'inline-block'
    });
    $("#stitle").fadeOut(3000, function() { $(this).css({display: 'none'})});

  }else if(secondTitle === ""){
    $("#stitle").addClass('alert-warning').removeClass('alert-success');
    $("#stitle").text('second item is empty!!');
    $('#stitle').css({
      display: 'inline-block'
    });
    $("#stitle").fadeOut(3000, function() { $(this).css({display: 'none'})});

  }else if(secondPrice === ""){
    $("#stitle").addClass('alert-warning').removeClass('alert-success');
    $("#stitle").text('second price is empty!!');
    $('#stitle').css({
      display: 'inline-block'
    });
    $("#stitle").fadeOut(3000, function() { $(this).css({display: 'none'})});
  }
}
