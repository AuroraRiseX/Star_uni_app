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
					<text class="page-title">宝贝的名字</text>
				</view>
				<text class="detail-btn" @tap="toggleSheet">明细</text>
			</view>
		</view>

		<scroll-view scroll-y class="main-scroll">
			<!-- Jar Section -->
			<view class="jar-section">
				<view class="jar-glow-bg"></view>
				<view class="jar-wrapper" @tap="tapJar">
					<view class="cork-lid">
						<view class="cork-dots"></view>
					</view>
					<view class="jar-body">
						<view class="jar-highlight-line"></view>
						<view class="jar-reflection"></view>
						<view class="jar-content">
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
			<view class="tally-row">
				<view class="tally-card">
					<text class="tally-emoji-big">⭐</text>
					<text class="tally-number-big">128</text>
				</view>
				<view class="tally-card">
					<text class="tally-emoji-big">☁️</text>
					<text class="tally-number-big">5</text>
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

		<!-- Bottom Sheet Overlay -->
		<view class="sheet-overlay" :class="{ 'sheet-visible': sheetOpen }" @tap="toggleSheet"></view>

		<!-- Bottom Sheet -->
		<view class="bottom-sheet" :class="{ 'sheet-open': sheetOpen }">
			<!-- Drag Handle -->
			<view class="sheet-handle">
				<view class="handle-bar"></view>
			</view>

			<!-- Header -->
			<view class="sheet-header">
				<text class="sheet-title">明细</text>
				<view class="sheet-close" @tap="toggleSheet">
					<text class="close-emoji">✕</text>
				</view>
			</view>

			<!-- Tab Switcher -->
			<view class="tab-switcher">
				<view class="tab tab-active" @tap="switchTab('star')">
					<text class="tab-icon">⭐</text>
					<text class="tab-text">星星明细</text>
				</view>
				<view class="tab tab-inactive" @tap="switchTab('cloud')">
					<text class="tab-icon">☁️</text>
					<text class="tab-text">乌云明细</text>
				</view>
			</view>

			<!-- Transaction List -->
			<scroll-view scroll-y class="transaction-list">
				<view class="transaction-item" v-for="(item, index) in transactions" :key="index">
					<view class="tx-left">
						<view class="tx-icon" :class="item.negative ? 'tx-icon-negative' : 'tx-icon-positive'">
							<text class="tx-emoji">{{item.icon}}</text>
						</view>
						<view>
							<text class="tx-title">{{item.title}}</text>
							<text class="tx-date">{{item.date}}</text>
						</view>
					</view>
					<view class="tx-right">
						<text class="tx-amount" :class="item.negative ? 'tx-negative' : 'tx-positive'">{{item.negative ? '' : '+'}}{{item.amount}}</text>
						<text class="tx-unit">{{item.unit}}</text>
					</view>
				</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				sheetOpen: true,
				activeTab: 'star',
				transactions: [
					{ icon: '🎨', title: '独立完成绘画作业', date: '2023.11.24 16:45', amount: '+2', unit: '颗星星', negative: false },
					{ icon: '🍽️', title: '光盘行动 - 晚餐', date: '2023.11.24 19:20', amount: '+1', unit: '颗星星', negative: false },
					{ icon: '🛍️', title: '兑换：周末去游乐场', date: '2023.11.23 10:00', amount: '-10', unit: '颗星星', negative: true },
					{ icon: '🧹', title: '主动整理玩具区', date: '2023.11.22 20:15', amount: '+3', unit: '颗星星', negative: false }
				]
			}
		},
		methods: {
			toggleSheet() {
				this.sheetOpen = !this.sheetOpen
			},
			switchTab(tab) {
				this.activeTab = tab
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
		position: relative;
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
	.star-emoji-md { font-size: 36px; }
	.star-emoji-lg { font-size: 42px; }
	.star-emoji-xl { font-size: 52px; }
	.cloud-emoji-lg { font-size: 48px; }
	.cloud-emoji-xl { font-size: 60px; }
	.s1 { bottom: 48rpx; left: 80rpx; animation: gentle-float-fall 7s ease-in-out 0.2s infinite; }
	.s2 { bottom: 128rpx; right: 96rpx; animation: gentle-float-fall 9s ease-in-out 0.8s infinite; }
	.s3 { bottom: 256rpx; left: 160rpx; animation: gentle-float-fall 8.5s ease-in-out 1.5s infinite; }
	.s4 { bottom: 320rpx; right: 80rpx; animation: gentle-float-fall 7.5s ease-in-out 0.5s infinite; }
	.s5 { bottom: 416rpx; left: 96rpx; animation: gentle-float-fall 10s ease-in-out 1.2s infinite; }
	.c1 { bottom: 192rpx; left: 50%; transform: translateX(-50%); animation: gentle-float-alt 11s ease-in-out 2s infinite; }
	.c2 { bottom: 512rpx; right: 128rpx; animation: gentle-float-alt 13s ease-in-out 1s infinite; }
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
	.tally-row {
		margin-top: 64rpx;
		max-width: 640rpx;
		display: flex;
		justify-content: center;
		gap: 48rpx;
	}
	.tally-card {
		background: rgba(250, 249, 249, 0.8);
		backdrop-filter: blur(12px);
		border-radius: 24rpx;
		padding: 32rpx 64rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: 0 10px 30px rgba(255,132,0,0.1);
		border: 1px solid rgba(255,255,255,0.4);
	}
	.tally-emoji-big {
		font-size: 36px;
		margin-bottom: 8rpx;
	}
	.tally-number-big {
		font-size: 26px;
		font-weight: 700;
		letter-spacing: -0.02em;
		color: #1a1c1c;
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
	.cta-icon { font-size: 20px; }
	.cta-text { font-size: 14px; font-weight: 700; }
	.sheet-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0,0,0,0.4);
		z-index: 60;
		backdrop-filter: blur(4px);
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.3s;
	}
	.sheet-overlay.sheet-visible {
		opacity: 1;
		pointer-events: auto;
	}
	.bottom-sheet {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 70;
		height: 80vh;
		background: #faf9f9;
		border-radius: 40rpx 40rpx 0 0;
		display: flex;
		flex-direction: column;
		box-shadow: 0 -20px 40px rgba(0,0,0,0.1);
		transform: translateY(100%);
		transition: transform 0.3s ease;
	}
	.bottom-sheet.sheet-open {
		transform: translateY(0);
	}
	.sheet-handle {
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 24rpx 0;
	}
	.handle-bar {
		width: 80rpx;
		height: 12rpx;
		background: rgba(208, 198, 173, 0.6);
		border-radius: 9999px;
	}
	.sheet-header {
		padding: 0 32rpx 24rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.sheet-title {
		font-size: 24px;
		font-weight: 700;
		color: #1a1c1c;
		margin: 0 auto;
	}
	.sheet-close {
		position: absolute;
		right: 48rpx;
		width: 48rpx;
		height: 48rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.close-emoji {
		font-size: 20px;
		color: #4d4633;
	}
	.tab-switcher {
		display: flex;
		padding: 12rpx;
		margin: 0 32rpx 32rpx;
		background: #f4f3f3;
		border-radius: 20rpx;
	}
	.tab {
		flex: 1;
		padding: 24rpx 32rpx;
		border-radius: 16rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 16rpx;
		transition: all 0.3s;
	}
	.tab-active {
		background: #ffffff;
		color: #705d00;
		box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.04);
	}
	.tab-inactive {
		color: #4d4633;
	}
	.tab-icon { font-size: 20px; }
	.tab-text {
		font-size: 14px;
		font-weight: 700;
		letter-spacing: 0.05em;
	}
	.transaction-list {
		flex: 1;
		overflow-y: auto;
		padding: 0 32rpx 64rpx;
		display: flex;
		flex-direction: column;
		gap: 24rpx;
	}
	.transaction-item {
		background: #ffffff;
		border-radius: 20rpx;
		padding: 24rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border: 1px solid rgba(255,255,255,0.6);
		box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.04);
	}
	.tx-left {
		display: flex;
		align-items: center;
		gap: 24rpx;
	}
	.tx-icon {
		width: 96rpx;
		height: 96rpx;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.tx-icon-positive {
		background: #ffe173;
	}
	.tx-icon-negative {
		background: #dfdccb;
	}
	.tx-emoji {
		font-size: 24px;
	}
	.tx-title {
		font-size: 18px;
		font-weight: 700;
		color: #1a1c1c;
		display: block;
	}
	.tx-date {
		font-size: 12px;
		font-weight: 600;
		color: #4d4633;
	}
	.tx-right {
		text-align: right;
	}
	.tx-amount {
		font-size: 24px;
		font-weight: 700;
		display: block;
	}
	.tx-positive {
		color: #fc8200;
	}
	.tx-negative {
		color: #ba1a1a;
	}
	.tx-unit {
		font-size: 12px;
		font-weight: 600;
		color: #4d4633;
	}

</style>
