<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>
		<view class="header">
			<view class="header-left">
				<view class="back-btn" @tap="goBack">
					<text class="back-icon">←</text>
				</view>
				<text class="header-title">生活习惯 🏃</text>
			</view>
			<button class="rule-btn" @tap="showRule">规则详情</button>
		</view>
		<view class="main">
			<view class="progress-section">
				<view class="progress-top">
					<text class="progress-label">今日进度</text>
					<text class="progress-count">3/5</text>
				</view>
				<view class="progress-bar">
					<view class="progress-fill" style="width: 60%;">
						<view class="shimmer-effect"></view>
					</view>
					<view class="chest-icon floating-star">
						<view class="chest-inner">
							<text class="chest-emoji">📦</text>
						</view>
					</view>
				</view>
				<text class="progress-hint">再完成 2 个任务即可开启今日宝箱！</text>
			</view>
			<view class="task-section">
				<text class="task-section-label">日常任务清单</text>
				<view class="task-card completed">
					<view class="task-left">
						<view class="task-icon completed-icon">
							<text class="icon-emoji">🧼</text>
						</view>
						<view>
							<text class="task-name completed-text">主动洗漱</text>
							<text class="task-reward">+2 颗星星</text>
						</view>
					</view>
					<view class="task-status completed-status">
						<text class="check-icon">✅</text>
						<text class="status-text">已完成</text>
					</view>
				</view>
				<view class="task-card active" @tap="completeTask(0)">
					<view class="task-left">
						<view class="task-icon active-icon1">
							<text class="icon-emoji">📚</text>
						</view>
						<view>
							<text class="task-name">整理书包</text>
							<text class="task-reward highlight">+1 颗星星</text>
						</view>
					</view>
					<button class="add-btn">
						<text class="add-icon">+</text>
					</button>
				</view>
				<view class="task-card active" @tap="completeTask(1)">
					<view class="task-left">
						<view class="task-icon active-icon2">
							<text class="icon-emoji">🍽️</text>
						</view>
						<view>
							<text class="task-name">自己吃完饭</text>
							<text class="task-reward highlight">+2 颗星星</text>
						</view>
					</view>
					<button class="add-btn">
						<text class="add-icon">+</text>
					</button>
				</view>
				<view class="task-card active" @tap="completeTask(2)">
					<view class="task-left">
						<view class="task-icon active-icon3">
							<text class="icon-emoji">📖</text>
						</view>
						<view>
							<text class="task-name">读绘本30分钟</text>
							<text class="task-reward highlight">+3 颗星星</text>
						</view>
					</view>
					<button class="add-btn">
						<text class="add-icon">+</text>
					</button>
				</view>
			</view>
			<view class="bento-grid">
				<view class="bento-card persistence">
					<text class="bento-icon">📅</text>
					<view>
						<text class="bento-label">坚持天数</text>
						<text class="bento-value">12</text>
					</view>
				</view>
				<view class="bento-card medal">
					<text class="bento-icon">🏅</text>
					<view>
						<text class="bento-label">获得勋章</text>
						<text class="bento-value">4</text>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom-bar">
			<button class="add-plan-btn" @tap="addNewPlan">
				<text class="add-plan-icon">➕</text>
				<text class="add-plan-text">自定义添加新计划</text>
			</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tasks: [
				{ name: '整理书包', reward: '+1 颗星星', done: false },
				{ name: '自己吃完饭', reward: '+2 颗星星', done: false },
				{ name: '读绘本30分钟', reward: '+3 颗星星', done: false }
			]
		}
	},
	methods: {
		goBack() {
			uni.navigateBack()
		},
		showRule() {
			uni.showToast({ title: '规则详情', icon: 'none' })
		},
		completeTask(index) {
			if (this.tasks[index].done) return
			this.tasks[index].done = true
			uni.showToast({ title: '任务完成! +⭐', icon: 'success' })
		},
		addNewPlan() {
			uni.showToast({ title: '添加新计划', icon: 'none' })
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
	padding-bottom: 200rpx;
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
	z-index: 40;
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
.rule-btn {
	padding: 16rpx 32rpx;
	border-radius: 999rpx;
	border: 2rpx solid #d1c6ab;
	font-size: 24rpx;
	font-weight: 700;
	letter-spacing: 2rpx;
	color: #4d4632;
	background: transparent;
}
.main {
	padding: 48rpx 48rpx 0;
	max-width: 600rpx;
	margin: 0 auto;
}
.progress-section {
	background: #f5f3ee;
	border-radius: 48rpx;
	padding: 48rpx;
	border: 2rpx solid rgba(209, 198, 171, 0.3);
	position: relative;
}
.progress-top {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 32rpx;
}
.progress-label {
	font-size: 40rpx;
	font-weight: 700;
	color: #1b1c19;
}
.progress-count {
	font-size: 56rpx;
	font-weight: 800;
	color: #705d00;
	letter-spacing: -2rpx;
}
.progress-bar {
	width: 100%;
	height: 64rpx;
	background: #e4e2dd;
	border-radius: 999rpx;
	overflow: visible;
	position: relative;
	border: 2rpx solid rgba(209, 198, 171, 0.2);
}
.progress-fill {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 60%;
	background: linear-gradient(90deg, #705d00, #ffd214);
	border-radius: 999rpx;
	overflow: hidden;
}
.shimmer-effect {
	width: 100%;
	height: 100%;
	background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
	background-size: 200% 100%;
	animation: shimmer 2.5s infinite linear;
}
@keyframes shimmer {
	0% { background-position: -200% 0; }
	100% { background-position: 200% 0; }
}
.chest-icon {
	position: absolute;
	right: -16rpx;
	top: 50%;
	transform: translateY(-50%);
	z-index: 1;
}
.floating-star {
	animation: floatUp 3s ease-in-out infinite;
}
@keyframes floatUp {
	0%, 100% { transform: translateY(-50%) translateY(0); }
	50% { transform: translateY(-50%) translateY(-16rpx); }
}
.chest-inner {
	width: 96rpx;
	height: 96rpx;
	background: #ffd214;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 0 40rpx rgba(255, 210, 20, 0.6);
	border: 4rpx solid #fff;
}
.chest-emoji {
	font-size: 44rpx;
}
.progress-hint {
	margin-top: 32rpx;
	text-align: center;
	font-size: 32rpx;
	color: #4d4632;
}
.task-section {
	margin-top: 64rpx;
	display: flex;
	flex-direction: column;
	gap: 32rpx;
}
.task-section-label {
	font-size: 24rpx;
	font-weight: 700;
	color: #7f765f;
	letter-spacing: 4rpx;
	padding: 0 8rpx;
	text-transform: uppercase;
}
.task-card {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 40rpx;
	border-radius: 32rpx;
	transition: all 0.3s;
}
.task-card.completed {
	background: rgba(219, 218, 213, 0.4);
	border: 2rpx solid rgba(209, 198, 171, 0.3);
	opacity: 0.8;
}
.task-card.active {
	background: #FFFDF9;
	border: 2rpx solid rgba(209, 198, 171, 0.4);
	box-shadow: 0 4rpx 16rpx rgba(0,0,0,0.04);
}
.task-left {
	display: flex;
	align-items: center;
	gap: 32rpx;
}
.task-icon {
	width: 96rpx;
	height: 96rpx;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.task-icon.completed-icon {
	background: #f0eee9;
}
.task-icon.active-icon1 {
	background: rgba(255, 210, 20, 0.2);
}
.task-icon.active-icon2 {
	background: rgba(168, 214, 114, 0.1);
}
.task-icon.active-icon3 {
	background: rgba(177, 156, 217, 0.1);
}
.icon-emoji {
	font-size: 48rpx;
}
.task-name {
	font-size: 40rpx;
	font-weight: 700;
	display: block;
}
.task-name.completed-text {
	color: #4d4632;
	text-decoration: line-through;
}
.task-reward {
	font-size: 24rpx;
	color: #7f765f;
	display: block;
	margin-top: 8rpx;
}
.task-reward.highlight {
	color: #924c00;
	font-weight: 700;
}
.task-status {
	display: flex;
	align-items: center;
	gap: 16rpx;
	padding: 16rpx 32rpx;
	background: rgba(168, 214, 114, 0.2);
	border-radius: 999rpx;
}
.check-icon {
	font-size: 28rpx;
}
.status-text {
	font-size: 28rpx;
	font-weight: 700;
	color: #A8D672;
}
.add-btn {
	width: 96rpx;
	height: 96rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 24rpx;
	background: #ffd214;
	color: #705b00;
	border: none;
	box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.06);
}
.add-icon {
	font-size: 44rpx;
	font-weight: 700;
}
.bento-grid {
	margin-top: 64rpx;
	display: flex;
	gap: 32rpx;
	padding-bottom: 48rpx;
}
.bento-card {
	flex: 1;
	padding: 40rpx;
	border-radius: 32rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	aspect-ratio: 1;
}
.bento-card.persistence {
	background: rgba(255, 220, 196, 0.3);
	border: 2rpx solid rgba(255, 220, 196, 0.5);
}
.bento-card.medal {
	background: rgba(216, 227, 250, 0.3);
	border: 2rpx solid rgba(216, 227, 250, 0.5);
}
.bento-icon {
	font-size: 48rpx;
}
.bento-icon.persistence {
	color: #924c00;
}
.bento-icon.medal {
	color: #545f72;
}
.bento-label {
	font-weight: 700;
	font-size: 28rpx;
	margin-top: 16rpx;
	display: block;
}
.bento-card.persistence .bento-label {
	color: #6f3800;
}
.bento-card.medal .bento-label {
	color: #3c475a;
}
.bento-value {
	font-size: 56rpx;
	font-weight: 800;
	display: block;
	margin-top: 8rpx;
}
.bento-card.persistence .bento-value {
	color: #924c00;
}
.bento-card.medal .bento-value {
	color: #545f72;
}
.bottom-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 48rpx;
	padding-bottom: 80rpx;
	background: linear-gradient(to top, #fbf9f4, rgba(251,249,244,0.95), transparent);
}
.add-plan-btn {
	width: 100%;
	height: 128rpx;
	background: #1b1c19;
	color: #fbf9f4;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 24rpx;
	border-radius: 999rpx;
	border: none;
}
.add-plan-icon {
	font-size: 44rpx;
}
.add-plan-text {
	font-size: 40rpx;
	font-weight: 700;
}
</style>
