import $ from 'jquery';

export function registration(e){
        e.preventDefault();

            $.ajax({
                url:'/registration',
                type:'post',
                dataType:'html',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify({
                    firstname: $('input[type="firstname"]').val(),
                    lastname: $('input[type="lastname"]').val(),
                    email: $('input[type="email"]').val(),
                    password: $('input[type="password"]').val()
                }),
                success: function(){
                        $('.alert-success').css("display","block");
                        setTimeout(function(){$('.alert-success').css("display","none");}, 3000);
                        window.location.reload(true);
                },
                error: function(err, status, xhr){
                    $('.register-error').css("display","block");
                    setTimeout(function(){$('.register-error').css("display","none");}, 3000);
                    console.error(err);                
                }
        });
}
  