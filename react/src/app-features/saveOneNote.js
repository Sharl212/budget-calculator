import $ from 'jquery'; 
import { fetchNotes } from '../authorization/fetchNotes';


export function saveOneNote(e){ // saving a note
            e.preventDefault();
        const   noteTitle     = $('input[name="id"]').val(),
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
                noteTitle,
                firstItem,
                firstPrice,
                secondItem,
                secondPrice,
                thirdItem,
                thirdPrice,
                tBudget
            }),
            success: function(Data){
                $('.alert-success').css("display","block");
                setTimeout(function(){$('.alert-success').css("display","none");}, 3000);
                console.log('note was saved!',Data);
                fetchNotes();
            },
            error: function(err, status, xhr){
                $('.alert-danger').css("display","block");
                setTimeout(function(){$('.alert-danger').css("display","none");}, 3000);
                console.error(err);
            }
        });
}

