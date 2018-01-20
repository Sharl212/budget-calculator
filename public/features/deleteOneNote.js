//DELETE a specific note from database
$(function(){
  $('#delete').click(function(data){
    var id = $('#deleteById').val();
      $.ajax({
        url:'/budget/'+ id,
        type: 'delete',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(),
        success: function(data, status, xhr){
          var id = $('#deleteById').val();
          $("#result").addClass('alert-warning').removeClass('alert-success');
          $("#result").text(id + '  was deleted!');
          $('#result').css({
            display: 'inline-block'
          });
          $("#result").fadeOut(3000, function() { $(this).css({
            display: 'none'
          });
        });
      },
        error: function(err, status, xhr){
          $("#result").addClass('alert-danger').removeClass('alert-success');
          $("#result").text('list not found');
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
