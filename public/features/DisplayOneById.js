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
          $('#result').html(doc);
          console.log('success');
        }
      },
      error: function(err, status, xhr){console.log('error: ', err);}
    });
  });
});
