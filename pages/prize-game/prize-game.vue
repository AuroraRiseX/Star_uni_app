<template>
  <view class="page">
    <view class="status-bar"></view>

    <view class="top-bar">
      <view class="back-btn" @tap="goBack">
        <text class="icon">arrow_back_ios_new</text>
      </view>
      <text class="top-title">奖品详情</text>
      <view class="balance-badge">
        <text class="star-icon">⭐</text>
        <text class="balance-num">128</text>
      </view>
    </view>

    <scroll-view class="content" scroll-y>
      <view class="hero-section">
        <view class="hero-glow"></view>
        <view class="hero-img-wrapper">
          <view class="hero-placeholder floating-game">
            <text class="game-console-emoji">🎮</text>
          </view>
        </view>
        <view class="hero-text">
          <text class="hero-title">玩游戏兑换卡</text>
          <text class="hero-desc">奖励30分钟的游戏时间！这是对宝贝努力完成任务的特别奖励。</text>
        </view>
      </view>

      <view class="stats-grid">
        <view class="stat-card">
          <text class="stat-label">兑换所需</text>
          <view class="stat-value">
            <text class="stat-icon">⭐</text>
            <text class="stat-number">20</text>
          </view>
        </view>
        <view class="stat-card">
          <text class="stat-label">当前余额</text>
          <view class="stat-value">
            <text class="stat-icon stat-icon-green">⭐</text>
            <text class="stat-number stat-number-dark">128</text>
          </view>
          <view class="sufficient-label">充足</view>
        </view>
      </view>

      <view class="details-section">
        <view class="detail-card">
          <view class="detail-header">
            <text class="detail-icon">ℹ️</text>
            <text class="detail-title">使用说明</text>
          </view>
          <text class="detail-text">点击兑换后，向爸爸或妈妈展示兑换成功页面，即可获得30分钟的游戏时间。</text>
        </view>

        <view class="detail-card">
          <view class="detail-header">
            <text class="detail-icon detail-icon-purple">🕐</text>
            <text class="detail-title">有效期</text>
          </view>
          <text class="detail-text">兑换后请在24小时内使用哦，过期奖品就要飞走啦！</text>
        </view>
      </view>

      <view class="bottom-spacer"></view>
    </scroll-view>

    <view class="bottom-bar">
      <view class="redeem-btn" @tap="onRedeem">
        <text class="redeem-icon">🎟️</text>
        <text class="redeem-text">立即兑换</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isRedeeming: false
    }
  },
  methods: {
    goBack() {
      uni.navigateBack()
    },
    onRedeem() {
      if (this.isRedeeming) return
      this.isRedeeming = true
      setTimeout(() => {
        this.isRedeeming = false
        uni.showToast({ title: '兑换成功!', icon: 'success' })
      }, 1000)
    }
  }
}
</script>

<style>
.page {
  min-height: 100vh;
  background: #fbf9f4;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #1b1c19;
}

.status-bar {
  height: var(--status-bar-height);
  background: #fbf9f4;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16rpx 24rpx;
  background: rgba(251, 249, 244, 0.8);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 50;
}

.back-btn {
  width: 80rpx;
  height: 80rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.icon {
  font-size: 36rpx;
  color: #725c00;
}

.top-title {
  font-size: 36rpx;
  font-weight: 700;
  color: #1b1c19;
}

.balance-badge {
  display: flex;
  align-items: center;
  background: rgba(255, 210, 20, 0.3);
  padding: 12rpx 24rpx;
  border-radius: 999rpx;
  border: 1px solid rgba(114, 92, 0, 0.1);
}

.star-icon {
  font-size: 32rpx;
  margin-right: 8rpx;
}

.balance-num {
  font-size: 28rpx;
  font-weight: 800;
  color: #725c00;
}

.content {
  padding-bottom: 200rpx;
  box-sizing: border-box;
}

.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48rpx 24rpx;
  overflow: hidden;
  position: relative;
}

.hero-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 512rpx;
  height: 512rpx;
  background: radial-gradient(circle, rgba(255, 210, 20, 0.2) 0%, rgba(251, 249, 244, 0) 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}

.hero-img-wrapper {
  width: 448rpx;
  height: 448rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-placeholder {
  width: 384rpx;
  height: 384rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 32rpx 64rpx rgba(0,0,0,0.2));
}

.floating-game {
  animation: bounce 4s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-30rpx); }
}

.game-console-emoji {
  font-size: 256rpx;
}

.hero-text {
  margin-top: 24rpx;
  text-align: center;
  padding: 0 24rpx;
}

.hero-title {
  font-size: 56rpx;
  font-weight: 700;
  color: #3c475a;
  display: block;
  margin-bottom: 16rpx;
}

.hero-desc {
  font-size: 28rpx;
  line-height: 1.6;
  color: #3c475a;
  max-width: 600rpx;
  margin: 0 auto;
  font-weight: 500;
}

.stats-grid {
  padding: 0 24rpx;
  display: flex;
  gap: 24rpx;
  margin-bottom: 48rpx;
}

.stat-card {
  flex: 1;
  background: #f5f3ee;
  padding: 24rpx;
  border-radius: 16rpx;
  border: 1px solid rgba(209, 198, 171, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4rpx 8rpx rgba(0,0,0,0.03);
}

.stat-label {
  font-size: 20rpx;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #4d4632;
  margin-bottom: 16rpx;
}

.stat-value {
  display: flex;
  align-items: center;
}

.stat-icon {
  font-size: 36rpx;
  margin-right: 8rpx;
}

.stat-icon-green {
  color: #A8D672;
}

.stat-number {
  font-size: 48rpx;
  font-weight: 800;
  color: #725c00;
  letter-spacing: -0.02em;
}

.stat-number-dark {
  color: #1b1c19;
}

.sufficient-label {
  background: rgba(168, 214, 114, 0.2);
  color: #A8D672;
  padding: 8rpx 16rpx;
  border-radius: 999rpx;
  font-size: 20rpx;
  font-weight: 700;
  margin-top: 8rpx;
}

.details-section {
  padding: 0 24rpx;
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}

.detail-card {
  background: #FFFDF9;
  padding: 24rpx;
  border-radius: 16rpx;
  border: 1px solid rgba(209, 198, 171, 0.2);
  box-shadow: 0 4rpx 8rpx rgba(0,0,0,0.03);
}

.detail-header {
  display: flex;
  align-items: center;
  margin-bottom: 16rpx;
}

.detail-icon {
  font-size: 36rpx;
  margin-right: 16rpx;
}

.detail-icon-purple {
  color: #B19CD9;
}

.detail-title {
  font-size: 36rpx;
  font-weight: 700;
  color: #3c475a;
}

.detail-text {
  font-size: 28rpx;
  line-height: 1.5;
  color: #3c475a;
  font-weight: 500;
}

.bottom-spacer {
  height: 200rpx;
}

.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 24rpx;
  background: rgba(251, 249, 244, 0.8);
  backdrop-filter: blur(20rpx);
  border-top: 1px solid rgba(209, 198, 171, 0.1);
  box-sizing: border-box;
  z-index: 50;
}

.redeem-btn {
  width: 100%;
  padding: 32rpx 0;
  border-radius: 16rpx;
  background: linear-gradient(to right, #fd8b17, #924c00);
  color: #fff;
  font-size: 36rpx;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16rpx;
  box-shadow: 0 16rpx 48rpx rgba(146, 76, 0, 0.3);
  transition: transform 0.2s;
}

.redeem-btn:active {
  transform: scale(0.95);
}

.redeem-icon {
  font-size: 36rpx;
}

.redeem-text {
  font-size: 36rpx;
}
</style>
