<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>

		<view class="top-bar" v-if="!showSuccess">
			<view class="top-bar-inner">
				<view class="top-left">
					<view class="back-btn" @tap="goBack">
						<text class="icon">←</text>
					</view>
					<text class="top-title">奖品详情</text>
				</view>
				<view class="star-count">
					<text class="star-icon">⭐</text>
					<text class="star-num">128</text>
				</view>
			</view>
		</view>

		<scroll-view scroll-y class="main-scroll" v-if="!showSuccess">
			<view class="main-content">
				<view class="hero-section">
					<view class="hero-card">
						<view class="hero-pattern"></view>
						<view class="glass-card">
							<view class="card-image-wrap">
								<image class="card-image" src="/static/prize-snack.png" mode="aspectFit"></image>
							</view>
							<view class="card-text">
								<text class="card-badge">REWARD CARD</text>
								<text class="card-title">零食兑换卡</text>
								<view class="card-price">
									<text class="price-star">⭐</text>
									<text class="price-text">10 星星</text>
								</view>
							</view>
						</view>
						<view class="hero-deco-star">
							<text class="deco-star-emoji">⭐</text>
						</view>
					</view>

					<view class="hero-info">
						<text class="hero-name">零食兑换卡</text>
						<text class="hero-desc">想吃什么零食都可以哦！这是对宝贝认真完成任务的特别奖励。</text>
					</view>
				</view>

				<view class="price-grid">
					<view class="price-card">
						<text class="price-label">兑换所需</text>
						<view class="price-row">
							<text class="price-value">10</text>
							<text class="price-unit-icon">⭐</text>
						</view>
						<text class="price-sub">星星</text>
					</view>
					<view class="price-card">
						<text class="price-label">当前余额</text>
						<view class="price-row">
							<text class="price-value price-value-amber">128</text>
							<text class="price-unit-icon price-unit-icon-amber">⭐</text>
						</view>
						<text class="price-sub">充足</text>
					</view>
				</view>

				<view class="info-section">
					<view class="info-item">
						<view class="info-icon info-icon-green">
							<text>✓</text>
						</view>
						<view class="info-text">
							<text class="info-title">使用说明</text>
							<text class="info-desc">点击兑换后，向爸爸或妈妈出示兑换成功页面，即可挑选你最喜欢的零食。</text>
						</view>
					</view>
					<view class="info-item">
						<view class="info-icon info-icon-purple">
							<text>🕐</text>
						</view>
						<view class="info-text">
							<text class="info-title">有效期</text>
							<text class="info-desc">兑换后请在 7 天内领取奖励哦，过期奖励就会飞走啦！</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>

		<view class="bottom-bar" v-if="!showSuccess">
			<button class="redeem-btn" @tap="onRedeem">
				<text class="redeem-icon">🎟️</text>
				<text class="redeem-text">立即兑换</text>
			</button>
		</view>

		<view class="success-overlay" v-if="showSuccess" @tap="closeModal">
			<view class="success-modal" @tap.stop>
				<view class="success-circle">
					<text class="success-check">✓</text>
				</view>
				<text class="success-title">兑换成功！</text>
				<text class="success-desc">快去告诉爸爸妈妈，领取你的美味奖励吧！</text>
				<button class="success-btn" @tap="closeModal">太棒了</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showSuccess: false
			}
		},
		onLoad() {},
		methods: {
			goBack() {},
			onRedeem() {
				this.showSuccess = true;
			},
			closeModal() {
				this.showSuccess = false;
			}
		}
	}
</script>

<style>
	.page {
		background-color: #fbf9f4;
		min-height: 100vh;
		color: #1b1c19;
		font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
		font-weight: 500;
		font-size: 16px;
		line-height: 1.5;
	}
	.top-bar {
		width: 100%;
		position: sticky;
		top: var(--status-bar-height);
		z-index: 50;
		background-color: rgba(251, 249, 244, 0.8);
		backdrop-filter: blur(16rpx);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8rpx 24rpx;
		border-bottom: 1px solid rgba(209, 198, 171, 0.2);
	}
	.top-bar-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}
	.top-left {
		display: flex;
		align-items: center;
		gap: 16rpx;
	}
	.back-btn {
		width: 40rpx;
		height: 40rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
	}
	.icon {
		font-size: 28px;
		color: #725c00;
	}
	.top-title {
		font-size: 20px;
		font-weight: 700;
		color: #725c00;
		line-height: 1.4;
	}
	.star-count {
		display: flex;
		align-items: center;
		gap: 8rpx;
		padding: 6rpx 12rpx;
		background-color: #ffd214;
		border-radius: 9999rpx;
	}
	.star-icon {
		font-size: 18px;
	}
	.star-num {
		font-weight: 700;
		color: #705b00;
		font-size: 16px;
	}
	.main-scroll {
		height: calc(100vh - var(--status-bar-height) - 64rpx - 96rpx);
	}
	.main-content {
		max-width: 880rpx;
		margin: 0 auto;
		padding: 0 24rpx 128rpx;
	}
	.hero-section {
		margin-top: 32rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.hero-card {
		width: 100%;
		aspect-ratio: 1.6;
		border-radius: 16rpx;
		overflow: hidden;
		background: linear-gradient(135deg, #ffd214, #fd8b17);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 24rpx;
		position: relative;
		border: 1px solid rgba(255,255,255,0.5);
	}
	.hero-pattern {
		position: absolute;
		inset: 0;
		opacity: 0.1;
		pointer-events: none;
		background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0);
		background-size: 24px 24px;
	}
	.glass-card {
		position: relative;
		z-index: 10;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, 0.6);
		backdrop-filter: blur(12rpx);
		border: 1px solid rgba(255, 255, 255, 0.4);
		border-radius: 12rpx;
		display: flex;
		align-items: center;
		gap: 24rpx;
		padding: 16rpx;
	}
	.card-image-wrap {
		width: 128rpx;
		height: 128rpx;
		flex-shrink: 0;
		background-color: rgba(255,255,255,0.4);
		border-radius: 12rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.card-image {
		width: 96rpx;
		height: 96rpx;
	}
	.card-text {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.card-badge {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: rgba(114, 92, 0, 0.6);
		margin-bottom: 4rpx;
	}
	.card-title {
		font-size: 20px;
		font-weight: 700;
		color: #725c00;
		line-height: 1.2;
	}
	.card-price {
		margin-top: 8rpx;
		display: flex;
		align-items: center;
		gap: 4rpx;
	}
	.price-star {
		font-size: 20px;
		color: #725c00;
	}
	.price-text {
		font-weight: 700;
		color: #725c00;
		font-size: 16px;
	}
	.hero-deco-star {
		position: absolute;
		top: 8rpx;
		right: 8rpx;
		animation: floatStar 3s ease-in-out infinite;
	}
	.deco-star-emoji {
		font-size: 36px;
		color: rgba(255,255,255,0.6);
	}
	@keyframes floatStar {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-10px); }
	}
	.hero-info {
		margin-top: 32rpx;
		text-align: center;
	}
	.hero-name {
		font-size: 28px;
		font-weight: 700;
		color: #1b1c19;
		line-height: 1.2;
		margin-bottom: 8rpx;
	}
	.hero-desc {
		color: #4d4632;
		font-size: 16px;
		font-weight: 500;
		line-height: 1.5;
		padding: 0 16rpx;
	}
	.price-grid {
		margin-top: 32rpx;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16rpx;
	}
	.price-card {
		background-color: #f5f3ee;
		padding: 20rpx;
		border-radius: 12rpx;
		border: 1px solid rgba(209, 198, 171, 0.3);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	.price-label {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: #4d4632;
		line-height: 1.2;
		margin-bottom: 4rpx;
	}
	.price-row {
		display: flex;
		align-items: center;
		gap: 4rpx;
	}
	.price-value {
		font-size: 20px;
		font-weight: 800;
		line-height: 1.1;
		color: #725c00;
	}
	.price-value-amber {
		color: #924c00;
	}
	.price-unit-icon {
		font-size: 24px;
		color: #ffd214;
	}
	.price-unit-icon-amber {
		color: #ffb780;
	}
	.price-sub {
		font-size: 14px;
		color: #4d4632;
	}
	.info-section {
		margin-top: 32rpx;
		display: flex;
		flex-direction: column;
		gap: 16rpx;
	}
	.info-item {
		display: flex;
		align-items: flex-start;
		gap: 16rpx;
		padding: 16rpx;
		border-radius: 12rpx;
		background-color: rgba(234, 232, 227, 0.2);
		border: 1px solid rgba(209, 198, 171, 0.2);
	}
	.info-icon {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		font-size: 18px;
	}
	.info-icon-green {
		background-color: rgba(168, 214, 114, 0.2);
		color: #A8D672;
		font-weight: 700;
	}
	.info-icon-purple {
		background-color: rgba(177, 156, 217, 0.2);
		color: #B19CD9;
	}
	.info-text {
		display: flex;
		flex-direction: column;
		gap: 4rpx;
	}
	.info-title {
		font-size: 16px;
		font-weight: 700;
		color: #1b1c19;
	}
	.info-desc {
		font-size: 14px;
		color: #4d4632;
	}
	.bottom-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 24rpx;
		background-color: rgba(251, 249, 244, 0.8);
		backdrop-filter: blur(24rpx);
		border-top: 1px solid rgba(209, 198, 171, 0.2);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 50;
	}
	.redeem-btn {
		width: 100%;
		max-width: 880rpx;
		background: linear-gradient(90deg, #ffd214, #fd8b17);
		color: #613100;
		font-size: 20px;
		font-weight: 700;
		padding: 16rpx;
		border-radius: 9999rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12rpx;
		border: none;
		outline: none;
	}
	.redeem-btn::after {
		border: none;
	}
	.redeem-icon {
		font-size: 24px;
	}
	.redeem-text {
		font-size: 20px;
		font-weight: 700;
	}
	.success-overlay {
		position: fixed;
		inset: 0;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 24rpx;
	}
	.success-overlay::before {
		content: '';
		position: absolute;
		inset: 0;
		background-color: rgba(27, 28, 25, 0.4);
		backdrop-filter: blur(16rpx);
	}
	.success-modal {
		position: relative;
		width: 100%;
		max-width: 620rpx;
		background: rgba(255, 255, 255, 0.6);
		backdrop-filter: blur(12rpx);
		border: 1px solid rgba(255, 255, 255, 0.4);
		padding: 32rpx;
		border-radius: 16rpx;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		animation: bounceIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
	@keyframes bounceIn {
		0% { transform: scale(0.3); opacity: 0; }
		50% { transform: scale(1.05); opacity: 1; }
		70% { transform: scale(0.9); }
		100% { transform: scale(1); }
	}
	.success-circle {
		width: 96rpx;
		height: 96rpx;
		background-color: #ffd214;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 24rpx;
		animation: floatStar 3s ease-in-out infinite;
	}
	.success-check {
		font-size: 44px;
		color: #ffffff;
		font-weight: 700;
	}
	.success-title {
		font-size: 20px;
		font-weight: 700;
		color: #725c00;
		line-height: 1.4;
		margin-bottom: 8rpx;
	}
	.success-desc {
		color: #4d4632;
		font-size: 16px;
		font-weight: 500;
		line-height: 1.5;
		margin-bottom: 24rpx;
	}
	.success-btn {
		width: 100%;
		padding: 12rpx;
		background-color: #725c00;
		color: #ffffff;
		font-weight: 700;
		font-size: 16px;
		border-radius: 9999rpx;
		border: none;
		outline: none;
	}
	.success-btn::after {
		border: none;
	}
</style>
