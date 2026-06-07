<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>
		<view class="top-bar">
			<view class="top-bar-left">
				<view class="back-btn" @tap="goBack">
					<text class="back-icon">◀</text>
				</view>
				<text class="top-title">切换宝贝</text>
			</view>
			<view class="top-bar-right" @tap="showDetail">
				<text class="detail-text">Details &gt;</text>
			</view>
		</view>
		<scroll-view scroll-y class="main-scroll">
			<view class="header-section">
				<text class="section-title">想看谁的星星罐？</text>
				<text class="section-subtitle">点击头像即可切换管理不同宝贝的成长进度</text>
			</view>
			<view class="baby-grid">
				<view
					v-for="(baby, index) in babies"
					:key="index"
					class="baby-card"
					:class="{ 'active-card': index === 0 }"
					@tap="selectBaby(index)"
				>
					<view class="card-left">
						<view class="avatar-wrapper">
							<image :src="baby.avatar" mode="widthFix" class="baby-avatar"></image>
							<view v-if="index === 0" class="check-badge">
								<text class="check-icon">✓</text>
							</view>
						</view>
						<view class="baby-info">
							<text class="baby-name">{{ baby.name }}</text>
							<view class="stars-row">
								<text class="star-star" :class="{ 'star-filled': index === 0 }">⭐</text>
								<text class="stars-text">已收集 <text class="stars-count">{{ baby.stars }}</text> 颗星星</text>
							</view>
						</view>
					</view>
					<view v-if="index === 0" class="active-badge">
						<text class="badge-text">当前使用</text>
					</view>
					<view v-if="index !== 0" class="chevron">
						<text class="chevron-icon">›</text>
					</view>
				</view>
			</view>
			<view class="deco-star-wrapper">
				<view class="deco-star">
					<text class="deco-star-icon">⭐</text>
				</view>
			</view>
			<view class="bottom-action">
				<button class="add-btn" @tap="addBaby">
					<text class="add-icon">➕</text>
					<text class="add-text">添加新宝贝</text>
				</button>
				<text class="add-hint">添加宝贝后即可为其开启独立的星星奖赏计划</text>
			</view>
		</scroll-view>
		<view class="bottom-nav">
			<view class="nav-item" @tap="navTo('home')">
				<text class="nav-icon">🏠</text>
				<text class="nav-label">Home</text>
			</view>
			<view class="nav-item" @tap="navTo('jar')">
				<text class="nav-icon">⭐</text>
				<text class="nav-label">Jar Info</text>
			</view>
			<view class="nav-item" @tap="navTo('shop')">
				<text class="nav-icon">🛒</text>
				<text class="nav-label">Shop</text>
			</view>
			<view class="nav-item nav-active" @tap="navTo('profile')">
				<text class="nav-icon">👤</text>
				<text class="nav-label nav-label-active">Profile</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				babies: [
					{
						name: '萌萌',
						stars: 128,
						avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGdkMYoGoSLQzjrV39U9jBW5Vn7ERe62AgZHvsL6DF3mdEZfLyggL1Qx0_iHNLRV4tpQQ9sdTHL93cRdcQbRMvQbAIaN38XiofYMMOYwF88MXxEOW3-j2wV2jAdz1TwL_4pKdLjfh6tAMfLNdj7vNehNeV_OzkMe59sTYaSilVG4LKCFiTIM34EjmBW9IIIJWFlh8W3edKqN1EHVh4FjfMT7XtdAsOW5DWgGwza6sQ6nrL333UEaJr1ygc-GSHyqTrVZPDo0LWC1_U'
					},
					{
						name: '小陶',
						stars: 45,
						avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnJxE3J3ZxouIZSnFQwV53KEvnw8WvYJeuM94iMvpwkEx8nteDL1RHhCwoy80TnFSgZ84gz2GmTonyHQYONz4Iay54lVhLK1pkbfIm0Ph8FwJu0p2LN4xy_ji-s9hIgNwDtvbQxlHI5IKhTqSCHL9D1Yn1wuZx97JxMcuScILGpkkC-RAyvy0WSEABIpo-rh1LtoYKQgfkAI0GQIA3FGxvXjW1oRZJv7kIa9VozArcb6v0R9BTrpQEhjprkqtQGh8mCZ0JbBZHfPdW'
					},
					{
						name: '月月',
						stars: 82,
						avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVF4PxfKLUY9y0BLarTrCswo8ob37DdUL08IwBnOd4ELWHiJj7197iwI_bZg34Sqf4DHUzMqBQtmWbS_KWdO0gd5QAIYwD_PkkNAsIyTHD5XNpunHVI-MNFmvUi0E_M-pHZzfyg74pEhXrydoNNN0Hdpaeqs2bwf7QRQKBzuxvTj6tThzb1ITJ9_Te_131Sd8qPnBF02xmJEgAb806tUtxngoA4hY73nnC5esbjXtBRBQPA1jrZrWwJHk3vlVY55gmObss3wcSTh8V'
					}
				]
			}
		},
		methods: {
			goBack() {
				uni.navigateBack()
			},
			showDetail() {},
			selectBaby(index) {},
			addBaby() {},
			navTo(page) {
				const routes = {
					home: '/pages/index/index',
					jar: '/pages/star-jar/star-jar',
					shop: '/pages/prize-snack/prize-snack',
					profile: '/pages/profile/profile'
				}
				if (routes[page]) {
					uni.navigateTo({ url: routes[page] })
				}
			}
		}
	}
</script>

<style lang="scss">
	.page {
		min-height: 100vh;
		background-color: #faf9f9;
		background-image: radial-gradient(#ffe173 0.5px, transparent 0.5px);
		background-size: 24px 24px;
		font-family: 'Quicksand', 'PingFang SC', sans-serif;
		color: #1a1c1c;
		display: flex;
		flex-direction: column;
	}
	.top-bar {
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 50;
		background: rgba(250, 249, 249, 0.8);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8px 20px;
	}
	.top-bar-left {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.back-btn {
		padding: 8px;
		border-radius: 9999px;
	}
	.back-btn:active {
		background: #e9e8e8;
	}
	.back-icon {
		font-size: 18px;
		color: #705d00;
	}
	.top-title {
		font-family: 'Plus Jakarta Sans', 'PingFang SC', sans-serif;
		font-size: 24px;
		font-weight: 700;
		line-height: 30px;
		color: #705d00;
	}
	.top-bar-right {
		padding: 8px 16px;
		border-radius: 1rem;
	}
	.top-bar-right:active {
		background: #e9e8e8;
	}
	.detail-text {
		font-family: 'Plus Jakarta Sans', 'PingFang SC', sans-serif;
		font-weight: 700;
		color: #705d00;
		font-size: 16px;
	}
	.main-scroll {
		flex: 1;
		padding: 0 20px;
		max-width: 1040px;
		margin: 0 auto;
	}
	.header-section {
		text-align: center;
		padding: 24px 0 12px;
	}
	.section-title {
		font-family: 'Plus Jakarta Sans', 'PingFang SC', sans-serif;
		font-size: 26px;
		font-weight: 700;
		line-height: 32px;
		letter-spacing: -0.02em;
		color: #4d4633;
		display: block;
	}
	.section-subtitle {
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
		color: #48473a;
		margin-top: 4px;
		display: block;
	}
	.baby-grid {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.baby-card {
		background: rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1.5px solid rgba(255, 255, 255, 0.8);
		border-radius: 1rem;
		padding: 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		box-shadow: 0 10px 30px -10px rgba(112, 93, 0, 0.1);
	}
	.baby-card:active {
		transform: scale(0.98);
	}
	.active-card {
		border: 2px solid #ffd93d;
	}
	.card-left {
		display: flex;
		align-items: center;
		gap: 24px;
		flex: 1;
	}
	.avatar-wrapper {
		position: relative;
	}
	.baby-avatar {
		width: 80px;
		height: 80px;
		border-radius: 9999px;
		border: 4px solid #ffffff;
	}
	.check-badge {
		position: absolute;
		bottom: -4px;
		right: -4px;
		background: #705d00;
		width: 24px;
		height: 24px;
		border-radius: 9999px;
		border: 2px solid #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.check-icon {
		color: #ffffff;
		font-size: 12px;
		font-weight: 700;
	}
	.baby-info {
		flex: 1;
	}
	.baby-name {
		font-family: 'Plus Jakarta Sans', 'PingFang SC', sans-serif;
		font-size: 24px;
		font-weight: 700;
		line-height: 30px;
		color: #1a1c1c;
		display: block;
	}
	.stars-row {
		display: flex;
		align-items: center;
		gap: 4px;
		margin-top: 4px;
	}
	.star-star {
		font-size: 16px;
		color: #d0c6ad;
	}
	.star-filled {
		color: #e8c426;
	}
	.stars-text {
		font-size: 14px;
		font-weight: 700;
		line-height: 20px;
		letter-spacing: 0.05em;
		color: #4d4633;
	}
	.stars-count {
		color: #944a00;
		font-weight: 700;
	}
	.active-badge {
		position: absolute;
		top: 24px;
		right: 24px;
		background: #ffd93d;
		color: #725e00;
		padding: 4px 12px;
		border-radius: 9999px;
	}
	.badge-text {
		font-size: 12px;
		font-weight: 700;
		line-height: 16px;
	}
	.chevron {
		padding: 8px;
	}
	.chevron-icon {
		font-size: 24px;
		color: #d0c6ad;
	}
	.deco-star-wrapper {
		display: flex;
		justify-content: center;
		padding-top: 40px;
	}
	.deco-star {
		animation: float 3s ease-in-out infinite;
	}
	.deco-star-icon {
		font-size: 48px;
		color: #e8c426;
	}
	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-8px); }
	}
	.bottom-action {
		padding: 40px 0 100px;
		max-width: 600px;
		margin: 0 auto;
		width: 100%;
	}
	.add-btn {
		width: 100%;
		min-height: 64px;
		background: #ffd93d;
		color: #725e00;
		border-radius: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		box-shadow: 0 4px 0 0 #e8c426;
		transition: all 0.1s ease;
		border: none;
		padding: 0;
		font-size: 24px;
		font-weight: 700;
		line-height: 30px;
		font-family: 'Plus Jakarta Sans', 'PingFang SC', sans-serif;
	}
	.add-btn:active {
		transform: translateY(2px);
		box-shadow: 0 2px 0 0 #e8c426;
	}
	.add-icon {
		font-size: 28px;
	}
	.add-text {
		font-size: 24px;
		font-weight: 700;
	}
	.add-hint {
		text-align: center;
		margin-top: 24px;
		font-size: 12px;
		font-weight: 600;
		line-height: 16px;
		color: rgba(77, 70, 51, 0.6);
		display: block;
	}
	.bottom-nav {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 50;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 8px 16px 16px;
		background: rgba(244, 243, 243, 0.9);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border-top: 1px solid rgba(208, 198, 173, 0.3);
		box-shadow: 0 -4px 20px 0 rgba(0, 0, 0, 0.05);
		border-radius: 1rem 1rem 0 0;
	}
	.nav-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 8px 16px;
		color: #48473a;
	}
	.nav-item:active {
		transform: scale(0.9);
	}
	.nav-active {
		background: #ffd93d;
		border-radius: 1rem;
		color: #725e00;
	}
	.nav-icon {
		font-size: 24px;
	}
	.nav-label {
		font-size: 12px;
		font-weight: 700;
		line-height: 16px;
		margin-top: 4px;
		letter-spacing: 0.05em;
		font-family: 'Quicksand', 'PingFang SC', sans-serif;
	}
	.nav-label-active {
		font-weight: 700;
	}
</style>
