// GET all notes from database
$(function(){
  $("#showAll").click(function(data){
    $.ajax({
      url:'/budget',
      type:'get',
      dataType: 'html',
      contentType: 'application/json',
      data: JSON.stringify(),
      error: function(err, status, xhr){console.log('error: ', err);},
      success: function(data){
        if(data){
          $('#result').html(data);
          console.log('success');
        }
      }
    });
  });
});
