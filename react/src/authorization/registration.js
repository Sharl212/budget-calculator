import $ from 'jquery';

export function registration(e){
        e.preventDefault();
        $.ajax({
            url:'/registration',
            type:'post',
            dataType:'json',
            contentType: 'application/json',
            data: JSON.stringify({
                firstname: $('input[type="firstname"]').val(),
                lastname: $('input[type="lastname"]').val(),
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
  