import $ from 'jquery'; 


 export function saveOneNote(){ // saving a note

        const   _id             = $('input[name="_id"]').val(),
                firstItem     = $('input[name="firstItem"]').val(),
                firstPrice    = $('input[name="firstPrice"]').val(),
                secondItem    = $('input[name="secondItem"]').val(),
                secondPrice   = $('input[name="secondPrice"]').val(),
                thirdItem     = $('input[name="thirdItem"]').val(),
                thirdPrice    = $('input[name="thirdPrice"]').val(),
                tBudget       = $('input[name="tBudget"]').val();

            let currency      = $('#currency').val();
            console.log(currency)
          $.ajax({
            url:'/newNote',
            type:'post',
            dataType:'json',
            contentType: 'application/json',
            data: JSON.stringify({
                currency,
                _id,
                firstItem,
                firstPrice,
                secondItem,
                secondPrice,
                thirdItem,
                thirdPrice,
                tBudget
            }),
            success: function(Data){
                console.log('note was saved!',Data);
            },
            error: function(err, status, xhr){
              console.log('err',err);
            }
        });
}