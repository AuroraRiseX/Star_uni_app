<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>
		<view class="header">
			<view class="header-left">
				<view class="avatar-small">
					<image class="avatar-small-img" src="/static/logo.png" mode="aspectFill"></image>
				</view>
				<text class="app-name">星星罐</text>
			</view>
			<button class="info-btn" @tap="showInfo">
				<text class="info-icon">ℹ️</text>
			</button>
		</view>
		<view class="main">
			<view class="profile-header">
				<view class="avatar-wrap">
					<view class="avatar-frame">
						<image class="avatar-img" src="/static/logo.png" mode="aspectFill"></image>
					</view>
					<button class="edit-btn" @tap="editAvatar">
						<text class="edit-icon">✏️</text>
					</button>
				</view>
				<text class="user-name">小星星的爸爸</text>
				<text class="user-days">已陪伴成长 128 天</text>
			</view>
			<view class="stats-grid">
				<view class="glass-card">
					<text class="glass-icon">⭐</text>
					<text class="glass-value">42</text>
					<text class="glass-label">当前星币</text>
				</view>
				<view class="glass-card">
					<text class="glass-icon">🏆</text>
					<text class="glass-value">12</text>
					<text class="glass-label">已兑换奖赏</text>
				</view>
			</view>
			<view class="nav-list">
				<button class="nav-item" @tap="goBabyManagement">
					<view class="nav-left">
						<view class="nav-icon bg-secondary">
							<text class="nav-icon-text">👶</text>
						</view>
						<text class="nav-label">宝贝管理</text>
					</view>
					<text class="nav-arrow">›</text>
				</button>
				<view class="nav-divider"></view>
				<button class="nav-item" @tap="goSettings">
					<view class="nav-left">
						<view class="nav-icon bg-tertiary">
							<text class="nav-icon-text">⚙️</text>
						</view>
						<text class="nav-label">通用设置</text>
					</view>
					<text class="nav-arrow">›</text>
				</button>
				<view class="nav-divider"></view>
				<button class="nav-item" @tap="goPrivacy">
					<view class="nav-left">
						<view class="nav-icon bg-primary-fixed">
							<text class="nav-icon-text">🔒</text>
						</view>
						<text class="nav-label">隐私协议</text>
					</view>
					<text class="nav-arrow">›</text>
				</button>
				<view class="nav-divider"></view>
				<button class="nav-item" @tap="goAbout">
					<view class="nav-left">
						<view class="nav-icon bg-surface-high">
							<text class="nav-icon-text">📧</text>
						</view>
						<text class="nav-label">关于我们</text>
					</view>
					<text class="nav-arrow">›</text>
				</button>
			</view>
			<button class="logout-btn" @tap="handleLogout">退出登录</button>
		</view>
		<view class="bottom-nav">
			<button class="nav-tab" @tap="goHome">
				<text class="tab-icon">🏠</text>
				<text class="tab-label">首页</text>
			</button>
			<button class="nav-tab" @tap="goReward">
				<text class="tab-icon">⭐</text>
				<text class="tab-label">奖惩</text>
			</button>
			<button class="nav-tab" @tap="goShop">
				<text class="tab-icon">🛒</text>
				<text class="tab-label">店铺</text>
			</button>
			<button class="nav-tab active" @tap="goProfile">
				<text class="tab-icon">👤</text>
				<text class="tab-label">我的</text>
			</button>
		</view>
	</view>
</template>

<script>
export default {
	methods: {
		showInfo() {
			uni.showToast({ title: '信息', icon: 'none' })
		},
		editAvatar() {
			uni.showToast({ title: '编辑头像', icon: 'none' })
		},
		goBabyManagement() {
			uni.navigateTo({ url: '/pages/baby-management/baby-management' })
		},
		goSettings() {
			uni.navigateTo({ url: '/pages/settings/settings' })
		},
		goPrivacy() {
			uni.showToast({ title: '隐私协议', icon: 'none' })
		},
		goAbout() {
			uni.showToast({ title: '关于我们', icon: 'none' })
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
		},
		goHome() { uni.switchTab({ url: '/pages/index/index' }) },
		goReward() { uni.showToast({ title: '奖惩中心', icon: 'none' }) },
		goShop() { uni.showToast({ title: '店铺', icon: 'none' }) },
		goProfile() {}
	}
}
</script>

<style>
.page {
	min-height: 100vh;
	background: radial-gradient(circle at top right, #fffdf5 0%, #faf9f9 100%);
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
.avatar-small {
	width: 80rpx;
	height: 80rpx;
	border-radius: 50%;
	overflow: hidden;
	border: 4rpx solid #fff;
	box-shadow: 0 0 0 4rpx rgba(255, 217, 61, 0.4);
}
.avatar-small-img {
	width: 100%;
	height: 100%;
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
	gap: 80rpx;
}
.profile-header {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 32rpx;
}
.avatar-wrap {
	position: relative;
}
.avatar-frame {
	width: 224rpx;
	height: 224rpx;
	border-radius: 24rpx;
	overflow: hidden;
	padding: 8rpx;
	background: rgba(255,255,255,0.4);
	backdrop-filter: blur(20px);
	box-shadow: 0 16rpx 48rpx rgba(0,0,0,0.08);
}
.avatar-img {
	width: 100%;
	height: 100%;
	border-radius: 16rpx;
}
.edit-btn {
	position: absolute;
	bottom: -16rpx;
	right: -16rpx;
	width: 64rpx;
	height: 64rpx;
	background: #fc8200;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	box-shadow: 0 8rpx 24rpx rgba(0,0,0,0.12);
}
.edit-icon {
	font-size: 28rpx;
	color: #fff;
}
.user-name {
	font-size: 52rpx;
	font-weight: 700;
	color: #1a1c1c;
}
.user-days {
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
.glass-icon {
	font-size: 48rpx;
	color: #fc8200;
	margin-bottom: 16rpx;
}
.glass-value {
	font-size: 48rpx;
	font-weight: 700;
	color: #705d00;
}
.glass-label {
	font-size: 24rpx;
	font-weight: 600;
	color: #4d4633;
	margin-top: 8rpx;
}
.nav-list {
	background: #f4f3f3;
	border-radius: 32rpx;
	overflow: hidden;
	border: 2rpx solid rgba(255,255,255,0.4);
}
.nav-item {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 48rpx;
	background: transparent;
	border: none;
}
.nav-left {
	display: flex;
	align-items: center;
	gap: 48rpx;
}
.nav-icon {
	width: 80rpx;
	height: 80rpx;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.nav-icon.bg-secondary {
	background: #ffdcc6;
}
.nav-icon.bg-tertiary {
	background: #e6e3d1;
}
.nav-icon.bg-primary-fixed {
	background: #ffe173;
}
.nav-icon.bg-surface-high {
	background: #e3e2e2;
}
.nav-icon-text {
	font-size: 36rpx;
}
.nav-icon.bg-secondary .nav-icon-text { color: #944a00; }
.nav-icon.bg-tertiary .nav-icon-text { color: #605f51; }
.nav-icon.bg-primary-fixed .nav-icon-text { color: #705d00; }
.nav-icon.bg-surface-high .nav-icon-text { color: #7e7761; }
.nav-label {
	font-size: 36rpx;
	color: #1a1c1c;
}
.nav-arrow {
	font-size: 40rpx;
	color: #7e7761;
}
.nav-divider {
	height: 2rpx;
	background: rgba(208, 198, 173, 0.3);
	margin: 0 48rpx;
}
.logout-btn {
	width: 100%;
	padding: 32rpx 0;
	font-size: 28rpx;
	font-weight: 700;
	color: #ba1a1a;
	background: transparent;
	border-radius: 32rpx;
	border: 2rpx solid rgba(186, 26, 26, 0.1);
	margin-bottom: 32rpx;
}
.bottom-nav {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 16rpx 32rpx 32rpx;
	background: rgba(250, 249, 249, 0.8);
	backdrop-filter: blur(24rpx);
	border-top: 2rpx solid rgba(255,255,255,0.2);
	border-radius: 32rpx 32rpx 0 0;
	z-index: 50;
}
.nav-tab {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 8rpx 32rpx;
	background: transparent;
	border: none;
}
.nav-tab.active {
	background: #ffd93d;
	border-radius: 24rpx;
	padding: 8rpx 32rpx;
	transform: scale(0.9);
}
.tab-icon {
	font-size: 44rpx;
	color: #4d4633;
}
.nav-tab.active .tab-icon {
	color: #725e00;
}
.tab-label {
	font-size: 24rpx;
	font-weight: 600;
	color: #4d4633;
	margin-top: 8rpx;
}
.nav-tab.active .tab-label {
	color: #725e00;
}
</style>
