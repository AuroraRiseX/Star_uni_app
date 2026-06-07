<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>

		<view class="top-bar">
			<view class="top-bar-inner">
				<view class="back-btn" @tap="goBack">
					<text class="back-icon">←</text>
				</view>
				<text class="top-title">学习成绩</text>
				<view class="flex-grow"></view>
				<view class="more-btn" @tap="onMore">
					<text class="more-icon">⋯</text>
				</view>
			</view>
		</view>

		<scroll-view scroll-y class="main-scroll">
			<view class="main-content">
				<!-- Glass-jar Hero 进度区域 -->
				<view class="hero-section">
					<view class="hero-bg-deco deco-bl"></view>
					<view class="hero-bg-deco deco-tr"></view>
					<view class="hero-inner">
						<text class="hero-label">今日进度</text>
						<view class="hero-progress">
							<text class="hero-current">{{ progress.current }}</text>
							<text class="hero-total">/{{ progress.total }}</text>
						</view>
						<view class="capsule-track">
							<view class="capsule-fill" :style="{ width: progressPercent + '%' }">
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
						<view v-if="task.done" class="check-badge">
							<text class="check-icon">✓</text>
						</view>
						<view v-else class="add-btn" @tap.stop="onAddTask(index)">
							<text class="add-icon">+</text>
						</view>
					</view>
				</view>

				<!-- 统计网格 -->
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
				current: 4,
				total: 5
			},
			tasks: [
				{ name: '单元测试95分以上', emoji: '📝', stars: 5, done: false, color: 'gold' },
				{ name: '获得学校的奖状', emoji: '🏆', stars: 10, done: true, color: 'green' },
				{ name: '课堂听写、默写满分', emoji: '✏️', stars: 5, done: false, color: 'purple' },
				{ name: '被老师表扬', emoji: '😊', stars: 2, done: false, color: 'orange' },
				{ name: '数学获得95分以上', emoji: '📊', stars: 10, done: false, color: 'blue' }
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
			uni.switchTab({ url: '/pages/index/index' })
		},
		onMore() {
			uni.showToast({ title: '更多操作', icon: 'none' })
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
			if (this.progress.current >= this.progress.total) {
				setTimeout(() => {
					uni.navigateTo({ url: '/pages/treasure-chest/treasure-chest' })
				}, 800)
			} else {
				uni.showToast({ title: '任务完成! +⭐', icon: 'success' })
			}
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
	font-size: 40rpx;
	font-weight: 700;
	color: #725c00;
	line-height: 1.4;
}

.flex-grow {
	flex: 1;
}

.more-btn {
	width: 80rpx;
	height: 80rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
}

.more-icon {
	font-size: 40rpx;
	color: #725c00;
}

.main-scroll {
	height: calc(100vh - var(--status-bar-height) - 128rpx);
}

.main-content {
	max-width: 1240rpx;
	margin: 0 auto;
	padding: 32rpx 48rpx 200rpx;
}

/* Hero 区域 */
.hero-section {
	margin-top: 32rpx;
	background: rgba(255, 253, 249, 0.6);
	backdrop-filter: blur(32rpx);
	-webkit-backdrop-filter: blur(32rpx);
	border: 2rpx solid rgba(255, 255, 255, 0.4);
	border-radius: 32rpx;
	padding: 48rpx;
	text-align: center;
	position: relative;
	overflow: hidden;
}

.hero-bg-deco {
	position: absolute;
	border-radius: 50%;
	opacity: 0.15;
}

.deco-bl {
	bottom: -32rpx;
	left: -32rpx;
	width: 256rpx;
	height: 256rpx;
	background-color: #ffd214;
	filter: blur(48rpx);
}

.deco-tr {
	top: -32rpx;
	right: -32rpx;
	width: 192rpx;
	height: 192rpx;
	background-color: #fd8b17;
	filter: blur(48rpx);
}

.hero-inner {
	position: relative;
	z-index: 10;
}

.hero-label {
	font-size: 24rpx;
	font-weight: 700;
	letter-spacing: 0.05em;
	color: #4d4632;
	line-height: 1.2;
	margin-bottom: 16rpx;
}

.hero-progress {
	display: flex;
	align-items: baseline;
	justify-content: center;
	gap: 8rpx;
	margin-bottom: 32rpx;
}

.hero-current {
	font-size: 96rpx;
	font-weight: 800;
	letter-spacing: -0.02em;
	color: #725c00;
	line-height: 1.1;
}

.hero-total {
	font-size: 64rpx;
	font-weight: 700;
	color: #d1c6ab;
	line-height: 1.2;
}

.capsule-track {
	position: relative;
	height: 48rpx;
	background-color: #f0eee9;
	border-radius: 999rpx;
	width: 100%;
	padding: 8rpx;
	margin-bottom: 32rpx;
}

.capsule-fill {
	position: absolute;
	top: 8rpx;
	left: 8rpx;
	bottom: 8rpx;
	background: linear-gradient(90deg, #ffd214, #fd8b17);
	border-radius: 999rpx;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-right: 16rpx;
	overflow: hidden;
	transition: width 0.5s ease;
}

.shimmer-line {
	position: absolute;
	inset: 0;
	background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%);
	background-size: 200% 100%;
	animation: shimmerMove 2s infinite;
}

@keyframes shimmerMove {
	0% {
		background-position: -200% 0;
	}
	100% {
		background-position: 200% 0;
	}
}

.capsule-star {
	font-size: 24rpx;
	position: relative;
	z-index: 1;
}

.capsule-gift {
	position: absolute;
	right: -16rpx;
	top: -32rpx;
}

.gift-emoji {
	font-size: 72rpx;
}

.hero-footer-text {
	font-size: 32rpx;
	font-weight: 500;
	color: #4d4632;
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

.section-title {
	font-size: 40rpx;
	font-weight: 700;
	color: #1b1c19;
	line-height: 1.4;
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
	background-color: #ffffff;
	border: 2rpx solid rgba(209, 198, 171, 0.3);
	border-radius: 24rpx;
	padding: 32rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 24rpx;
}

.task-done {
	background-color: rgba(228, 226, 221, 0.3);
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
	border-radius: 24rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.task-icon-bg-gold {
	background-color: rgba(255, 210, 20, 0.2);
}

.task-icon-bg-green {
	background-color: rgba(168, 214, 114, 0.2);
}

.task-icon-bg-purple {
	background-color: rgba(177, 156, 217, 0.2);
}

.task-icon-bg-orange {
	background-color: rgba(255, 220, 196, 0.5);
}

.task-icon-bg-blue {
	background-color: rgba(204, 215, 238, 0.3);
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
	text-decoration: line-through;
	color: #4d4632;
}

.task-reward {
	font-size: 24rpx;
	font-weight: 700;
	letter-spacing: 0.05em;
	color: #924c00;
	line-height: 1.2;
}

.task-reward-done {
	color: #A8D672;
}

.add-btn {
	width: 88rpx;
	height: 88rpx;
	border-radius: 24rpx;
	background-color: #ffd214;
	box-shadow: 0 4rpx 16rpx rgba(255, 210, 20, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;
}

.add-icon {
	font-size: 44rpx;
	font-weight: 700;
	color: #705b00;
}

.check-badge {
	width: 80rpx;
	height: 80rpx;
	border-radius: 50%;
	background-color: #A8D672;
	display: flex;
	align-items: center;
	justify-content: center;
}

.check-icon {
	font-size: 36rpx;
	color: #ffffff;
	font-weight: 700;
}

/* 统计网格 */
.stats-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 24rpx;
	margin-top: 64rpx;
}

.stat-card {
	padding: 32rpx;
	border-radius: 24rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	aspect-ratio: 1;
}

.stat-card-orange {
	background-color: rgba(255, 220, 196, 0.3);
	border: 2rpx solid rgba(255, 220, 196, 0.5);
}

.stat-card-blue {
	background-color: rgba(216, 227, 250, 0.3);
	border: 2rpx solid rgba(216, 227, 250, 0.5);
}

.stat-icon {
	font-size: 56rpx;
	color: #924c00;
}

.stat-card-blue .stat-icon {
	color: #545f72;
}

.stat-info {
	display: flex;
	flex-direction: column;
	gap: 8rpx;
}

.stat-label {
	font-size: 28rpx;
	font-weight: 700;
	color: #6f3800;
}

.stat-card-blue .stat-label {
	color: #3c475a;
}

.stat-value {
	font-size: 56rpx;
	font-weight: 800;
	line-height: 1.1;
}

.stat-value-orange {
	color: #924c00;
}

.stat-value-blue {
	color: #545f72;
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
