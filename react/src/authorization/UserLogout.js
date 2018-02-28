import $ from 'jquery';

export function logout(e){
    e.preventDefault();
    $.ajax({
        url:'/logout',
        type: 'delete',
        dataType:'json',
        contentType:'application/json',
        data: JSON.stringify(),
        success: function(){
            console.log('user logged out');
            $('input').val("");
        },
        error:function(err){
            console.log(err, 'ERROR user is not logged out');
        }
    })
}