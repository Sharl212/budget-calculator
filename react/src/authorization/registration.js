import $ from 'jquery';

export function registration(e){
        e.preventDefault();
        $.ajax({
            url:'/registration',
            type:'post',
            dataType:'json',
            contentType: 'application/json',
            data: JSON.stringify({
                Username: $('input[type="username"]').val(),
                email: $('input[type="email"]').val(),
                password: $('input[type="password"]').val()
            }),
            success: function(doc){
                window.location.reload(true);
            },
            error: function(err, status, xhr){
            console.log(err);
            $('#sucess').text(err);
            }
      });
}
  