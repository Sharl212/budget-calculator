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
          $("#result").text(id + '  DELETED!');
          $('#result').css({
            display: 'inline-block'
          });
          $("#result").fadeOut(5000, function() { $(this).remove(); });
          console.log('success');
      },
        error: function(err, status, xhr){
          $('#result').css('display: inline-block;');
          console.log('error: ', err);
        }
    });
  });
});
