// $(function(){
//   $('.form').submit(function(e){
//     e.preventDefault();
//     $.ajax({
//       url:'/',
//       type:'post',
//       dataType:'json',
//       contentType: 'application/json',
//       data: JSON.stringify({
//         firstItem: $('input[name="firstItem"]').val(),
//         firstPrice: $('input[name="firstPrice"]').val(),
//         secondItem: $('input[name="secondItem"]').val(),
//         secondPrice: $('input[name="secondPrice"]').val(),
//         thirdItem: $('input[name="thirdItem"]').val(),
//         thirdPrice: $('input[name="thirdPrice"]').val(),
//         tBudget: $('input[name="tBudget"]').val()
//       }),
//       success: function(doc){
//         $('#DisplayNotes').text(docs);
//       },
//       error: function(err, status, xhr){
//         console.log(err);
//       }
//     });
//   });
// });
