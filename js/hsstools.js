window.hsstools = window.hsstools || {};

hsstools.HSS_NAMESPACE = 'urn:x-cast:com.labgency.hss';

hsstools.REQUEST_TYPE = {
	GET_TRACKS : 'getTracks',
	TRACKS : 'tracks',
	SELECT_TRACK : 'selectTrack',
	SELECT_TRACK_BY_LANG : 'selectTrackByLang'
};

hsstools.HSSReceiver = function() {
	this.hssMessageBus_ = window.castreceiver.getCastMessageBus(hsstools.HSS_NAMESPACE, cast.receiver.CastMessageBus.MessageType.JSON);
	this.hssMessageBus_.addEventListener('message', this.onMessage_.bind(this), false);
};

hsstools.HSSReceiver.prototype.sendTracks = function(tracks, sender) {
	//console.log('hssChannelSendTracks: ' + JSON.stringify(tracks));
	//console.log('sender: ' + JSON.stringify(sender));
	var obj = {};
	obj.type = hsstools.REQUEST_TYPE.TRACKS;
	obj.data = tracks;
	if (sender) {
		this.hssMessageBus_.send(sender, obj);
	} else {
		this.hssMessageBus_.broadcast(obj);
	}
};

hsstools.HSSReceiver.prototype.onMessage_ = function(event) {
	//console.log('hssChannelMessageReceived: ' + JSON.stringify(event.data));
	//console.log('hssChannelMessageReceived:  EVENT TYPE:'+event.data['type']);
	
	switch(event.data['type']) {
		case hsstools.REQUEST_TYPE.GET_TRACKS:
			this.sendTracks(window.player.getTracks(), event.senderId);
			break;

		case hsstools.REQUEST_TYPE.SELECT_TRACK:
			
			var select = event.data['data'];
			var audioIndex = select['audioIndex'];
			var subIndex = select['subIndex'];
			var customData = select['customData'];
			var hss_license_url = null;
			var hss_license_custom_data = null;
			if (customData) {
				hss_license_url = customData['hss_license_url'];
				hss_license_custom_data = customData['hss_license_custom_data'];
			}
			//console.log('hss_license_url:'+hss_license_url);
			//console.log('hss_license_custom_data:'+hss_license_custom_data);
			window.player.selectTrack(audioIndex, subIndex, hss_license_url, hss_license_custom_data);
			break;

		case hsstools.REQUEST_TYPE.SELECT_TRACK_BY_LANG :
			console.log("SELECT_TRACK_BY_LANG  ", select);
			var select = event.data['data'];
			window.player.selectTrackByLang(select['audioLang'], select['subLang']);
			break;
	}
};