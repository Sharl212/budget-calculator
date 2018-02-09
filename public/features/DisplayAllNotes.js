// GET all notes from database
$(function (){
  $("#showAll").click(function(e){
    $.ajax({
      url:'/budget',
      type:'get',
      dataType: 'html',
      contentType: 'application/json',
      data: JSON.stringify(),
      success: function(Data, status, xhr){
          $("#DisplayNotes").text(Data);
          $('#DisplayNotes').css({
            display: 'inline-block'
          });
          console.log('it WORKS!');
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
