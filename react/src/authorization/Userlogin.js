import $ from 'jquery';
// import { isLoggedIn } from './PrivateRoute(auth)';

export function login(e){
    e.preventDefault();
    $.ajax({
        url:'/login',
        type:'post',
        contentType: 'application/json',
        dataType:'json',
        data: JSON.stringify({
            email:$("input[name='email']").val(),
            password:$("input[name='password']").val()
        }),
        
        success: function(data){
                $('.alert-success').css("display","block");
                setTimeout(function(){$('.alert-success').css("display","none");}, 3000);
                window.location.reload(true);
        },
        error: function(err){
            $('.alert-danger').css("display","block");
            setTimeout(function(){$('.alert-danger').css("display","none");}, 3000);
        }
    });
}
