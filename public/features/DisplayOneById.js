// GET one note by ID
$(function (){
  $("#ShowByID").click(function(){
    var id = $('#searchbyid').val();
    $.ajax({
      url:'/budget/' + id,
      type:'get',
      dataType: 'html',
      contentType: 'application/json',
      data: JSON.stringify(),
      success: function(doc){
        var id = $('#searchbyid').val();
        $('#searchbyid').val("");
        $("#DisplayNotes").text(doc);
        $('#DisplayNotes').css({
          display: 'inline-block'
        });
      },
      error: function(err, status, xhr){
        var id = $('#searchbyid').val();
        $("#DisplayNotes").addClass('alert-danger').removeClass('alert-success');
        $("#DisplayNotes").text(id +'NOT FOUND!');
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
