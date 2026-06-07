<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>
		<view class="header">
			<view class="header-left">
				<view class="back-btn" @tap="goBack">
					<text class="back-icon">←</text>
				</view>
				<text class="header-title">奖品详情</text>
			</view>
			<view class="header-right"></view>
		</view>
		<view class="main">
			<view class="hero-section">
				<view class="hero-bg">
					<view class="circle-blur top-right"></view>
					<view class="circle-blur bottom-left"></view>
					<view class="card-wrapper floating">
						<view class="purple-card">
							<view class="card-shimmer"></view>
							<text class="card-icon">✨</text>
							<text class="card-title">万能卡</text>
							<text class="sparkle top-left">✨</text>
							<text class="sparkle bottom-right">⭐</text>
						</view>
					</view>
				</view>
			</view>
			<view class="content-section">
				<view class="badge">
					<text class="badge-text">稀有奖品</text>
				</view>
				<text class="prize-title">万能卡</text>
				<text class="prize-desc">可以实现一个合理的愿望！这是对宝贝努力完成任务的特别奖励。</text>
			</view>
			<view class="stats-grid">
				<view class="stat-card">
					<text class="stat-label">兑换所需</text>
					<view class="stat-value">
						<text class="stat-icon">⭐</text>
						<text class="stat-num">50 颗</text>
					</view>
				</view>
				<view class="stat-card">
					<text class="stat-label">当前余额</text>
					<text class="balance-num">128 颗</text>
					<view class="sufficient-badge">
						<view class="green-dot"></view>
						<text class="sufficient-text">余额充足</text>
					</view>
				</view>
			</view>
			<view class="details-section">
				<view class="detail-block">
					<view class="detail-header">
						<text class="detail-header-icon">ℹ️</text>
						<text class="detail-header-text">使用说明</text>
					</view>
					<view class="detail-card">
						<text class="detail-text">点击兑换后，向爸爸或妈妈出示兑换成功页面，即可商量并实现你的大愿望。</text>
					</view>
				</view>
				<view class="detail-block">
					<view class="detail-header">
						<text class="detail-header-icon">⏰</text>
						<text class="detail-header-text">有效期</text>
					</view>
					<view class="detail-card row">
						<view class="orange-dot"></view>
						<text class="detail-text">兑换后请在30天内使用哦，过期的愿望会飞走哒！</text>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom-bar">
			<button class="redeem-btn" @tap="handleRedeem">
				<text class="redeem-icon">🛒</text>
				<text class="redeem-text">立即兑换</text>
			</button>
		</view>
		<view class="modal-overlay" :class="{ 'modal-show': showModal }">
			<view class="modal-backdrop" @tap="closeModal"></view>
			<view class="modal-card" v-if="showModal">
				<view class="modal-icon-wrap">
					<text class="modal-check">✅</text>
				</view>
				<text class="modal-title">兑换成功！</text>
				<text class="modal-desc">快去告诉爸爸妈妈，领取你的大愿望吧！</text>
				<view class="modal-btn" @tap="closeModal">太棒了</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showModal: false,
			redeeming: false
		}
	},
	methods: {
		goBack() {
			uni.navigateBack()
		},
		handleRedeem() {
			this.showModal = true
		},
		closeModal() {
			this.showModal = false
		}
	},
	onShow() {
		// 设置自定义 tab-bar 选中状态为"商店"（index=2）
		if (typeof this.$mp !== 'undefined' && this.$mp.page) {
			const tabBar = this.$mp.page.getTabBar && this.$mp.page.getTabBar()
			if (tabBar) {
				tabBar.setData({ selected: 2 })
			}
		}
	}
}
</script>

<style>
.page {
	min-height: 100vh;
	background: #fbf9f4;
	font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
	color: #1b1c19;
	padding-bottom: 160rpx;
}
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16rpx 48rpx;
	background: rgba(251, 249, 244, 0.8);
	backdrop-filter: blur(24rpx);
	position: sticky;
	top: 0;
	z-index: 50;
}
.header-left {
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
.back-icon {
	font-size: 44rpx;
	color: #705d00;
}
.header-title {
	font-size: 40rpx;
	font-weight: 700;
	color: #705d00;
}
.header-right {
	width: 80rpx;
}
.main {
	padding: 0 48rpx;
}
.hero-section {
	padding-top: 24rpx;
	overflow: hidden;
}
.hero-bg {
	width: 100%;
	aspect-ratio: 4/3;
	border-radius: 48rpx;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(135deg, rgba(177, 156, 217, 0.2), rgba(204, 215, 238, 0.3));
	position: relative;
}
.circle-blur {
	position: absolute;
	width: 320rpx;
	height: 320rpx;
	border-radius: 50%;
	filter: blur(120rpx);
}
.top-right {
	top: -80rpx;
	right: -80rpx;
	background: rgba(177, 156, 217, 0.2);
}
.bottom-left {
	bottom: -80rpx;
	left: -80rpx;
	background: rgba(255, 210, 20, 0.2);
}
.card-wrapper {
	position: relative;
	z-index: 10;
}
.floating {
	animation: floatAnim 4s ease-in-out infinite;
}
@keyframes floatAnim {
	0%, 100% { transform: translateY(0); }
	50% { transform: translateY(-30rpx); }
}
.purple-card {
	width: 384rpx;
	height: 512rpx;
	background: #B19CD9;
	border-radius: 24rpx;
	border: 8rpx solid #fff;
	transform: rotate(3deg);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	overflow: hidden;
	box-shadow: 0 32rpx 64rpx rgba(0,0,0,0.3);
}
.card-shimmer {
	position: absolute;
	inset: 0;
	background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
	background-size: 200% 100%;
	animation: shimmer 3s infinite linear;
	opacity: 0.3;
}
@keyframes shimmer {
	0% { background-position: -200% 0; }
	100% { background-position: 200% 0; }
}
.card-icon {
	font-size: 96rpx;
	color: #fff;
	margin-bottom: 16rpx;
}
.card-title {
	font-size: 44rpx;
	color: #fff;
	font-weight: 700;
	letter-spacing: 8rpx;
}
.sparkle {
	position: absolute;
	font-size: 32rpx;
}
.top-left {
	top: 32rpx;
	left: 32rpx;
	animation: pulse 2s infinite;
}
.bottom-right {
	bottom: 48rpx;
	right: 48rpx;
	font-size: 40rpx;
	animation: bounce 2s infinite;
}
@keyframes pulse {
	0%, 100% { opacity: 1; }
	50% { opacity: 0.5; }
}
@keyframes bounce {
	0%, 100% { transform: translateY(0); }
	50% { transform: translateY(-16rpx); }
}
.content-section {
	margin-top: 48rpx;
}
.badge {
	display: inline-flex;
	padding: 12rpx 24rpx;
	background: rgba(177, 156, 217, 0.2);
	border-radius: 999rpx;
	margin-bottom: 16rpx;
}
.badge-text {
	font-size: 24rpx;
	font-weight: 700;
	color: #525d71;
	text-transform: uppercase;
	letter-spacing: 2rpx;
}
.prize-title {
	font-size: 56rpx;
	font-weight: 700;
	color: #1b1c19;
	display: block;
	margin-bottom: 24rpx;
}
.prize-desc {
	font-size: 36rpx;
	color: #4d4632;
	line-height: 1.6;
}
.stats-grid {
	margin-top: 64rpx;
	display: flex;
	gap: 32rpx;
}
.stat-card {
	flex: 1;
	background: #f5f3ee;
	padding: 40rpx;
	border-radius: 32rpx;
	border: 2rpx solid rgba(209, 198, 171, 0.3);
}
.stat-label {
	font-size: 28rpx;
	color: #4d4632;
	margin-bottom: 16rpx;
	display: block;
}
.stat-value {
	display: flex;
	align-items: center;
	gap: 16rpx;
}
.stat-icon {
	font-size: 44rpx;
	color: #705d00;
}
.stat-num {
	font-size: 40rpx;
	font-weight: 700;
	color: #705d00;
}
.balance-num {
	font-size: 40rpx;
	font-weight: 700;
	color: #1b1c19;
	display: block;
}
.sufficient-badge {
	display: flex;
	align-items: center;
	gap: 12rpx;
	padding: 8rpx 24rpx;
	background: rgba(168, 214, 114, 0.2);
	border-radius: 999rpx;
	width: fit-content;
	margin-top: 16rpx;
}
.green-dot {
	width: 16rpx;
	height: 16rpx;
	background: #A8D672;
	border-radius: 50%;
}
.sufficient-text {
	font-size: 20rpx;
	font-weight: 700;
	color: #4d4632;
}
.details-section {
	margin-top: 64rpx;
	display: flex;
	flex-direction: column;
	gap: 48rpx;
	padding-bottom: 48rpx;
}
.detail-header {
	display: flex;
	align-items: center;
	gap: 16rpx;
	margin-bottom: 24rpx;
}
.detail-header-icon {
	font-size: 36rpx;
	color: #924c00;
}
.detail-header-text {
	font-size: 40rpx;
	font-weight: 700;
	color: #1b1c19;
}
.detail-card {
	background: #ffffff;
	padding: 40rpx;
	border-radius: 32rpx;
	border: 2rpx solid rgba(209, 198, 171, 0.2);
	box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.04);
}
.detail-card.row {
	flex-direction: row;
	align-items: flex-start;
	gap: 24rpx;
	display: flex;
}
.orange-dot {
	width: 12rpx;
	height: 12rpx;
	background: #924c00;
	border-radius: 50%;
	margin-top: 20rpx;
	flex-shrink: 0;
}
.detail-text {
	font-size: 32rpx;
	color: #4d4632;
	line-height: 1.5;
}
.bottom-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 48rpx;
	background: linear-gradient(to top, #fbf9f4, rgba(251,249,244,0.95), transparent);
	z-index: 50;
}
.redeem-btn {
	width: 100%;
	height: 128rpx;
	background: linear-gradient(90deg, #705d00, #924c00);
	color: #fff;
	font-size: 40rpx;
	font-weight: 700;
	border-radius: 999rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16rpx;
	border: none;
	box-shadow: 0 16rpx 48rpx rgba(114, 92, 0, 0.2);
}
.redeem-icon {
	font-size: 44rpx;
}
.redeem-text {
	font-size: 40rpx;
	font-weight: 700;
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
	background: rgba(255, 255, 255, 0.7);
	backdrop-filter: blur(16px);
	border: 2rpx solid rgba(255, 255, 255, 0.5);
	border-radius: 32rpx;
	padding: 64rpx;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	animation: modalBounce 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
@keyframes modalBounce {
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
