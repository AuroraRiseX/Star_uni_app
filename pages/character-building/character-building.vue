<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>

		<view class="top-bar">
			<view class="top-bar-inner">
				<view class="top-left">
					<view class="back-btn" @tap="goBack">
						<text class="icon">←</text>
					</view>
					<text class="top-title">性格养成</text>
				</view>
				<view class="rule-btn" @tap="showRules">
					<text class="rule-text">规则详情</text>
				</view>
			</view>
		</view>

		<scroll-view scroll-y class="main-scroll">
			<view class="main-content">
				<view class="progress-card">
					<view class="progress-header">
						<text class="section-title">今日进度</text>
						<text class="progress-num">1/5</text>
					</view>
					<view class="progress-track">
						<view class="progress-fill" style="width: 20%;">
							<view class="shimmer"></view>
						</view>
						<view class="star-badge">
							<view class="star-circle">
								<text class="star-emoji">⭐</text>
							</view>
						</view>
					</view>
					<text class="progress-hint">再完成 4 个任务就能开启神秘宝箱啦！</text>
				</view>

				<view class="task-section">
					<view class="task-label">每日修养任务</view>

					<view class="task-item">
						<view class="task-left">
							<view class="task-icon task-icon-purple">
								<text class="icon-lg">🧘</text>
							</view>
							<view class="task-info">
								<text class="task-name">一天不发脾气</text>
								<text class="task-reward">+3 颗星星</text>
							</view>
						</view>
						<view class="add-btn" @tap.stop="onAddTask(0)">
							<text class="add-icon">+</text>
						</view>
					</view>

					<view class="task-item">
						<view class="task-left">
							<view class="task-icon task-icon-green">
								<text class="icon-lg">🌱</text>
							</view>
							<view class="task-info">
								<text class="task-name">诚实不说谎</text>
								<text class="task-reward">+5 颗星星</text>
							</view>
						</view>
						<view class="add-btn" @tap.stop="onAddTask(1)">
							<text class="add-icon">+</text>
						</view>
					</view>

					<view class="task-item">
						<view class="task-left">
							<view class="task-icon task-icon-pink">
								<text class="icon-lg">💕</text>
							</view>
							<view class="task-info">
								<text class="task-name">乐于助人</text>
								<text class="task-reward">+4 颗星星</text>
							</view>
						</view>
						<view class="add-btn" @tap.stop="onAddTask(2)">
							<text class="add-icon">+</text>
						</view>
					</view>

					<view class="task-item">
						<view class="task-left">
							<view class="task-icon task-icon-orange">
								<text class="icon-lg">🤝</text>
							</view>
							<view class="task-info">
								<text class="task-name">学会分享</text>
								<text class="task-reward">+3 颗星星</text>
							</view>
						</view>
						<view class="add-btn" @tap.stop="onAddTask(3)">
							<text class="add-icon">+</text>
						</view>
					</view>
				</view>

				<view class="stats-grid">
					<view class="stat-card stat-card-purple">
						<text class="stat-icon">🕐</text>
						<view class="stat-info">
							<text class="stat-label">坚持天数</text>
							<text class="stat-value">12</text>
						</view>
					</view>
					<view class="stat-card stat-card-green">
						<text class="stat-icon">🏅</text>
						<view class="stat-info">
							<text class="stat-label">获得勋章</text>
							<text class="stat-value">4</text>
						</view>
					</view>
				</view>

				<view class="bottom-action">
					<button class="action-btn" @tap="onAddPlan">
						<text class="action-icon">+</text>
						<text class="action-text">自定义添加新计划</text>
					</button>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {},
		methods: {
			goBack() {},
			showRules() {},
			onAddTask(index) {},
			onAddPlan() {}
		}
	}
</script>

<style>
	.page {
		background-color: #fbf9f4;
		min-height: 100vh;
		color: #1b1c19;
		font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
	}
	.top-bar {
		background-color: rgba(251, 249, 244, 0.8);
		backdrop-filter: blur(16rpx);
		position: sticky;
		top: var(--status-bar-height);
		z-index: 40;
		padding: 8rpx 24rpx;
		border-bottom: 1px solid rgba(209, 198, 171, 0.2);
	}
	.top-bar-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.top-left {
		display: flex;
		align-items: center;
		gap: 12rpx;
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
	.rule-btn {
		padding: 8rpx 16rpx;
		border-radius: 9999rpx;
		border: 1px solid #d1c6ab;
	}
	.rule-text {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: #4d4632;
	}
	.main-scroll {
		height: calc(100vh - var(--status-bar-height) - 96rpx);
		padding-bottom: 128rpx;
	}
	.main-content {
		max-width: 1240rpx;
		margin: 0 auto;
		padding: 24rpx 24rpx 48rpx;
	}
	.progress-card {
		background-color: #f5f3ee;
		border-radius: 16rpx;
		padding: 24rpx;
		border: 1px solid rgba(209, 198, 171, 0.3);
	}
	.progress-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 16rpx;
	}
	.section-title {
		font-size: 20px;
		font-weight: 700;
		color: #1b1c19;
		line-height: 1.4;
	}
	.progress-num {
		font-size: 48px;
		font-weight: 800;
		letter-spacing: -0.02em;
		color: #725c00;
		line-height: 1.1;
	}
	.progress-track {
		position: relative;
		width: 100%;
		height: 32rpx;
		background-color: #e4e2dd;
		border-radius: 9999rpx;
		overflow: hidden;
		border: 1px solid rgba(209, 198, 171, 0.2);
	}
	.progress-fill {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		border-radius: 9999rpx;
		background: linear-gradient(90deg, #725c00, #ffd214);
		overflow: hidden;
	}
	.shimmer {
		position: absolute;
		inset: 0;
		background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
		background-size: 200% 100%;
		animation: shimmerMove 2s infinite linear;
	}
	@keyframes shimmerMove {
		from { background-position: 200% 0; }
		to { background-position: -200% 0; }
	}
	.star-badge {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		margin-right: -8rpx;
	}
	.star-circle {
		width: 48rpx;
		height: 48rpx;
		background-color: #ffd214;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 0 20px rgba(255,210,20,0.6);
		border: 2px solid #ffffff;
		animation: starShimmer 3s infinite ease-in-out;
	}
	.star-emoji {
		font-size: 18px;
	}
	@keyframes starShimmer {
		0%, 100% { opacity: 0.8; transform: scale(1); }
		50% { opacity: 1; transform: scale(1.1); }
	}
	.progress-hint {
		margin-top: 16rpx;
		color: #725c00;
		text-align: center;
		font-size: 16px;
		font-weight: 700;
		line-height: 1.5;
	}
	.task-section {
		margin-top: 32rpx;
	}
	.task-label {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.1em;
		color: #7f765f;
		padding: 0 4rpx;
		margin-bottom: 16rpx;
	}
	.task-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx;
		background-color: #FFFDF9;
		border: 1px solid rgba(209, 198, 171, 0.4);
		border-radius: 12rpx;
		margin-bottom: 16rpx;
	}
	.task-left {
		display: flex;
		align-items: center;
		gap: 16rpx;
	}
	.task-icon {
		width: 48rpx;
		height: 48rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
	}
	.task-icon-purple {
		background-color: rgba(177, 156, 217, 0.1);
	}
	.task-icon-green {
		background-color: rgba(168, 214, 114, 0.1);
	}
	.task-icon-pink {
		background-color: rgba(255, 220, 196, 0.3);
	}
	.task-icon-orange {
		background-color: rgba(255, 183, 128, 0.2);
	}
	.icon-lg {
		font-size: 28px;
	}
	.task-info {
		display: flex;
		flex-direction: column;
		gap: 2rpx;
	}
	.task-name {
		font-size: 20px;
		font-weight: 700;
		color: #1b1c19;
		line-height: 1.4;
	}
	.task-reward {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: #924c00;
		line-height: 1.2;
	}
	.add-btn {
		width: 48rpx;
		height: 48rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 12rpx;
		background-color: #ffd214;
	}
	.add-icon {
		font-size: 22px;
		font-weight: 700;
		color: #705b00;
	}
	.stats-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16rpx;
		margin-top: 32rpx;
	}
	.stat-card {
		padding: 20rpx;
		border-radius: 16rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		aspect-ratio: 1;
	}
	.stat-card-purple {
		background-color: rgba(216, 227, 250, 0.3);
		border: 1px solid rgba(216, 227, 250, 0.5);
	}
	.stat-card-green {
		background-color: rgba(216, 227, 250, 0.3);
		border: 1px solid rgba(216, 227, 250, 0.5);
	}
	.stat-icon {
		font-size: 28px;
		color: #545f72;
	}
	.stat-label {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: #3c475a;
		line-height: 1.2;
	}
	.stat-value {
		font-size: 32px;
		font-weight: 800;
		line-height: 1.2;
	}
	.stat-card-purple .stat-value {
		color: #545f72;
	}
	.stat-card-green .stat-value {
		color: #545f72;
	}
	.bottom-action {
		margin-top: 48rpx;
		padding-bottom: 32rpx;
	}
	.action-btn {
		width: 100%;
		height: 64rpx;
		background-color: #1b1c19;
		color: #fbf9f4;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12rpx;
		border-radius: 9999rpx;
		font-size: 20px;
		font-weight: 700;
		border: none;
		outline: none;
	}
	.action-btn::after {
		border: none;
	}
	.action-icon {
		font-size: 24px;
		font-weight: 700;
	}
	.action-text {
		font-size: 20px;
		font-weight: 700;
	}
</style>
