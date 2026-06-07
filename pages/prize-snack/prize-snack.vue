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
			<!-- Hero 区域: aspect-ratio 1.6/1, 渐变背景, 居中卡片视觉 -->
			<view class="hero-section">
				<view class="hero-card">
					<view class="hero-bread">🍞</view>
					<text class="hero-card-name">零食兑换卡</text>
					<view class="hero-card-price">
						<text class="hero-card-num">10</text>
						<text class="hero-card-star">🌟</text>
					</view>
				</view>
			</view>

			<!-- 标题区 -->
			<view class="title-section">
				<text class="main-title">零食兑换卡</text>
				<text class="main-desc">想吃什么零食都可以哦！这是对宝贝认真完成任务的特别奖励。</text>
			</view>

			<!-- 价格网格 2列 -->
			<view class="price-grid">
				<view class="price-card">
					<text class="price-label">兑换所需</text>
					<view class="price-value-row">
						<text class="price-value">10</text>
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

			<!-- 说明区域 -->
			<view class="info-section">
				<view class="info-item">
					<view class="info-icon-wrap green-bg">
						<text class="info-icon">✅</text>
					</view>
					<view class="info-content">
						<text class="info-title">使用说明</text>
						<text class="info-desc">点击兑换后，向爸爸或妈妈出示兑换成功页面，即可挑选你最喜欢的零食。</text>
					</view>
				</view>
				<view class="info-item">
					<view class="info-icon-wrap purple-bg">
						<text class="info-icon">⏳</text>
					</view>
					<view class="info-content">
						<text class="info-title">有效期</text>
						<text class="info-desc">兑换后请在 7 天内领取奖励哦，过期奖励就会飞走啦！</text>
					</view>
				</view>
			</view>

			<view style="height: 200rpx;"></view>
		</scroll-view>

		<!-- 底部按钮 -->
		<view class="bottom-bar">
			<view class="redeem-btn" @tap="redeem">
				<text class="redeem-text">立即兑换</text>
			</view>
		</view>

		<!-- 成功弹窗 -->
		<view class="modal-overlay" :class="{ 'modal-show': showModal }">
			<view class="modal-backdrop" @tap="closeModal"></view>
			<view class="modal-card" v-if="showModal">
				<view class="modal-icon-wrap">
					<text class="modal-check">✅</text>
				</view>
				<text class="modal-title">兑换成功！</text>
				<text class="modal-desc">快去告诉爸爸妈妈，领取你的美味奖励吧！</text>
				<view class="modal-btn" @tap="closeModal">太棒了</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showModal: false
			}
		},
		methods: {
			goBack() {
				uni.navigateBack()
			},
			redeem() {
				uni.showToast({ title: '处理中...', icon: 'none', duration: 800 })
				setTimeout(() => {
					this.showModal = true
				}, 800)
			},
			closeModal() {
				this.showModal = false
			}
		}
	}
</script>

<style>
	.page {
		background-color: #fbf9f4;
		min-height: 100vh;
		font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', sans-serif;
	}

	/* ===== Topbar ===== */
	.top-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
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
		margin-top: 40rpx;
		display: flex;
		justify-content: center;
	}

	.hero-card {
		width: 100%;
		aspect-ratio: 1.6 / 1;
		border-radius: 24rpx;
		background: linear-gradient(135deg, #ffd214, #fd8b17);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-shadow: 0 16rpx 48rpx rgba(253, 139, 23, 0.25);
		position: relative;
		overflow: hidden;
	}

	.hero-card::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 60%);
	}

	.hero-bread {
		font-size: 120rpx;
		position: relative;
		z-index: 1;
		margin-bottom: 16rpx;
	}

	.hero-card-name {
		font-size: 32rpx;
		font-weight: 700;
		color: #725e00;
		position: relative;
		z-index: 1;
		margin-bottom: 8rpx;
	}

	.hero-card-price {
		display: flex;
		align-items: center;
		gap: 8rpx;
		position: relative;
		z-index: 1;
	}

	.hero-card-num {
		font-size: 36rpx;
		font-weight: 800;
		color: #725e00;
	}

	.hero-card-star {
		font-size: 32rpx;
	}

	/* ===== Title Section ===== */
	.title-section {
		margin-top: 48rpx;
		text-align: center;
	}

	.main-title {
		font-size: 56rpx;
		font-weight: 700;
		color: #1b1c19;
		display: block;
		margin-bottom: 16rpx;
	}

	.main-desc {
		font-size: 28rpx;
		font-weight: 500;
		color: #4d4632;
		padding: 0 16rpx;
		line-height: 1.6;
	}

	/* ===== Price Grid ===== */
	.price-grid {
		display: flex;
		gap: 24rpx;
		margin-top: 40rpx;
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
		background: linear-gradient(90deg, #ffd214, #fd8b17);
		color: #725e00;
		font-size: 34rpx;
		font-weight: 700;
		padding: 28rpx 0;
		border-radius: 999rpx;
		text-align: center;
		box-shadow: 0 12rpx 32rpx rgba(255, 210, 20, 0.25);
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
		color: #725e00;
	}

	/* ===== Modal ===== */
	.modal-overlay {
		position: fixed;
		inset: 0;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 32rpx;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.3s;
	}

	.modal-overlay.modal-show {
		opacity: 1;
		pointer-events: auto;
	}

	.modal-backdrop {
		position: absolute;
		inset: 0;
		background: rgba(27, 28, 25, 0.4);
		backdrop-filter: blur(12px);
	}

	.modal-card {
		position: relative;
		width: 100%;
		max-width: 560rpx;
		background: rgba(255, 255, 255, 0.7);
		backdrop-filter: blur(16px);
		border: 2rpx solid rgba(255, 255, 255, 0.5);
		border-radius: 32rpx;
		padding: 64rpx;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		animation: bounce-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	@keyframes bounce-in {
		0% { transform: scale(0.3); opacity: 0; }
		50% { transform: scale(1.05); opacity: 1; }
		70% { transform: scale(0.9); }
		100% { transform: scale(1); }
	}

	.modal-icon-wrap {
		width: 160rpx;
		height: 160rpx;
		background: #ffd214;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 40rpx;
	}

	.modal-check {
		font-size: 72rpx;
	}

	.modal-title {
		font-size: 36rpx;
		font-weight: 700;
		color: #705d00;
		display: block;
		margin-bottom: 16rpx;
	}

	.modal-desc {
		font-size: 28rpx;
		font-weight: 500;
		color: #4d4632;
		margin-bottom: 48rpx;
	}

	.modal-btn {
		width: 100%;
		padding: 24rpx 0;
		background: #705d00;
		color: #ffffff;
		font-weight: 700;
		font-size: 30rpx;
		border-radius: 999rpx;
		text-align: center;
	}

	.modal-btn:active {
		transform: scale(0.96);
	}
</style>
