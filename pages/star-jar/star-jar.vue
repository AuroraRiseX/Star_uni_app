<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>

		<!-- Top AppBar -->
		<view class="top-bar">
			<view class="top-bar-inner">
				<view class="top-bar-left">
					<view class="avatar">
						<image class="avatar-img" src="/static/logo.png" mode="aspectFill"></image>
					</view>
					<text class="page-title">麦兜的星星罐</text>
				</view>
				<text class="detail-btn" @tap="showDetail">明细</text>
			</view>
		</view>

		<scroll-view scroll-y class="main-scroll">
			<!-- Jar Section -->
			<view class="jar-section">
				<!-- Warm Background Glow -->
				<view class="jar-glow-bg"></view>

				<!-- The Glass Jar Container -->
				<view class="jar-wrapper" @tap="tapJar">
					<!-- Jar Lid (Cork) -->
					<view class="cork-lid">
						<view class="cork-dots"></view>
					</view>

					<!-- Jar Body -->
					<view class="jar-body">
						<!-- Reflection Highlight -->
						<view class="jar-highlight-line"></view>
						<view class="jar-reflection"></view>

						<!-- Content inside -->
						<view class="jar-content">
							<!-- Floating Stars -->
							<view class="jar-star s1">
								<text class="star-emoji-lg" style="transform: rotate(12deg);">⭐</text>
							</view>
							<view class="jar-star s2">
								<text class="star-emoji-xl" style="transform: rotate(-6deg);">⭐</text>
							</view>
							<view class="jar-star s3">
								<text class="star-emoji-md" style="transform: rotate(30deg);">⭐</text>
							</view>
							<view class="jar-star s4">
								<text class="star-emoji-lg" style="transform: rotate(-12deg);">⭐</text>
							</view>
							<view class="jar-star s5">
								<text class="star-emoji-md" style="color: #ffe173; transform: rotate(6deg);">⭐</text>
							</view>
							<!-- Clouds -->
							<view class="jar-cloud c1">
								<text class="cloud-emoji-xl">☁️</text>
							</view>
							<view class="jar-cloud c2">
								<text class="cloud-emoji-lg">☁️</text>
							</view>
						</view>
					</view>
				</view>
			</view>

			<!-- Tally Display -->
			<view class="tally-grid">
				<view class="tally-card">
					<text class="tally-label">现有星星</text>
					<view class="tally-value-row">
						<text class="tally-emoji">⭐</text>
						<text class="tally-number">128</text>
						<text class="tally-unit">颗</text>
					</view>
				</view>
				<view class="tally-card">
					<text class="tally-label">现有乌云</text>
					<view class="tally-value-row">
						<text class="tally-emoji">☁️</text>
						<text class="tally-number">5</text>
						<text class="tally-unit">朵</text>
					</view>
				</view>
			</view>

			<!-- Call to Action -->
			<view class="cta-section">
				<view class="cta-btn" @tap="addReward">
					<text class="cta-icon">➕</text>
					<text class="cta-text">添加奖励</text>
				</view>
			</view>

			<view style="height: 180rpx;"></view>
		</scroll-view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				stars: 128,
				clouds: 5
			}
		},
		methods: {
			showDetail() {
				uni.navigateTo({ url: '/pages/star-jar-detail/star-jar-detail' })
			},
			addReward() {
				uni.switchTab({ url: '/pages/reward-center/reward-center' })
			},
			tapJar() {
				uni.showToast({ title: '✨', icon: 'none' })
			}
		}
	}
</script>

<style>
	.page {
		min-height: 100vh;
		background: radial-gradient(circle at top, #FFF9EB 0%, #FAFAFA 100%);
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}
	.top-bar {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 50;
		background: rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		box-sizing: border-box;
	}
	.top-bar-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 32rpx;
		height: 128rpx;
		max-width: 1200rpx;
		margin: 0 auto;
	}
	.top-bar-left {
		display: flex;
		align-items: center;
		gap: 24rpx;
	}
	.avatar {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		overflow: hidden;
		border: 2px solid #ffd93d;
	}
	.avatar-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.page-title {
		font-size: 24px;
		font-weight: 700;
		color: #1a1c1c;
	}
	.detail-btn {
		font-size: 14px;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: #705d00;
	}
	.detail-btn:active {
		transform: scale(0.95);
	}
	.main-scroll {
		padding-top: 192rpx;
		padding-left: 32rpx;
		padding-right: 32rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
		box-sizing: border-box;
	}
	.jar-section {
		position: relative;
		width: 100%;
		max-width: 640rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 64rpx 0;
	}
	.jar-glow-bg {
		position: absolute;
		width: 512rpx;
		height: 512rpx;
		filter: blur(80px);
		background: radial-gradient(circle, rgba(255, 217, 61, 0.4) 0%, transparent 70%);
		pointer-events: none;
	}
	.jar-wrapper {
		position: relative;
		width: 100%;
		aspect-ratio: 3/4;
	}
	.cork-lid {
		position: absolute;
		top: -32rpx;
		left: 50%;
		transform: translateX(-50%);
		width: 288rpx;
		height: 64rpx;
		background: linear-gradient(to bottom, #fc8200, #e67600);
		border-radius: 12rpx 12rpx 8rpx 8rpx;
		z-index: 30;
		box-shadow: inset 0 2px 4px rgba(255,255,255,0.3), 0 4px 8px rgba(0,0,0,0.2);
	}
	.cork-dots {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.2;
		background-image: radial-gradient(circle, #000 1px, transparent 1px);
		background-size: 8rpx 8rpx;
	}
	.jar-body {
		width: 100%;
		height: 100%;
		background: linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%);
		backdrop-filter: blur(12px);
		border: 1px solid rgba(255,255,255,0.8);
		border-radius: 50% 50% 25% 25% / 15% 15% 15% 15%;
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 48rpx;
		z-index: 20;
		box-shadow: inset 0 10px 20px rgba(255,255,255,0.5), inset 0 -15px 30px rgba(0,0,0,0.05), 0 30px 60px -12px rgba(255,132,0,0.15);
		box-sizing: border-box;
	}
	.jar-highlight-line {
		position: absolute;
		top: 10px;
		left: 10%;
		width: 80%;
		height: 2px;
		background: linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent);
		border-radius: 100%;
	}
	.jar-reflection {
		position: absolute;
		right: 32rpx;
		top: 25%;
		width: 8rpx;
		height: 256rpx;
		background: rgba(255,255,255,0.2);
		filter: blur(1px);
		border-radius: 9999px;
	}
	.jar-content {
		position: relative;
		height: 100%;
		width: 100%;
	}
	.jar-star {
		position: absolute;
	}
	.star-emoji-md {
		font-size: 36px;
	}
	.star-emoji-lg {
		font-size: 42px;
	}
	.star-emoji-xl {
		font-size: 52px;
	}
	.cloud-emoji-lg {
		font-size: 48px;
	}
	.cloud-emoji-xl {
		font-size: 60px;
	}
	.s1 {
		bottom: 48rpx;
		left: 80rpx;
		animation: gentle-float-fall 7s ease-in-out 0.2s infinite;
	}
	.s2 {
		bottom: 128rpx;
		right: 96rpx;
		animation: gentle-float-fall 9s ease-in-out 0.8s infinite;
	}
	.s3 {
		bottom: 256rpx;
		left: 160rpx;
		animation: gentle-float-fall 8.5s ease-in-out 1.5s infinite;
	}
	.s4 {
		bottom: 320rpx;
		right: 80rpx;
		animation: gentle-float-fall 7.5s ease-in-out 0.5s infinite;
	}
	.s5 {
		bottom: 416rpx;
		left: 96rpx;
		animation: gentle-float-fall 10s ease-in-out 1.2s infinite;
	}
	.c1 {
		bottom: 192rpx;
		left: 50%;
		transform: translateX(-50%);
		animation: gentle-float-alt 11s ease-in-out 2s infinite;
	}
	.c2 {
		bottom: 512rpx;
		right: 128rpx;
		animation: gentle-float-alt 13s ease-in-out 1s infinite;
	}
	@keyframes gentle-float-fall {
		0% { transform: translateY(0) rotate(0deg); }
		25% { transform: translateY(10px) rotate(5deg); }
		50% { transform: translateY(5px) rotate(-3deg); }
		75% { transform: translateY(15px) rotate(8deg); }
		100% { transform: translateY(0) rotate(0deg); }
	}
	@keyframes gentle-float-alt {
		0% { transform: translateY(0) rotate(0deg); }
		33% { transform: translateY(8px) rotate(-5deg); }
		66% { transform: translateY(12px) rotate(3deg); }
		100% { transform: translateY(0) rotate(0deg); }
	}
	.tally-grid {
		margin-top: 64rpx;
		width: 100%;
		max-width: 640rpx;
		display: flex;
		gap: 24rpx;
	}
	.tally-card {
		flex: 1;
		background: rgba(250, 249, 249, 0.8);
		backdrop-filter: blur(12px);
		border-radius: 24rpx;
		padding: 32rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: 0 10px 30px rgba(255,132,0,0.1);
		border: 1px solid rgba(255,255,255,0.4);
	}
	.tally-label {
		font-size: 12px;
		font-weight: 600;
		color: #4d4633;
		margin-bottom: 8rpx;
	}
	.tally-value-row {
		display: flex;
		align-items: center;
		gap: 8rpx;
	}
	.tally-emoji {
		font-size: 24px;
	}
	.tally-number {
		font-size: 26px;
		font-weight: 700;
		letter-spacing: -0.02em;
		color: #1a1c1c;
	}
	.tally-unit {
		font-size: 12px;
		font-weight: 600;
		color: #4d4633;
		margin-top: 8rpx;
	}
	.cta-section {
		margin-top: 64rpx;
		width: 100%;
		max-width: 640rpx;
	}
	.cta-btn {
		width: 100%;
		height: 112rpx;
		background: #ffd93d;
		color: #725e00;
		border-radius: 20rpx;
		font-size: 14px;
		font-weight: 700;
		letter-spacing: 0.05em;
		box-shadow: 0 4px 0 #e8c426;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 16rpx;
		transition: all 0.2s;
	}
	.cta-btn:active {
		transform: translateY(8rpx);
		box-shadow: none;
	}
	.cta-icon {
		font-size: 20px;
	}
	.cta-text {
		font-size: 14px;
		font-weight: 700;
	}

</style>
