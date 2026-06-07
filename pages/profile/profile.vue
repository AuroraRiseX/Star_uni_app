<template>
	<view class="page">
		<!-- 状态栏占位 -->
		<view style="height: var(--status-bar-height);"></view>

		<!-- Topbar-sj: 头像 + 星星罐 + 设置齿轮 -->
		<view class="topbar-sj">
			<view class="topbar-left">
				<view class="topbar-avatar">
					<image class="topbar-avatar-img" src="/static/logo.png" mode="aspectFill"></image>
				</view>
				<text class="topbar-title">星星罐</text>
			</view>
			<view class="topbar-action" @tap="goSettings">
				<text class="topbar-action-icon">⚙️</text>
			</view>
		</view>

		<scroll-view scroll-y class="scroll-area">
			<!-- 个人资料区 居中 -->
			<view class="profile-section">
				<view class="avatar-wrap">
					<view class="avatar-card-sj">
						<image class="avatar-img" src="/static/logo.png" mode="aspectFill"></image>
					</view>
					<view class="avatar-edit-btn" @tap="editAvatar">
						<text class="avatar-edit-icon">✏️</text>
					</view>
				</view>
				<text class="user-name">小星星的爸爸</text>
				<text class="user-days">已陪伴成长 128 天</text>
			</view>

			<!-- 统计卡片 2列 -->
			<view class="stats-grid">
				<view class="glass-card-sj">
					<text class="glass-icon">🌟</text>
					<text class="glass-value">42</text>
					<text class="glass-label">当前星币</text>
				</view>
				<view class="glass-card-sj">
					<text class="glass-icon">🏆</text>
					<text class="glass-value">12</text>
					<text class="glass-label">已兑换奖赏</text>
				</view>
			</view>

			<!-- 导航列表 -->
			<view class="nav-list">
				<view class="nav-item" @tap="goBabyManagement">
					<view class="nav-left">
						<view class="nav-icon bg-baby">
							<text class="nav-icon-text">👶</text>
						</view>
						<text class="nav-label">宝贝管理</text>
					</view>
					<text class="nav-arrow">›</text>
				</view>
				<view class="nav-divider"></view>
				<view class="nav-item" @tap="goSettings">
					<view class="nav-left">
						<view class="nav-icon bg-settings">
							<text class="nav-icon-text">⚙️</text>
						</view>
						<text class="nav-label">通用设置</text>
					</view>
					<text class="nav-arrow">›</text>
				</view>
				<view class="nav-divider"></view>
				<view class="nav-item" @tap="goPrivacy">
					<view class="nav-left">
						<view class="nav-icon bg-privacy">
							<text class="nav-icon-text">🔒</text>
						</view>
						<text class="nav-label">隐私协议</text>
					</view>
					<text class="nav-arrow">›</text>
				</view>
				<view class="nav-divider"></view>
				<view class="nav-item" @tap="goAbout">
					<view class="nav-left">
						<view class="nav-icon bg-about">
							<text class="nav-icon-text">📧</text>
						</view>
						<text class="nav-label">关于我们</text>
					</view>
					<text class="nav-arrow">›</text>
				</view>
			</view>

			<!-- 退出登录按钮: 描边 #ba1a1a 红色文字 -->
			<view class="logout-btn" @tap="handleLogout">
				<text class="logout-text">退出登录</text>
			</view>

			<view style="height: 200rpx;"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onShow() {
			if (typeof this.getTabBar === 'function' && this.getTabBar()) {
				this.getTabBar().setData({ selected: 3 })
			}
		},
		methods: {
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
				uni.redirectTo({ url: '/pages/profile-logout/profile-logout' })
			}
		}
	}
</script>

<style scoped>
	.page {
		min-height: 100vh;
		background: #faf9f9;
		font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', sans-serif;
		color: #1a1c1c;
	}

	/* ===== Topbar-sj ===== */
	.topbar-sj {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 40rpx;
		height: 128rpx;
		background: rgba(250, 249, 249, 0.4);
		backdrop-filter: blur(24rpx);
		-webkit-backdrop-filter: blur(24rpx);
		border-bottom: 2rpx solid rgba(255, 255, 255, 0.2);
		box-shadow: 0 60rpx 120rpx -24rpx rgba(255, 132, 0, 0.1);
		position: fixed;
		top: var(--status-bar-height);
		left: 0;
		width: 100%;
		z-index: 50;
	}

	.topbar-left {
		display: flex;
		align-items: center;
		gap: 20rpx;
	}

	/* 头像 80rpx(40px), 圆形, border 4rpx(2px) white + box-shadow 0 0 0 4rpx(2px) #ffd93d */
	.topbar-avatar {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		overflow: hidden;
		border: 4rpx solid #ffffff;
		box-shadow: 0 0 0 4rpx #ffd93d;
	}

	.topbar-avatar-img {
		width: 100%;
		height: 100%;
	}

	.topbar-title {
		font-size: 48rpx;
		font-weight: 700;
		color: #944a00;
	}

	.topbar-action {
		width: 80rpx;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.topbar-action-icon {
		font-size: 40rpx;
		color: #705d00;
	}

	/* ===== Scroll Area ===== */
	.scroll-area {
		padding: 184rpx 40rpx 0;
	}

	/* ===== 个人资料区 ===== */
	.profile-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 64rpx;
	}

	.avatar-wrap {
		position: relative;
		margin-bottom: 28rpx;
	}

	/* 头像 224rpx(112px), border-radius 24rpx(12px), glass-card-sj */
	.avatar-card-sj {
		width: 224rpx;
		height: 224rpx;
		border-radius: 24rpx;
		overflow: hidden;
		background: rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(40rpx);
		-webkit-backdrop-filter: blur(40rpx);
		border: 3rpx solid rgba(255, 255, 255, 0.6);
		box-shadow: 0 32rpx 96rpx -16rpx rgba(0, 0, 0, 0.08);
	}

	.avatar-img {
		width: 100%;
		height: 100%;
	}

	/* 编辑按钮 64rpx(32px), 圆形, #fc8200, ✏️白色36rpx(18px) */
	.avatar-edit-btn {
		position: absolute;
		bottom: -12rpx;
		right: -12rpx;
		width: 64rpx;
		height: 64rpx;
		background: #fc8200;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.12);
	}

	.avatar-edit-icon {
		font-size: 36rpx;
		color: #ffffff;
	}

	.user-name {
		font-size: 52rpx;
		font-weight: 700;
		color: #1a1c1c;
		margin-bottom: 8rpx;
	}

	.user-days {
		font-size: 28rpx;
		color: #4d4633;
	}

	/* ===== 统计卡片 2列 ===== */
	.stats-grid {
		display: flex;
		gap: 24rpx;
		width: 100%;
		margin-bottom: 48rpx;
	}

	.glass-card-sj {
		flex: 1;
		padding: 40rpx;
		border-radius: 24rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(40rpx);
		-webkit-backdrop-filter: blur(40rpx);
		border: 3rpx solid rgba(255, 255, 255, 0.6);
		box-shadow: 0 60rpx 120rpx -24rpx rgba(255, 132, 0, 0.1);
	}

	.glass-icon {
		font-size: 48rpx;
		color: #fc8200;
		margin-bottom: 12rpx;
	}

	.glass-value {
		font-size: 44rpx;
		font-weight: 700;
		color: #705d00;
		line-height: 1.2;
	}

	.glass-label {
		font-size: 24rpx;
		font-weight: 500;
		color: #705d00;
		margin-top: 6rpx;
	}

	/* ===== 导航列表 ===== */
	.nav-list {
		width: 100%;
		background: #f4f3f3;
		border-radius: 24rpx;
		overflow: hidden;
		border: 2rpx solid rgba(255, 255, 255, 0.4);
		margin-bottom: 40rpx;
	}

	.nav-item {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 40rpx;
	}

	.nav-item:active {
		opacity: 0.7;
	}

	.nav-left {
		display: flex;
		align-items: center;
		gap: 36rpx;
	}

	.nav-icon {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.nav-icon.bg-baby {
		background: #ffdcc6;
	}

	.nav-icon.bg-settings {
		background: #e6e3d1;
	}

	.nav-icon.bg-privacy {
		background: #ffe173;
	}

	.nav-icon.bg-about {
		background: #e3e2e2;
	}

	.nav-icon-text {
		font-size: 36rpx;
	}

	.nav-label {
		font-size: 32rpx;
		font-weight: 500;
		color: #1a1c1c;
	}

	.nav-arrow {
		font-size: 36rpx;
		color: #7e7761;
		font-weight: 300;
	}

	.nav-divider {
		height: 1rpx;
		background: rgba(208, 198, 173, 0.3);
		margin: 0 40rpx;
	}

	/* ===== 退出登录按钮: 描边 #ba1a1a 红色文字 ===== */
	.logout-btn {
		width: 100%;
		padding: 28rpx 0;
		border-radius: 24rpx;
		border: 2rpx solid #ba1a1a;
		background: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logout-btn:active {
		opacity: 0.7;
	}

	.logout-text {
		font-size: 28rpx;
		font-weight: 700;
		color: #ba1a1a;
	}
</style>
