<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>

		<view class="top-bar">
			<view class="top-bar-inner">
				<view class="back-btn" @tap="goBack">
					<text class="back-icon">←</text>
				</view>
				<text class="top-title">惩罚-生活习惯</text>
			</view>
		</view>

		<scroll-view scroll-y class="main-scroll">
			<view class="main-content">
				<!-- Cloud Hero -->
				<view class="hero-section">
					<view class="cloud-circle-outer">
						<view class="cloud-circle cloud-float">
							<text class="cloud-emoji">☁️</text>
							<text class="face-emoji">😟</text>
						</view>
					</view>
					<text class="hero-heading">惩罚警告 <text class="hero-lightning">⚡</text></text>
					<text class="hero-sub">健康的生活习惯让你每天都充满活力哦</text>
				</view>

				<!-- 乌云统计 -->
				<view class="stats-card">
					<view class="stats-circle">
						<view class="ring-bg"></view>
						<view class="ring-fill"></view>
						<text class="stats-number">{{ totalClouds }}</text>
					</view>
					<view class="stats-text">
						<text class="stats-title">当前乌云总数</text>
						<text class="stats-desc">累计积攒了 <text class="stats-highlight">{{ totalClouds }}</text> 朵乌云</text>
					</view>
				</view>

				<!-- 惩罚项列表 -->
				<view class="list-header">
					<text class="list-title">惩罚项详情</text>
					<view class="list-badge">
						<text class="list-badge-text">习惯分级</text>
					</view>
				</view>

				<view class="punishment-list">
					<view
						v-for="(item, index) in punishments"
						:key="index"
						class="punishment-item"
					>
						<view class="item-left">
							<view class="item-icon-wrap">
								<text class="item-emoji">{{ item.emoji }}</text>
							</view>
							<view class="item-info">
								<text class="item-name">{{ item.name }}</text>
								<view class="item-cloud-row">
									<text class="item-cloud">☁️</text>
									<text class="item-cloud-count">+{{ item.clouds }} 乌云</text>
								</view>
							</view>
						</view>
						<view
							class="record-btn"
							:class="{ recorded: item.recorded }"
							@tap="onRecord(index)"
						>
							<text class="record-text">{{ item.recorded ? '已记录' : '记录' }}</text>
						</view>
					</view>
				</view>

				<!-- 鼓励语录 -->
				<view class="quote-card">
					<text class="quote-text">"下一次一定会做得更好，加油小主人！"</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			totalClouds: 8,
			punishments: [
				{ emoji: '🦷', name: '不刷牙就睡觉', clouds: 3, recorded: false },
				{ emoji: '🌙', name: '晚上不肯睡觉', clouds: 5, recorded: false },
				{ emoji: '🍬', name: '偷偷吃零食', clouds: 3, recorded: false },
				{ emoji: '🧸', name: '不收拾玩具和房间', clouds: 5, recorded: false }
			]
		}
	},
	methods: {
		goBack() {
			uni.navigateTo({ url: '/pages/punishment-center/punishment-center' })
		},
		onRecord(index) {
			var item = this.punishments[index]
			if (item.recorded) return
			item.recorded = true
			this.totalClouds += item.clouds
			uni.showToast({ title: '已记录 +' + item.clouds + ' 乌云', icon: 'none' })
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
	font-size: 40rpx;
	font-weight: 700;
	color: #725c00;
	line-height: 1.4;
}

.main-scroll {
	height: calc(100vh - var(--status-bar-height) - 128rpx);
}

.main-content {
	max-width: 1240rpx;
	margin: 0 auto;
	padding: 48rpx 48rpx 200rpx;
}

/* Cloud Hero */
.hero-section {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 48rpx 0;
}

.cloud-circle-outer {
	position: relative;
	width: 192rpx;
	height: 192rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.cloud-circle-outer::before {
	content: '';
	position: absolute;
	inset: 0;
	background: #eae8e3;
	border-radius: 50%;
	opacity: 0.5;
	transform: scale(1.15);
}

.cloud-circle {
	position: relative;
	z-index: 10;
	width: 192rpx;
	height: 192rpx;
	background: #e4e2dd;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: inset 0 8rpx 16rpx rgba(0, 0, 0, 0.05);
}

.cloud-float {
	animation: float 4s ease-in-out infinite;
}

@keyframes float {
	0%, 100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-20rpx);
	}
}

.cloud-emoji {
	font-size: 96rpx;
}

.face-emoji {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 56rpx;
}

.hero-heading {
	margin-top: 48rpx;
	font-size: 48rpx;
	font-weight: 700;
	color: #1b1c19;
	display: flex;
	align-items: center;
	gap: 8rpx;
}

.hero-lightning {
	font-size: 44rpx;
}

.hero-sub {
	margin-top: 16rpx;
	font-size: 28rpx;
	color: #4d4632;
	text-align: center;
	padding: 0 64rpx;
	font-weight: 500;
	line-height: 1.5;
}

/* 乌云统计卡片 */
.stats-card {
	display: flex;
	align-items: center;
	gap: 48rpx;
	background: rgba(255, 255, 255, 0.7);
	backdrop-filter: blur(24rpx);
	-webkit-backdrop-filter: blur(24rpx);
	border: 2rpx solid rgba(255, 255, 255, 0.4);
	border-radius: 32rpx;
	padding: 40rpx;
	box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.04);
	margin-top: 16rpx;
}

.stats-circle {
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
	background-color: #e4e2dd;
}

.ring-fill {
	position: absolute;
	width: 144rpx;
	height: 144rpx;
	border-radius: 50%;
	background: conic-gradient(#7A869A 0% 60%, transparent 60% 100%);
	mask: radial-gradient(circle, transparent 96rpx, black 96rpx);
	-webkit-mask: radial-gradient(circle, transparent 96rpx, black 96rpx);
}

.stats-number {
	position: relative;
	z-index: 2;
	font-size: 48rpx;
	font-weight: 800;
	color: #7A869A;
}

.stats-text {
	flex: 1;
}

.stats-title {
	font-size: 36rpx;
	font-weight: 700;
	color: #1b1c19;
	display: block;
	line-height: 1.4;
}

.stats-desc {
	font-size: 28rpx;
	color: #4d4632;
	font-weight: 500;
	margin-top: 8rpx;
	line-height: 1.5;
}

.stats-highlight {
	color: #7A869A;
	font-weight: 700;
}

/* 列表头部 */
.list-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 64rpx;
	margin-bottom: 32rpx;
}

.list-title {
	font-size: 40rpx;
	font-weight: 700;
	color: #1b1c19;
}

.list-badge {
	padding: 12rpx 32rpx;
	background: #f0eee9;
	border-radius: 999rpx;
}

.list-badge-text {
	font-size: 24rpx;
	font-weight: 700;
	letter-spacing: 0.05em;
	color: #4d4632;
}

/* 惩罚项列表 */
.punishment-list {
	display: flex;
	flex-direction: column;
	gap: 24rpx;
}

.punishment-item {
	background: #FFFDF9;
	border-radius: 24rpx;
	padding: 32rpx;
	border: 2rpx solid rgba(209, 198, 171, 0.3);
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.04);
}

.punishment-item:active {
	transform: scale(0.98);
}

.item-left {
	display: flex;
	align-items: center;
	gap: 24rpx;
}

.item-icon-wrap {
	width: 96rpx;
	height: 96rpx;
	background: #f5f3ee;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.04);
}

.item-emoji {
	font-size: 48rpx;
}

.item-info {
	display: flex;
	flex-direction: column;
}

.item-name {
	font-size: 36rpx;
	font-weight: 700;
	color: #1b1c19;
	line-height: 1.4;
}

.item-cloud-row {
	display: flex;
	align-items: center;
	gap: 8rpx;
	margin-top: 8rpx;
}

.item-cloud {
	font-size: 24rpx;
}

.item-cloud-count {
	font-size: 24rpx;
	font-weight: 700;
	letter-spacing: 0.05em;
	color: #7A869A;
}

.record-btn {
	background: #e4e2dd;
	padding: 16rpx 40rpx;
	border-radius: 999rpx;
	transition: all 0.3s;
}

.record-btn:active {
	opacity: 0.8;
}

.record-btn.recorded {
	background: #7A869A;
}

.record-text {
	font-size: 24rpx;
	font-weight: 700;
	letter-spacing: 0.05em;
	color: #1b1c19;
}

.record-btn.recorded .record-text {
	color: #ffffff;
}

/* 鼓励语录 */
.quote-card {
	margin-top: 64rpx;
	padding: 48rpx;
	background: #f0eee9;
	border-radius: 24rpx;
	border: 4rpx dashed rgba(209, 198, 171, 0.5);
	text-align: center;
}

.quote-text {
	font-size: 28rpx;
	font-style: italic;
	color: #4d4632;
	font-weight: 500;
	line-height: 1.6;
}
</style>
