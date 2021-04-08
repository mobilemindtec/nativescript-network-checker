var application = require("@nativescript/core/application");


exports.isConnected = function() {  

  var activity = application.android.foregroundActivity || application.android.startActivity  

  var connectivity = activity.getSystemService(android.content.Context.CONNECTIVITY_SERVICE)
  
  if (connectivity == null) {
    console.log("ConnectionTools.isConnected(Context context) : CONNECTIVITY_SERVICE is null!!");      
  } else {
    var networkInfoList = connectivity.getAllNetworkInfo();
    if (networkInfoList) {
      for (var i = 0; i < networkInfoList.length; i++) {
        if (networkInfoList[i].getState() == android.net.NetworkInfo.State.CONNECTED) {
            return true;
        }
      }
    }
  }
  return false;
}

exports.isWifi = function() {

  var activity = application.android.foregroundActivity || application.android.startActivity  

  var connManager = activity.getSystemService(android.content.Context.CONNECTIVITY_SERVICE);

  if (connManager == null) {
    return false;
  }
  
  var wifiInfo = connManager.getNetworkInfo(android.net.ConnectivityManager.TYPE_WIFI);

  if (wifiInfo == null) {
    return false;
  }
  
  return wifiInfo.isConnected();
}