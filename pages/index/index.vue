<template>
	<view class="page">
		<!-- 状态栏占位 -->
		<view style="height: var(--status-bar-height);"></view>

		<!-- 顶部导航栏 topbar-sj -->
		<view class="topbar-sj">
			<view class="topbar-left">
				<view class="topbar-avatar" @tap="goToProfile">
					<image class="topbar-avatar-img" src="/static/logo.png" mode="aspectFill"></image>
				</view>
				<text class="topbar-title">麦兜的星星罐</text>
			</view>
			<view class="topbar-right" @tap="showDetail">
				<text class="topbar-detail">明细</text>
			</view>
		</view>

		<scroll-view scroll-y class="main-scroll">
			<!-- 星星罐展示区 -->
			<view class="jar-section">
				<!-- 温暖背景光晕 -->
				<view class="jar-glow-bg"></view>

				<!-- 玻璃罐容器 -->
				<view class="jar-wrapper" @tap="tapJar">
					<!-- 罐盖 -->
					<view class="cork-lid">
						<view class="cork-dots"></view>
					</view>

					<!-- 罐体 -->
					<view class="jar-body">
						<!-- 高光反射 -->
						<view class="jar-highlight-line"></view>
						<view class="jar-reflection"></view>

						<!-- 罐内内容 -->
						<view class="jar-content">
							<!-- 飘浮星星 -->
							<view class="jar-star s1">
								<text class="star-emoji-lg" style="transform: rotate(12deg);">&#11088;</text>
							</view>
							<view class="jar-star s2">
								<text class="star-emoji-xl" style="transform: rotate(-6deg);">&#11088;</text>
							</view>
							<view class="jar-star s3">
								<text class="star-emoji-md" style="transform: rotate(30deg);">&#11088;</text>
							</view>
							<view class="jar-star s4">
								<text class="star-emoji-lg" style="transform: rotate(-12deg);">&#11088;</text>
							</view>
							<view class="jar-star s5">
								<text class="star-emoji-md" style="color: #ffe173; transform: rotate(6deg);">&#11088;</text>
							</view>
							<!-- 云朵 -->
							<view class="jar-cloud c1">
								<text class="cloud-emoji-xl">&#9729;</text>
							</view>
							<view class="jar-cloud c2">
								<text class="cloud-emoji-lg">&#9729;</text>
							</view>
						</view>
					</view>
				</view>
			</view>

			<!-- 统计卡片 -->
			<view class="tally-grid">
				<view class="tally-card">
					<text class="tally-label">现有星星</text>
					<view class="tally-value-row">
						<text class="tally-emoji">&#11088;</text>
						<text class="tally-number">128</text>
						<text class="tally-unit">颗</text>
					</view>
				</view>
				<view class="tally-card">
					<text class="tally-label">现有乌云</text>
					<view class="tally-value-row">
						<text class="tally-emoji">&#9729;</text>
						<text class="tally-number">5</text>
						<text class="tally-unit">朵</text>
					</view>
				</view>
			</view>

			<!-- 快捷操作区 -->
			<view class="action-section">
				<view class="action-btn" @tap="addReward">
					<text class="action-icon">&#10133;</text>
					<text class="action-text">添加奖励</text>
				</view>
			</view>

			<!-- 今日记录 -->
			<view class="today-section">
				<view class="section-header">
					<text class="section-title">今日记录</text>
					<view class="section-action" @tap="goRewardCenter">
						<text class="section-action-text">查看全部</text>
						<text class="section-action-arrow">&#8250;</text>
					</view>
				</view>
				<view class="record-list">
					<view class="record-item">
						<view class="record-icon record-star">
							<text>&#11088;</text>
						</view>
						<view class="record-info">
							<text class="record-name">完成作业</text>
							<text class="record-time">今天 18:30</text>
						</view>
						<text class="record-score">+3 &#11088;</text>
					</view>
					<view class="record-item">
						<view class="record-icon record-cloud">
							<text>&#9729;</text>
						</view>
						<view class="record-info">
							<text class="record-name">挑食</text>
							<text class="record-time">今天 12:15</text>
						</view>
						<text class="record-score record-negative">-1 &#9729;</text>
					</view>
					<view class="record-item">
						<view class="record-icon record-star">
							<text>&#11088;</text>
						</view>
						<view class="record-info">
							<text class="record-name">主动收拾房间</text>
							<text class="record-time">今天 09:20</text>
						</view>
						<text class="record-score">+2 &#11088;</text>
					</view>
				</view>
			</view>

			<view style="height: 180rpx;"></view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			stars: 128,
			clouds: 5
		}
	},
	onShow() {
		// 设置自定义 tab-bar 选中状态为"首页"（index=0）
		if (typeof this.getTabBar === 'function' && this.getTabBar()) {
			this.getTabBar().setData({ selected: 0 })
		}
	},
	methods: {
		showDetail() {
			uni.navigateTo({ url: '/pages/star-jar-detail/star-jar-detail' })
		},
		addReward() {
			uni.navigateTo({ url: '/pages/punishment-center/punishment-center' })
		},
		tapJar() {
			uni.showToast({ title: '&#10024;', icon: 'none' })
		},
		goToProfile() {
			uni.switchTab({ url: '/pages/profile/profile' })
		},
		goRewardCenter() {
			uni.switchTab({ url: '/pages/reward-center/reward-center' })
		}
	}
}
</script>

<style scoped>
.page {
	min-height: 100vh;
	background: radial-gradient(circle at top, #fff9eb 0%, #faf9f9 100%);
	font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', sans-serif;
	color: #1a1c1c;
}

/* ========== 顶部导航栏 topbar-sj ========== */
.topbar-sj {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 40rpx;
	height: 128rpx;
	background: rgba(250, 249, 249, 0.4);
	backdrop-filter: blur(24rpx);
	-webkit-backdrop-filter: blur(24rpx);
	border-bottom: 2rpx solid rgba(255, 255, 255, 0.2);
	box-shadow: 0 60rpx 120rpx -24rpx rgba(255, 132, 0, 0.1);
	position: fixed;
	top: var(--status-bar-height);
	left: 0;
	width: 100%;
	z-index: 50;
}

.topbar-left {
	display: flex;
	align-items: center;
	gap: 24rpx;
}

.topbar-avatar {
	width: 80rpx;
	height: 80rpx;
	border-radius: 50%;
	overflow: hidden;
	border: 4rpx solid #ffffff;
	box-shadow: 0 0 0 4rpx #ffd93d;
}

.topbar-avatar-img {
	width: 100%;
	height: 100%;
}

.topbar-title {
	font-size: 48rpx;
	font-weight: 700;
	color: #1a1c1c;
	letter-spacing: 2rpx;
}

.topbar-right {
	padding: 16rpx 32rpx;
}

.topbar-detail {
	font-size: 28rpx;
	font-weight: 700;
	color: #705d00;
	letter-spacing: 2rpx;
}

/* ========== 主滚动区 ========== */
.main-scroll {
	padding-top: 192rpx;
	padding-left: 32rpx;
	padding-right: 32rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	box-sizing: border-box;
}

/* ========== 星星罐展示区 ========== */
.jar-section {
	position: relative;
	width: 100%;
	max-width: 640rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 64rpx 0;
}

.jar-glow-bg {
	position: absolute;
	width: 512rpx;
	height: 512rpx;
	filter: blur(80px);
	background: radial-gradient(circle, rgba(255, 217, 61, 0.4) 0%, transparent 70%);
	pointer-events: none;
}

.jar-wrapper {
	position: relative;
	width: 100%;
	aspect-ratio: 3/4;
}

.cork-lid {
	position: absolute;
	top: -32rpx;
	left: 50%;
	transform: translateX(-50%);
	width: 288rpx;
	height: 64rpx;
	background: linear-gradient(to bottom, #fc8200, #e67600);
	border-radius: 12rpx 12rpx 8rpx 8rpx;
	z-index: 30;
	box-shadow: inset 0 2rpx 4rpx rgba(255, 255, 255, 0.3), 0 4rpx 8rpx rgba(0, 0, 0, 0.2);
}

.cork-dots {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0.2;
	background-image: radial-gradient(circle, #000 1px, transparent 1px);
	background-size: 8rpx 8rpx;
}

.jar-body {
	width: 100%;
	height: 100%;
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%);
	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);
	border: 2rpx solid rgba(255, 255, 255, 0.8);
	border-radius: 50% 50% 25% 25% / 15% 15% 15% 15%;
	position: relative;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 48rpx;
	z-index: 20;
	box-shadow: inset 0 20rpx 40rpx rgba(255, 255, 255, 0.5),
		inset 0 -30rpx 60rpx rgba(0, 0, 0, 0.05),
		0 60rpx 120rpx -24rpx rgba(255, 132, 0, 0.15);
	box-sizing: border-box;
}

.jar-highlight-line {
	position: absolute;
	top: 20rpx;
	left: 10%;
	width: 80%;
	height: 4rpx;
	background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.8), transparent);
	border-radius: 100%;
}

.jar-reflection {
	position: absolute;
	right: 32rpx;
	top: 25%;
	width: 8rpx;
	height: 256rpx;
	background: rgba(255, 255, 255, 0.2);
	filter: blur(2rpx);
	border-radius: 9999px;
}

.jar-content {
	position: relative;
	height: 100%;
	width: 100%;
}

.jar-star {
	position: absolute;
}

.star-emoji-md {
	font-size: 72rpx;
}

.star-emoji-lg {
	font-size: 84rpx;
}

.star-emoji-xl {
	font-size: 104rpx;
}

.cloud-emoji-lg {
	font-size: 96rpx;
}

.cloud-emoji-xl {
	font-size: 120rpx;
}

.s1 {
	bottom: 48rpx;
	left: 80rpx;
	animation: gentle-float-fall 7s ease-in-out 0.2s infinite;
}

.s2 {
	bottom: 128rpx;
	right: 96rpx;
	animation: gentle-float-fall 9s ease-in-out 0.8s infinite;
}

.s3 {
	bottom: 256rpx;
	left: 160rpx;
	animation: gentle-float-fall 8.5s ease-in-out 1.5s infinite;
}

.s4 {
	bottom: 320rpx;
	right: 80rpx;
	animation: gentle-float-fall 7.5s ease-in-out 0.5s infinite;
}

.s5 {
	bottom: 416rpx;
	left: 96rpx;
	animation: gentle-float-fall 10s ease-in-out 1.2s infinite;
}

.c1 {
	bottom: 192rpx;
	left: 50%;
	transform: translateX(-50%);
	animation: gentle-float-alt 11s ease-in-out 2s infinite;
}

.c2 {
	bottom: 512rpx;
	right: 128rpx;
	animation: gentle-float-alt 13s ease-in-out 1s infinite;
}

@keyframes gentle-float-fall {
	0% { transform: translateY(0) rotate(0deg); }
	25% { transform: translateY(20rpx) rotate(5deg); }
	50% { transform: translateY(10rpx) rotate(-3deg); }
	75% { transform: translateY(30rpx) rotate(8deg); }
	100% { transform: translateY(0) rotate(0deg); }
}

@keyframes gentle-float-alt {
	0% { transform: translateY(0) rotate(0deg); }
	33% { transform: translateY(16rpx) rotate(-5deg); }
	66% { transform: translateY(24rpx) rotate(3deg); }
	100% { transform: translateY(0) rotate(0deg); }
}

/* ========== 统计卡片 ========== */
.tally-grid {
	margin-top: 64rpx;
	width: 100%;
	max-width: 640rpx;
	display: flex;
	gap: 24rpx;
}

.tally-card {
	flex: 1;
	background: rgba(250, 249, 249, 0.8);
	backdrop-filter: blur(24rpx);
	-webkit-backdrop-filter: blur(24rpx);
	border-radius: 24rpx;
	padding: 32rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: 0 20rpx 60rpx rgba(255, 132, 0, 0.1);
	border: 2rpx solid rgba(255, 255, 255, 0.4);
}

.tally-label {
	font-size: 24rpx;
	font-weight: 600;
	color: #4d4633;
	margin-bottom: 16rpx;
}

.tally-value-row {
	display: flex;
	align-items: center;
	gap: 16rpx;
}

.tally-emoji {
	font-size: 48rpx;
}

.tally-number {
	font-size: 52rpx;
	font-weight: 700;
	letter-spacing: -2rpx;
	color: #1a1c1c;
}

.tally-unit {
	font-size: 24rpx;
	font-weight: 600;
	color: #4d4633;
	margin-top: 16rpx;
}

/* ========== 快捷操作区 ========== */
.action-section {
	margin-top: 64rpx;
	width: 100%;
	max-width: 640rpx;
}

.action-btn {
	width: 100%;
	height: 112rpx;
	background: #ffd93d;
	color: #725e00;
	border-radius: 24rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16rpx;
	box-shadow: 0 8rpx 0 #e8c426;
	transition: all 0.2s;
}

.action-btn:active {
	transform: translateY(16rpx);
	box-shadow: none;
}

.action-icon {
	font-size: 40rpx;
}

.action-text {
	font-size: 32rpx;
	font-weight: 700;
	letter-spacing: 2rpx;
}

/* ========== 今日记录 ========== */
.today-section {
	margin-top: 64rpx;
	width: 100%;
	max-width: 640rpx;
}

.section-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 32rpx;
}

.section-title {
	font-size: 36rpx;
	font-weight: 700;
	color: #1a1c1c;
}

.section-action {
	display: flex;
	align-items: center;
	gap: 8rpx;
}

.section-action-text {
	font-size: 24rpx;
	font-weight: 500;
	color: #705d00;
}

.section-action-arrow {
	font-size: 32rpx;
	color: #7e7761;
}

.record-list {
	display: flex;
	flex-direction: column;
	gap: 24rpx;
}

.record-item {
	display: flex;
	align-items: center;
	padding: 32rpx;
	background: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(20rpx);
	-webkit-backdrop-filter: blur(20rpx);
	border: 2rpx solid rgba(255, 255, 255, 0.6);
	border-radius: 24rpx;
	box-shadow: 0 20rpx 60rpx -12rpx rgba(255, 132, 0, 0.06);
}

.record-icon {
	width: 72rpx;
	height: 72rpx;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 24rpx;
}

.record-star {
	background: rgba(255, 217, 61, 0.3);
}

.record-cloud {
	background: rgba(208, 198, 173, 0.3);
}

.record-icon text {
	font-size: 36rpx;
}

.record-info {
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 8rpx;
}

.record-name {
	font-size: 28rpx;
	font-weight: 600;
	color: #1a1c1c;
}

.record-time {
	font-size: 22rpx;
	color: #4d4633;
}

.record-score {
	font-size: 28rpx;
	font-weight: 700;
	color: #705d00;
}

.record-negative {
	color: #ba1a1a;
}
</style>
