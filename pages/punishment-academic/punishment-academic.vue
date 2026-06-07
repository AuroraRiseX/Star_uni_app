<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>

		<view class="top-bar">
			<text class="back-btn">←</text>
			<text class="top-title">惩罚-学习成绩</text>
		</view>

		<scroll-view scroll-y class="scroll-area">
			<view class="hero-section">
				<view class="cloud-circle">
					<view class="cloud-bg"></view>
					<view class="cloud-icon-wrap">
						<text class="cloud-emoji">☁️</text>
						<text class="face-emoji">😟</text>
					</view>
				</view>
				<text class="hero-title">惩罚警告 ⚡</text>
				<text class="hero-subtitle">为了更好的进步，我们需要正视每一个小小的不足哦</text>
			</view>

			<view class="total-card">
				<view class="progress-ring">
					<view class="ring-bg"></view>
					<view class="ring-fill"></view>
					<text class="ring-number">12</text>
				</view>
				<view class="total-info">
					<text class="total-label">当前乌云总数</text>
					<text class="total-desc">累计积攒了 <text class="highlight">12</text> 朵乌云</text>
				</view>
			</view>

			<view class="section-header">
				<text class="section-title">惩罚项详情</text>
				<text class="section-badge">学习分级</text>
			</view>

			<view class="item" v-for="(item, index) in items" :key="index">
				<view class="item-left">
					<view class="item-icon">{{item.icon}}</view>
					<view class="item-info">
						<text class="item-name">{{item.name}}</text>
						<text class="item-clouds">☁️ +{{item.clouds}} 乌云</text>
					</view>
				</view>
				<button class="record-btn" @tap="onRecord(item)">记录</button>
			</view>

			<view class="bottom-spacer"></view>
		</scroll-view>

		<view class="bottom-nav">
			<view class="nav-item">
				<text class="nav-icon">🏠</text>
				<text class="nav-label">首页</text>
			</view>
			<view class="nav-item active">
				<text class="nav-icon">📋</text>
				<text class="nav-label">奖惩</text>
			</view>
			<view class="nav-item">
				<text class="nav-icon">🏪</text>
				<text class="nav-label">商店</text>
			</view>
			<view class="nav-item">
				<text class="nav-icon">👤</text>
				<text class="nav-label">我的</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{ icon: '📊', name: '单元测试85分以下', clouds: 3 },
					{ icon: '📉', name: '单元测试70分以下', clouds: 5 },
					{ icon: '❌', name: '单元测试不及格', clouds: 10 },
					{ icon: '👥', name: '被老师点名批评', clouds: 10 },
					{ icon: '📞', name: '表现差，老师找家长', clouds: 15 }
				]
			}
		},
		methods: {
			onRecord(item) {
				uni.showToast({
					icon: 'none',
					title: `已添加 ${item.clouds} 乌云`
				})
			}
		}
	}
</script>

<style>
	.page {
		background-color: #fbf9f4;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.top-bar {
		display: flex;
		align-items: center;
		padding: 16rpx 48rpx;
		position: sticky;
		top: 0;
		z-index: 50;
		background-color: #fbf9f4;
	}
	.back-btn {
		font-size: 48rpx;
		color: #725c00;
		margin-right: 16rpx;
	}
	.top-title {
		font-size: 40rpx;
		font-weight: 700;
		color: #725c00;
	}

	.scroll-area {
		flex: 1;
		padding: 0 48rpx 160rpx;
	}

	.hero-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 64rpx 32rpx;
	}

	.cloud-circle {
		position: relative;
		width: 256rpx;
		height: 256rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.cloud-bg {
		position: absolute;
		inset: 0;
		background-color: #eae8e3;
		border-radius: 50%;
		opacity: 0.5;
		transform: scale(1.1);
	}
	.cloud-icon-wrap {
		position: relative;
		width: 208rpx;
		height: 208rpx;
		background-color: #e4e2dd;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		animation: float 4s ease-in-out infinite;
	}
	.cloud-emoji {
		font-size: 96rpx;
	}
	.face-emoji {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 64rpx;
	}

	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-10rpx); }
	}

	.hero-title {
		margin-top: 48rpx;
		font-size: 56rpx;
		font-weight: 700;
		color: #1b1c19;
	}
	.hero-subtitle {
		margin-top: 16rpx;
		font-size: 32rpx;
		color: #4d4632;
		text-align: center;
		padding: 0 64rpx;
		line-height: 1.5;
	}

	.total-card {
		background: rgba(255,255,255,0.6);
		backdrop-filter: blur(16rpx);
		border-radius: 32rpx;
		padding: 48rpx;
		display: flex;
		align-items: center;
		gap: 48rpx;
		margin-bottom: 64rpx;
	}
	.progress-ring {
		position: relative;
		width: 160rpx;
		height: 160rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.ring-bg {
		position: absolute;
		width: 144rpx;
		height: 144rpx;
		border-radius: 50%;
		border: 12rpx solid #e4e2dd;
	}
	.ring-fill {
		position: absolute;
		width: 144rpx;
		height: 144rpx;
		border-radius: 50%;
		border: 12rpx solid #7A869A;
		border-right-color: transparent;
		border-bottom-color: transparent;
		transform: rotate(-135deg);
	}
	.ring-number {
		font-size: 40rpx;
		font-weight: 800;
		color: #7A869A;
	}
	.total-info {
		flex: 1;
	}
	.total-label {
		font-size: 40rpx;
		font-weight: 700;
		color: #1b1c19;
	}
	.total-desc {
		font-size: 32rpx;
		color: #4d4632;
		margin-top: 8rpx;
	}
	.highlight {
		color: #7A869A;
		font-weight: 700;
	}

	.section-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 32rpx;
	}
	.section-title {
		font-size: 40rpx;
		font-weight: 700;
		color: #1b1c19;
	}
	.section-badge {
		font-size: 24rpx;
		font-weight: 700;
		color: #4d4632;
		background-color: #f0eee9;
		padding: 8rpx 24rpx;
		border-radius: 999rpx;
	}

	.item {
		background-color: #ffffff;
		border-radius: 32rpx;
		padding: 40rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 32rpx;
		border: 2rpx solid rgba(209, 198, 171, 0.3);
	}
	.item-left {
		display: flex;
		align-items: center;
		gap: 32rpx;
	}
	.item-icon {
		width: 96rpx;
		height: 96rpx;
		background-color: #f0eee9;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 40rpx;
	}
	.item-info {
		display: flex;
		flex-direction: column;
	}
	.item-name {
		font-size: 40rpx;
		font-weight: 700;
		color: #1b1c19;
	}
	.item-clouds {
		font-size: 24rpx;
		font-weight: 700;
		color: #7A869A;
		margin-top: 8rpx;
	}
	.record-btn {
		background-color: #e4e2dd;
		color: #1b1c19;
		font-size: 24rpx;
		font-weight: 700;
		padding: 16rpx 40rpx;
		border-radius: 999rpx;
		border: none;
		line-height: 1.2;
		min-width: auto;
	}
	.record-btn::after {
		border: none;
	}

	.bottom-spacer {
		height: 32rpx;
	}

	.bottom-nav {
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: #ffffff;
		border-radius: 32rpx 32rpx 0 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 16rpx 32rpx;
		padding-bottom: calc(16rpx + env(safe-area-inset-bottom));
		box-shadow: 0 -4rpx 40rpx rgba(0,0,0,0.05);
	}
	.nav-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 12rpx 32rpx;
	}
	.nav-item.active {
		background-color: #fc8200;
		border-radius: 24rpx;
		padding: 12rpx 32rpx;
	}
	.nav-item.active .nav-label {
		color: #613100;
	}
	.nav-icon {
		font-size: 48rpx;
	}
	.nav-label {
		font-size: 24rpx;
		font-weight: 700;
		color: #4d4632;
		margin-top: 4rpx;
	}
</style>
