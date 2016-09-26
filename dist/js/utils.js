'use strict';

define([], function() {

  function showAlert(flag){
    var alert = document.getElementById("msg");
    var results = document.getElementById("results");
    var card = document.getElementById("card");
    results.style.display = "none";

    if (flag === 1){
      alert.style.display = "block";
      card.style.height = "160px";
    }else if(flag === 0){
      alert.style.display = "none";
      document.getElementById("card").style.height = "85px";
    }
  }

  function noUserInput(){
    document.getElementById("userGithub").value = "";
  }

  function clearChildNodes(idparent){
    var parent = document.getElementById(idparent);
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  function buildUrl (url, pattern, id){
    var value = document.getElementById(id).value;
    var urlAPI = url.replace(pattern, value);
    return urlAPI;
  }

  function beforeShowData(){
    document.getElementById("urlUser").style.marginBottom = "15px";
    document.getElementById("results").style.display = "block";
    document.getElementById("card").style.height = "450px";
  }

  function capitalizeStr (str){
    return str.replace(/\b\w/g, l => l.toUpperCase());
  }

  return{
    showAlert: showAlert,
    noUserInput: noUserInput,
    clearChildNodes: clearChildNodes,
    buildUrl: buildUrl,
    beforeShowData: beforeShowData,
    capitalizeStr: capitalizeStr
  }

});