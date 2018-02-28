import $ from 'jquery';

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
            function getCookie(name) {
                var dc = document.cookie;
                var prefix = name + "=";
                var begin = dc.indexOf("; " + prefix);
                if (begin === -1) {
                    begin = dc.indexOf(prefix);
                    if (begin !== 0) return null;
                }
                else
                {
                    begin += 2;
                    var end = document.cookie.indexOf(";", begin);
                    if (end === -1) {
                    end = dc.length;
                    }
                }
                // because unescape has been deprecated, replaced with decodeURI
                //return unescape(dc.substring(begin + prefix.length, end));
                return decodeURI(dc.substring(begin + prefix.length, end));
            } 
            
            if(getCookie('authorization') ===  null){
                $('.ui.success.message').css({
                    display:'block'
                })
                $('.ui.success.message').fadeOut(2000, 'linear');
            }else{
                $('.ui.success.message').css({
                    display:'block'
                })
                $('.successMesg').text('already logged in!');

                $('.ui.success.message').fadeOut(1500, 'linear');
            }
        },
        error: function(err){
            $('.ui.negative.message').css({
                display:'block'
            })
            $('.ui.negative.message').fadeOut(1000, 'linear');
        }
    });
}