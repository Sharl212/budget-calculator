import $ from 'jquery';

// GET one note by ID

export function searchById(){
    const id = $('#searchbyid').val(); // user input {note to search}

        $.ajax({
            url:'/budget/' +  id,
            type:'get',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(),
            success: function(Data){
                console.log('mabrook 3al shasha :) : ', JSON.stringify(Data));
            },
            error: function(err, status, xhr){
                console.log(err);
            }
        });
    }