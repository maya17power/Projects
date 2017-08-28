var xmlhttp;
var wikipedia;
window.onload = function(){
  document.getElementById("sButton").addEventListener('click',iniProcess);
  document.getElementById("rButton").addEventListener('click',randomProcess);
};

function clearList(){
  document.getElementById('list2').innerHTML = "";
  return;
}

function iniProcess(input){
  clearList();
  var val = document.getElementById('inputBox').value;
  if(val !== ""){
    console.log("User searching " + val);
    userData(val);
    }else{
    console.log("No value to search.");
    alert("Please enter your search.");
  }
}

function randomProcess(){
  console.log("random search");
  clearList();
  userData("Special:Random");
}

function userData(val){
  wikipedia = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=" + val  +"&limit=10&namespace=0&format=json";
  search(wikipedia);
}

function search(wiki){
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = processWiki;
  xmlhttp.open("GET",wiki,true);
  xmlhttp.send();
}

function processWiki(){
  if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
    var myWiki = JSON.parse(xmlhttp.responseText);
    var myWikiLinks = myWiki[3];//search result links
    var myWikiPages = myWiki[1];//Get pages but if pages return 0 then return exception. Otherwise utilize variable.
    var myWikiDetails = myWiki[2];//search result details

    if(myWikiLinks <= 0){
      console.log("no results");
      alert("No results found.");
    }else{
        for(var i = 0; i < myWikiPages.length; i++){
            document.getElementById("list2").innerHTML +=
            "<li class='list-group-item'><a href='" + myWikiLinks[i] + "'>" + myWikiPages[i] + "</a></br><p class='details'>"+  myWikiDetails[i]  + "</p></li>";
        }
    }
  }
}
