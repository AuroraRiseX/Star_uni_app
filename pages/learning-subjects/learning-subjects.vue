<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>

		<view class="top-bar">
			<view class="top-bar-inner">
				<view class="back-btn" @tap="goBack">
					<text class="icon">←</text>
				</view>
				<text class="top-title">学习科目</text>
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
						<text class="progress-num">2/5</text>
					</view>
					<view class="progress-track">
						<view class="progress-fill" style="width: 40%;">
							<view class="shimmer"></view>
						</view>
						<view class="star-badge">
							<view class="star-circle">
								<text class="star-emoji">⭐</text>
							</view>
						</view>
					</view>
					<text class="progress-hint">继续努力，解锁今日的星星罐！</text>
				</view>

				<view class="task-section">
					<view class="task-header">
						<text class="section-title">日常任务清单</text>
						<view class="pending-badge">
							<text class="pending-text">3 待完成</text>
						</view>
					</view>

					<view class="task-item" @tap="onTaskTap(0)">
						<view class="task-left">
							<view class="task-icon task-icon-calc">
								<text class="icon-lg">🧮</text>
							</view>
							<view class="task-info">
								<text class="task-name">口算题50道</text>
								<text class="task-reward">+2 颗星星</text>
							</view>
						</view>
						<view class="add-btn" @tap.stop="onAddTask(0)">
							<text class="add-icon">+</text>
						</view>
					</view>

					<view class="task-item task-done">
						<view class="task-left">
							<view class="task-icon task-icon-done">
								<text class="icon-lg">📚</text>
							</view>
							<view class="task-info">
								<text class="task-name task-name-done">阅读理解1篇</text>
								<text class="task-reward task-reward-done">+3 颗星星</text>
							</view>
						</view>
						<view class="done-badge">
							<text class="done-icon">✓</text>
							<text class="done-label">已完成</text>
						</view>
					</view>

					<view class="task-item" @tap="onTaskTap(2)">
						<view class="task-left">
							<view class="task-icon task-icon-edit">
								<text class="icon-lg">✏️</text>
							</view>
							<view class="task-info">
								<text class="task-name">看图写话1篇</text>
								<text class="task-reward">+5 颗星星</text>
							</view>
						</view>
						<view class="add-btn" @tap.stop="onAddTask(2)">
							<text class="add-icon">+</text>
						</view>
					</view>

					<view class="task-item" @tap="onTaskTap(3)">
						<view class="task-left">
							<view class="task-icon task-icon-hear">
								<text class="icon-lg">👂</text>
							</view>
							<view class="task-info">
								<text class="task-name">听力1篇</text>
								<text class="task-reward">+5 颗星星</text>
							</view>
						</view>
						<view class="add-btn" @tap.stop="onAddTask(3)">
							<text class="add-icon">+</text>
						</view>
					</view>

					<view class="task-item task-done">
						<view class="task-left">
							<view class="task-icon task-icon-done">
								<text class="icon-lg">📝</text>
							</view>
							<view class="task-info">
								<text class="task-name task-name-done">摘抄好词好句30个</text>
								<text class="task-reward task-reward-done">+3 颗星星</text>
							</view>
						</view>
						<view class="done-badge">
							<text class="done-icon">✓</text>
							<text class="done-label">已完成</text>
						</view>
					</view>
				</view>

				<view class="stats-grid">
					<view class="stat-card stat-card-orange">
						<text class="stat-icon">🕐</text>
						<view class="stat-info">
							<text class="stat-label">坚持天数</text>
							<text class="stat-value stat-value-orange">15</text>
						</view>
					</view>
					<view class="stat-card stat-card-blue">
						<text class="stat-icon">🏅</text>
						<view class="stat-info">
							<text class="stat-label">获得勋章</text>
							<text class="stat-value stat-value-blue">6</text>
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

		<view class="bottom-nav">
			<view class="nav-item" @tap="goHome">
				<text class="nav-icon">🏠</text>
				<text class="nav-label">首页</text>
			</view>
			<view class="nav-item nav-item-active" @tap="goTasks">
				<text class="nav-icon nav-icon-active">📋</text>
				<text class="nav-label nav-label-active">任务</text>
			</view>
			<view class="nav-item" @tap="goStore">
				<text class="nav-icon">🏪</text>
				<text class="nav-label">商店</text>
			</view>
			<view class="nav-item" @tap="goProfile">
				<text class="nav-icon">👤</text>
				<text class="nav-label">我的</text>
			</view>
		</view>
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
			onTaskTap(index) {},
			onAddTask(index) {},
			onAddPlan() {},
			goHome() {},
			goTasks() {},
			goStore() {},
			goProfile() {}
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
		background-color: #fbf9f4;
		position: sticky;
		top: var(--status-bar-height);
		z-index: 50;
		border-bottom: 1px solid rgba(209, 198, 171, 0.3);
	}
	.top-bar-inner {
		display: flex;
		align-items: center;
		height: 64rpx;
		padding: 0 32rpx;
		max-width: 1240rpx;
		margin: 0 auto;
	}
	.back-btn {
		padding: 8rpx;
	}
	.icon {
		font-size: 28px;
		color: #725c00;
	}
	.top-title {
		flex: 1;
		text-align: center;
		font-size: 20px;
		font-weight: 700;
		color: #725c00;
		line-height: 1.4;
	}
	.rule-btn {
		padding: 0 8rpx;
	}
	.rule-text {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: #725c00;
	}
	.main-scroll {
		height: calc(100vh - var(--status-bar-height) - 64rpx - 120rpx);
	}
	.main-content {
		max-width: 1240rpx;
		margin: 0 auto;
		padding: 24rpx 32rpx 48rpx;
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
		color: #4d4632;
		text-align: center;
		font-size: 16px;
		font-weight: 500;
		line-height: 1.5;
	}
	.task-section {
		margin-top: 32rpx;
	}
	.task-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 16rpx;
	}
	.pending-badge {
		padding: 4rpx 12rpx;
		background-color: #ccd7ee;
		border-radius: 9999rpx;
	}
	.pending-text {
		font-size: 12px;
		font-weight: 700;
		color: #545f72;
	}
	.task-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx;
		background-color: #ffffff;
		border: 1px solid rgba(209, 198, 171, 0.3);
		border-radius: 12rpx;
		margin-bottom: 16rpx;
	}
	.task-done {
		background-color: rgba(219, 218, 213, 0.4);
		opacity: 0.8;
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
	.task-icon-calc {
		background-color: rgba(255, 210, 20, 0.1);
	}
	.task-icon-done {
		background-color: #f0eee9;
	}
	.task-icon-edit {
		background-color: rgba(255, 220, 196, 0.2);
	}
	.task-icon-hear {
		background-color: rgba(204, 215, 238, 0.2);
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
		font-size: 18px;
		font-weight: 500;
		color: #1b1c19;
		line-height: 1.6;
	}
	.task-name-done {
		color: #4d4632;
		text-decoration: line-through;
	}
	.task-reward {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: #924c00;
		line-height: 1.2;
	}
	.task-reward-done {
		color: #7f765f;
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
	.done-badge {
		display: flex;
		align-items: center;
		gap: 8rpx;
		padding: 8rpx 16rpx;
		background-color: rgba(168, 214, 114, 0.2);
		border-radius: 9999rpx;
	}
	.done-icon {
		font-size: 14px;
		color: #A8D672;
		font-weight: 700;
	}
	.done-label {
		font-size: 12px;
		color: #A8D672;
		font-weight: 700;
	}
	.stats-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16rpx;
		margin-top: 48rpx;
	}
	.stat-card {
		padding: 20rpx;
		border-radius: 12rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		aspect-ratio: 1;
	}
	.stat-card-orange {
		background-color: rgba(255, 220, 196, 0.3);
		border: 1px solid rgba(255, 220, 196, 0.5);
	}
	.stat-card-blue {
		background-color: rgba(216, 227, 250, 0.3);
		border: 1px solid rgba(216, 227, 250, 0.5);
	}
	.stat-icon {
		font-size: 28px;
		color: #924c00;
	}
	.stat-card-blue .stat-icon {
		color: #545f72;
	}
	.stat-info {
		display: flex;
		flex-direction: column;
		gap: 4rpx;
	}
	.stat-label {
		font-size: 16px;
		font-weight: 700;
		color: #6f3800;
	}
	.stat-card-blue .stat-label {
		color: #3c475a;
	}
	.stat-value {
		font-size: 28px;
		font-weight: 800;
		line-height: 1.1;
	}
	.stat-value-orange {
		color: #924c00;
	}
	.stat-value-blue {
		color: #545f72;
	}
	.bottom-action {
		margin-top: 64rpx;
		padding-bottom: 40rpx;
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
	.bottom-nav {
		position: fixed;
		bottom: 0;
		width: 100%;
		z-index: 50;
		background-color: #ffffff;
		border-radius: 16rpx 16rpx 0 0;
		box-shadow: 0 -4px 20px rgba(0,0,0,0.05);
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 8rpx 16rpx;
		padding-bottom: calc(16rpx + env(safe-area-inset-bottom));
	}
	.nav-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 6rpx 16rpx;
	}
	.nav-item-active {
		background-color: #fd8b17;
		border-radius: 12rpx;
		padding: 6rpx 16rpx;
	}
	.nav-icon {
		font-size: 24px;
		color: #4d4632;
	}
	.nav-icon-active {
		color: #613100;
	}
	.nav-label {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: #4d4632;
		line-height: 1.2;
	}
	.nav-label-active {
		color: #613100;
	}
</style>
