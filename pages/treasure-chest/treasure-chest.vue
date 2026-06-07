<template>
	<view class="page">
		<view class="bg-blur"></view>

		<view class="fx-container" id="fx-container">
			<view
				v-for="(c, i) in confetti"
				:key="'c' + i"
				class="confetti-piece"
				:style="c.style"
			></view>
			<text
				v-for="(s, i) in stars"
				:key="'s' + i"
				class="floating-star"
				:style="s.style"
			>⭐</text>
		</view>

		<view class="card" :class="{ 'card-hide': cardHidden }">
			<view class="deco-star top-left">⭐</view>
			<view class="deco-star top-right">⭐</view>

			<view class="chest-area">
				<view class="chest-glow"></view>
				<text class="chest-icon">🎁</text>
			</view>

			<view class="text-area">
				<text class="main-title">太棒了！</text>
				<text class="sub-title">恭喜宝贝获得额外奖励</text>
				<view class="badge">
					<text class="badge-star">⭐</text>
					<text class="badge-text">星星 +10</text>
				</view>
			</view>

			<button class="collect-btn" @tap="onCollect">收下奖励</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardHidden: false,
				confetti: [],
				stars: []
			}
		},
		onLoad() {
			this.createConfetti()
			this.createStars()
		},
		methods: {
			createConfetti() {
				const colors = ['#ffe173', '#fc8200', '#e8c426', '#ffd93d', '#ffffff']
				const items = []
				for (let i = 0; i < 60; i++) {
					const sizeW = Math.random() * 10 + 5
					const sizeH = Math.random() * 5 + 5
					items.push({
						style: {
							left: Math.random() * 100 + '%',
							backgroundColor: colors[Math.floor(Math.random() * colors.length)],
							width: sizeW + 'px',
							height: sizeH + 'px',
							animationDuration: (Math.random() * 3 + 2) + 's',
							animationDelay: (Math.random() * 2) + 's'
						}
					})
				}
				this.confetti = items
			},
			createStars() {
				const items = []
				for (let i = 0; i < 15; i++) {
					const size = Math.random() * 20 + 10
					items.push({
						style: {
							left: Math.random() * 100 + '%',
							top: Math.random() * 100 + '%',
							fontSize: size + 'px',
							animationDelay: (Math.random() * 2) + 's'
						}
					})
				}
				this.stars = items
			},
			onCollect() {
				this.cardHidden = true
				setTimeout(() => {
					uni.showModal({
						title: '提示',
						content: '奖励已放入星空罐！',
						showCancel: false,
						success: () => {
							uni.navigateBack()
						}
					})
				}, 500)
			}
		}
	}
</script>

<style>
	.page {
		min-height: 100vh;
		background-color: #faf9f9;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: sans-serif;
		position: relative;
	}

	.bg-blur {
		position: fixed;
		inset: 0;
		z-index: 0;
		background: linear-gradient(135deg, #fff8e1 0%, #faf9f9 50%, #fff3cd 100%);
		filter: blur(40rpx);
		opacity: 0.6;
		transform: scale(1.1);
	}

	.fx-container {
		position: fixed;
		inset: 0;
		z-index: 1;
		pointer-events: none;
		overflow: hidden;
	}

	.confetti-piece {
		position: absolute;
		top: -20px;
		border-radius: 4rpx;
		animation: confettiFall linear forwards;
	}

	@keyframes confettiFall {
		to {
			transform: translateY(100vh) rotate(720deg);
			opacity: 0;
		}
	}

	.floating-star {
		position: absolute;
		opacity: 0;
		animation: starAppear 3s ease-in-out infinite;
	}

	@keyframes starAppear {
		0%, 100% { opacity: 0; transform: scale(0.8); }
		50% { opacity: 0.6; transform: scale(1.2); }
	}

	.card {
		position: relative;
		z-index: 10;
		background: rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 3rpx solid rgba(255, 255, 255, 0.8);
		border-radius: 48rpx;
		padding: 80rpx 64rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		width: 90%;
		max-width: 960rpx;
		box-shadow: 0 60rpx 120rpx -24rpx rgba(255, 132, 0, 0.15);
		transition: all 0.5s ease-out;
	}

	.card-hide {
		transform: scale(0.9);
		opacity: 0;
	}

	.deco-star {
		position: absolute;
		font-size: 48rpx;
		animation: starPulse 2s ease-in-out infinite;
	}
	.deco-star.top-left {
		top: -32rpx;
		left: -32rpx;
	}
	.deco-star.top-right {
		top: 48rpx;
		right: -48rpx;
		animation-delay: 0.5s;
	}

	@keyframes starPulse {
		0%, 100% { transform: scale(1); opacity: 0.8; }
		50% { transform: scale(1.3); opacity: 1; }
	}

	.chest-area {
		position: relative;
		margin-bottom: 48rpx;
		animation: chestFloat 3s ease-in-out infinite;
	}

	@keyframes chestFloat {
		0%, 100% { transform: translateY(0) rotate(0deg); }
		50% { transform: translateY(-30rpx) rotate(2deg); }
	}

	.chest-glow {
		position: absolute;
		inset: 0;
		background-color: #ffe173;
		filter: blur(60rpx);
		opacity: 0.4;
		border-radius: 50%;
		transform: scale(1.5);
	}

	.chest-icon {
		position: relative;
		z-index: 10;
		font-size: 240rpx;
		display: block;
	}

	.text-area {
		margin-bottom: 48rpx;
	}

	.main-title {
		font-size: 52rpx;
		font-weight: 700;
		color: #705d00;
		display: block;
	}

	.sub-title {
		font-size: 36rpx;
		color: #4d4633;
		display: block;
		margin-top: 16rpx;
	}

	.badge {
		display: inline-flex;
		align-items: center;
		gap: 8rpx;
		background-color: rgba(255, 217, 61, 0.3);
		padding: 24rpx 48rpx;
		border-radius: 999rpx;
		border: 2rpx solid rgba(255, 217, 61, 0.5);
		margin-top: 32rpx;
	}

	.badge-star {
		font-size: 36rpx;
	}

	.badge-text {
		font-size: 48rpx;
		font-weight: 700;
		color: #705d00;
	}

	.collect-btn {
		width: 100%;
		background-color: #ffd93d;
		color: #725e00;
		font-size: 48rpx;
		font-weight: 700;
		padding: 28rpx 0;
		border-radius: 999rpx;
		line-height: 1.4;
		min-height: 112rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 8rpx 0 0 #e8c426;
		border: none;
		transition: all 0.1s ease;
	}
	.collect-btn::after {
		border: none;
	}
	.collect-btn:active {
		transform: translateY(4rpx);
		box-shadow: 0 4rpx 0 0 #e8c426;
	}
</style>
