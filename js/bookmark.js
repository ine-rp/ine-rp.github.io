/**
 * Creates the namespace
 */
var caf = caf || {};
//const API_BASE_URL = "https://api.ocs.fr/apps/v2/users/bookmarks";
const API_BASE_URL = "https://api-int.ocs.fr/apps/v2/users/bookmarks";

class Bookmark {
    save(userId, contentId, position, duration) {
        //console.log(`[Bookmark] save userId ${userId} contentId ${contentId} position ${position} duration ${duration}`);
        const positionInPercentage = Math.round(position / duration * 100 * 100) / 100;
        const options = {
            url: `${API_BASE_URL}?userid=${encodeURIComponent(userId)}`,
            body: {
                id: contentId,
                creator: 'player',
                position: positionInPercentage
            }
        };
        return this.launchRequest(options);
    }

    launchRequest(options) {
		return window.fetch(options.url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(options.body)
        });
    }
}

caf.Bookmark = Bookmark;
