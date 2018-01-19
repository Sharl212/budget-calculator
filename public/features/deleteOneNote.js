  //DELETE a specific note from database
$(function(){
  $('#delete').click(function(){
    var id = $('#id').val();
      $.ajax({
        url:'/budget/'+ id,
        type: 'delete',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({
        data: $('#data').html(data)
      }),
        success: function(data, status, xhr){console.log('success');},
        error: function(err, status, xhr){console.log('error: ', err);}
    });
  });
});
