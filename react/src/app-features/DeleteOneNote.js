import $ from 'jquery';
//DELETE a specific note from database
  export function DeleteOneNote(data){
        const id = $('#deleteById').val();
            $.ajax({
            url:'/budget/'+ id,
            type: 'delete',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(),
            success: function(data, status, xhr){
                console.log(`${id} was deleted successfully!`);
            },
            error: function(err, status, xhr){
                console.log(err);
            }
        });
}

export function wipeAll(){
    $.ajax({
        url:'/wipeAll',
        type: 'delete',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(),
        success: function(doc, status, xhr){
            console.log(`all notes were deleted!`);
        },
        error: function(err, status, xhr){
            console.log(err);
        }
    });
}