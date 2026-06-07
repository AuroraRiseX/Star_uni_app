<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>

		<view class="top-bar">
			<view class="top-bar-inner">
				<view class="back-btn" @tap="goBack">
					<text class="icon">←</text>
				</view>
				<text class="top-title">学习成绩</text>
				<view class="flex-grow"></view>
				<view class="more-btn" @tap="onMore">
					<text class="icon">⋮</text>
				</view>
			</view>
		</view>

		<scroll-view scroll-y class="main-scroll">
			<view class="main-content">
				<view class="hero-section">
					<view class="hero-bg-deco deco-bl"></view>
					<view class="hero-bg-deco deco-tr"></view>
					<view class="hero-inner">
						<text class="hero-label">今日进度</text>
						<view class="hero-progress">
							<text class="hero-current">4</text>
							<text class="hero-total">/5</text>
						</view>
						<view class="capsule-track">
							<view class="capsule-fill" style="width: 80%;">
								<view class="shimmer-line"></view>
								<text class="capsule-star">⭐</text>
							</view>
							<view class="capsule-gift">
								<text class="gift-emoji">🎁</text>
							</view>
						</view>
						<text class="hero-footer-text">再接再厉，集齐星星即可开启今日宝箱！✨</text>
					</view>
				</view>

				<view class="task-section">
					<view class="task-header">
						<text class="section-title">日常任务清单</text>
						<view class="status-badge">
							<text class="status-text">进行中</text>
						</view>
					</view>

					<view class="task-item" @tap="onTaskTap(0)">
						<view class="task-left">
							<view class="task-icon task-icon-yellow">
								<text class="icon-lg">❓</text>
							</view>
							<view class="task-info">
								<text class="task-name">单元测试95分以上</text>
								<text class="task-reward">+5 颗星星</text>
							</view>
						</view>
						<view class="add-btn-sm" @tap.stop="onAddTask(0)">
							<text class="add-icon-sm">+</text>
						</view>
					</view>

					<view class="task-item task-done">
						<view class="task-left">
							<view class="task-icon task-icon-green-bg">
								<text class="icon-lg">🏆</text>
							</view>
							<view class="task-info">
								<text class="task-name task-name-done">获得学校的奖状</text>
								<text class="task-reward task-reward-done">已完成 (+10 颗星星)</text>
							</view>
						</view>
						<view class="check-badge">
							<text class="check-icon">✓</text>
						</view>
					</view>

					<view class="task-item" @tap="onTaskTap(2)">
						<view class="task-left">
							<view class="task-icon task-icon-purple-bg">
								<text class="icon-lg">✏️</text>
							</view>
							<view class="task-info">
								<text class="task-name">课堂听写、默写满分</text>
								<text class="task-reward">+5 颗星星</text>
							</view>
						</view>
						<view class="add-btn-sm" @tap.stop="onAddTask(2)">
							<text class="add-icon-sm">+</text>
						</view>
					</view>

					<view class="task-item" @tap="onTaskTap(3)">
						<view class="task-left">
							<view class="task-icon task-icon-peach">
								<text class="icon-lg">😊</text>
							</view>
							<view class="task-info">
								<text class="task-name">被老师表扬</text>
								<text class="task-reward">+2 颗星星</text>
							</view>
						</view>
						<view class="add-btn-sm" @tap.stop="onAddTask(3)">
							<text class="add-icon-sm">+</text>
						</view>
					</view>

					<view class="task-item" @tap="onTaskTap(4)">
						<view class="task-left">
							<view class="task-icon task-icon-blue-bg">
								<text class="icon-lg">📊</text>
							</view>
							<view class="task-info">
								<text class="task-name">数学获得95分以上</text>
								<text class="task-reward">+10 颗星星</text>
							</view>
						</view>
						<view class="add-btn-sm" @tap.stop="onAddTask(4)">
							<text class="add-icon-sm">+</text>
						</view>
					</view>
				</view>

				<view class="stats-grid">
					<view class="stat-item">
						<text class="stat-item-icon">📅</text>
						<text class="stat-item-label">坚持天数</text>
						<text class="stat-item-value">15</text>
					</view>
					<view class="stat-item">
						<text class="stat-item-icon stat-item-icon-gold">🏅</text>
						<text class="stat-item-label">获得勋章</text>
						<text class="stat-item-value stat-item-value-gold">6</text>
					</view>
				</view>
			</view>
		</scroll-view>

		<view class="bottom-bar">
			<button class="bottom-btn" @tap="onAddPlan">
				<text class="bottom-btn-icon">+</text>
				<text class="bottom-btn-text">自定义添加新计划</text>
			</button>
		</view>

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
			onMore() {},
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
		padding-bottom: 128rpx;
	}
	.top-bar {
		background-color: rgba(251, 249, 244, 0.8);
		backdrop-filter: blur(16rpx);
		position: sticky;
		top: var(--status-bar-height);
		z-index: 50;
		border-bottom: 1px solid rgba(209, 198, 171, 0.2);
	}
	.top-bar-inner {
		display: flex;
		align-items: center;
		padding: 0 16rpx;
		height: 64rpx;
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
		margin-left: 16rpx;
		font-size: 20px;
		font-weight: 700;
		color: #725c00;
		line-height: 1.4;
	}
	.flex-grow {
		flex: 1;
	}
	.more-btn {
		padding: 8rpx;
	}
	.main-scroll {
		height: calc(100vh - var(--status-bar-height) - 64rpx - 128rpx);
	}
	.main-content {
		max-width: 880rpx;
		margin: 0 auto;
		padding: 0 16rpx;
	}
	.hero-section {
		margin-top: 32rpx;
		background: rgba(255, 253, 249, 0.6);
		backdrop-filter: blur(16rpx);
		border: 1px solid rgba(255, 255, 255, 0.4);
		border-radius: 16rpx;
		padding: 24rpx;
		text-align: center;
		position: relative;
		overflow: hidden;
	}
	.hero-bg-deco {
		position: absolute;
		border-radius: 50%;
		opacity: 0.1;
	}
	.deco-bl {
		bottom: -16rpx;
		left: -16rpx;
		width: 128rpx;
		height: 128rpx;
		background-color: #ffd214;
		filter: blur(24rpx);
	}
	.deco-tr {
		top: -16rpx;
		right: -16rpx;
		width: 96rpx;
		height: 96rpx;
		background-color: #fd8b17;
		filter: blur(24rpx);
	}
	.hero-inner {
		position: relative;
		z-index: 10;
	}
	.hero-label {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: #4d4632;
		line-height: 1.2;
		margin-bottom: 8rpx;
	}
	.hero-progress {
		display: flex;
		align-items: baseline;
		justify-content: center;
		gap: 4rpx;
		margin-bottom: 16rpx;
	}
	.hero-current {
		font-size: 48px;
		font-weight: 800;
		letter-spacing: -0.02em;
		color: #725c00;
		line-height: 1.1;
	}
	.hero-total {
		font-size: 32px;
		font-weight: 700;
		color: #d1c6ab;
		line-height: 1.2;
	}
	.capsule-track {
		position: relative;
		height: 24rpx;
		background-color: #f0eee9;
		border-radius: 9999rpx;
		width: 100%;
		padding: 4rpx;
		margin-bottom: 16rpx;
	}
	.capsule-fill {
		position: absolute;
		top: 4rpx;
		left: 4rpx;
		bottom: 4rpx;
		background: linear-gradient(90deg, #ffd214, #fd8b17);
		border-radius: 9999rpx;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-right: 8rpx;
		overflow: hidden;
	}
	.shimmer-line {
		position: absolute;
		inset: 0;
		background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
		background-size: 200% 100%;
		animation: shimmerMove 2s infinite;
	}
	@keyframes shimmerMove {
		0% { background-position: -200% 0; }
		100% { background-position: 200% 0; }
	}
	.capsule-star {
		font-size: 12px;
		position: relative;
		z-index: 1;
	}
	.capsule-gift {
		position: absolute;
		right: -8rpx;
		top: -16rpx;
	}
	.gift-emoji {
		font-size: 36px;
	}
	.hero-footer-text {
		font-size: 16px;
		font-weight: 500;
		color: #4d4632;
		line-height: 1.5;
	}
	.task-section {
		margin-top: 32rpx;
	}
	.task-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 16rpx;
		padding: 0 8rpx;
	}
	.section-title {
		font-size: 20px;
		font-weight: 700;
		color: #1b1c19;
		line-height: 1.4;
	}
	.status-badge {
		padding: 4rpx 12rpx;
		background-color: rgba(255, 210, 20, 0.2);
		border-radius: 9999rpx;
	}
	.status-text {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: #725c00;
		line-height: 1.2;
	}
	.task-item {
		background-color: #FFFDF9;
		border: 1px solid rgba(209, 198, 171, 0.3);
		border-radius: 12rpx;
		padding: 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 16rpx;
	}
	.task-done {
		background-color: rgba(228, 226, 221, 0.3);
		border-color: transparent;
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
		border-radius: 16rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.task-icon-yellow {
		background-color: rgba(255, 210, 20, 0.2);
	}
	.task-icon-green-bg {
		background-color: rgba(168, 214, 114, 0.2);
	}
	.task-icon-purple-bg {
		background-color: rgba(177, 156, 217, 0.2);
	}
	.task-icon-peach {
		background-color: rgba(255, 220, 196, 0.5);
	}
	.task-icon-blue-bg {
		background-color: #ccd7ee;
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
		text-decoration: line-through;
		color: #4d4632;
	}
	.task-reward {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: #725c00;
		line-height: 1.2;
	}
	.task-reward-done {
		color: #A8D672;
	}
	.add-btn-sm {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		background-color: #f0eee9;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.add-icon-sm {
		font-size: 22px;
		color: #d1c6ab;
		font-weight: 700;
	}
	.check-badge {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		background-color: #A8D672;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.check-icon {
		font-size: 18px;
		color: #ffffff;
		font-weight: 700;
	}
	.stats-grid {
		margin-top: 32rpx;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16rpx;
		padding-bottom: 48rpx;
	}
	.stat-item {
		background-color: #f5f3ee;
		border-radius: 12rpx;
		padding: 16rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 1px solid rgba(209, 198, 171, 0.2);
	}
	.stat-item-icon {
		font-size: 24px;
		color: #924c00;
		margin-bottom: 4rpx;
	}
	.stat-item-icon-gold {
		color: #725c00;
	}
	.stat-item-label {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: #7f765f;
		line-height: 1.2;
	}
	.stat-item-value {
		font-size: 32px;
		font-weight: 700;
		line-height: 1.2;
		color: #924c00;
	}
	.stat-item-value-gold {
		color: #725c00;
	}
	.bottom-bar {
		position: fixed;
		bottom: 128rpx;
		width: 100%;
		padding: 16rpx;
		background: linear-gradient(to top, #fbf9f4, rgba(251, 249, 244, 0.95), transparent);
		z-index: 40;
	}
	.bottom-btn {
		width: 100%;
		background: linear-gradient(90deg, #ffd214, #fd8b17);
		color: #613100;
		font-size: 20px;
		font-weight: 700;
		padding: 16rpx;
		border-radius: 12rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8rpx;
		border: none;
		outline: none;
	}
	.bottom-btn::after {
		border: none;
	}
	.bottom-btn-icon {
		font-size: 24px;
		font-weight: 700;
	}
	.bottom-btn-text {
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
