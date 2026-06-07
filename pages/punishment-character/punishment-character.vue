<template>
  <view class="page">
    <view class="status-bar"></view>

    <view class="top-bar">
      <view class="top-bar-inner">
        <view class="back-btn" @tap="goBack">
          <text class="back-icon">arrow_back</text>
        </view>
        <text class="top-title">惩罚-性格养成</text>
      </view>
    </view>

    <scroll-view class="content" scroll-y>
      <view class="hero-section">
        <view class="hero-circle-outer">
          <view class="hero-circle-inner cloud-float">
            <text class="hero-cloud">☁️</text>
            <text class="hero-face">😟</text>
          </view>
        </view>
        <text class="hero-heading">惩罚警告 <text class="hero-lightning">⚡</text></text>
        <text class="hero-sub">良好的品德需要时刻提醒自己哦</text>
      </view>

      <view class="stats-card glass-effect">
        <view class="stats-circle">
          <view class="circle-bg"></view>
          <view class="circle-fill"></view>
          <text class="stats-number">12</text>
        </view>
        <view class="stats-text">
          <text class="stats-title">当前乌云总数</text>
          <text class="stats-desc">累计积攒了 <text class="stats-highlight">12</text> 朵乌云</text>
        </view>
      </view>

      <view class="list-header">
        <text class="list-title">惩罚项详情</text>
        <view class="list-badge">
          <text class="list-badge-text">品德分级</text>
        </view>
      </view>

      <view class="punishment-list">
        <view class="punishment-item" v-for="(item, index) in punishments" :key="index">
          <view class="item-left">
            <view class="item-icon-wrap">
              <text class="item-emoji">{{ item.emoji }}</text>
            </view>
            <view>
              <text class="item-name">{{ item.name }}</text>
              <view class="item-cloud-row">
                <text class="item-cloud">☁️</text>
                <text class="item-cloud-count">+{{ item.stars }} 乌云</text>
              </view>
            </view>
          </view>
          <view class="record-btn" @tap="onRecord(index)" :class="{ recorded: item.recorded }">
            <text class="record-text">{{ item.recorded ? '已记录' : '记录' }}</text>
          </view>
        </view>
      </view>

      <view class="quote-card">
        <text class="quote-text">“下一次一定会做得更好，加油小主人！”</text>
      </view>

      <view class="footer-deco">
        <text class="footer-star">⭐</text>
      </view>

      <view class="bottom-spacer"></view>
    </scroll-view>

    <view class="bottom-nav">
      <view class="nav-item" @tap="goPage('home')">
        <text class="nav-icon">🏠</text>
        <text class="nav-label">首页</text>
      </view>
      <view class="nav-item nav-item-active" @tap="goPage('reward')">
        <text class="nav-icon">📋</text>
        <text class="nav-label">奖惩</text>
      </view>
      <view class="nav-item" @tap="goPage('shop')">
        <text class="nav-icon">🏪</text>
        <text class="nav-label">商店</text>
      </view>
      <view class="nav-item" @tap="goPage('profile')">
        <text class="nav-icon">👤</text>
        <text class="nav-label">我的</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      punishments: [
        { emoji: '😤', name: '乱发脾气', stars: 3, recorded: false },
        { emoji: '💢', name: '和长辈顶嘴', stars: 5, recorded: false },
        { emoji: '🗣️', name: '说脏话', stars: 5, recorded: false },
        { emoji: '😭', name: '无故哭闹', stars: 3, recorded: false },
        { emoji: '🤥', name: '撒谎，屡教不改', stars: 10, recorded: false }
      ]
    }
  },
  methods: {
    goBack() {
      uni.navigateBack()
    },
    onRecord(index) {
      const item = this.punishments[index]
      if (item.recorded) return
      item.recorded = true
      setTimeout(() => {
        item.recorded = false
      }, 2000)
    },
    goPage(page) {
      uni.showToast({ title: page, icon: 'none' })
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
  -webkit-tap-highlight-color: transparent;
}

.status-bar {
  height: var(--status-bar-height);
  background: #fbf9f4;
}

.top-bar {
  width: 100%;
  position: sticky;
  top: var(--status-bar-height);
  z-index: 50;
  background: rgba(251, 249, 244, 0.8);
  backdrop-filter: blur(12rpx);
  box-shadow: 0 4rpx 8rpx rgba(0,0,0,0.05);
}

.top-bar-inner {
  display: flex;
  align-items: center;
  padding: 0 24rpx;
  height: 128rpx;
  max-width: 1200rpx;
  margin: 0 auto;
}

.back-btn {
  padding: 16rpx;
  margin-left: -16rpx;
  border-radius: 50%;
}

.back-btn:active {
  transform: scale(0.95);
}

.back-icon {
  font-size: 36rpx;
  color: #725c00;
}

.top-title {
  font-size: 36rpx;
  font-weight: 700;
  color: #725c00;
  margin-left: 16rpx;
}

.content {
  padding-bottom: 240rpx;
  box-sizing: border-box;
}

.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48rpx 24rpx;
}

.hero-circle-outer {
  position: relative;
  width: 320rpx;
  height: 320rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-circle-outer::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #eae8e3;
  border-radius: 50%;
  opacity: 0.5;
  transform: scale(1.1);
}

.hero-circle-inner {
  position: relative;
  z-index: 10;
  width: 256rpx;
  height: 256rpx;
  background: #e4e2dd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 8rpx 16rpx rgba(0,0,0,0.05);
}

.cloud-float {
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20rpx); }
}

.hero-cloud {
  font-size: 120rpx;
  color: #7A869A;
}

.hero-face {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 72rpx;
}

.hero-heading {
  margin-top: 48rpx;
  font-size: 56rpx;
  font-weight: 700;
  color: #1b1c19;
  display: flex;
  align-items: center;
  gap: 16rpx;
}

.hero-lightning {
  font-size: 48rpx;
}

.hero-sub {
  margin-top: 16rpx;
  font-size: 28rpx;
  color: #4d4632;
  text-align: center;
  padding: 0 64rpx;
  font-weight: 500;
}

.stats-card {
  margin: 0 24rpx 48rpx;
  padding: 24rpx;
  display: flex;
  align-items: center;
  gap: 48rpx;
  border-radius: 16rpx;
  box-shadow: 0 4rpx 8rpx rgba(0,0,0,0.03);
}

.glass-effect {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12rpx);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.stats-circle {
  position: relative;
  width: 160rpx;
  height: 160rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 12rpx solid #e4e2dd;
  box-sizing: border-box;
}

.circle-fill {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 12rpx solid #7A869A;
  box-sizing: border-box;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  border-image: linear-gradient(to top, #7A869A 60%, transparent 60%);
  border-top-color: #7A869A;
  border-right-color: #7A869A;
  transform: rotate(0deg);
}

.stats-number {
  position: relative;
  z-index: 2;
  font-size: 36rpx;
  font-weight: 700;
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
}

.stats-desc {
  font-size: 28rpx;
  color: #4d4632;
  font-weight: 500;
  margin-top: 8rpx;
}

.stats-highlight {
  color: #7A869A;
  font-weight: 700;
}

.list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24rpx;
  margin-bottom: 32rpx;
}

.list-title {
  font-size: 36rpx;
  font-weight: 700;
  color: #1b1c19;
}

.list-badge {
  padding: 8rpx 24rpx;
  background: #f0eee9;
  border-radius: 999rpx;
}

.list-badge-text {
  font-size: 20rpx;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #4d4632;
}

.punishment-list {
  padding: 0 24rpx;
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}

.punishment-item {
  background: #FFFDF9;
  border-radius: 16rpx;
  padding: 24rpx;
  border: 1px solid rgba(209, 198, 171, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4rpx 8rpx rgba(0,0,0,0.03);
  transition: transform 0.2s;
}

.punishment-item:active {
  transform: scale(0.98);
}

.item-left {
  display: flex;
  align-items: center;
  gap: 32rpx;
}

.item-icon-wrap {
  width: 96rpx;
  height: 96rpx;
  background: #f5f3ee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4rpx 8rpx rgba(0,0,0,0.03);
}

.item-emoji {
  font-size: 40rpx;
}

.item-name {
  font-size: 36rpx;
  font-weight: 700;
  color: #1b1c19;
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
  font-size: 20rpx;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #7A869A;
}

.record-btn {
  background: #e4e2dd;
  color: #1b1c19;
  padding: 16rpx 40rpx;
  border-radius: 999rpx;
  font-size: 20rpx;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all 0.3s;
}

.record-btn:active {
  background: #e4e2dd;
}

.record-btn.recorded {
  background: #7A869A;
  color: #ffffff;
}

.record-text {
  font-size: 20rpx;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.quote-card {
  margin: 48rpx 24rpx 0;
  padding: 48rpx;
  background: #f0eee9;
  border-radius: 16rpx;
  border: 4rpx dashed rgba(209, 198, 171, 0.5);
  text-align: center;
}

.quote-text {
  font-size: 28rpx;
  font-style: italic;
  color: #4d4632;
  font-weight: 500;
  line-height: 1.5;
}

.footer-deco {
  margin-top: 64rpx;
  display: flex;
  justify-content: center;
  opacity: 0.4;
}

.footer-star {
  font-size: 192rpx;
}

.bottom-spacer {
  height: 32rpx;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 50;
  border-radius: 24rpx 24rpx 0 0;
  background: #ffffff;
  box-shadow: 0 -8rpx 40rpx rgba(0,0,0,0.05);
}

.bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16rpx 32rpx 32rpx;
  box-sizing: border-box;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #4d4632;
  padding: 12rpx 32rpx;
  transition: all 0.2s;
}

.nav-item:active {
  transform: scale(0.9);
}

.nav-item-active {
  background: #fd8b17;
  color: #613100;
  border-radius: 16rpx;
}

.nav-icon {
  font-size: 36rpx;
  margin-bottom: 8rpx;
}

.nav-label {
  font-size: 20rpx;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
</style>
