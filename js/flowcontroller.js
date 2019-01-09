var CheckFlowItv;
var FLOW_API_BASE_URL = "https://api.ocs.fr/core/v1/streaming";
//var FLOW_API_BASE_URL = "http://preprod.api.ocsdomain.com/core/v1/streaming";
var FlowToken;
var FlowOnErrorCallback;
var FlowUserId = "";
var cptFlows = 0;

function initFlow(userId, OnErrorCallback){
	FlowUserId = userId;
	FlowOnErrorCallback = OnErrorCallback;
	
	LaunchFlowTokenRequest();
}

function LaunchFlowTokenRequest(){
    var onSuccess = function(data){
		//console.log("[FlowController] initFlow, onSuccess:", data);
        FlowToken = data.token;
	    CheckFlow();
    };

    var onError = function(data, status){
    	//console.log("[FlowController] initFlow, onError, status:" + status+" data:", data);
        if(status && status == 404){
            OnFlowError();
        }
    };
    var options = {
        url:FLOW_API_BASE_URL + "?id="+FlowUserId, 
        callback: onSuccess,
        callbackError: onError
	};

    LaunchFlowRequest(options);

}

function CheckFlow(){
	clearTimeout(CheckFlowItv);
    var onSuccess = function(data){
	    CheckFlowItv = setTimeout("CheckFlow()", data.delay*1000);
    };

    var onError = function(data, status){
        //console.log("[FlowController] CheckFlow, onError, status:" + status+" data:", data);
        if(status && status == 404){
   			OnFlowError();
		}
    };
    var options = {
        url:FLOW_API_BASE_URL + "?token="+FlowToken, 
        callback: onSuccess,
        callbackError: onError
    };

    LaunchFlowRequest(options);
    
}

/**
*	Display an error message when user has reached simultaneous flow limit
*/
function OnFlowError(){
	//console.log("[FlowController] OnFlowError");
	if(FlowOnErrorCallback != null){
		FlowOnErrorCallback();
	}
	// After Flow error, we request for a new token request
    clearTimeout(CheckFlowItv);
    CheckFlowItv = setTimeout("LaunchFlowTokenRequest()", 60000);
}

function LaunchFlowRequest(options){
	//console.log("[FlowController] LaunchFlowRequest " + options.url);
	var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (this.readyState == 4){
            if(this.status == 200){
        		options.callback(JSON.parse(this.responseText));	
        	} else {
        		options.callbackError(JSON.parse(this.responseText), this.status);
        	}
        }
    }

    /*cptFlows++;
    if(cptFlows == 4)
        options.callbackError("", 404);*/

    xmlHttp.open("GET", options.url, true); // true for asynchronous 
    xmlHttp.send(null);
}