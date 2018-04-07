import Request from 'superagent';

export  function fetchNotes(){
          
     return Request.get('/budget');
  }