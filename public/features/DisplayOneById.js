// GET one note by ID
$(function (){
  $("#ShowByID").click(function(doc){
    var id = $('#searchbyid').val();
    $.ajax({
      url:'/budget/' + id,
      type:'get',
      dataType: 'html',
      contentType: 'application/json',
      data: JSON.stringify(),
      success: function(doc){
        if(doc){
          var id = $('#id').val();
          $("#result").addClass('alert-success').removeClass('alert-danger' || 'alert-warning');
          $("#result").text(doc);
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
