/**
 * Creates the namespace
 */
var caf = caf || {};
const DEBUG = true;

class Player {
    constructor(context) {
        this.version_ = "1.0.45";
        this.setStats();
        console.log(`### PLAYER PROD VERSION :${this.version_}###`);
        this.debug_ = DEBUG;
        this.context = context;
        this.playerManager = this.context.getPlayerManager();
        this.preferedLanguage = 'VF';
        this.setPlaybackInfo();
        this.setMessageInterceptors();
        this.addEventListeners();
        this.bookmark = new caf.Bookmark();
    }

    log_(message) {
        if (this.debug_ && message) {
          console.log(message);
        }
    }

    setStats() {
        this.STAT_VideoStreamInfos = null;
        this.STAT_VideoStreamInfosOldBandwidth = 0;
        this.STAT_VideoMaxProfileTimer = null;
        this.STAT_VideoGlobalProfileTimer = null;

        this.OCS_STAT_URL = 'https://api.ocs.fr/apps/v1/report/player';
        this.OCS_STAT = {
            uuid: '',
            isdownload: 'false',
            manifesturl: '',
            programid: '',
            errorstatus: {},
            bitratestatus: {},
            lastevent: {},
            lastaction: {},
            timeframe: {},
            buffering: {}
        };
        this.STAT_launchStartTime = this.getTimeSec();
        this.STAT_playStartPosition = 0;
        this.STAT_playEndPosition = 0;
        this.STAT_profileuseStack = {};
        this.GRECO_STAT_URL = 'https://ocs.labgency.ws/stat/clear?e=stat&m=set&s=ofr.ocs';
        this.GRECO_STAT = {};
    }

    setPlaybackInfo() {
        // Update playback config licenseUrl according to provided value in load request.
        this.playerManager.setMediaPlaybackInfoHandler((loadRequest, pc) => {
            const customData = loadRequest.media.customData;
            const licenseUrl = customData['hss_license_url'] || null;
            const watermarkText = customData['hss_watermark_text'] || null;
            const watermarkOpacity = customData['hss_watermark_opacity'] || null;
            const base_url = customData['screeners_base_url'] || null;
            const screeners_auth_token = customData['screeners_auth_token'] || null;
            const screeners_auth_key = customData['screeners_auth_key'] || null;
            const screeners_application_id = customData['screeners_application_id'] || null;
            
            if (screeners_application_id == "com.fox.screenersInteg") {
                var head = document.getElementsByTagName('head')[0];
                var link = document.createElement('link');
                link.id = cssId;
                link.rel = 'stylesheet';
                link.type = 'text/css'
                link.href = 'css/fxvip.css'
                link.media = 'all'
                head.appendChild(link);
            }
            
            if (watermarkOpacity != null) {
                var extraOpacity = 0;
                if (watermarkOpacity == 0) {
                    extraOpacity = 0;
                } else {
                    extraOpacity = (parseFloat(watermarkOpacity) + 0.3).toFixed(1);
                }
                if (extraOpacity > 1) {
                    extraOpacity = 1;
                }
                document.getElementById('WatermarkHss').style.opacity = extraOpacity;
            }
            
            document.getElementById('WatermarkHss').innerHTML = watermarkText;
            
            setInterval(this.callSessionValid(base_url, screeners_auth_token, screeners_auth_key), 60000 * 5); // call sessionValid() every 5 minutes
            
            // const licenseCustomData = customData['hss_license_custom_data'] || null;
            pc.licenseUrl = licenseUrl;
            // pc.licenseCustomData = licenseCustomData;
            pc.protectionSystem = cast.framework.ContentProtection.WIDEVINE;
            return pc;
        });
    }

    setMessageInterceptors() {
        // intercept the LOAD request to be able to read in a contentId and get data
        this.playerManager.setMessageInterceptor(
            cast.framework.messages.MessageType.LOAD, loadRequestData => {
                if (!loadRequestData.media || !loadRequestData.media.contentId) {
                    return loadRequestData;
                }
                const customData = loadRequestData.media.customData;
                this.media = loadRequestData.media;
                this.preferedLanguage = (customData['prefered_language'] || 'vf').toUpperCase();

                this.OCS_STAT.manifesturl = loadRequestData.media.contentId;
                this.OCS_STAT.programid = customData['ocscontentid'] || customData['mediaObjectId'] || '';
                this.OCS_STAT.timeframe = {
                    start: this.getTimeSec(),
                    stop: 0
                };

                this.OCS_STAT.uuid = customData['userid'] || customData['useri'] || customData['devicea'];

                // Adds Greco
                this.GRECO_STAT.cid = customData['mediaObjectId'] || '';
                this.GRECO_STAT.token = customData['token'] || '';
                this.GRECO_STAT.useri = customData['useri'] || '';
                this.GRECO_STAT.userid = customData['userid'] || '';
                this.GRECO_STAT.romid = customData['romid'] || '';
                this.GRECO_STAT.devicea = customData['devicea'] || '';

                /*const flowController = new caf.FlowController(this.context);
                // trigger error
                flowController.initFlow(customData.userid, (error) => {
                    this.onFlowControlError(error);
                });*/

                return loadRequestData;
        });
    }

    onFlowControlError() {
        //console.log("[Player] OnFlowControlError - Should Stop playing video");
        document.getElementById('Error').setAttribute('state', 'on');
        this.playerManager.stop();
        setTimeout(() => {
            document.getElementById('Error').setAttribute('state', 'off');  // Remove error popup after 20 secs
        }, 20000);
    }

    addEventListeners() {
        this.playerManager.addEventListener(cast.framework.events.EventType.ERROR,
            error => {
                const currentTime = this.playerManager.getCurrentTimeSec();
                this.log_('onError', error);
                let cptErrors = this.OCS_STAT.errorstatus.count && this.OCS_STAT.errorstatus.count > 0 ? this.OCS_STAT.errorstatus.count + 1 : 1;
                this.OCS_STAT.errorstatus = {
                    lastype: error.type,
                    lastcode: error.code,
                    lastdate: this.getTimeSec(),
                    lastposition: Math.round(currentTime),
                    count: cptErrors
                };
                //this.sendStats();
            });

        this.playerManager.addEventListener(cast.framework.events.EventType.BUFFERING,
            error => {
                // this.log_('onBuffering[readyState=' + this.mediaElement_.readyState + ']');
                let cptBuffering = this.OCS_STAT.buffering.count && this.OCS_STAT.buffering.count > 0 ? this.OCS_STAT.buffering.count + 1 : 1;
                this.OCS_STAT.buffering = {
                    first: this.getTimeSec(),
                    last: 0,
                    count: cptBuffering
                };
            });

        this.playerManager.addEventListener(cast.framework.events.EventType.PLAYING, () => {
            let currentTime = this.playerManager.getCurrentTimeSec();
            this.mediaDuration = this.playerManager.getDurationSec();
            // Hides error div in case of restart streaming after error popup
            document.getElementById('Error').setAttribute('state', 'off');
            this.OCS_STAT.lastevent = {
                value: 'playing',
                date: this.getTimeSec(),
                position: Math.round(currentTime)
            };
            // Playing state coming from buffering, we register last time
            if (this.OCS_STAT.buffering.last === 0) {
                this.OCS_STAT.buffering.last = this.getTimeSec();
            }
            this.STAT_playStartPosition = Math.round(currentTime);
            this.STAT_VideoMaxProfileTimer = null;
            this.STAT_VideoGlobalProfileTimer = null;
            // this.bookmark.save(
            //     this.media.customData.userid,
            //     this.media.customData.ocscontentid,
            //     this.playerManager.getCurrentTimeSec(),
            //     this.playerManager.getDurationSec()
            // );
        });

        this.playerManager.addEventListener(cast.framework.events.EventType.LOADED_METADATA, () => {
            document.getElementById('WatermarkHss').style.visibility = "visible";
            this.OCS_STAT.lastevent = {
                value: 'loaded',
                date: this.getTimeSec(),
                position: 0
            };
            this.OCS_STAT.bitratestatus = {
                maxbitrate: 0,
                maxbitrateduration: 0,
                count: 0,
                maxbandwith: 0
            };
        });

        this.playerManager.addEventListener(cast.framework.events.EventType.PAUSE, () => {
            let currentTime = this.playerManager.getCurrentTimeSec();
            this.OCS_STAT.lastevent = {
                value: 'paused',
                date: this.getTimeSec(),
                position: Math.round(currentTime)
            };
            //this.sendStats();
            this.bookmark.save(
                this.media.customData.userid,
                this.media.customData.ocscontentid,
                this.playerManager.getCurrentTimeSec(),
                this.playerManager.getDurationSec()
            );
        });

        this.playerManager.addEventListener(cast.framework.events.EventType.MEDIA_FINISHED, (obj) => {
            this.log_('FINISHED');
            document.getElementById('WatermarkHss').style.visibility = "hidden";
            this.bookmark.save(
                this.media.customData.userid,
                this.media.customData.ocscontentid,
                obj.currentMediaTime,
                this.mediaDuration
            );
            if (obj.endedReason === 'STOPPED') {
                this.log_('STOPPED');
                this.OCS_STAT.lastevent = {
                    value: 'stopped',
                    date: this.getTimeSec(),
                    position: Math.round(obj.currentMediaTime)
                };
                //this.sendStats();
            } else {
                this.log_('ENDED');
                this.OCS_STAT.lastevent = {
                    value: 'ended',
                    date: this.getTimeSec(),
                    position: Math.round(obj.currentMediaTime)
                };
                //this.sendStats();
            }
        });
    }

    getTimeSec() {
        return Math.round(new Date().getTime() / 1000);
    }
    
    callSessionValid(base_url, screeners_auth_token, screeners_auth_key) {
        let SCREENERS_SESSION_VALID_URL = base_url + 'api/v5/account/SessionValid';
        var now = new Date();
        var timestamp = moment(now).format("YYYY-MM-DD'T'HH:mm:ss'Z'");
        
        window.fetch(SCREENERS_SESSION_VALID_URL, {
            method: 'GET',
            headers: {
                'Authorization': screeners_auth_token,
                'OAuth_Key': screeners_auth_key,
                'OAuth_Timestamp': timestamp
            }
        })
        .then(response => response.json())
        .then(data => {
                this.onSessionValidResponse(data)
            })
        .catch(error => this.log_(error));
    }
    
    onSessionValidResponse(data) {
        // if session is invalid close receiver
        if (!data.Result.IsValid) {
            window.close();
        }
    }

    sendStats() {
        // Tricks to avoid sending stats twice (for some reason, pause/stop/ended events are thrown twice...
        if (this.OCS_STAT.manifesturl === '') {
            return;
        }
        this.OCS_STAT.timeframe.stop = this.getTimeSec();
        window.fetch(this.OCS_STAT_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.OCS_STAT)
        });
        this.sendGrecoStats();
    }

    sendGrecoStats() {
        const statValues = this.formatGrecoStat();
        return window.fetch(this.GRECO_STAT_URL + statValues)
            .then(() => {
                this.log_("GRECO_STAT SEND greco stat succeed");
            });
    }

    formatGrecoStat() {
        let currentTime = this.playerManager.getCurrentTimeSec();
        let duration = this.playerManager.getDurationSec();
        let statStr = `detail=&message=&code=0&status=ok&lgy-level=2&v=${this.version_}&type=streaming`;
        let buffering = 0;
        // let buffering = this.playerManager.getStats().bufferingTime;
        let profileuseArr = [];
        for (let i in this.STAT_profileuseStack) {
            profileuseArr[profileuseArr.length] = `${i}:${this.STAT_profileuseStack[i]}`;
        }
        let profileuse = profileuseArr.join(',');

        statStr += "&s=ofr.ocs";
        statStr += "&e=player";
        statStr += "&m=play";
        statStr += "&c=" + this.GRECO_STAT.cid;
        statStr += "&t=" + this.GRECO_STAT.token;
        statStr += "&type=streaming";
        statStr += "&user-id=" + this.GRECO_STAT.userid;
        statStr += "&user-i=" + this.GRECO_STAT.useri;
        statStr += "&url=" + this.OCS_STAT.manifesturl;
        statStr += "&device-a=" + this.GRECO_STAT.devicea;
        statStr += "&rom-id=" + this.GRECO_STAT.romid;
        statStr += "&play-duration=" + Math.round(currentTime - this.STAT_playStartPosition);
        statStr += "&play-start-position=" + Math.floor(this.STAT_playStartPosition);
        statStr += "&play-end-position=" + Math.floor(currentTime);
        statStr += "&buffering=" + buffering;
        statStr += "&content-duration=" + Math.round(duration);
        statStr += "&play-session=" + this.STAT_launchStartTime;
        statStr += "&frameloss=0";
        statStr += "&profileuse=" + profileuse;
        statStr += "&lgy-timestamp=" + this.getTimeSec();
        //console.log("GRECO STAT STR:" + statStr);
        return "&value=" + encodeURIComponent(statStr);
    }

}

caf.Player = Player;

