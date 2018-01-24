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
          $("#deleteOneNote").addClass('alert-warning').removeClass('alert-success');
          $("#deleteOneNote").text(id + '  was deleted!');
          $('#deleteOneNote').css({
            display: 'inline-block'
          });
          $("#deleteOneNote").fadeOut(3000, function() { $(this).css({
            display: 'none'
          });
        });
      },
        error: function(err, status, xhr){
          $("#deleteOneNote").addClass('alert-danger').removeClass('alert-success');
          $("#deleteOneNote").text('list not found');
          $('#deleteOneNote').css({
            display: 'inline-block'
          });
          $("#deleteOneNote").fadeOut(3000, function() { $(this).css({
            display: 'none'
          });
          $("#deleteOneNote").addClass('alert-success').removeClass('alert-danger');
        });
        }
    });
  });
});
