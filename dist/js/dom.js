'use strict';

define(['utils'], function(utils) {

  function userInfo(userData){
    // select div
    var dInfoUser = document.getElementById("user");
    // create nodes
    // p username
    var pUsername = document.createElement("p");
    var emUsername = document.createElement("em");
    emUsername.innerHTML = ('@' + userData[0]);
    // h1 
    var hName = document.createElement("h1");
    hName.innerHTML = userData[1];
    // p bio 
    var pBio = document.createElement("p");
    pBio.innerHTML = userData[2];

    //add nodes
    dInfoUser.appendChild(pUsername);
    pUsername.appendChild(emUsername);
    dInfoUser.appendChild(hName);
    dInfoUser.appendChild(pBio);
  }

  function extractRepos(userRepoData){
    utils.noUserInput();
    var listRepos = userRepoData.map(function(item,i){
      addListElementRepo(item.html_url, item.name, item.forks_count, item.stargazers_count);
    });
  }

  function addListElementRepo (link, name, forks, stars) { 
    // select ul
    var list = document.getElementById("repos");
    // create nodes
    // li
    var liRepo = document.createElement("li");
    // a 
    var aRepo = document.createElement("a");
    aRepo.href = link;
    aRepo.target = "_blank";
    aRepo.innerHTML = utils.capitalizeStr(name);
    // sibling 
    var dInfo = document.createElement("div");
    dInfo.setAttribute("class", "dInfo");
    
    // icon star svg
    createSVG ('svgStar', dInfo, 'star' );

    // span stars text
    var sstars = document.createElement("span");
    sstars.innerHTML = stars;

    // icon fork-repo svg
    createSVG ('svgFork', dInfo, 'repo-forked');

    // span stars text
    var sforks = document.createElement("span");
    sforks.innerHTML = forks;

    //add nodes
    list.appendChild(liRepo);
    liRepo.appendChild(aRepo);
    liRepo.appendChild(dInfo);
    // dInfo.appendChild(svgStar);
    dInfo.appendChild(sstars);
    // dInfo.appendChild(svgFork);
    dInfo.appendChild(sforks);

  }

  function createSVG(elem, parent, classElem){
    var self = {};
    elem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    elem.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    elem.setAttribute("class", ("icons " + classElem));
    var useElem = document.createElementNS("http://www.w3.org/2000/svg", "use");
    useElem.setAttributeNS("http://www.w3.org/1999/xlink","href",("img/icons.svg#"+classElem));

    elem.appendChild(useElem);
    parent.appendChild(elem);
  }

  return {
    extractRepos: extractRepos, 
    userInfo: userInfo
  };

});