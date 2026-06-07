<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>

		<!-- Topbar -->
		<view class="top-bar">
			<view class="top-bar-left">
				<view class="back-btn" @tap="goBack">
					<text class="back-icon">←</text>
				</view>
				<text class="page-title">奖品详情</text>
			</view>
			<view class="balance-pill">
				<text class="balance-emoji">🌟</text>
				<text class="balance-num">128</text>
			</view>
		</view>

		<scroll-view scroll-y class="main-scroll">
			<!-- Hero区域: 居中🎮图标 96px 金色 float+发光 -->
			<view class="hero-section">
				<view class="hero-glow"></view>
				<view class="hero-icon-wrap">
					<text class="hero-icon">🎮</text>
				</view>
				<text class="hero-title">玩游戏兑换卡</text>
				<text class="hero-desc">奖励30分钟的游戏时间！这是对宝贝努力完成任务的特别奖励。</text>
			</view>

			<!-- 价格网格 -->
			<view class="price-grid">
				<view class="price-card">
					<text class="price-label">兑换所需</text>
					<view class="price-value-row">
						<text class="price-value">20</text>
						<text class="price-star">🌟</text>
					</view>
				</view>
				<view class="price-card">
					<text class="price-label">当前余额</text>
					<view class="price-value-row">
						<text class="price-value balance-color">128</text>
						<text class="price-star balance-star-color">🌟</text>
					</view>
					<view class="sufficient-tag">
						<text class="sufficient-text">充足</text>
					</view>
				</view>
			</view>

			<!-- 说明 + 有效期 -->
			<view class="info-section">
				<view class="info-item">
					<view class="info-icon-wrap green-bg">
						<text class="info-icon">✅</text>
					</view>
					<view class="info-content">
						<text class="info-title">使用说明</text>
						<text class="info-desc">点击兑换后，向爸爸或妈妈展示兑换成功页面，即可获得30分钟的游戏时间。</text>
					</view>
				</view>
				<view class="info-item">
					<view class="info-icon-wrap purple-bg">
						<text class="info-icon">⏳</text>
					</view>
					<view class="info-content">
						<text class="info-title">有效期</text>
						<text class="info-desc">兑换后请在24小时内使用哦，过期奖品就要飞走啦！</text>
					</view>
				</view>
			</view>

			<view style="height: 200rpx;"></view>
		</scroll-view>

		<!-- 底部橙色渐变按钮 -->
		<view class="bottom-bar">
			<view class="redeem-btn" @tap="onRedeem">
				<text class="redeem-text">立即兑换</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isRedeeming: false
			}
		},
		methods: {
			goBack() {
				uni.navigateBack()
			},
			onRedeem() {
				if (this.isRedeeming) return
				this.isRedeeming = true
				uni.showToast({ title: '处理中...', icon: 'none', duration: 800 })
				setTimeout(() => {
					this.isRedeeming = false
					uni.showToast({ title: '兑换成功!', icon: 'success' })
				}, 1000)
			}
		}
	}
</script>

<style>
	.page {
		min-height: 100vh;
		background: #fbf9f4;
		font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', sans-serif;
		color: #1b1c19;
	}

	/* ===== Topbar ===== */
	.top-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16rpx 32rpx;
		background: rgba(251, 249, 244, 0.85);
		backdrop-filter: blur(12px);
		position: sticky;
		top: 0;
		z-index: 50;
		border-bottom: 1rpx solid rgba(0, 0, 0, 0.04);
	}

	.top-bar-left {
		display: flex;
		align-items: center;
		gap: 20rpx;
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
		font-size: 36rpx;
		color: #705d00;
	}

	.page-title {
		font-size: 34rpx;
		font-weight: 700;
		color: #705d00;
	}

	.balance-pill {
		display: flex;
		align-items: center;
		gap: 8rpx;
		padding: 10rpx 24rpx;
		background: #ffd214;
		border-radius: 999rpx;
	}

	.balance-emoji {
		font-size: 28rpx;
	}

	.balance-num {
		font-size: 28rpx;
		font-weight: 700;
		color: #705b00;
	}

	/* ===== Main Scroll ===== */
	.main-scroll {
		padding: 0 32rpx;
		height: calc(100vh - var(--status-bar-height) - 100px);
	}

	/* ===== Hero Section ===== */
	.hero-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 60rpx 32rpx 48rpx;
		position: relative;
	}

	.hero-glow {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 400rpx;
		height: 400rpx;
		background: radial-gradient(circle, rgba(255, 210, 20, 0.3) 0%, rgba(251, 249, 244, 0) 70%);
		border-radius: 50%;
		transform: translate(-50%, -50%);
		z-index: 0;
	}

	.hero-icon-wrap {
		position: relative;
		z-index: 1;
		width: 192rpx;
		height: 192rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background: rgba(255, 210, 20, 0.15);
		box-shadow:
			0 0 40rpx rgba(255, 210, 20, 0.4),
			0 0 80rpx rgba(255, 210, 20, 0.2);
		animation: float 3s ease-in-out infinite;
	}

	.hero-icon {
		font-size: 120rpx;
	}

	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-24rpx); }
	}

	.hero-title {
		font-size: 52rpx;
		font-weight: 700;
		color: #1b1c19;
		margin-top: 32rpx;
		position: relative;
		z-index: 1;
	}

	.hero-desc {
		font-size: 28rpx;
		font-weight: 500;
		color: #4d4632;
		margin-top: 16rpx;
		text-align: center;
		line-height: 1.6;
		position: relative;
		z-index: 1;
		padding: 0 32rpx;
	}

	/* ===== Price Grid ===== */
	.price-grid {
		display: flex;
		gap: 24rpx;
		margin-top: 8rpx;
	}

	.price-card {
		flex: 1;
		background: #f5f3ee;
		padding: 28rpx;
		border-radius: 20rpx;
		border: 1rpx solid rgba(209, 198, 171, 0.3);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.price-label {
		font-size: 22rpx;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: #4d4632;
		margin-bottom: 12rpx;
	}

	.price-value-row {
		display: flex;
		align-items: center;
		gap: 8rpx;
	}

	.price-value {
		font-size: 52rpx;
		font-weight: 800;
		color: #705d00;
	}

	.balance-color {
		color: #924c00;
	}

	.price-star {
		font-size: 36rpx;
		color: #ffd214;
	}

	.balance-star-color {
		color: #ffb780;
	}

	.sufficient-tag {
		margin-top: 12rpx;
		padding: 6rpx 20rpx;
		background: rgba(168, 214, 114, 0.2);
		border-radius: 999rpx;
	}

	.sufficient-text {
		font-size: 20rpx;
		font-weight: 700;
		color: #A8D672;
	}

	/* ===== Info Section ===== */
	.info-section {
		margin-top: 40rpx;
		display: flex;
		flex-direction: column;
		gap: 20rpx;
	}

	.info-item {
		display: flex;
		align-items: flex-start;
		gap: 24rpx;
		padding: 28rpx;
		border-radius: 20rpx;
		background: rgba(234, 232, 227, 0.2);
		border: 1rpx solid rgba(209, 198, 171, 0.2);
	}

	.info-icon-wrap {
		width: 72rpx;
		height: 72rpx;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.green-bg {
		background: rgba(168, 214, 114, 0.2);
	}

	.purple-bg {
		background: rgba(177, 156, 217, 0.2);
	}

	.info-icon {
		font-size: 32rpx;
	}

	.info-content {
		flex: 1;
	}

	.info-title {
		font-size: 30rpx;
		font-weight: 700;
		color: #1b1c19;
		display: block;
		margin-bottom: 8rpx;
	}

	.info-desc {
		font-size: 26rpx;
		color: #4d4632;
		line-height: 1.5;
	}

	/* ===== Bottom Bar ===== */
	.bottom-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 28rpx 32rpx;
		padding-bottom: calc(28rpx + env(safe-area-inset-bottom));
		background: rgba(251, 249, 244, 0.85);
		backdrop-filter: blur(20px);
		border-top: 1rpx solid rgba(209, 198, 171, 0.2);
		display: flex;
		justify-content: center;
		z-index: 50;
		box-sizing: border-box;
	}

	.redeem-btn {
		width: 100%;
		background: linear-gradient(90deg, #fd8b17, #e67e22);
		color: #ffffff;
		font-size: 34rpx;
		font-weight: 700;
		padding: 28rpx 0;
		border-radius: 999rpx;
		text-align: center;
		box-shadow: 0 12rpx 32rpx rgba(253, 139, 23, 0.35);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.redeem-btn:active {
		transform: scale(0.96);
	}

	.redeem-text {
		font-size: 34rpx;
		font-weight: 700;
		color: #ffffff;
	}
</style>
