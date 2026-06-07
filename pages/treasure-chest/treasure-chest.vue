<template>
	<view class="page">
		<!-- 背景装饰 -->
		<view class="bg-gradient"></view>

		<!-- 粒子特效 -->
		<view class="fx-container">
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

		<!-- 全屏居中 glass-jar 卡片 -->
		<view class="glass-jar-card" :class="{ 'card-hide': cardHidden }">
			<!-- 装饰星星 -->
			<view class="deco-star deco-tl">⭐</view>
			<view class="deco-star deco-tr">⭐</view>

			<!-- 大礼物图标 🎁 120px pulse动画 金色 -->
			<view class="gift-area">
				<view class="gift-glow"></view>
				<text class="gift-icon">🎁</text>
			</view>

			<!-- 文字区域 -->
			<view class="text-area">
				<text class="congrats-title">太棒了！</text>
				<text class="congrats-sub">恭喜宝贝获得额外奖励</text>

				<!-- 星星+10奖励 pill -->
				<view class="reward-pill">
					<text class="reward-star">⭐</text>
					<text class="reward-text">星星 +10</text>
				</view>
			</view>

			<!-- 收下奖励 squishy 按钮 -->
			<view class="collect-btn" @tap="onCollect">
				<text class="collect-text">收下奖励</text>
			</view>
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
				uni.switchTab({ url: '/pages/index/index' })
			}, 500)
		}
		}
	}
</script>

<style>
	.page {
		min-height: 100vh;
		background: linear-gradient(160deg, #fffdf5 0%, #faf9f9 100%);
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', sans-serif;
		position: relative;
	}

	.bg-gradient {
		position: fixed;
		inset: 0;
		z-index: 0;
		background:
			radial-gradient(circle at 20% 30%, rgba(255, 225, 115, 0.15) 0%, transparent 50%),
			radial-gradient(circle at 80% 70%, rgba(255, 217, 61, 0.1) 0%, transparent 50%);
	}

	/* ===== 粒子特效 ===== */
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

	/* ===== 全屏居中 glass-jar 卡片 ===== */
	.glass-jar-card {
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

	.glass-jar-card.card-hide {
		transform: scale(0.9);
		opacity: 0;
	}

	/* 装饰星星 */
	.deco-star {
		position: absolute;
		font-size: 48rpx;
		animation: starPulse 2s ease-in-out infinite;
	}

	.deco-tl {
		top: -24rpx;
		left: -24rpx;
	}

	.deco-tr {
		top: 48rpx;
		right: -48rpx;
		animation-delay: 0.5s;
	}

	@keyframes starPulse {
		0%, 100% { transform: scale(1); opacity: 0.8; }
		50% { transform: scale(1.3); opacity: 1; }
	}

	/* ===== 🎁 120px pulse动画 ===== */
	.gift-area {
		position: relative;
		margin-bottom: 48rpx;
	}

	.gift-glow {
		position: absolute;
		inset: -40rpx;
		background-color: #ffe173;
		filter: blur(60rpx);
		opacity: 0.4;
		border-radius: 50%;
	}

	.gift-icon {
		position: relative;
		z-index: 1;
		font-size: 240rpx;
		display: block;
		animation: giftPulse 2s ease-in-out infinite;
	}

	@keyframes giftPulse {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.08); }
	}

	/* ===== 文字区域 ===== */
	.text-area {
		margin-bottom: 48rpx;
	}

	.congrats-title {
		font-size: 52rpx;
		font-weight: 700;
		color: #705d00;
		display: block;
	}

	.congrats-sub {
		font-size: 32rpx;
		color: #4d4633;
		display: block;
		margin-top: 16rpx;
	}

	/* ===== 星星+10奖励 pill ===== */
	.reward-pill {
		display: inline-flex;
		align-items: center;
		gap: 12rpx;
		background: linear-gradient(135deg, #ffd93d, #ffe173);
		padding: 20rpx 48rpx;
		border-radius: 999rpx;
		margin-top: 32rpx;
		box-shadow: 0 4rpx 16rpx rgba(255, 217, 61, 0.3);
	}

	.reward-star {
		font-size: 36rpx;
	}

	.reward-text {
		font-size: 40rpx;
		font-weight: 700;
		color: #705d00;
	}

	/* ===== 收下奖励 squishy 按钮 ===== */
	.collect-btn {
		width: 100%;
		background-color: #ffd93d;
		color: #725e00;
		font-size: 44rpx;
		font-weight: 700;
		padding: 28rpx 0;
		border-radius: 999rpx;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 4px 0 0 #e8c426;
		border: none;
		transition: all 0.1s ease;
	}

	.collect-btn:active {
		transform: translateY(4rpx);
		box-shadow: 2px 0 0 #e8c426;
	}

	.collect-text {
		font-size: 44rpx;
		font-weight: 700;
		color: #725e00;
	}
</style>
