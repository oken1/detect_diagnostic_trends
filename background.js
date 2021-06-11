chrome.tabs.onUpdated.addListener( ( tabId, changeInfo, tab ) => {
	if ( changeInfo.status == 'complete' ) {
		if ( tab.url.indexOf( 'https://twitter.com/explore/tabs/trending' ) != -1 ) {
			chrome.tabs.sendMessage( tabId, tab.url, null )
		}
	}
} )
