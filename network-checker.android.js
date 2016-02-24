var application = require("application");


exports.isConnected = function() {  

  var context = application.android.currentContext

  var connectivity = context.getSystemService(android.content.Context.CONNECTIVITY_SERVICE)
  
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

  var context = application.android.currentContext

  var connManager = context.getSystemService(android.content.Context.CONNECTIVITY_SERVICE);

  if (connManager == null) {
    return false;
  }
  
  var wifiInfo = connManager.getNetworkInfo(android.net.ConnectivityManager.TYPE_WIFI);

  if (wifiInfo == null) {
    return false;
  }
  
  return wifiInfo.isConnected();
}