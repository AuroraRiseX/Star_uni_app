<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		background-color: #faf9f9;
		color: #1a1c1c;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
		-webkit-tap-highlight-color: transparent;
	}
	
	view, text, image, button, input, scroll-view {
		box-sizing: border-box;
	}
	
	button {
		padding: 0;
		margin: 0;
		background: none;
		line-height: normal;
	}
	
	button::after {
		border: none;
	}
</style>
