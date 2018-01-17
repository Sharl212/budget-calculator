function add(){
  var price     = document.getElementById('price').value;
  var notes = document.getElementById('title1').value;
 if(price === "" || price < 1){
    return document.getElementsByName('price')[0].placeholder = "can't be less than 1";
  }
};
