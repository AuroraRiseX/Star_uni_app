<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>

		<!-- Topbar-sj -->
		<view class="topbar-sj">
			<view class="topbar-left">
				<view class="back-btn" @tap="goBack">
					<text class="back-icon">←</text>
				</view>
				<text class="topbar-title">通用设置</text>
			</view>
			<view class="settings-icon-wrap">
				<text class="settings-icon">⚙️</text>
			</view>
		</view>

		<scroll-view scroll-y class="scroll-area">
			<!-- 居中偏好设置图标 glass-card-sj -->
			<view class="header-visual">
				<view class="glass-icon-sj">
					<text class="glass-icon-emoji">⚙️</text>
				</view>
				<text class="section-title">偏好设置</text>
				<text class="section-desc">在这里调整 Star Jar 的使用体验，让它更适合您和孩子。</text>
			</view>

			<!-- 系统体验区块 -->
			<view class="settings-group">
				<text class="group-label">系统体验</text>
				<view class="glass-card-sj">
					<!-- 音效开关 -->
					<view class="toggle-item">
						<view class="toggle-left">
							<view class="toggle-icon-bg gold-bg">
								<text class="toggle-emoji">🔔</text>
							</view>
							<view>
								<text class="toggle-name">音效开关</text>
								<text class="toggle-sub">开启收集星星时的灵动音效</text>
							</view>
						</view>
						<view
							class="switch-wrap"
							:class="{ off: !soundEnabled }"
							@tap="soundEnabled = !soundEnabled; showToast(soundEnabled ? '音效已开启' : '音效已关闭')"
						>
							<view class="switch-dot"></view>
						</view>
					</view>
					<!-- 消息推送开关 -->
					<view class="toggle-item">
						<view class="toggle-left">
							<view class="toggle-icon-bg peach-bg">
								<text class="toggle-emoji">🔔</text>
							</view>
							<view>
								<text class="toggle-name">消息推送开关</text>
								<text class="toggle-sub">第一时间获取孩子的进步提醒</text>
							</view>
						</view>
						<view
							class="switch-wrap"
							:class="{ off: !pushEnabled }"
							@tap="pushEnabled = !pushEnabled; showToast(pushEnabled ? '消息推送已开启' : '消息推送已关闭')"
						>
							<view class="switch-dot"></view>
						</view>
					</view>
					<!-- 夜间模式 -->
					<view class="toggle-item">
						<view class="toggle-left">
							<view class="toggle-icon-bg gray-bg">
								<text class="toggle-emoji">🌙</text>
							</view>
							<view>
								<text class="toggle-name">夜间模式</text>
								<text class="toggle-sub">睡前使用更护眼</text>
							</view>
						</view>
						<view
							class="switch-wrap"
							:class="{ off: !nightMode }"
							@tap="nightMode = !nightMode; showToast(nightMode ? '已进入深色模式' : '已切换至浅色模式')"
						>
							<view class="switch-dot"></view>
						</view>
					</view>
				</view>
			</view>

			<!-- 存储与更新区块 -->
			<view class="settings-group">
				<text class="group-label">存储与更新</text>
				<view class="glass-card-sj">
					<!-- 清理缓存 -->
					<view class="action-item" @tap="handleClearCache">
						<view class="action-left">
							<view class="toggle-icon-bg light-bg">
								<text class="toggle-emoji">🧹</text>
							</view>
							<view>
								<text class="toggle-name">清理缓存</text>
								<text class="toggle-sub" :class="{ cached: cacheCleared }">当前占用 {{ cacheSize }}</text>
							</view>
						</view>
						<text class="action-arrow">›</text>
					</view>
					<!-- 版本更新 -->
					<view class="action-item" @tap="checkUpdate">
						<view class="action-left">
							<view class="toggle-icon-bg light-bg">
								<text class="toggle-emoji">📥</text>
							</view>
							<view>
								<view class="version-row">
									<text class="toggle-name">版本更新</text>
									<text class="new-badge">NEW</text>
								</view>
								<text class="toggle-sub">当前版本 v2.4.0</text>
							</view>
						</view>
						<view class="update-right">
							<text class="update-label">发现新版本</text>
							<text class="action-arrow">›</text>
						</view>
					</view>
				</view>
			</view>

			<!-- 退出登录 + 版本信息 -->
			<view class="footer-section">
				<view class="logout-btn" @tap="handleLogout">
					<text class="logout-icon">🚪</text>
					<text class="logout-text">退出登录</text>
				</view>
				<text class="version-info">Star Jar - 为爱与成长设计</text>
			</view>

			<view style="height: 60rpx;"></view>
		</scroll-view>

		<!-- Toast -->
		<view class="toast" :class="{ 'toast-show': toastVisible }">
			<view class="toast-inner">
				<text class="toast-emoji">✨</text>
				<text class="toast-msg">{{ toastMessage }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				soundEnabled: true,
				pushEnabled: true,
				nightMode: false,
				cacheSize: '128 MB',
				cacheCleared: false,
				toastMessage: '',
				toastVisible: false,
				toastTimeout: null
			}
		},
		methods: {
			goBack() {
				uni.navigateBack()
			},
			showToast(msg) {
				this.toastMessage = msg
				this.toastVisible = true
				if (this.toastTimeout) clearTimeout(this.toastTimeout)
				this.toastTimeout = setTimeout(() => {
					this.toastVisible = false
				}, 3000)
			},
			handleClearCache() {
				this.cacheSize = '0 MB'
				this.cacheCleared = true
				this.showToast('缓存清理成功！')
			},
			checkUpdate() {
				this.showToast('已是最新版本')
			},
			handleLogout() {
				uni.showModal({
					title: '提示',
					content: '确定要退出登录吗？',
					success: (res) => {
						if (res.confirm) {
							uni.redirectTo({ url: '/pages/profile-logout/profile-logout' })
						}
					}
				})
			}
		}
	}
</script>

<style>
	.page {
		min-height: 100vh;
		background: #faf9f9;
		background-image:
			radial-gradient(at 0% 0%, rgba(255, 217, 61, 0.1) 0px, transparent 50%),
			radial-gradient(at 100% 100%, rgba(255, 132, 0, 0.05) 0px, transparent 50%);
		font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', sans-serif;
		color: #1a1c1c;
	}

	/* ===== Topbar-sj ===== */
	.topbar-sj {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 50;
		background: rgba(250, 249, 249, 0.4);
		backdrop-filter: blur(24rpx);
		-webkit-backdrop-filter: blur(24rpx);
		border-bottom: 2rpx solid rgba(255, 255, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16rpx 40rpx;
		padding-top: calc(16rpx + var(--status-bar-height));
	}

	.topbar-left {
		display: flex;
		align-items: center;
		gap: 16rpx;
	}

	.back-btn {
		width: 72rpx;
		height: 72rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
	}

	.back-btn:active {
		transform: scale(0.9);
	}

	.back-icon {
		font-size: 40rpx;
		color: #705d00;
	}

	.topbar-title {
		font-size: 48rpx;
		font-weight: 700;
		color: #944a00;
	}

	.settings-icon-wrap {
		width: 72rpx;
		height: 72rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.settings-icon {
		font-size: 40rpx;
		color: #e8c426;
	}

	/* ===== Scroll Area ===== */
	.scroll-area {
		padding: 200rpx 40rpx 60rpx;
	}

	/* ===== Header Visual ===== */
	.header-visual {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin-bottom: 48rpx;
	}

	.glass-icon-sj {
		width: 160rpx;
		height: 160rpx;
		border-radius: 24rpx;
		background: rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 24rpx;
		box-shadow: 0 40rpx 80rpx rgba(255, 132, 0, 0.1);
		border: 3rpx solid rgba(255, 255, 255, 0.6);
	}

	.glass-icon-emoji {
		font-size: 64rpx;
	}

	.section-title {
		font-size: 48rpx;
		font-weight: 700;
		color: #1a1c1c;
	}

	.section-desc {
		font-size: 28rpx;
		color: #4d4633;
		margin-top: 12rpx;
		max-width: 500rpx;
		line-height: 1.5;
	}

	/* ===== Settings Group ===== */
	.settings-group {
		margin-bottom: 36rpx;
	}

	.group-label {
		padding: 0 8rpx;
		font-size: 24rpx;
		font-weight: 700;
		color: #7e7761;
		text-transform: uppercase;
		letter-spacing: 4rpx;
		margin-bottom: 16rpx;
	}

	.glass-card-sj {
		border-radius: 32rpx;
		overflow: hidden;
		background: rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 3rpx solid rgba(255, 255, 255, 0.6);
		box-shadow: 0 20rpx 60rpx rgba(0, 0, 0, 0.02);
	}

	/* ===== Toggle Item ===== */
	.toggle-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 40rpx;
		border-bottom: 2rpx solid rgba(255, 255, 255, 0.2);
	}

	.toggle-item:last-child {
		border-bottom: none;
	}

	.toggle-left {
		display: flex;
		align-items: center;
		gap: 28rpx;
	}

	.toggle-icon-bg {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.gold-bg {
		background: rgba(255, 217, 61, 0.3);
	}

	.peach-bg {
		background: rgba(255, 220, 198, 0.3);
	}

	.gray-bg {
		background: rgba(223, 220, 203, 0.3);
	}

	.light-bg {
		background: #eeeeed;
	}

	.toggle-emoji {
		font-size: 36rpx;
	}

	.toggle-name {
		font-size: 32rpx;
		font-weight: 700;
		color: #1a1c1c;
		display: block;
	}

	.toggle-sub {
		font-size: 22rpx;
		color: #4d4633;
		display: block;
		margin-top: 4rpx;
	}

	.toggle-sub.cached {
		color: #705d00;
	}

	/* ===== Custom Toggle Switch ===== */
	.switch-wrap {
		width: 96rpx;
		height: 56rpx;
		border-radius: 56rpx;
		background: #ffd93d;
		position: relative;
		transition: background 0.3s;
		flex-shrink: 0;
	}

	.switch-wrap.off {
		background: #e3e2e2;
	}

	.switch-dot {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		background: #705d00;
		position: absolute;
		top: 8rpx;
		left: 48rpx;
		transition: all 0.3s;
	}

	.switch-wrap.off .switch-dot {
		left: 8rpx;
		background: white;
	}

	/* ===== Action Item ===== */
	.action-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 40rpx;
		border-bottom: 2rpx solid rgba(255, 255, 255, 0.2);
	}

	.action-item:last-child {
		border-bottom: none;
	}

	.action-item:active {
		opacity: 0.7;
	}

	.action-left {
		display: flex;
		align-items: center;
		gap: 28rpx;
		flex: 1;
	}

	.action-arrow {
		font-size: 36rpx;
		color: #d0c6ad;
		font-weight: 300;
	}

	.version-row {
		display: flex;
		align-items: center;
		gap: 12rpx;
	}

	.new-badge {
		padding: 4rpx 16rpx;
		background: #ba1a1a;
		color: #fff;
		font-size: 20rpx;
		font-weight: 700;
		border-radius: 999rpx;
		animation: pulseBadge 2s infinite;
	}

	@keyframes pulseBadge {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.7; }
	}

	.update-right {
		display: flex;
		align-items: center;
		gap: 8rpx;
	}

	.update-label {
		font-size: 22rpx;
		font-weight: 700;
		color: #705d00;
	}

	/* ===== Footer Section ===== */
	.footer-section {
		padding-top: 48rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 32rpx;
	}

	.logout-btn {
		width: 100%;
		padding: 28rpx 0;
		border-radius: 24rpx;
		background: #f4f3f3;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12rpx;
	}

	.logout-btn:active {
		opacity: 0.7;
	}

	.logout-icon {
		font-size: 32rpx;
	}

	.logout-text {
		font-size: 30rpx;
		font-weight: 700;
		color: #ba1a1a;
	}

	.version-info {
		font-size: 22rpx;
		color: #d0c6ad;
		text-align: center;
	}

	/* ===== Toast ===== */
	.toast {
		position: fixed;
		bottom: 80rpx;
		left: 50%;
		transform: translateX(-50%) translateY(256rpx);
		opacity: 0;
		transition: all 0.5s ease-out;
		z-index: 100;
	}

	.toast.toast-show {
		transform: translateX(-50%) translateY(0);
		opacity: 1;
	}

	.toast-inner {
		background: rgba(255, 255, 255, 0.9);
		backdrop-filter: blur(24rpx);
		padding: 24rpx 48rpx;
		border-radius: 64rpx;
		display: flex;
		align-items: center;
		gap: 16rpx;
		border: 2rpx solid #fff;
		box-shadow: 0 40rpx 100rpx rgba(255, 132, 0, 0.15);
	}

	.toast-emoji {
		font-size: 32rpx;
	}

	.toast-msg {
		font-size: 26rpx;
		font-weight: 700;
		color: #1a1c1c;
	}
</style>
