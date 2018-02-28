$(function(){
  $('#form').submit(function(e){
    e.preventDefault();
    $.ajax({
      url:'/post',
      type:'post',
      dataType:'json',
      contentType: 'application/json',
      data: JSON.stringify({
        _id:$('input[name="_id"]').val(),
        firstItem: $('input[name="firstItem"]').val(),
        firstPrice: $('input[name="firstPrice"]').val(),
        secondItem: $('input[name="secondItem"]').val(),
        secondPrice: $('input[name="secondPrice"]').val(),
        thirdItem: $('input[name="thirdItem"]').val(),
        thirdPrice: $('input[name="thirdPrice"]').val(),
        tBudget: $('input[name="tBudget"]').val()
      }),
      success: function(doc){
        $('#DisplayNotes').text('note was saved!');
        $('#DisplayNotes').css({
          display: 'inline-block'
        });
        console.log("note was saved!");
      },
      error: function(err, status, xhr){
        console.log(err);
      }
    });
  });
});
