$(function(){
  $('.form').submit(function(e){
    e.preventDefault(e);
    $.ajax({
      url:'/users/login',
      type:'post',
      dataType:'json',
      contentType: 'application/json',
      data: JSON.stringify({
        email: $('input[type="email"]').val(),
        password: $('input[type="password"]').val()
      }),
      success: function(doc){
        window.location = "/app";
        console.log("signed in !");
      },
      error: function(err, status, xhr){
        console.log(err);
        // $('#sucess').text(err);
      }
    });
  })
});
