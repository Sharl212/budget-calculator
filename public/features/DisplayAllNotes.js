// GET all notes from database
$(function (){
  $("#showAll").click(function(data){
    $.ajax({
      url:'/budget',
      type:'get',
      dataType: 'html',
      contentType: 'application/json',
      data: JSON.stringify(),
      success: function(data){
        if(data){
          var id = $('#id').val();
          $("#result").addClass('alert-success').removeClass('alert-danger' || 'alert-warning');
          $("#result").text(data);
          $('#result').css({
            display: 'inline-block'
          });
          $("#result").fadeOut(10000000, function() { $(this).css({
            display: 'none'
          });
        });
        }
      },
      error: function(err, status, xhr){
        $("#result").addClass('alert-danger').removeClass('alert-success');
        $("#result").text('ERROR!');
        $('#result').css({
          display: 'inline-block'
        });
        $("#result").fadeOut(3000, function() { $(this).css({display: 'none'});
        $("#result").addClass('alert-success').removeClass('alert-danger');
      });
      }
    });
  });
});
