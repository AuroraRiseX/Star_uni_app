<template>
  <view class="page">
    <view class="status-bar"></view>

    <view class="top-bar">
      <view class="top-bar-inner">
        <view class="avatar-section">
          <view class="avatar"></view>
          <text class="top-title">奖惩中心</text>
        </view>
        <view class="detail-btn" @tap="goDetail">
          <text class="detail-btn-text">明细</text>
          <text class="detail-btn-icon">chevron_right</text>
        </view>
      </view>
    </view>

    <scroll-view class="content" scroll-y>
      <view class="segmented-toggle">
        <view class="toggle-item toggle-inactive">
          <text class="toggle-text">🌟 奖励赚取</text>
        </view>
        <view class="toggle-item toggle-active">
          <text class="toggle-text">☁️ 惩罚记录</text>
        </view>
      </view>

      <view class="rule-card">
        <text class="rule-icon">💡</text>
        <text class="rule-text">
          <text class="rule-bold">星星罐法则:</text> 好习惯攒星星，坏习惯攒乌云。乌云散去才能重见阳光哦！
        </text>
      </view>

      <view class="category-list">
        <view class="category-item" @tap="goCategory('study')">
          <view class="category-top">
            <view class="category-left">
              <view class="category-icon study-icon">
                <text class="category-emoji">📚</text>
              </view>
              <view>
                <text class="category-name">学习习惯</text>
                <text class="category-sub">改正拖拉</text>
              </view>
            </view>
            <text class="category-count">12/20</text>
          </view>
          <view class="progress-row">
            <view class="progress-track">
              <view class="progress-fill" style="width: 60%;"></view>
            </view>
            <text class="cloud-icon">☁️</text>
          </view>
        </view>

        <view class="category-item" @tap="goCategory('life')">
          <view class="category-top">
            <view class="category-left">
              <view class="category-icon life-icon">
                <text class="category-emoji">🌙</text>
              </view>
              <view>
                <text class="category-name">生活习惯</text>
                <text class="category-sub">早睡早起</text>
              </view>
            </view>
            <text class="category-count">5/15</text>
          </view>
          <view class="progress-row">
            <view class="progress-track">
              <view class="progress-fill" style="width: 33%;"></view>
            </view>
            <text class="cloud-icon">☁️</text>
          </view>
        </view>

        <view class="category-item" @tap="goCategory('academic')">
          <view class="category-top">
            <view class="category-left">
              <view class="category-icon academic-icon">
                <text class="category-emoji">🎓</text>
              </view>
              <view>
                <text class="category-name">学习成绩</text>
                <text class="category-sub">查漏补缺</text>
              </view>
            </view>
            <text class="category-count">8/30</text>
          </view>
          <view class="progress-row">
            <view class="progress-track">
              <view class="progress-fill" style="width: 26%;"></view>
            </view>
            <text class="cloud-icon">☁️</text>
          </view>
        </view>

        <view class="category-item" @tap="goCategory('character')">
          <view class="category-top">
            <view class="category-left">
              <view class="category-icon character-icon">
                <text class="category-emoji">😊</text>
              </view>
              <view>
                <text class="category-name">性格养成</text>
                <text class="category-sub">戒骄戒躁</text>
              </view>
            </view>
            <text class="category-count">3/20</text>
          </view>
          <view class="progress-row">
            <view class="progress-track">
              <view class="progress-fill" style="width: 15%;"></view>
            </view>
            <text class="cloud-icon">☁️</text>
          </view>
        </view>
      </view>

      <view class="empty-state">
        <view class="empty-icon-row">
          <text class="empty-cloud">☁️</text>
        </view>
        <text class="empty-text">目前还有积攒的乌云，加油表现让它们消散吧！</text>
      </view>

      <view class="bottom-spacer"></view>
    </scroll-view>

    <view class="bottom-nav">
      <view class="nav-item" @tap="goPage('home')">
        <text class="nav-icon">🏠</text>
        <text class="nav-label">首页</text>
      </view>
      <view class="nav-item nav-item-active" @tap="goPage('reward')">
        <text class="nav-icon">⭐</text>
        <text class="nav-label">奖惩</text>
      </view>
      <view class="nav-item" @tap="goPage('shop')">
        <text class="nav-icon">🛒</text>
        <text class="nav-label">店铺</text>
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
  methods: {
    goDetail() {
      uni.showToast({ title: '明细', icon: 'none' })
    },
    goCategory(type) {
      var routes = {
        'study': '/pages/punishment-learning/punishment-learning',
        'life': '/pages/punishment-life/punishment-life',
        'academic': '/pages/punishment-academic/punishment-academic',
        'character': '/pages/punishment-character/punishment-character'
      }
      uni.navigateTo({ url: routes[type] || '' })
    },
    goPage(page) {
      var routes = {
        'home': '/pages/index/index',
        'reward': '/pages/punishment-center/punishment-center',
        'shop': '/pages/prize-universal/prize-universal',
        'profile': '/pages/profile/profile'
      }
      if (page === 'home' || page === 'shop' || page === 'profile') {
        uni.switchTab({ url: routes[page] })
      }
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
  background: transparent;
}

.top-bar {
  position: fixed;
  top: var(--status-bar-height);
  left: 0;
  width: 100%;
  z-index: 50;
  background: rgba(251, 249, 244, 0.4);
  backdrop-filter: blur(20rpx);
  box-shadow: 0 60rpx 120rpx -24rpx rgba(255, 132, 0, 0.1);
}

.top-bar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24rpx;
  height: 128rpx;
  max-width: 1200rpx;
  margin: 0 auto;
}

.avatar-section {
  display: flex;
  align-items: center;
  gap: 24rpx;
}

.avatar {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  border: 4rpx solid #ffe07e;
  background: linear-gradient(135deg, #FFD6A5, #FFB5A7);
  box-shadow: 0 4rpx 8rpx rgba(0,0,0,0.05);
}

.top-title {
  font-size: 36rpx;
  font-weight: 700;
  color: #924c00;
}

.detail-btn {
  display: flex;
  align-items: center;
  gap: 8rpx;
  color: #4d4632;
}

.detail-btn-text {
  font-size: 20rpx;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.detail-btn-icon {
  font-size: 28rpx;
}

.content {
  padding: 256rpx 24rpx 240rpx;
  max-width: 750rpx;
  margin: 0 auto;
  box-sizing: border-box;
}

.segmented-toggle {
  background: #f5f3ee;
  padding: 8rpx;
  border-radius: 16rpx;
  display: flex;
  align-items: center;
  margin-bottom: 48rpx;
}

.toggle-item {
  flex: 1;
  padding: 24rpx 0;
  border-radius: 12rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.toggle-inactive {
  color: #4d4632;
}

.toggle-active {
  background: #ffffff;
  box-shadow: 0 4rpx 8rpx rgba(0,0,0,0.05);
  color: #725c00;
}

.toggle-text {
  font-size: 36rpx;
  font-weight: 700;
}

.rule-card {
  background: rgba(255, 224, 126, 0.3);
  border: 1px solid #ffe07e;
  border-radius: 32rpx;
  padding: 24rpx;
  display: flex;
  align-items: flex-start;
  gap: 24rpx;
  margin-bottom: 48rpx;
}

.rule-icon {
  font-size: 36rpx;
  flex-shrink: 0;
}

.rule-text {
  font-size: 28rpx;
  line-height: 1.5;
  color: #564500;
  font-weight: 500;
}

.rule-bold {
  font-weight: 700;
}

.category-list {
  display: flex;
  flex-direction: column;
  gap: 32rpx;
}

.category-item {
  background: #FFFDF9;
  border: 1px solid rgba(209, 198, 171, 0.3);
  border-radius: 32rpx;
  padding: 24rpx;
  box-shadow: 0 8rpx 40rpx rgba(0,0,0,0.03);
  transition: all 0.3s;
}

.category-item:active {
  transform: scale(0.98);
}

.category-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32rpx;
}

.category-left {
  display: flex;
  align-items: center;
  gap: 24rpx;
}

.category-icon {
  width: 96rpx;
  height: 96rpx;
  border-radius: 32rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.study-icon {
  background: #ccd7ee;
  color: #525d71;
}

.life-icon {
  background: rgba(168, 214, 114, 0.2);
  color: #A8D672;
}

.academic-icon {
  background: rgba(177, 156, 217, 0.2);
  color: #B19CD9;
}

.character-icon {
  background: #ffdcc4;
  color: #6f3800;
}

.category-emoji {
  font-size: 40rpx;
}

.category-name {
  font-size: 36rpx;
  font-weight: 700;
  color: #1b1c19;
}

.category-sub {
  font-size: 20rpx;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #4d4632;
  opacity: 0.7;
}

.category-count {
  font-size: 40rpx;
  font-weight: 800;
  color: rgba(77, 70, 50, 0.5);
}

.progress-row {
  display: flex;
  align-items: center;
  gap: 32rpx;
}

.progress-track {
  flex: 1;
  height: 32rpx;
  background: #e4e2dd;
  border-radius: 999rpx;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #7A869A;
  border-radius: 999rpx;
}

.cloud-icon {
  font-size: 64rpx;
  opacity: 0.6;
}

.empty-state {
  padding-top: 64rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: 0.6;
}

.empty-icon-row {
  width: 256rpx;
  height: 256rpx;
  margin-bottom: 32rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.empty-cloud {
  font-size: 200rpx;
}

.empty-text {
  font-size: 28rpx;
  line-height: 1.5;
  color: #7A869A;
  font-weight: 500;
}

.bottom-spacer {
  height: 32rpx;
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
  padding: 16rpx 24rpx 32rpx;
  background: rgba(245, 243, 238, 0.9);
  backdrop-filter: blur(20rpx);
  border-top: 1px solid rgba(209, 198, 171, 0.3);
  border-radius: 24rpx 24rpx 0 0;
  box-shadow: 0 -8rpx 40rpx rgba(0,0,0,0.05);
  box-sizing: border-box;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16rpx 32rpx;
  color: #3c475a;
  transition: all 0.2s;
}

.nav-item:active {
  transform: scale(0.9);
}

.nav-item-active {
  background: #ffd214;
  color: #705b00;
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
