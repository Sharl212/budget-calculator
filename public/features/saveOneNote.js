// POST notes to database
$(function(){
  $("#save").click(function(){
    $.ajax({
      url: '/budget',
      contentType: 'application/json',
      dataType: 'json',
      type: 'post',
      data: JSON.stringify({
       item1: $('#title1').val(),
       price1: $("#price1").val(),
       item2: $('#title2').val(),
       price2: $("#price2").val(),
       TotalCost: $('#totalbudget').val()
     }),
      success: function(data, status, xhr){console.log('success');},
      error: function(err, status, xhr){console.log('error: ', err);}
    });
  });
});
