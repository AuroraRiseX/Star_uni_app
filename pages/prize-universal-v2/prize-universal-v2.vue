<template>
  <view class="page">
    <view class="status-bar"></view>

    <view class="top-bar">
      <view class="back-btn" @tap="goBack">
        <text class="icon">arrow_back_ios_new</text>
      </view>
      <text class="top-title">奖品详情</text>
      <view class="spacer"></view>
    </view>

    <scroll-view class="content" scroll-y>
      <view class="hero-section">
        <view class="hero-bg">
          <view class="deco-circle deco-top-right"></view>
          <view class="deco-circle deco-bottom-left"></view>
          <view class="hero-card floating">
            <view class="shimmer"></view>
            <view class="hero-card-left">
              <text class="hero-star-icon">⭐</text>
              <text class="hero-card-title">万能卡</text>
            </view>
            <view class="hero-card-right">
              <text class="hero-grade-icon">⭐</text>
            </view>
          </view>
        </view>
      </view>

      <view class="title-section">
        <view class="badge">稀有奖品</view>
        <text class="main-title">万能卡</text>
        <text class="description">可以实现一个合理的愿望！这是对宝贝努力完成任务的特别奖励。</text>
      </view>

      <view class="stats-grid">
        <view class="stat-card">
          <text class="stat-label">兑换所需</text>
          <view class="stat-value">
            <text class="stat-icon">⭐</text>
            <text class="stat-number">50 颗</text>
          </view>
        </view>
        <view class="stat-card">
          <text class="stat-label">当前余额</text>
          <view class="stat-value">
            <text class="stat-number">128 颗</text>
          </view>
          <view class="sufficient-badge">
            <view class="dot"></view>
            <text class="sufficient-text">余额充足</text>
          </view>
        </view>
      </view>

      <view class="details-section">
        <view class="detail-block">
          <view class="detail-header">
            <text class="detail-icon">ℹ️</text>
            <text class="detail-title">使用说明</text>
          </view>
          <view class="detail-card">
            <text class="detail-text">点击兑换后，向爸爸或妈妈出示兑换成功页面，即可商量并实现你的大愿望。</text>
          </view>
        </view>

        <view class="detail-block">
          <view class="detail-header">
            <text class="detail-icon">🕐</text>
            <text class="detail-title">有效期</text>
          </view>
          <view class="detail-card detail-card-row">
            <view class="dot dot-secondary"></view>
            <text class="detail-text">兑换后请在30天内使用哦，过期的愿望会飞走哒！</text>
          </view>
        </view>
      </view>

      <view class="bottom-spacer"></view>
    </scroll-view>

      <view class="bottom-bar">
        <view class="redeem-btn" @tap="onRedeem">
          <text class="redeem-icon">🛍️</text>
          <text class="redeem-text">立即兑换</text>
        </view>
      </view>

      <!-- Success Modal -->
      <view class="modal-overlay" :class="{ 'modal-show': showModal }">
        <view class="modal-backdrop" @tap="closeModal"></view>
        <view class="modal-card" v-if="showModal">
          <view class="modal-icon-wrap">
            <text class="modal-check">✅</text>
          </view>
          <text class="modal-title">兑换成功！</text>
          <text class="modal-desc">向爸爸妈妈出示此页面，实现你的大愿望吧！</text>
          <view class="modal-btn" @tap="closeModal">太棒了</view>
        </view>
      </view>
    </view>
</template>

<script>
export default {
  data() {
    return {
      isRedeeming: false,
      showModal: false
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
        this.showModal = true
      }, 800)
    },
    closeModal() {
      this.showModal = false
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

.top-title {
  font-size: 36rpx;
  font-weight: 700;
  color: #725c00;
}

.spacer {
  width: 80rpx;
}

.content {
  padding-bottom: 200rpx;
  box-sizing: border-box;
}

.hero-section {
  padding: 48rpx 24rpx 0;
  overflow: hidden;
}

.hero-bg {
  position: relative;
  width: 100%;
  border-radius: 24rpx;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 320rpx;
  background: linear-gradient(135deg, rgba(177, 156, 217, 0.2), rgba(204, 215, 238, 0.3));
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(60rpx);
}

.deco-top-right {
  top: -80rpx;
  right: -80rpx;
  width: 320rpx;
  height: 320rpx;
  background: rgba(177, 156, 217, 0.2);
}

.deco-bottom-left {
  bottom: -80rpx;
  left: -80rpx;
  width: 320rpx;
  height: 320rpx;
  background: rgba(255, 210, 20, 0.2);
}

.hero-card {
  position: relative;
  z-index: 10;
  width: 512rpx;
  height: 320rpx;
  background: #B19CD9;
  border-radius: 16rpx;
  border: 8rpx solid #fff;
  transform: rotate(3deg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48rpx;
  overflow: hidden;
  box-shadow: 0 32rpx 64rpx rgba(0,0,0,0.15);
}

.floating {
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: rotate(3deg) translateY(0); }
  50% { transform: rotate(3deg) translateY(-30rpx); }
}

.shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  background-size: 200% 100%;
  animation: shimmer 3s infinite linear;
  opacity: 0.3;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.hero-card-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 10;
}

.hero-star-icon {
  font-size: 64rpx;
  margin-bottom: 8rpx;
}

.hero-card-title {
  font-size: 36rpx;
  font-weight: 700;
  color: #fff;
  letter-spacing: 4rpx;
}

.hero-card-right {
  z-index: 10;
}

.hero-grade-icon {
  font-size: 96rpx;
  opacity: 0.4;
}

.title-section {
  padding: 48rpx 24rpx 0;
}

.badge {
  display: inline-block;
  padding: 8rpx 24rpx;
  background: rgba(177, 156, 217, 0.2);
  color: #525d71;
  border-radius: 999rpx;
  font-size: 20rpx;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2rpx;
  margin-bottom: 16rpx;
}

.main-title {
  font-size: 56rpx;
  font-weight: 700;
  color: #1b1c19;
  display: block;
  margin-bottom: 24rpx;
}

.description {
  font-size: 32rpx;
  line-height: 1.6;
  color: #4d4632;
  font-weight: 500;
}

.stats-grid {
  padding: 48rpx 24rpx 0;
  display: flex;
  gap: 24rpx;
}

.stat-card {
  flex: 1;
  background: #f5f3ee;
  padding: 24rpx;
  border-radius: 16rpx;
  border: 1px solid rgba(209, 198, 171, 0.3);
}

.stat-label {
  font-size: 24rpx;
  color: #4d4632;
  margin-bottom: 12rpx;
}

.stat-value {
  display: flex;
  align-items: center;
  gap: 8rpx;
}

.stat-icon {
  font-size: 36rpx;
}

.stat-number {
  font-size: 36rpx;
  font-weight: 700;
  color: #725c00;
}

.stat-card:last-child .stat-number {
  color: #1b1c19;
}

.sufficient-badge {
  margin-top: 16rpx;
  display: flex;
  align-items: center;
  gap: 8rpx;
  padding: 8rpx 16rpx;
  background: rgba(168, 214, 114, 0.2);
  border-radius: 999rpx;
  width: fit-content;
}

.dot {
  width: 16rpx;
  height: 16rpx;
  background: #A8D672;
  border-radius: 50%;
}

.sufficient-text {
  font-size: 18rpx;
  font-weight: 700;
  color: #4d4632;
}

.dot-secondary {
  background: #924c00;
  flex-shrink: 0;
  margin-top: 8rpx;
}

.details-section {
  padding: 48rpx 24rpx;
  display: flex;
  flex-direction: column;
  gap: 48rpx;
}

.detail-header {
  display: flex;
  align-items: center;
  gap: 16rpx;
  margin-bottom: 24rpx;
}

.detail-icon {
  font-size: 36rpx;
}

.detail-title {
  font-size: 36rpx;
  font-weight: 700;
  color: #1b1c19;
}

.detail-card {
  background: #ffffff;
  padding: 24rpx;
  border-radius: 16rpx;
  border: 1px solid rgba(209, 198, 171, 0.2);
  box-shadow: 0 4rpx 8rpx rgba(0,0,0,0.03);
}

.detail-card-row {
  display: flex;
  align-items: flex-start;
  gap: 20rpx;
}

.detail-text {
  font-size: 28rpx;
  line-height: 1.5;
  color: #4d4632;
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
  z-index: 50;
  background: linear-gradient(to top, #fbf9f4, rgba(251, 249, 244, 0));
  box-sizing: border-box;
}

.redeem-btn {
  width: 100%;
  height: 128rpx;
  background: linear-gradient(to right, #725c00, #924c00);
  color: #fff;
  font-size: 36rpx;
  font-weight: 700;
  border-radius: 999rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16rpx;
  box-shadow: 0 16rpx 48rpx rgba(114, 92, 0, 0.2);
  transition: opacity 0.3s;
}

.redeem-btn:active {
  opacity: 0.9;
  transform: scale(0.95);
}

.redeem-icon {
  font-size: 36rpx;
}

.redeem-text {
  font-size: 36rpx;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32rpx;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}

.modal-overlay.modal-show {
  opacity: 1;
  pointer-events: auto;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(27, 28, 25, 0.4);
  backdrop-filter: blur(12px);
}

.modal-card {
  position: relative;
  width: 100%;
  max-width: 560rpx;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px);
  border: 2rpx solid rgba(255, 255, 255, 0.5);
  border-radius: 32rpx;
  padding: 64rpx;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: bounce-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes bounce-in {
  0% { transform: scale(0.3); opacity: 0; }
  50% { transform: scale(1.05); opacity: 1; }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); }
}

.modal-icon-wrap {
  width: 160rpx;
  height: 160rpx;
  background: #ffd214;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40rpx;
}

.modal-check {
  font-size: 72rpx;
}

.modal-title {
  font-size: 36rpx;
  font-weight: 700;
  color: #705d00;
  display: block;
  margin-bottom: 16rpx;
}

.modal-desc {
  font-size: 28rpx;
  font-weight: 500;
  color: #4d4632;
  margin-bottom: 48rpx;
}

.modal-btn {
  width: 100%;
  padding: 24rpx 0;
  background: #705d00;
  color: #ffffff;
  font-weight: 700;
  font-size: 30rpx;
  border-radius: 999rpx;
  text-align: center;
}

.modal-btn:active {
  transform: scale(0.96);
}
</style>
