$(function(){
  $('#add').click(function(){
    for(var i=0; i<1; i+2)
    {
      var input = document.createElement('input');
      input.setAttribute('id',"title");
      input.setAttribute('placeholder',"title" + i++);
      document.getElementById("inputfields").appendChild(input);
    }
    for(var i=1; i<2; i+2){
      var input2 = document.createElement('input');
      input2.setAttribute('id',"price");
      input2.setAttribute('placeholder',"price" + i++);
      document.getElementById("inputfields").appendChild(input2);
    }
  });
});
