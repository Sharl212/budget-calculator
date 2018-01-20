// POST notes to database
$(function(){
  $("#save").click(function(){
    $.ajax({
      url: '/budget',
      contentType: 'application/json',
      dataType: 'json',
      type: 'post',
      data: JSON.stringify({
       _id: $('#id').val(),
       item1: $('#title1').val(),
       price1: $("#price1").val(),
       item2: $('#title2').val(),
       price2: $("#price2").val(),
       TotalCost: $('#totalbudget').val()
     }),
      success: function(data, status, xhr){
        var id = $('#id').val();
        $("#result").text(id + '  is added to your list!');
        $('#result').css({
          display: 'inline-block'
        });
        $("#result").fadeOut(3000, function() { $(this).css({
          display: 'none'
        });
      });
      },
      error: function(err, status, xhr){
        console.log('error: ', err);
        $("#result").addClass('alert-danger').removeClass('alert-success');
        $("#result").text('ERROR!');
        $('#result').css({
          display: 'inline-block'
        });
        $("#result").fadeOut(3000, function() { $(this).css({
          display: 'none'
        });
        $("#result").addClass('alert-success').removeClass('alert-danger');
      });
      }
    });
  });
});
