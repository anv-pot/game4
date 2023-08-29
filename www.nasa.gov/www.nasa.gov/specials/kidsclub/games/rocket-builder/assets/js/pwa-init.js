window.onload = function () {
	// wep app
	if('serviceWorker' in navigator) {
		navigator.serviceWorker.register('./service-worker.js', { scope: './' });
	}
}