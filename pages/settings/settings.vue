<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>
		<view class="header">
			<view class="header-left">
				<button class="back-btn" @tap="goBack">
					<text class="back-icon">←</text>
				</button>
				<text class="header-title">通用设置</text>
			</view>
			<view class="header-right">
				<text class="settings-icon">⚙️</text>
			</view>
		</view>
		<view class="main">
			<view class="header-visual">
				<view class="settings-glass-icon">
					<text class="settings-main-icon">⚙️</text>
				</view>
				<text class="settings-section-title">偏好设置</text>
				<text class="settings-section-desc">在这里调整 Star Jar 的使用体验，让它更适合您和孩子。</text>
			</view>
			<view class="settings-group">
				<text class="group-label">系统体验</text>
				<view class="glass-card settings-list">
					<view class="toggle-item">
						<view class="toggle-left">
							<view class="toggle-icon bg-primary-light">
								<text class="toggle-icon-text">🔔</text>
							</view>
							<view>
								<text class="toggle-name">音效开关</text>
								<text class="toggle-desc">开启收集星星时的灵动音效</text>
							</view>
						</view>
						<switch class="toggle-switch" color="#ffd93d" :checked="soundEnabled" @change="onSoundChange" />
					</view>
					<view class="toggle-item">
						<view class="toggle-left">
							<view class="toggle-icon bg-secondary-light">
								<text class="toggle-icon-text">🔔</text>
							</view>
							<view>
								<text class="toggle-name">消息推送开关</text>
								<text class="toggle-desc">第一时间获取孩子的进步提醒</text>
							</view>
						</view>
						<switch class="toggle-switch" color="#ffd93d" :checked="pushEnabled" @change="onPushChange" />
					</view>
					<view class="toggle-item">
						<view class="toggle-left">
							<view class="toggle-icon bg-tertiary-light">
								<text class="toggle-icon-text">🌙</text>
							</view>
							<view>
								<text class="toggle-name">夜间模式</text>
								<text class="toggle-desc">睡前使用更护眼</text>
							</view>
						</view>
						<switch class="toggle-switch" color="#ffd93d" :checked="nightMode" @change="onNightModeChange" />
					</view>
				</view>
			</view>
			<view class="settings-group">
				<text class="group-label">存储与更新</text>
				<view class="glass-card settings-list">
					<button class="action-item" @tap="handleClearCache">
						<view class="action-left">
							<view class="toggle-icon bg-surface-container">
								<text class="toggle-icon-text">🧹</text>
							</view>
							<view class="text-left">
								<text class="toggle-name">清理缓存</text>
								<text class="toggle-desc" :class="{ 'cached': cacheCleared }">当前占用 {{ cacheSize }}</text>
							</view>
						</view>
						<text class="action-arrow">›</text>
					</button>
					<button class="action-item" @tap="checkUpdate">
						<view class="action-left">
							<view class="toggle-icon bg-surface-container">
								<text class="toggle-icon-text">📥</text>
							</view>
							<view class="text-left">
								<view class="version-top">
									<text class="toggle-name">版本更新</text>
									<text class="new-badge">NEW</text>
								</view>
								<text class="toggle-desc">当前版本 v2.4.0</text>
							</view>
						</view>
						<view class="update-right">
							<text class="update-label">发现新版本</text>
							<text class="action-arrow">›</text>
						</view>
					</button>
				</view>
			</view>
			<view class="logout-section">
				<button class="settings-logout-btn" @tap="handleLogout">
					<text class="logout-btn-icon">🚪</text>
					<text>退出登录</text>
				</button>
				<text class="footer-text">Star Jar - 为爱与成长设计</text>
			</view>
		</view>
		<view class="toast" :class="toastClasses">
			<view class="toast-inner">
				<text class="toast-icon">✨</text>
				<text class="toast-message">{{ toastMessage }}</text>
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
			toastMessage: '设置已保存',
			toastVisible: false,
			toastTimeout: null
		}
	},
	computed: {
		toastClasses() {
			return {
				'toast-show': this.toastVisible
			}
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
		onSoundChange(e) {
			this.soundEnabled = e.detail.value
			this.showToast(this.soundEnabled ? '音效已开启' : '音效已关闭')
		},
		onPushChange(e) {
			this.pushEnabled = e.detail.value
			this.showToast(this.pushEnabled ? '消息推送已开启' : '消息推送已关闭')
		},
		onNightModeChange(e) {
			this.nightMode = e.detail.value
			this.showToast(this.nightMode ? '已进入深色模式' : '已切换至浅色模式')
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
	font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
	color: #1a1c1c;
	overflow-x: hidden;
	padding-bottom: 96rpx;
}
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 40rpx;
	height: 128rpx;
	background: rgba(250, 249, 249, 0.4);
	backdrop-filter: blur(48rpx);
	border-bottom: 2rpx solid rgba(255,255,255,0.2);
	position: fixed;
	top: var(--status-bar-height);
	left: 0;
	width: 100%;
	z-index: 50;
}
.header-left {
	display: flex;
	align-items: center;
	gap: 32rpx;
}
.back-btn {
	width: 80rpx;
	height: 80rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background: transparent;
	border: none;
}
.back-icon {
	font-size: 44rpx;
	color: #705d00;
}
.header-title {
	font-size: 48rpx;
	font-weight: 700;
	color: #944a00;
}
.header-right {
	display: flex;
	align-items: center;
}
.settings-icon {
	font-size: 44rpx;
	color: #e8c426;
}
.main {
	padding: 0 40rpx;
	padding-top: 192rpx;
	max-width: 700rpx;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 32rpx;
}
.header-visual {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin-bottom: 48rpx;
}
.settings-glass-icon {
	width: 160rpx;
	height: 160rpx;
	border-radius: 24rpx;
	background: rgba(255,255,255,0.4);
	backdrop-filter: blur(20px);
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 24rpx;
	box-shadow: 0 40rpx 80rpx rgba(255, 132, 0, 0.1);
	border: 3rpx solid rgba(255,255,255,0.6);
}
.settings-main-icon {
	font-size: 64rpx;
	color: #705d00;
}
.settings-section-title {
	font-size: 48rpx;
	font-weight: 700;
	color: #1a1c1c;
}
.settings-section-desc {
	font-size: 32rpx;
	color: #4d4633;
	margin-top: 16rpx;
	max-width: 500rpx;
}
.settings-group {
	display: flex;
	flex-direction: column;
	gap: 24rpx;
}
.group-label {
	padding: 0 16rpx;
	font-size: 28rpx;
	font-weight: 700;
	color: #7e7761;
	text-transform: uppercase;
	letter-spacing: 4rpx;
}
.glass-card {
	border-radius: 32rpx;
	overflow: hidden;
	background: rgba(255,255,255,0.4);
	backdrop-filter: blur(20px);
	border: 3rpx solid rgba(255,255,255,0.6);
	box-shadow: 0 20rpx 60rpx rgba(0,0,0,0.02);
}
.settings-list {
	display: flex;
	flex-direction: column;
}
.toggle-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 48rpx;
	border-bottom: 2rpx solid rgba(255,255,255,0.2);
}
.toggle-item:last-child {
	border-bottom: none;
}
.toggle-left {
	display: flex;
	align-items: center;
	gap: 32rpx;
}
.toggle-icon {
	width: 80rpx;
	height: 80rpx;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.toggle-icon.bg-primary-light {
	background: rgba(255, 217, 61, 0.3);
}
.toggle-icon.bg-secondary-light {
	background: rgba(255, 220, 198, 0.3);
}
.toggle-icon.bg-tertiary-light {
	background: rgba(223, 220, 203, 0.3);
}
.toggle-icon.bg-surface-container {
	background: #eeeeed;
}
.toggle-icon-text {
	font-size: 36rpx;
}
.toggle-icon.bg-primary-light .toggle-icon-text { color: #705d00; }
.toggle-icon.bg-secondary-light .toggle-icon-text { color: #944a00; }
.toggle-icon.bg-tertiary-light .toggle-icon-text { color: #605f51; }
.toggle-icon.bg-surface-container .toggle-icon-text { color: #7e7761; }
.toggle-name {
	font-size: 36rpx;
	color: #1a1c1c;
	display: block;
}
.toggle-desc {
	font-size: 24rpx;
	color: #4d4633;
	display: block;
	margin-top: 4rpx;
}
.toggle-desc.cached {
	color: #705d00;
}
.toggle-switch {
	transform: scale(0.9);
}
.action-item {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 48rpx;
	background: transparent;
	border: none;
	border-bottom: 2rpx solid rgba(255,255,255,0.2);
}
.action-item:last-child {
	border-bottom: none;
}
.action-left {
	display: flex;
	align-items: center;
	gap: 32rpx;
	flex: 1;
}
.text-left {
	text-align: left;
}
.version-top {
	display: flex;
	align-items: center;
	gap: 16rpx;
}
.new-badge {
	padding: 4rpx 16rpx;
	background: #ba1a1a;
	color: #fff;
	font-size: 20rpx;
	font-weight: 700;
	border-radius: 999rpx;
	animation: pulse-badge 2s infinite;
}
@keyframes pulse-badge {
	0%, 100% { opacity: 1; }
	50% { opacity: 0.7; }
}
.action-arrow {
	font-size: 40rpx;
	color: #d0c6ad;
}
.update-right {
	display: flex;
	align-items: center;
	gap: 8rpx;
}
.update-label {
	font-size: 24rpx;
	font-weight: 700;
	color: #705d00;
}
.logout-section {
	padding-top: 64rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 48rpx;
}
.settings-logout-btn {
	width: 100%;
	height: 112rpx;
	border-radius: 32rpx;
	background: #f4f3f3;
	color: #ba1a1a;
	font-size: 36rpx;
	font-weight: 700;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16rpx;
}
.logout-btn-icon {
	font-size: 36rpx;
}
.footer-text {
	font-size: 24rpx;
	color: #d0c6ad;
	text-align: center;
}
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
	background: rgba(255,255,255,0.9);
	backdrop-filter: blur(24rpx);
	padding: 24rpx 48rpx;
	border-radius: 64rpx;
	display: flex;
	align-items: center;
	gap: 24rpx;
	border: 2rpx solid #fff;
	box-shadow: 0 40rpx 100rpx rgba(255, 132, 0, 0.15);
}
.toast-icon {
	font-size: 36rpx;
	color: #ffd93d;
}
.toast-message {
	font-size: 28rpx;
	font-weight: 700;
	color: #1a1c1c;
}
</style>
