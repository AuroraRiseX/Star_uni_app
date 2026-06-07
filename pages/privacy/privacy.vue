<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>
		<view class="top-bar">
			<view class="top-bar-inner">
				<view class="back-btn" @tap="goBack">
					<text class="back-icon">←</text>
				</view>
				<text class="top-title">隐私协议</text>
			</view>
		</view>
		<scroll-view scroll-y class="scroll-area">
			<view class="content-wrap">
				<view class="header-section">
					<text class="main-title">隐私政策</text>
					<text class="update-date">更新日期：2025年1月1日</text>
				</view>
				<view class="policy-body">
					<text class="policy-text">我们非常重视您的隐私。本隐私政策说明了星星罐如何收集、使用和保护您的信息。</text>
					<view class="policy-section">
						<text class="section-title">1. 信息收集</text>
						<text class="section-text">我们仅收集提供服务所必需的信息，包括：您创建的宝贝档案信息、任务完成记录、奖励兑换记录等。</text>
					</view>
					<view class="policy-section">
						<text class="section-title">2. 信息使用</text>
						<text class="section-text">收集的信息仅用于提供和改善星星罐的服务，帮助您更好地管理家庭成长计划。</text>
					</view>
					<view class="policy-section">
						<text class="section-title">3. 数据安全</text>
						<text class="section-text">我们采用业界通行的安全措施保护您的数据，每个用户的数据库严格隔离，确保数据不会交叉泄露。</text>
					</view>
					<view class="policy-section">
						<text class="section-title">4. 用户权利</text>
						<text class="section-text">您有权随时查看、修改或删除您的个人数据。如需协助，请联系我们。</text>
					</view>
				</view>
				<view class="agree-btn" @tap="goBack">
					<text class="agree-text">我已阅读并同意</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		methods: {
			goBack() {
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	.page {
		min-height: 100vh;
		background: #fbf9f4;
		font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', sans-serif;
		color: #1a1c1c;
	}

	.top-bar {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 50;
		background: rgba(251, 249, 244, 0.4);
		backdrop-filter: blur(24rpx);
		-webkit-backdrop-filter: blur(24rpx);
		border-bottom: 2rpx solid rgba(255, 255, 255, 0.2);
	}

	.top-bar-inner {
		display: flex;
		align-items: center;
		padding: 16rpx 40rpx;
		padding-top: calc(16rpx + var(--status-bar-height));
		gap: 16rpx;
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
		font-size: 40rpx;
		color: #725c00;
	}

	.top-title {
		font-size: 48rpx;
		font-weight: 700;
		color: #725c00;
	}

	.scroll-area {
		padding: 180rpx 40rpx 60rpx;
	}

	.content-wrap {
		max-width: 960rpx;
	}

	.header-section {
		margin-bottom: 40rpx;
	}

	.main-title {
		font-size: 52rpx;
		font-weight: 700;
		color: #725c00;
		display: block;
	}

	.update-date {
		font-size: 24rpx;
		color: #b8a88a;
		display: block;
		margin-top: 12rpx;
	}

	.policy-body {
		display: flex;
		flex-direction: column;
		gap: 36rpx;
	}

	.policy-text {
		font-size: 28rpx;
		color: #4d4633;
		line-height: 1.6;
		display: block;
	}

	.policy-section {
		display: flex;
		flex-direction: column;
		gap: 12rpx;
	}

	.section-title {
		font-size: 32rpx;
		font-weight: 700;
		color: #725c00;
		display: block;
	}

	.section-text {
		font-size: 26rpx;
		color: #7a6e5a;
		line-height: 1.6;
		display: block;
	}

	.agree-btn {
		margin-top: 60rpx;
		width: 100%;
		background-color: #ffd93d;
		padding: 28rpx 0;
		border-radius: 999rpx;
		text-align: center;
		box-shadow: 0 4rpx 16rpx rgba(255, 217, 61, 0.3);
	}

	.agree-btn:active {
		opacity: 0.8;
	}

	.agree-text {
		font-size: 36rpx;
		font-weight: 700;
		color: #725c00;
	}
</style>
