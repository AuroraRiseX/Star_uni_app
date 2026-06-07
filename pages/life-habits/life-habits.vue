<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>

		<view class="top-bar">
			<view class="top-bar-inner">
				<view class="back-btn" @tap="goBack">
					<text class="back-icon">←</text>
				</view>
				<text class="top-title">生活习惯</text>
				<view class="rule-btn" @tap="showRules">
					<text class="rule-text">规则详情</text>
				</view>
			</view>
		</view>

		<scroll-view scroll-y class="main-scroll">
			<view class="main-content">
				<!-- 进度区域 -->
				<view class="progress-card">
					<view class="progress-header">
						<text class="section-title">今日进度</text>
						<text class="progress-num">{{ progress.current }}/{{ progress.total }}</text>
					</view>
					<view class="progress-track">
						<view class="progress-fill" :style="{ width: progressPercent + '%' }">
							<view class="shimmer"></view>
						</view>
						<view class="star-badge">
							<view class="star-circle">
								<text class="star-emoji">📦</text>
							</view>
						</view>
					</view>
					<text class="progress-hint">再完成 {{ progress.total - progress.current }} 个任务即可开启今日宝箱！</text>
				</view>

				<!-- 任务列表 -->
				<view class="task-section">
					<view class="task-header">
						<text class="section-title">日常任务清单</text>
						<view class="pending-badge">
							<text class="pending-text">{{ pendingCount }} 待完成</text>
						</view>
					</view>

					<view
						v-for="(task, index) in tasks"
						:key="index"
						class="task-item"
						:class="{ 'task-done': task.done }"
						@tap="onTaskTap(index)"
					>
						<view class="task-left">
							<view class="task-icon" :class="'task-icon-bg-' + task.color">
								<text class="icon-lg">{{ task.emoji }}</text>
							</view>
							<view class="task-info">
								<text class="task-name" :class="{ 'task-name-done': task.done }">{{ task.name }}</text>
								<text class="task-reward" :class="{ 'task-reward-done': task.done }">+{{ task.stars }} 颗星星</text>
							</view>
						</view>
						<view v-if="task.done" class="done-badge">
							<text class="done-icon">✓</text>
							<text class="done-label">已完成</text>
						</view>
						<view v-else class="add-btn" @tap.stop="onAddTask(index)">
							<text class="add-icon">+</text>
						</view>
					</view>
				</view>

				<!-- 底部按钮 -->
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
		return {
			progress: {
				current: 1,
				total: 5
			},
			tasks: [
				{ name: '主动洗漱', emoji: '🧼', stars: 2, done: true, color: 'blue' },
				{ name: '整理书包', emoji: '🎒', stars: 1, done: false, color: 'orange' },
				{ name: '自己吃完饭', emoji: '🍽️', stars: 2, done: false, color: 'green' },
				{ name: '读绘本30分钟', emoji: '📖', stars: 3, done: false, color: 'purple' }
			]
		}
	},
	computed: {
		progressPercent() {
			return (this.progress.current / this.progress.total) * 100
		},
		pendingCount() {
			return this.tasks.filter(function(t) { return !t.done }).length
		}
	},
	methods: {
		goBack() {
			uni.navigateBack({ delta: 1 })
		},
		showRules() {
			uni.showToast({ title: '规则详情', icon: 'none' })
		},
		onTaskTap(index) {
			var task = this.tasks[index]
			if (task.done) return
		},
		onAddTask(index) {
			var task = this.tasks[index]
			if (task.done) return
			task.done = true
			this.progress.current = this.tasks.filter(function(t) { return t.done }).length
			uni.showToast({ title: '任务完成! +⭐', icon: 'success' })
		},
		onAddPlan() {
			uni.showToast({ title: '添加新计划', icon: 'none' })
		}
	}
}
</script>

<style scoped>
.page {
	background-color: #fbf9f4;
	min-height: 100vh;
	color: #1b1c19;
	font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
}

.top-bar {
	background: rgba(251, 249, 244, 0.8);
	backdrop-filter: blur(24rpx);
	-webkit-backdrop-filter: blur(24rpx);
	position: sticky;
	top: var(--status-bar-height);
	z-index: 50;
	box-shadow: 0 2rpx 6rpx rgba(0, 0, 0, 0.04);
}

.top-bar-inner {
	display: flex;
	align-items: center;
	height: 128rpx;
	padding: 0 48rpx;
	max-width: 1240rpx;
	margin: 0 auto;
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
	font-size: 40rpx;
	color: #725c00;
}

.top-title {
	flex: 1;
	text-align: center;
	font-size: 40rpx;
	font-weight: 700;
	color: #725c00;
	line-height: 1.4;
}

.rule-btn {
	padding: 16rpx 32rpx;
	border-radius: 999rpx;
	border: 2rpx solid #d1c6ab;
	background: transparent;
}

.rule-text {
	font-size: 24rpx;
	font-weight: 700;
	letter-spacing: 0.05em;
	color: #725c00;
}

.main-scroll {
	height: calc(100vh - var(--status-bar-height) - 128rpx);
}

.main-content {
	max-width: 1240rpx;
	margin: 0 auto;
	padding: 48rpx 48rpx 200rpx;
}

/* 进度卡片 */
.progress-card {
	background-color: #f5f3ee;
	border-radius: 24rpx;
	padding: 48rpx;
	border: 2rpx solid rgba(209, 198, 171, 0.3);
}

.progress-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 32rpx;
}

.section-title {
	font-size: 40rpx;
	font-weight: 700;
	color: #1b1c19;
	line-height: 1.4;
}

.progress-num {
	font-size: 96rpx;
	font-weight: 800;
	letter-spacing: -0.02em;
	color: #725c00;
	line-height: 1.1;
}

.progress-track {
	position: relative;
	width: 100%;
	height: 64rpx;
	background-color: #e4e2dd;
	border-radius: 999rpx;
	overflow: visible;
	border: 2rpx solid rgba(209, 198, 171, 0.2);
}

.progress-fill {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	border-radius: 999rpx;
	background: linear-gradient(90deg, #725c00, #ffd214);
	overflow: hidden;
	transition: width 0.5s ease;
}

.shimmer {
	position: absolute;
	inset: 0;
	background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
	background-size: 200% 100%;
	animation: shimmerMove 2s infinite linear;
}

@keyframes shimmerMove {
	from {
		background-position: 200% 0;
	}
	to {
		background-position: -200% 0;
	}
}

.star-badge {
	position: absolute;
	right: -16rpx;
	top: 50%;
	transform: translateY(-50%);
}

.star-circle {
	width: 96rpx;
	height: 96rpx;
	background-color: #ffd214;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 0 40rpx rgba(255, 210, 20, 0.6);
	border: 4rpx solid #ffffff;
	animation: starShimmer 3s infinite ease-in-out;
}

.star-emoji {
	font-size: 40rpx;
}

@keyframes starShimmer {
	0%, 100% {
		opacity: 0.8;
		transform: scale(1);
	}
	50% {
		opacity: 1;
		transform: scale(1.1);
	}
}

.progress-hint {
	margin-top: 32rpx;
	color: #4d4632;
	text-align: center;
	font-size: 32rpx;
	font-weight: 500;
	line-height: 1.5;
}

/* 任务列表 */
.task-section {
	margin-top: 64rpx;
}

.task-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 32rpx;
}

.pending-badge {
	padding: 8rpx 24rpx;
	background-color: rgba(204, 215, 238, 0.3);
	border-radius: 999rpx;
}

.pending-text {
	font-size: 24rpx;
	font-weight: 700;
	color: #545f72;
}

.task-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 32rpx;
	background-color: #ffffff;
	border: 2rpx solid rgba(209, 198, 171, 0.3);
	border-radius: 24rpx;
	margin-bottom: 24rpx;
}

.task-done {
	background-color: rgba(219, 218, 213, 0.4);
	border-color: transparent;
	opacity: 0.8;
}

.task-left {
	display: flex;
	align-items: center;
	gap: 24rpx;
}

.task-icon {
	width: 96rpx;
	height: 96rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
}

.task-icon-bg-blue {
	background-color: rgba(204, 215, 238, 0.2);
}

.task-icon-bg-orange {
	background-color: rgba(255, 183, 128, 0.15);
}

.task-icon-bg-green {
	background-color: rgba(168, 214, 114, 0.15);
}

.task-icon-bg-purple {
	background-color: rgba(177, 156, 217, 0.15);
}

.icon-lg {
	font-size: 48rpx;
}

.task-info {
	display: flex;
	flex-direction: column;
	gap: 4rpx;
}

.task-name {
	font-size: 36rpx;
	font-weight: 500;
	color: #1b1c19;
	line-height: 1.6;
}

.task-name-done {
	color: #4d4632;
	text-decoration: line-through;
}

.task-reward {
	font-size: 24rpx;
	font-weight: 700;
	letter-spacing: 0.05em;
	color: #924c00;
	line-height: 1.2;
}

.task-reward-done {
	color: #7f765f;
}

.add-btn {
	width: 88rpx;
	height: 88rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 24rpx;
	background-color: #ffd214;
	box-shadow: 0 4rpx 16rpx rgba(255, 210, 20, 0.3);
}

.add-icon {
	font-size: 44rpx;
	font-weight: 700;
	color: #705b00;
}

.done-badge {
	display: flex;
	align-items: center;
	gap: 8rpx;
	padding: 16rpx 32rpx;
	background-color: rgba(168, 214, 114, 0.2);
	border-radius: 999rpx;
}

.done-icon {
	font-size: 28rpx;
	color: #A8D672;
	font-weight: 700;
}

.done-label {
	font-size: 24rpx;
	color: #A8D672;
	font-weight: 700;
}

/* 底部按钮 */
.bottom-action {
	margin-top: 64rpx;
}

.action-btn {
	width: 100%;
	height: 112rpx;
	background-color: #1b1c19;
	color: #fbf9f4;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16rpx;
	border-radius: 999rpx;
	font-size: 36rpx;
	font-weight: 700;
	border: none;
	outline: none;
}

.action-btn::after {
	border: none;
}

.action-icon {
	font-size: 44rpx;
	font-weight: 700;
}

.action-text {
	font-size: 36rpx;
	font-weight: 700;
}
</style>
