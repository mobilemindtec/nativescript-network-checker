var observable = require("data/observable")
var NetworkChecker = require('nativescript-network-checker')


var viewModel = new observable.Observable({
	message: ""
})

exports.loaded = function(args) {
    var page = args.object;
    page.bindingContext = viewModel;
}

exports.onConnecitonCheck = function(){
	if(NetworkChecker.isConnected()){
		viewModel.set('message', 'internet is on')
	}else{
		viewModel.set('message', 'internet is off')
	}
}

exports.onWifiCheck = function(){	
	if(NetworkChecker.isWifi()){
		viewModel.set('message', 'wifi is on')
	}else{
		viewModel.set('message', 'wifi is off')
	}
}