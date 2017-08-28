var myJson = [
  {
    "stream": {
      "mature": false,
      "status": "Greg working on Electron-Vue boilerplate w/ Akira #programming #vuejs #electron",
      "broadcaster_language": "en",
      "display_name": "FreeCodeCamp",
      "game": "Creative",
      "language": "en",
      "_id": 79776140,
      "name": "freecodecamp",
      "created_at": "2015-01-14T03:36:47Z",
      "updated_at": "2016-09-17T05:00:52Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
      "profile_banner_background_color": null,
      "partner": false,
      "url": "https://www.twitch.tv/freecodecamp",
      "views": 161989,
      "followers": 10048,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/freecodecamp",
        "follows": "https://api.twitch.tv/kraken/channels/freecodecamp/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/freecodecamp/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/freecodecamp/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/freecodecamp",
        "subscriptions": "https://api.twitch.tv/kraken/channels/freecodecamp/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/freecodecamp/editors",
        "teams": "https://api.twitch.tv/kraken/channels/freecodecamp/teams",
        "videos": "https://api.twitch.tv/kraken/channels/freecodecamp/videos"
      }
    },
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/freecodecamp",
      "channel": "https://api.twitch.tv/kraken/channels/freecodecamp"
    }
  },
  {
    "stream": null,
    "display_name": "OgamingSC2",
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/ogamingsc2",
      "channel": "https://api.twitch.tv/kraken/channels/ogamingsc2"
    }
  },
  {
    "stream": {
      "mature": false,
      "status": "RERUN: StarCraft 2 - Kane vs. HuK (ZvP) - WCS Season 3 Challenger AM - Match 4",
      "broadcaster_language": "en",
      "display_name": "ESL_SC2",
      "game": "StarCraft II",
      "language": "en",
      "_id": 30220059,
      "name": "esl_sc2",
      "created_at": "2012-05-02T09:59:20Z",
      "updated_at": "2016-09-17T06:02:57Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-channel_offline_image-5a8657f8393c9d85-1920x1080.jpeg",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_banner-f8295b33d1846e75-480.jpeg",
      "profile_banner_background_color": "#050506",
      "partner": true,
      "url": "https://www.twitch.tv/esl_sc2",
      "views": 60843789,
      "followers": 135275,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/esl_sc2",
        "follows": "https://api.twitch.tv/kraken/channels/esl_sc2/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/esl_sc2/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/esl_sc2/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/esl_sc2",
        "subscriptions": "https://api.twitch.tv/kraken/channels/esl_sc2/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/esl_sc2/editors",
        "teams": "https://api.twitch.tv/kraken/channels/esl_sc2/teams",
        "videos": "https://api.twitch.tv/kraken/channels/esl_sc2/videos"
      }
    },
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
      "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
  },
  {
    "stream": null,
    "display_name": "noobs2ninjas",
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
      "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
  }
  ];
  /*
  ,
  {
    "error": "Not Found",
    "status": 404,
    "message": "Channel 'not-a-valid-account' does not exist"
  }
];
*/

var allUsers = [];
var onlineUsers = [];
var offlineUsers = [];
var filteredOnlineUsers = [];
var myUser;

window.onload = function(){
  var xmlhttp;
  loadFccOnline();
  loadUsers();

  document.getElementById('onlineUsers').addEventListener('click',loadOnlineUsers,false);
  document.getElementById('offlineUsers').addEventListener('click',loadOfflineUsers,false);
  document.getElementById('allUsers').addEventListener('click',loadAllUsers,false);

 /*
  document.getElementById("fccOnline").innerHTML = myUser.stream === null? console.log("FreeCodeCamp is Offline"): console.log("FreeCodeCamp is Online");;
 */
};

function loadFccOnline(){
 var userData = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
 xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = fccOnline;
 xmlhttp.open("GET",userData,true);
 xmlhttp.send();
}

function fccOnline(){

  if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
    myUser = JSON.parse(xmlhttp.responseText);
    console.log(myUser);
    document.getElementById("fccOnline").innerHTML = myUser.stream === null ? " FreeCodeCamp is Offline" : "FreeCodeCamp is Online";
  }
}

function loadUsers(){
  for(var i = 0; i < myJson.length; i++){
   if(myJson[i].stream === null){
      console.log("OFFLINE");
      offlineUsers.push(myJson[i]);
    }else {
      console.log(" ONLINE");
      onlineUsers.push(myJson[i]);
    }
      allUsers.push(myJson[i]);
  }
}

function clearList(){
  document.getElementById('list').innerHTML = "";
}

function loadAllUsers(){
  clearList();
  console.log('all users clicked');
  for(var i = 0; i < allUsers.length; i++){
    document.getElementById('list').innerHTML += "<p><img src='" + onlineUsers[i].stream.logo + "' class='logo'>" + "<a href='" + onlineUsers[i].stream.url + " ' target='_blank'>" + onlineUsers[i].stream.display_name + "</a>" + " ," +
      onlineUsers[i].stream.game + " ," + "Followers:" + onlineUsers[i].stream.followers + "</p>" + "<p>" +
      offlineUsers[i].display_name + "</p>" ;
  }
}

function loadOfflineUsers(){
  clearList();
  console.log('offline users clicked');
  for(var i = 0; i < offlineUsers.length; i++){
  document.getElementById('list').innerHTML += "<p>" + offlineUsers[i].display_name + "</p>";
  }
}

function loadOnlineUsers(){
  clearList();
  console.log('online users clicked');
  for(var i = 0; i < onlineUsers.length; i++){
  document.getElementById('list').innerHTML += "<p><img src='" + onlineUsers[i].stream.logo + "' class='logo'>" + "<a href='" + onlineUsers[i].stream.url + " ' target='_blank'>" + onlineUsers[i].stream.display_name + "</a>" + " ," + onlineUsers[i].stream.game + " ,Followers:" + onlineUsers[i].stream.followers + "</p>";
  }
}
