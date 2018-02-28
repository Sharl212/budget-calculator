import $ from 'jquery';

export function ShowAllNotes(e){
      e.preventDefault();
      $.ajax({
        url:'/budget',
        type:'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function(Data, status, xhr){
            let data = JSON.stringify(Data[0], null , 2);
            $('#res').text(data);
           console.log(data);
        },
        error: function(err, status, xhr){
            console.log(err);
        }
      });
}
  