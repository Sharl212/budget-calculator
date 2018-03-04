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
                window.location.reload(true);
        },
        error: function(err){
            $('.ui.negative.message').css({
                display:'block'
            })
            $('.ui.negative.message').fadeOut(1000, 'linear');
        }
    });
}