/*! githubUsers-marfeel - v1.0.0 - 2016-09-25 */ 
/*global require*/
'use strict';

require.config({
  baseUrl: '../../src/js',
  paths: {
    utils: 'utils',
    ajax: 'ajax',
    dom: 'dom'
  }
});


require(['utils', 'ajax', 'dom'], function(utils, ajax, dom) {

  document.getElementById("urlUser").addEventListener("submit", function(event){
    event.preventDefault();
    utils.clearChildNodes("user");
    utils.clearChildNodes("repos");

    var urlUser = utils.buildUrl ("https://api.github.com/search/users?q=<%SEARCH%>+in%3Alogin&type=Users", "<%SEARCH%>", "userGithub");
    var urlDataUser = utils.buildUrl ("https://api.github.com/users/<%SEARCH%>", "<%SEARCH%>", "userGithub");
    var urlRepos = utils.buildUrl ("https://api.github.com/users/<%SEARCH%>/repos", "<%SEARCH%>", "userGithub");

    ajax.callAJAX(urlUser, function(data){
      if (data.total_count > 0) {

        utils.beforeShowData();

        ajax.callAJAX(urlDataUser, function(data){
          var dataUser = [data.login.toLowerCase(), utils.capitalizeStr(data.name), data.bio];
          dom.userInfo(dataUser);
        });

        ajax.callAJAX(urlRepos, function(data){
          dom.extractRepos(data);
        });

      } else {
        utils.showAlert(1);
      }
    });

  });

  document.getElementById("userGithub").addEventListener("focus", function(event){
    utils.showAlert(0);
    utils.noUserInput();
  });

});