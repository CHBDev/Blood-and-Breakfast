
if (Meteor.isClient) {

  Meteor.startup(function() {

  });

  Meteor.subscribe('stops');
  Meteor.subscribe('markers');

  //pulls all stops out of db and adds markers for them
  //likely only needs to be called once ever
  //and from there on out just pulls from markers
  addBusStops = function(){
    var busStops = Stops.find().fetch();
    var stop;
    Markers.insert({ lat: 37.7833, lng: 122.4167, icon: "./blue-bus-stop.png" }); //this is a test line of code with which you can explore marker options
    var count = 0;
    for(var i = 0; i < busStops.length; i++){

      console.log("Stop Count", count++);
      stop = busStops[i];
      Markers.insert({ lat: stop.lat, lng: stop.lon, icon: "./blue-bus-stop.png" });
    }
  };

  //TODO: make this do something
  //query db for all stops and buses within n distance of player
  //set bite button timer on client and server
  //disable bit button until timer resets
  infectArea = function(teamName){
    var loc = playerLoc;
    var team = teamName;
    var id = Meteor._id;

  };

  Template.registerHelper("playerLoc", function(){
    return playerLoc();
  });

  playerLoc = function(asVals){
    var loc = Geolocation.currentLocation();
    if(!loc) return "";
    var locX = loc.coords.latitude;
    var locY = loc.coords.longitude;
    if(asVals){
      return {lon: locX, lat: locY};
    }

    return "" + locX + "," + locY;
  }

}