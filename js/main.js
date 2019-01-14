window.sampleplayer = window.sampleplayer || {};
window.hsstools = window.hsstools || {};




/**
 * <p>
 * If we are running only in Chrome, then run with only the player - let's us
 * test things. If on a Chromecast then we get everything and remote control
 * should work.
 * </p>
 * <p>
 * In the Chromecast case, we:
 * </p>
 * <ol>
 * <li>Get and start the CastReceiver</li>
 * <li>Setup the slideshow channel</li>
 * <li>Start the player (this)</li>
 * </ol>
 *
 * @param {Element} element the element to attach the player
 * @constructor
 * @export
 */
function init()
{
	var userAgent = window.navigator.userAgent;
	var playerDiv = document.getElementById('player');
	// If you want to do some development using the Chrome browser, and then run on
	// a Chromecast you can check the userAgent to see what your running on, then
	// you would only initialize the receiver code when you are actually on a
	// Chromecast device.
	if (!((userAgent.indexOf('CrKey') > -1) || (userAgent.indexOf('TV') > -1))) {
		window.player = new sampleplayer.CastPlayer(playerDiv);
	} else {
		window.castreceiver = cast.receiver.CastReceiverManager.getInstance();
		window.player = new sampleplayer.CastPlayer(playerDiv);
		window.hssreceiver = new hsstools.HSSReceiver();
		window.castreceiver.start(window.castreceiver);
	}
	//cast.receiver.logger.setLevelValue(cast.receiver.LoggerLevel.DEBUG);
	//cast.player.api.setLoggerLevel(cast.player.api.LoggerLevel.DEBUG);
}

AddOnload(init);