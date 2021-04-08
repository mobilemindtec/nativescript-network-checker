var application = require("@nativescript/core/application");


var internetReachable

function init(){
  if(!internetReachable)
    internetReachable = Reachability.reachabilityForInternetConnection()
}

exports.isConnected = function() {  

  init()

  var internetStatus = internetReachable.currentReachabilityStatus();

  if(internetStatus == ReachableViaWiFi 
    || internetStatus == ReachableViaWiFi 
    || internetStatus == ReachableViaWWAN)
    return true;

  return false;
}

exports.isWifi = function() {

  init()

  var internetStatus = internetReachable.currentReachabilityStatus();

  if(internetStatus == ReachableViaWiFi)
    return true;

  return false;
}