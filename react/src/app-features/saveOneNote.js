import $ from 'jquery'; 

export function saveNote(e){ // saving a note
      e.preventDefault();
      
      const _id           = $('input[name="_id"]').val(),
            firstItem     = $('input[name="firstItem"]').val(),
            firstPrice    = $('input[name="firstPrice"]').val(),
            secondItem    = $('input[name="secondItem"]').val(),
            secondPrice   = $('input[name="secondPrice"]').val(),
            thirdItem     = $('input[name="thirdItem"]').val(),
            thirdPrice    = $('input[name="thirdPrice"]').val(),
            tBudget       = $('input[name="tBudget"]').val();

        $.ajax({
          url:'/post',
          type:'post',
          dataType:'json',
          contentType: 'application/json',
          data: JSON.stringify({
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
            if(!_id || !firstItem  || !secondItem || !thirdItem){
              console.log('please fill out the form.');
            }else{
              console.log('note was saved!', {Data});
            }
          },
          error: function(err, status, xhr){
            console.log(status);
          }
        });
    }