/**
 * Creates the namespace
 */
var caf = caf || {};

//const FLOW_API_BASE_URL = "https://api.ocs.fr/core/v1/streaming";
const FLOW_API_BASE_URL = "https://api-int.ocs.fr/core/v1/streaming";

class FlowController {
    initFlow(userId = '', onErrorCallback) {
        this.flowUserId = userId;
        this.flowOnErrorCallback = onErrorCallback;
        this.cptFlows = 0;
        this.launchFlowTokenRequest();
    }

    launchFlowTokenRequest() {
        window.fetch(`${FLOW_API_BASE_URL}?id=${this.flowUserId}`)
            .then((response) => {
                return response.json()
                    .then((data) => {
                        //console.log("[FlowController] initFlow onSuccess:", data);
                        this.flowToken = data.token;
                        this.checkFlow();
                    });
            })
            .catch(() => {
                //console.log("[FlowController] initFlow onError, status: " + status + " data: ", data);
                this.onFlowError();
            });

    }

    checkFlow() {
        clearTimeout(this.checkFlowItv);
        window.fetch(`${FLOW_API_BASE_URL}?token=${this.flowToken}`)
            .then((response) => {
                return response.json()
                    .then((data) => {
                        if (response.status === 200) {
							//console.log("[FlowController] checkFlow response.status: " + response.status + " data.delay: ", data.delay);
							let delay = 180;
							if (data.delay != "")
								delay = data.delay;
							this.checkFlowItv = setTimeout(() => {
                                this.checkFlow();
                            }, delay * 1000);
                        } else {
                            throw new Error(data);
                        }
                    });
            })
            .catch(() => {
                this.onFlowError();
            });
    }

    /**
     *	Display an error message when user has reached simultaneous flow limit
     */
    onFlowError() {
        //console.log("[FlowController] OnFlowError");
        if (this.flowOnErrorCallback !== null) {
            this.flowOnErrorCallback();
        }
        // After Flow error, we request for a new token request
        clearTimeout(this.checkFlowItv);
        this.checkFlowItv = setTimeout(() => {
            this.launchFlowTokenRequest();
        }, 60000);
    }

}

caf.FlowController = FlowController;
