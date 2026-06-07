<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>
		<view class="header">
			<view class="header-left">
				<view class="avatar-placeholder">
					<text class="placeholder-icon">👤</text>
				</view>
				<text class="app-name">Star Jar</text>
			</view>
			<button class="info-btn" @tap="showInfo">
				<text class="info-icon">ℹ️</text>
			</button>
		</view>
		<view class="main">
			<view class="profile-header" @tap="showLoginModal">
				<view class="avatar-wrap">
					<view class="avatar-circle">
						<text class="avatar-circle-icon">👤</text>
					</view>
					<view class="star-badge floating-star">
						<text class="star-badge-icon">⭐</text>
					</view>
				</view>
				<text class="login-prompt">点击登录/注册</text>
				<text class="login-sub">开启您的育儿魔力之旅</text>
			</view>
			<view class="stats-grid">
				<view class="glass-card dimmed">
					<text class="stat-value">-</text>
					<text class="stat-label">累积星星</text>
				</view>
				<view class="glass-card dimmed">
					<text class="stat-value secondary">-</text>
					<text class="stat-label">待领奖励</text>
				</view>
			</view>
			<view class="glass-card list-card">
				<button class="list-item" @tap="showLoginModal">
					<view class="list-left">
						<view class="list-icon bg-primary-light">
							<text class="list-icon-text">👶</text>
						</view>
						<text class="list-label">宝贝管理</text>
					</view>
					<text class="list-arrow">›</text>
				</button>
				<view class="list-divider"></view>
				<button class="list-item" @tap="showLoginModal">
					<view class="list-left">
						<view class="list-icon bg-secondary-light">
							<text class="list-icon-text">📅</text>
						</view>
						<text class="list-label">成长历史</text>
					</view>
					<text class="list-arrow">›</text>
				</button>
				<view class="list-divider"></view>
				<button class="list-item" @tap="showLoginModal">
					<view class="list-left">
						<view class="list-icon bg-tertiary-light">
							<text class="list-icon-text">⚙️</text>
						</view>
						<text class="list-label">通用设置</text>
					</view>
					<text class="list-arrow">›</text>
				</button>
			</view>
			<view class="glass-card list-card">
				<button class="list-item" @tap="showLoginModal">
					<view class="list-left">
						<view class="list-icon bg-surface-container">
							<text class="list-icon-text">❓</text>
						</view>
						<text class="list-label">帮助与反馈</text>
					</view>
					<text class="list-arrow">›</text>
				</button>
			</view>
		</view>

		<view class="modal-overlay" v-if="loginModalVisible" @tap="hideLoginModal">
			<view class="modal-content" @tap.stop>
				<view class="modal-icon-wrap">
					<text class="modal-icon">🔒</text>
				</view>
				<text class="modal-title">登录开始收集星星</text>
				<text class="modal-desc">登录后即可记录宝贝的每一个进步瞬间</text>
				<button class="login-action-btn" @tap="handleLogin">立即登录</button>
				<button class="later-btn" @tap="hideLoginModal">稍后再说</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			loginModalVisible: false
		}
	},
	methods: {
		showInfo() {
			uni.showToast({ title: '信息', icon: 'none' })
		},
		showLoginModal() {
			this.loginModalVisible = true
		},
		hideLoginModal() {
			this.loginModalVisible = false
		},
		handleLogin() {
			this.loginModalVisible = false
			uni.switchTab({ url: '/pages/profile/profile' })
		}

	}
}
</script>

<style>
.page {
	min-height: 100vh;
	background: #faf9f9;
	font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
	color: #1a1c1c;
	padding-bottom: 160rpx;
}
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 40rpx;
	height: 128rpx;
	background: rgba(255,255,255,0.4);
	backdrop-filter: blur(24rpx);
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
	gap: 24rpx;
}
.avatar-placeholder {
	width: 80rpx;
	height: 80rpx;
	border-radius: 50%;
	background: #eeeeed;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 4rpx solid #fff;
	overflow: hidden;
}
.placeholder-icon {
	font-size: 40rpx;
	color: #d0c6ad;
}
.app-name {
	font-size: 48rpx;
	font-weight: 700;
	color: #944a00;
}
.info-btn {
	width: 80rpx;
	height: 80rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	border: none;
}
.info-icon {
	font-size: 40rpx;
	color: #705d00;
}
.main {
	padding: 0 40rpx;
	padding-top: 192rpx;
	max-width: 700rpx;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 48rpx;
	padding-bottom: 48rpx;
}
.profile-header {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
}
.avatar-wrap {
	position: relative;
	margin-bottom: 24rpx;
}
.avatar-circle {
	width: 192rpx;
	height: 192rpx;
	border-radius: 50%;
	background: #e3e2e2;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 8rpx solid #fff;
	box-shadow: 0 20rpx 60rpx rgba(255, 132, 0, 0.1);
	overflow: hidden;
}
.avatar-circle-icon {
	font-size: 80rpx;
	color: #d0c6ad;
	font-weight: 200;
}
.star-badge {
	position: absolute;
	bottom: -16rpx;
	right: -16rpx;
	width: 64rpx;
	height: 64rpx;
	background: #ffd93d;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 4rpx solid #fff;
}
.floating-star {
	animation: floatAnim 3s ease-in-out infinite;
}
@keyframes floatAnim {
	0%, 100% { transform: translateY(0); }
	50% { transform: translateY(-16rpx); }
}
.star-badge-icon {
	font-size: 32rpx;
	color: #725e00;
}
.login-prompt {
	font-size: 52rpx;
	font-weight: 700;
	color: #1a1c1c;
	margin-bottom: 8rpx;
}
.login-sub {
	font-size: 32rpx;
	color: #4d4633;
}
.stats-grid {
	display: flex;
	gap: 32rpx;
}
.glass-card {
	flex: 1;
	padding: 48rpx;
	border-radius: 32rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: rgba(255,255,255,0.4);
	backdrop-filter: blur(20px);
	border: 3rpx solid rgba(255,255,255,0.6);
	box-shadow: 0 60rpx 120rpx -24rpx rgba(255, 132, 0, 0.1);
}
.glass-card.dimmed {
	opacity: 0.6;
}
.stat-value {
	font-size: 48rpx;
	font-weight: 700;
	color: #705d00;
}
.stat-value.secondary {
	color: #944a00;
}
.stat-label {
	font-size: 24rpx;
	font-weight: 600;
	color: #4d4633;
	margin-top: 8rpx;
}
.list-card {
	border-radius: 32rpx;
	overflow: hidden;
}
.list-item {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 48rpx;
	background: transparent;
	border: none;
}
.list-left {
	display: flex;
	align-items: center;
	gap: 48rpx;
}
.list-icon {
	width: 80rpx;
	height: 80rpx;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.list-icon.bg-primary-light {
	background: rgba(255, 225, 115, 0.3);
}
.list-icon.bg-secondary-light {
	background: rgba(255, 220, 198, 0.3);
}
.list-icon.bg-tertiary-light {
	background: #dfdccb;
}
.list-icon.bg-surface-container {
	background: #eeeeed;
}
.list-icon-text {
	font-size: 36rpx;
}
.list-icon.bg-primary-light .list-icon-text { color: #705d00; }
.list-icon.bg-secondary-light .list-icon-text { color: #944a00; }
.list-icon.bg-tertiary-light .list-icon-text { color: #605f51; }
.list-icon.bg-surface-container .list-icon-text { color: #4d4633; }
.list-label {
	font-size: 36rpx;
	color: #1a1c1c;
}
.list-arrow {
	font-size: 40rpx;
	color: #d0c6ad;
}
.list-divider {
	height: 2rpx;
	background: rgba(255,255,255,0.2);
	margin: 0 48rpx;
}

.modal-overlay {
	position: fixed;
	inset: 0;
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 40rpx;
	background: rgba(47, 49, 49, 0.4);
	backdrop-filter: blur(12rpx);
}
.modal-content {
	background: #fff;
	border-radius: 32rpx;
	width: 100%;
	max-width: 560rpx;
	padding: 80rpx;
	text-align: center;
}
.modal-icon-wrap {
	width: 160rpx;
	height: 160rpx;
	background: #ffd93d;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto 48rpx;
	box-shadow: 0 20rpx 60rpx rgba(255, 132, 0, 0.1);
}
.modal-icon {
	font-size: 64rpx;
	color: #725e00;
}
.modal-title {
	font-size: 48rpx;
	font-weight: 700;
	color: #1a1c1c;
	margin-bottom: 8rpx;
	display: block;
}
.modal-desc {
	font-size: 32rpx;
	color: #4d4633;
	margin-bottom: 48rpx;
	display: block;
}
.login-action-btn {
	width: 100%;
	padding: 32rpx 0;
	background: #ffd93d;
	color: #725e00;
	font-size: 28rpx;
	font-weight: 700;
	letter-spacing: 2rpx;
	border-radius: 32rpx;
	border: none;
	margin-bottom: 24rpx;
}
.later-btn {
	width: 100%;
	padding: 16rpx 0;
	background: transparent;
	color: #4d4633;
	font-size: 28rpx;
	font-weight: 700;
	border: none;
}
</style>
