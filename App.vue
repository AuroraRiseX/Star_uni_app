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
	/*
	 * 星星罐 - 全局样式
	 * 顶部遮挡修复：所有 page 默认开启安全区
	 */

	/* 页面基础 */
	page {
		background-color: #faf9f9;
		color: #1a1c1c;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
		-webkit-tap-highlight-color: transparent;
		/* 禁止横向滚动 */
		overflow-x: hidden;
		width: 100%;
	}

	/* 盒模型统一 */
	view, text, image, button, input, scroll-view {
		box-sizing: border-box;
	}

	/* 文字溢出保护 */
	text {
		word-break: break-word;
		overflow-wrap: break-word;
	}

	/* 按钮重置 */
	button {
		padding: 0;
		margin: 0;
		background: none;
		line-height: normal;
		border-radius: 0;
		-webkit-appearance: none;
	}

	button::after {
		border: none;
	}

	/*
	 * 全局安全区 CSS 变量
	 *  - 优先级：env() > constant() > 0
	 *  - constant 兼容 iOS < 11.2
	 *  - env 兼容 iOS ≥ 11.2
	 */
	:root {
		--safe-area-inset-top: 0px;
		--safe-area-inset-top: constant(safe-area-inset-top, 0px);
		--safe-area-inset-top: env(safe-area-inset-top, 0px);

		--safe-area-inset-bottom: 0px;
		--safe-area-inset-bottom: constant(safe-area-inset-bottom, 0px);
		--safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
	}
</style>
