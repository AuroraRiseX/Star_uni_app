<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>

		<!-- Top App Bar -->
		<view class="top-bar">
			<view class="top-bar-left">
				<view class="back-btn" @tap="goBack">
					<text class="emoji">←</text>
				</view>
				<text class="page-title">学习习惯 📚</text>
			</view>
			<view class="rule-btn" @tap="showRules">
				<text class="rule-text">规则详情</text>
			</view>
		</view>

		<scroll-view scroll-y class="main-scroll">
			<!-- Progress Section -->
			<view class="progress-card">
				<view class="progress-header">
					<text class="progress-label">今日进度</text>
					<text class="progress-count">5/5</text>
				</view>
				<view class="progress-bar-track">
					<view class="progress-bar-fill"></view>
					<view class="progress-treasure floating">
						<view class="treasure-icon">
							<text class="emoji-lg">🎁</text>
						</view>
					</view>
				</view>
				<text class="progress-congrats">全垒打！你完成了今日所有学习计划！</text>
			</view>

			<!-- Task List -->
			<view class="task-section">
				<text class="task-section-label">日常任务清单</text>

				<!-- Task 1 - completed -->
				<view class="task-item completed">
					<view class="task-left">
						<view class="task-icon completed-icon">
							<text class="emoji-md">✏️</text>
						</view>
						<view>
							<text class="task-title done">认真完成各科作业</text>
							<text class="task-reward">+2 颗星星</text>
						</view>
					</view>
					<view class="task-status">
						<text class="status-text">✅ 已完成</text>
					</view>
				</view>

				<!-- Task 2 -->
				<view class="task-item active">
					<view class="task-left">
						<view class="task-icon active-icon-1">
							<text class="emoji-md">📖</text>
						</view>
						<view>
							<text class="task-title">复习今日所学内容</text>
							<text class="task-reward highlight">+2 颗星星</text>
						</view>
					</view>
					<view class="add-btn" @tap="completeTask(1)">
						<text class="add-icon">+</text>
					</view>
				</view>

				<!-- Task 3 -->
				<view class="task-item active">
					<view class="task-left">
						<view class="task-icon active-icon-2">
							<text class="emoji-md">📚</text>
						</view>
						<view>
							<text class="task-title">预习明日要学课程</text>
							<text class="task-reward highlight">+3 颗星星</text>
						</view>
					</view>
					<view class="add-btn" @tap="completeTask(2)">
						<text class="add-icon">+</text>
					</view>
				</view>

				<!-- Task 4 -->
				<view class="task-item active">
					<view class="task-left">
						<view class="task-icon active-icon-3">
							<text class="emoji-md">✍️</text>
						</view>
						<view>
							<text class="task-title">每日练字15分钟</text>
							<text class="task-reward highlight">+2 颗星星</text>
						</view>
					</view>
					<view class="add-btn" @tap="completeTask(3)">
						<text class="add-icon">+</text>
					</view>
				</view>

				<!-- Task 5 -->
				<view class="task-item active">
					<view class="task-left">
						<view class="task-icon active-icon-4">
							<text class="emoji-md">🧍</text>
						</view>
						<view>
							<text class="task-title">坐姿、握笔姿势标准</text>
							<text class="task-reward highlight">+2 颗星星</text>
						</view>
					</view>
					<view class="add-btn" @tap="completeTask(4)">
						<text class="add-icon">+</text>
					</view>
				</view>
			</view>

			<!-- Stats Grid -->
			<view class="stats-grid">
				<view class="stat-card stat-card-1">
					<text class="stat-emoji">⏳</text>
					<view>
						<text class="stat-label">坚持天数</text>
						<text class="stat-value stat-value-1">15</text>
					</view>
				</view>
				<view class="stat-card stat-card-2">
					<text class="stat-emoji">🏅</text>
					<view>
						<text class="stat-label" style="color: #3c475a;">获得勋章</text>
						<text class="stat-value stat-value-2">6</text>
					</view>
				</view>
			</view>

			<view style="height: 120rpx;"></view>
		</scroll-view>

		<!-- Bottom Action Button -->
		<view class="bottom-action">
			<view class="action-btn" @tap="addNewPlan">
				<text class="action-btn-icon">➕</text>
				<text class="action-btn-text">自定义添加新计划</text>
			</view>
		</view>

		<!-- Bottom Navigation -->
		<view class="bottom-nav">
			<view class="nav-item nav-active">
				<text class="nav-icon">🏠</text>
				<text class="nav-label">首页</text>
			</view>
			<view class="nav-item" @tap="goTo('/pages/star-jar/star-jar')">
				<text class="nav-icon">⭐</text>
				<text class="nav-label">奖惩</text>
			</view>
			<view class="nav-item" @tap="goTo('/pages/prize-snack/prize-snack')">
				<text class="nav-icon">🛍️</text>
				<text class="nav-label">店铺</text>
			</view>
			<view class="nav-item" @tap="goTo('/pages/profile/profile')">
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
				tasks: [
					{ id: 0, title: '认真完成各科作业', reward: 2, done: true },
					{ id: 1, title: '复习今日所学内容', reward: 2, done: false },
					{ id: 2, title: '预习明日要学课程', reward: 3, done: false },
					{ id: 3, title: '每日练字15分钟', reward: 2, done: false },
					{ id: 4, title: '坐姿、握笔姿势标准', reward: 2, done: false }
				]
			}
		},
		methods: {
			goBack() {
				uni.navigateBack()
			},
			showRules() {
				uni.showToast({ title: '规则详情', icon: 'none' })
			},
			completeTask(id) {
				uni.showToast({ title: '✨ +' + this.tasks[id].reward + ' 星星', icon: 'none' })
			},
			addNewPlan() {
				uni.showToast({ title: '添加新计划', icon: 'none' })
			},
			goTo(path) {
				uni.switchTab({ url: path })
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
		align-items: center;
		justify-content: space-between;
		padding: 12rpx 32rpx;
		background: rgba(251, 249, 244, 0.8);
		backdrop-filter: blur(12px);
		position: sticky;
		top: 0;
		z-index: 40;
		border-bottom: 1px solid rgba(0,0,0,0.05);
	}
	.top-bar-left {
		display: flex;
		align-items: center;
		gap: 16rpx;
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
	.rule-btn {
		padding: 12rpx 32rpx;
		border-radius: 9999px;
		border: 1px solid #d1c6ab;
	}
	.rule-btn:active {
		transform: scale(0.95);
	}
	.rule-text {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: #4d4632;
	}
	.main-scroll {
		padding: 48rpx 32rpx 0;
		height: calc(100vh - var(--status-bar-height) - 100px);
	}
	.progress-card {
		background: #f5f3ee;
		border-radius: 24rpx;
		padding: 48rpx;
		border: 1px solid rgba(209, 198, 171, 0.3);
		position: relative;
		margin-bottom: 48rpx;
	}
	.progress-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 24rpx;
	}
	.progress-label {
		font-size: 20px;
		font-weight: 700;
		color: #1b1c19;
	}
	.progress-count {
		font-size: 48px;
		font-weight: 800;
		letter-spacing: -0.02em;
		color: #705d00;
	}
	.progress-bar-track {
		position: relative;
		width: 100%;
		height: 64rpx;
		background: #e4e2dd;
		border-radius: 9999px;
		overflow: visible;
		border: 1px solid rgba(209, 198, 171, 0.2);
	}
	.progress-bar-fill {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: linear-gradient(90deg, #705d00, #ffd214);
		border-radius: 9999px;
	}
	.progress-treasure {
		position: absolute;
		right: -16rpx;
		top: 50%;
		transform: translateY(-50%);
		z-index: 2;
	}
	.treasure-icon {
		width: 96rpx;
		height: 96rpx;
		background: #ffd214;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid #ffffff;
		box-shadow: 0 0 40rpx rgba(255, 210, 20, 0.6);
	}
	.emoji-lg {
		font-size: 28px;
	}
	.floating {
		animation: float 3s ease-in-out infinite;
	}
	@keyframes float {
		0%, 100% { transform: translateY(-50%); }
		50% { transform: translateY(calc(-50% - 16rpx)); }
	}
	.progress-congrats {
		display: block;
		margin-top: 24rpx;
		color: #705d00;
		text-align: center;
		font-size: 16px;
		font-weight: 700;
	}
	.task-section {
		margin-bottom: 48rpx;
	}
	.task-section-label {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: #7f765f;
		padding: 0 8rpx;
		display: block;
		margin-bottom: 24rpx;
	}
	.task-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 24rpx;
		border-radius: 24rpx;
		margin-bottom: 24rpx;
		transition: all 0.2s;
	}
	.task-item.completed {
		background: rgba(218, 218, 218, 0.4);
		border: 1px solid rgba(209, 198, 171, 0.3);
		opacity: 0.8;
	}
	.task-item.active {
		background: #FFFDF9;
		border: 1px solid rgba(209, 198, 171, 0.4);
		box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.04);
	}
	.task-item.active:active {
		transform: scale(0.95);
	}
	.task-left {
		display: flex;
		align-items: center;
		gap: 24rpx;
	}
	.task-icon {
		width: 96rpx;
		height: 96rpx;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.completed-icon {
		background: #eeeeed;
	}
	.active-icon-1 {
		background: rgba(255, 210, 20, 0.2);
	}
	.active-icon-2 {
		background: rgba(177, 156, 217, 0.1);
	}
	.active-icon-3 {
		background: rgba(168, 214, 114, 0.1);
	}
	.active-icon-4 {
		background: rgba(255, 210, 20, 0.2);
	}
	.emoji-md {
		font-size: 24px;
	}
	.task-title {
		font-size: 20px;
		font-weight: 700;
		color: #1b1c19;
		display: block;
	}
	.task-title.done {
		color: #4d4632;
		text-decoration: line-through;
	}
	.task-reward {
		font-size: 12px;
		font-weight: 700;
		color: #7f765f;
		letter-spacing: 0.05em;
	}
	.task-reward.highlight {
		color: #944a00;
	}
	.task-status {
		padding: 12rpx 32rpx;
		background: rgba(168, 214, 114, 0.2);
		border-radius: 9999px;
	}
	.status-text {
		font-size: 14px;
		font-weight: 700;
		color: #A8D672;
	}
	.add-btn {
		width: 96rpx;
		height: 96rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 20rpx;
		background: #ffd214;
	}
	.add-btn:active {
		transform: scale(0.9);
	}
	.add-icon {
		font-size: 24px;
		font-weight: 700;
		color: #725e00;
	}
	.stats-grid {
		display: flex;
		gap: 24rpx;
		margin-bottom: 48rpx;
	}
	.stat-card {
		flex: 1;
		padding: 24rpx;
		border-radius: 24rpx;
		border: 1px solid;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		aspect-ratio: 1;
	}
	.stat-card-1 {
		background: rgba(255, 220, 196, 0.3);
		border-color: rgba(255, 220, 196, 0.5);
	}
	.stat-card-2 {
		background: rgba(216, 227, 250, 0.3);
		border-color: rgba(216, 227, 250, 0.5);
	}
	.stat-emoji {
		font-size: 24px;
		color: #944a00;
	}
	.stat-label {
		font-size: 14px;
		font-weight: 700;
		color: #6f3800;
		display: block;
	}
	.stat-value {
		font-size: 32px;
		font-weight: 800;
		letter-spacing: -0.02em;
	}
	.stat-value-1 {
		color: #944a00;
	}
	.stat-value-2 {
		color: #545f72;
	}
	.bottom-action {
		position: fixed;
		bottom: 128rpx;
		left: 0;
		width: 100%;
		padding: 32rpx;
		padding-bottom: 40rpx;
		background: linear-gradient(to top, #fbf9f4, rgba(251, 249, 244, 0.95), transparent);
		z-index: 50;
		box-sizing: border-box;
	}
	.action-btn {
		width: 100%;
		height: 128rpx;
		background: #1b1c19;
		color: #fbf9f4;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 16rpx;
		border-radius: 9999px;
		box-shadow: 0 8rpx 32rpx rgba(0,0,0,0.2);
	}
	.action-btn:active {
		transform: scale(0.95);
	}
	.action-btn-icon {
		font-size: 22px;
	}
	.action-btn-text {
		font-size: 20px;
		font-weight: 700;
	}
	.bottom-nav {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 16rpx 32rpx 32rpx;
		background: rgba(250, 249, 249, 0.8);
		backdrop-filter: blur(20px);
		border-top: 1px solid rgba(255, 255, 255, 0.2);
		z-index: 50;
		border-radius: 24rpx 24rpx 0 0;
		box-sizing: border-box;
	}
	.nav-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 8rpx 32rpx;
	}
	.nav-item:active {
		opacity: 0.7;
	}
	.nav-active {
		background: #ffd93d;
		color: #725e00;
		border-radius: 20rpx;
	}
	.nav-icon {
		font-size: 20px;
	}
	.nav-label {
		font-size: 12px;
		font-weight: 600;
		color: #4d4633;
		margin-top: 4rpx;
	}
	.nav-active .nav-label {
		color: #725e00;
	}
</style>
