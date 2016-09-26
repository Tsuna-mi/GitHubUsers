'use strict';

define(['utils'], function(utils) {

  function callAJAX (url, callback){
    var request = new XMLHttpRequest(); 
    request.onreadystatechange = function(){
      if (request.readyState === 4) {
        if (request.status === 200) {
          var data = JSON.parse(request.responseText);
          if (callback) callback(data);
        }else{
          utils.showAlert(1);
        }
      }
    };
    request.open('GET', url, true);
    request.send();
  }
  return {
    callAJAX: callAJAX
  };

});