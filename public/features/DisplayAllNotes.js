// GET all notes from database
$(function (){
  $("#showAll").click(function(data){
    $.ajax({
      url:'/budget',
      type:'get',
      dataType: 'html',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function(data){
        if(data){
          var id = $('#id').val();
          $("#DisplayNotes").text(data);
          $('#DisplayNotes').css({
            display: 'inline-block'
          });
        }
      },
      error: function(err, status, xhr){
        $("#DisplayNotes").addClass('alert-danger').removeClass('alert-success');
        $("#DisplayNotes").text('ERROR!');
        $('#DisplayNotes').css({
          display: 'inline-block'
        });
        $("#DisplayNotes").fadeOut(3000, function() { $(this).css({display: 'none'});
        $("#DisplayNotes").addClass('alert-success').removeClass('alert-danger');
      });
      }
    });
  });
});
