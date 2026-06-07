<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>

		<!-- Top AppBar -->
		<view class="top-bar">
			<view class="top-bar-left">
				<view class="back-btn" @tap="goBack">
					<text class="emoji">←</text>
				</view>
				<text class="page-title">奖品详情</text>
			</view>
			<view class="balance-badge">
				<text class="balance-star">⭐</text>
				<text class="balance-num">128</text>
			</view>
		</view>

		<scroll-view scroll-y class="main-scroll">
			<!-- Hero Section -->
			<view class="hero-section">
				<view class="hero-visual">
					<view class="hero-glow-bg"></view>
					<view class="hero-glass-bg"></view>
					<view class="hero-icon-container">
						<image class="hero-image" src="/static/logo.png" mode="aspectFit"></image>
					</view>
					<!-- Floating Decorations -->
					<view class="deco-star star-float" style="top: 32rpx; right: 32rpx; animation-delay: 0.2s;">
						<text class="deco-star-emoji">⭐</text>
					</view>
					<view class="deco-cloud star-float" style="bottom: 80rpx; left: 0; animation-delay: 0.5s;">
						<text class="deco-cloud-emoji">☁️</text>
					</view>
				</view>
				<view class="hero-text">
					<text class="hero-title">零食兑换卡</text>
					<text class="hero-desc">想吃什么零食都可以哦！这是对宝贝认真完成任务的特别奖励。</text>
				</view>
			</view>

			<!-- Price & Balance Grid -->
			<view class="info-grid">
				<view class="info-card">
					<text class="info-label">兑换所需</text>
					<view class="info-value-row">
						<text class="info-value-lg">10</text>
						<text class="info-star-emoji">⭐</text>
					</view>
					<text class="info-sub">星星</text>
				</view>
				<view class="info-card">
					<text class="info-label">当前余额</text>
					<view class="info-value-row">
						<text class="info-value-lg" style="color: #924c00;">128</text>
						<text class="info-star-emoji" style="color: #ffb780;">⭐</text>
					</view>
					<text class="info-sub">充足</text>
				</view>
			</view>

			<!-- Details -->
			<view class="details-section">
				<view class="detail-item">
					<view class="detail-icon detail-icon-1">
						<text class="detail-emoji">✅</text>
					</view>
					<view>
						<text class="detail-title">使用说明</text>
						<text class="detail-desc">点击兑换后，向爸爸或妈妈出示兑换成功页面，即可挑选你最喜欢的零食。</text>
					</view>
				</view>
				<view class="detail-item">
					<view class="detail-icon detail-icon-2">
						<text class="detail-emoji">⏳</text>
					</view>
					<view>
						<text class="detail-title">有效期</text>
						<text class="detail-desc">兑换后请在 7 天内领取奖励哦，过期奖励就会飞走啦！</text>
					</view>
				</view>
			</view>

			<view style="height: 200rpx;"></view>
		</scroll-view>

		<!-- Bottom Action Bar -->
		<view class="bottom-action-bar">
			<view class="redeem-btn" @tap="redeem">
				<text class="redeem-icon">🎟️</text>
				<text class="redeem-text">立即兑换</text>
			</view>
		</view>

		<!-- Success Modal -->
		<view class="modal-overlay" :class="{ 'modal-show': showModal }">
			<view class="modal-backdrop" @tap="closeModal"></view>
			<view class="modal-card" v-if="showModal">
				<view class="modal-icon-wrapper">
					<text class="modal-check-icon">✅</text>
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
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}
	.top-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 12rpx 32rpx;
		background: rgba(251, 249, 244, 0.8);
		backdrop-filter: blur(12px);
		position: sticky;
		top: 0;
		z-index: 50;
		border-bottom: 1px solid rgba(0,0,0,0.05);
	}
	.top-bar-left {
		display: flex;
		align-items: center;
		gap: 24rpx;
	}
	.back-btn {
		width: 80rpx;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
	}
	.back-btn:active {
		transform: scale(0.95);
	}
	.emoji {
		font-size: 24px;
		color: #705d00;
	}
	.page-title {
		font-size: 20px;
		font-weight: 700;
		color: #705d00;
	}
	.balance-badge {
		display: flex;
		align-items: center;
		gap: 12rpx;
		padding: 12rpx 24rpx;
		background: #ffd214;
		border-radius: 9999px;
	}
	.balance-star {
		font-size: 18px;
	}
	.balance-num {
		font-weight: 700;
		color: #705b00;
		font-size: 16px;
	}
	.main-scroll {
		padding: 0 32rpx;
		height: calc(100vh - var(--status-bar-height) - 100px);
	}
	.hero-section {
		margin-top: 48rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.hero-visual {
		position: relative;
		width: 512rpx;
		height: 512rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.hero-glow-bg {
		position: absolute;
		inset: 0;
		background: #ffe07e;
		opacity: 0.3;
		border-radius: 9999px;
		filter: blur(48px);
	}
	.hero-glass-bg {
		position: absolute;
		inset: 32rpx;
		background: rgba(255,255,255,0.4);
		border-radius: 9999px;
		backdrop-filter: blur(12px);
		border: 1px solid rgba(255,255,255,0.5);
	}
	.hero-icon-container {
		position: relative;
		z-index: 10;
		width: 384rpx;
		height: 384rpx;
		border-radius: 50%;
		background: rgba(255,255,255,0.6);
		backdrop-filter: blur(12px);
		border: 1px solid rgba(255,255,255,0.4);
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 20px 50px rgba(114,92,0,0.1);
	}
	.hero-image {
		width: 256rpx;
		height: 256rpx;
		object-fit: contain;
	}
	.deco-star {
		position: absolute;
	}
	.deco-star-emoji {
		font-size: 36px;
		color: #ffd214;
	}
	.deco-cloud {
		position: absolute;
	}
	.deco-cloud-emoji {
		font-size: 28px;
		opacity: 0.4;
		color: #B19CD9;
	}
	.star-float {
		animation: float 3s ease-in-out infinite;
	}
	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-10px); }
	}
	.hero-text {
		margin-top: 64rpx;
		text-align: center;
	}
	.hero-title {
		font-size: 28px;
		font-weight: 700;
		color: #1b1c19;
		display: block;
		margin-bottom: 16rpx;
	}
	.hero-desc {
		font-size: 16px;
		font-weight: 500;
		color: #4d4632;
		padding: 0 32rpx;
		line-height: 1.6;
	}
	.info-grid {
		display: flex;
		gap: 24rpx;
		margin-top: 48rpx;
	}
	.info-card {
		flex: 1;
		background: #f5f3ee;
		padding: 24rpx;
		border-radius: 24rpx;
		border: 1px solid rgba(209, 198, 171, 0.3);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	.info-label {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: #4d4632;
		margin-bottom: 8rpx;
	}
	.info-value-row {
		display: flex;
		align-items: center;
		gap: 8rpx;
	}
	.info-value-lg {
		font-size: 32px;
		font-weight: 800;
		letter-spacing: -0.02em;
		color: #705d00;
	}
	.info-star-emoji {
		font-size: 24px;
		color: #ffd214;
	}
	.info-sub {
		font-size: 14px;
		color: #4d4632;
		margin-top: 4rpx;
	}
	.details-section {
		margin-top: 48rpx;
		display: flex;
		flex-direction: column;
		gap: 24rpx;
	}
	.detail-item {
		display: flex;
		align-items: flex-start;
		gap: 24rpx;
		padding: 32rpx;
		border-radius: 20rpx;
		background: rgba(234, 232, 227, 0.2);
		border: 1px solid rgba(209, 198, 171, 0.2);
	}
	.detail-icon {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}
	.detail-icon-1 {
		background: rgba(168, 214, 114, 0.2);
	}
	.detail-icon-2 {
		background: rgba(177, 156, 217, 0.2);
	}
	.detail-emoji {
		font-size: 22px;
	}
	.detail-title {
		font-size: 16px;
		font-weight: 700;
		color: #1b1c19;
		display: block;
		margin-bottom: 8rpx;
	}
	.detail-desc {
		font-size: 14px;
		color: #4d4632;
		line-height: 1.5;
	}
	.bottom-action-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 32rpx;
		background: rgba(251, 249, 244, 0.8);
		backdrop-filter: blur(20px);
		border-top: 1px solid rgba(209, 198, 171, 0.2);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 50;
		box-sizing: border-box;
	}
	.redeem-btn {
		width: 100%;
		max-width: 640rpx;
		background: linear-gradient(90deg, #ffd214, #fd8b17);
		color: #725e00;
		font-size: 20px;
		font-weight: 700;
		padding: 32rpx 0;
		border-radius: 9999px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 16rpx;
		box-shadow: 0 8rpx 32rpx rgba(255, 210, 20, 0.2);
		transition: all 0.2s;
	}
	.redeem-btn:active {
		transform: scale(0.95);
	}
	.redeem-icon {
		font-size: 22px;
	}
	.redeem-text {
		font-size: 20px;
		font-weight: 700;
		color: #725e00;
	}
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
		background: rgba(255,255,255,0.6);
		backdrop-filter: blur(12px);
		border: 1px solid rgba(255,255,255,0.4);
		border-radius: 24rpx;
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
	.modal-icon-wrapper {
		width: 192rpx;
		height: 192rpx;
		background: #ffd214;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 48rpx;
		animation: float 3s ease-in-out infinite;
	}
	.modal-check-icon {
		font-size: 42px;
		color: #ffffff;
	}
	.modal-title {
		font-size: 20px;
		font-weight: 700;
		color: #705d00;
		display: block;
		margin-bottom: 16rpx;
	}
	.modal-desc {
		font-size: 16px;
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
		font-size: 16px;
		border-radius: 9999px;
		text-align: center;
	}
	.modal-btn:active {
		transform: scale(0.95);
	}
</style>
