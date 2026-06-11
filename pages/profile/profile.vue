<template>
  <view class="page-profile">
    <!-- Header -->
    <top-header title="个人中心" />

    <!-- Content -->
    <view class="profile-content">
      <view class="profile-center">
        <!-- Avatar -->
        <view class="avatar-section">
          <view class="avatar-wrap">
            <image
              class="avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO3OgYNJ9rZqzmDNkEKIHYGfXFDgogXx_IP6Ha-pAOnnVwlluXvVVK6NXdweqY-nFV5U0NZt4YO89CLsVGhxHA-poCNmyAAvw0y2BBV2JhG9ESkjXHta2mTroqYkF4bTiQHEohrVUJ8ywLDGaUSrp1695MiH6HStdCF1VAWPgmHUGz7HV1cPn5ZITCCD2FuZ0Rvr8YzbGp1LsXp4l5phGVu7OkC2zxP-0nuu31Y6c0CqnxMaMG0agYpkrMYUcMfEDOn1q3O_LYBDD5"
              mode="aspectFill"
            />
            <view class="avatar-edit-btn">
              <image class="edit-icon" src="/static/icons/edit.svg" />
            </view>
          </view>
          <text class="profile-name">麦兜</text>
          <text class="profile-days">已陪伴成长 128 天</text>
        </view>

        <!-- Stats Grid -->
        <view class="stats-grid">
          <view class="stat-card">
            <text class="stat-emoji">⭐</text>
            <text class="stat-number">128</text>
            <text class="stat-label">星星余额</text>
          </view>
          <view class="stat-card">
            <text class="stat-emoji">🎁</text>
            <text class="stat-number stat-number-secondary">12</text>
            <text class="stat-label">已兑奖励</text>
          </view>
        </view>

        <!-- Settings Menu -->
        <view class="settings-card">
          <!-- 宝贝管理 -->
          <view class="menu-item" hover-class="menu-item-hover">
            <view class="menu-left">
              <image class="menu-icon" src="/static/icons/child_care.svg" />
              <text class="menu-text">宝贝管理</text>
            </view>
            <image class="menu-arrow" src="/static/icons/chevron_right.svg" />
          </view>

          <!-- 切换宝贝 -->
          <view class="menu-item menu-item-border" hover-class="menu-item-hover">
            <view class="menu-left">
              <image class="menu-icon" src="/static/icons/swap_horiz.svg" />
              <text class="menu-text">切换宝贝</text>
            </view>
            <image class="menu-arrow" src="/static/icons/chevron_right.svg" />
          </view>

          <!-- 通用设置 -->
          <view class="menu-item menu-item-border" hover-class="menu-item-hover">
            <view class="menu-left">
              <image class="menu-icon" src="/static/icons/settings.svg" />
              <text class="menu-text">通用设置</text>
            </view>
            <image class="menu-arrow" src="/static/icons/chevron_right.svg" />
          </view>

          <!-- 隐私政策 -->
          <view class="menu-item menu-item-border" hover-class="menu-item-hover">
            <view class="menu-left">
              <image class="menu-icon" src="/static/icons/verified_user.svg" />
              <text class="menu-text">隐私政策</text>
            </view>
            <image class="menu-arrow" src="/static/icons/chevron_right.svg" />
          </view>

          <!-- 关于我们 -->
          <view class="menu-item menu-item-last" hover-class="menu-item-hover">
            <view class="menu-left">
              <image class="menu-icon" src="/static/icons/info.svg" />
              <text class="menu-text">关于我们</text>
            </view>
            <image class="menu-arrow" src="/static/icons/chevron_right.svg" />
          </view>
        </view>

        <!-- Logout Button -->
        <view class="logout-btn" hover-class="logout-btn-active">
          <text class="logout-text">退出登录</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onShow } from '@dcloudio/uni-app'
import TopHeader from '@/components/top-header/top-header.vue'

onShow(() => {
  const page = getCurrentPages().pop()
  if (page && typeof (page as any).getTabBar === 'function' && (page as any).getTabBar()) {
    ;(page as any).getTabBar().setData({ selected: 3 })
  }
})
</script>

<style scoped>
.page-profile {
  min-height: 100vh;
  background: radial-gradient(circle at top, #FFF9EB 0%, #FAFAFA 100%);
  /* 底部安全区 + tabbar 留白 */
  padding-bottom: calc(200rpx + env(safe-area-inset-bottom));
  padding-bottom: calc(200rpx + constant(safe-area-inset-bottom));
}

.profile-content {
  /*
   * 顶部留白修复：>= top-header 实际高度
   * 修复"个人中心"页面顶部被状态栏/灵动岛遮挡
   */
  padding-top: calc(180rpx + env(safe-area-inset-top));
  padding-top: calc(180rpx + constant(safe-area-inset-top));
}

.profile-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40rpx;
}

/* Avatar Section */
.avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-wrap {
  position: relative;
  margin-bottom: 24rpx;
}

.avatar {
  width: 224rpx;
  height: 224rpx;
  border-radius: 50%;
  border: 8rpx solid #ffffff;
  box-shadow: 0 20rpx 60rpx rgba(0, 0, 0, 0.12);
}

.avatar-edit-btn {
  position: absolute;
  bottom: 16rpx;
  right: 0;
  width: 64rpx;
  height: 64rpx;
  background: #705d00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.15);
}

.edit-icon {
  width: 32rpx;
  height: 32rpx;
}

.profile-name {
  font-size: 44rpx;
  font-weight: 900;
  color: #1a1c1c;
}

.profile-days {
  font-size: 28rpx;
  font-weight: 700;
  color: #4d4633;
  margin-top: 8rpx;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24rpx;
  width: 100%;
  margin-top: 56rpx;
}

.stat-card {
  background: #ffffff;
  padding: 40rpx;
  border-radius: 48rpx;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.03);
  border: 2rpx solid rgba(245, 245, 245, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-emoji {
  font-size: 56rpx;
  margin-bottom: 12rpx;
}

.stat-number {
  font-size: 44rpx;
  font-weight: 900;
  color: #705d00;
}

.stat-number-secondary {
  color: #944a00;
}

.stat-label {
  font-size: 24rpx;
  font-weight: 700;
  color: #4d4633;
}

/* Settings Menu Card */
.settings-card {
  width: 100%;
  margin-top: 56rpx;
  background: #ffffff;
  border-radius: 50rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.03);
  border: 2rpx solid rgba(245, 245, 245, 0.8);
}

.menu-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 44rpx 48rpx;
  transition: background 0.2s;
}

.menu-item-border {
  border-bottom: 2rpx solid #fafafa;
}

.menu-item-last {
  /* No border for last item */
}

.menu-item-hover {
  background: #fafafa;
}

.menu-left {
  display: flex;
  align-items: center;
  gap: 28rpx;
}

.menu-icon {
  width: 44rpx;
  height: 44rpx;
}

.menu-text {
  font-size: 28rpx;
  font-weight: 700;
  color: #1a1c1c;
}

.menu-arrow {
  width: 36rpx;
  height: 36rpx;
  opacity: 0.5;
}

/* Logout Button */
.logout-btn {
  margin-top: 72rpx;
  width: 100%;
  padding: 32rpx;
  border-radius: 40rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(186, 26, 26, 0.05);
  border: 2rpx solid rgba(186, 26, 26, 0.1);
}

.logout-btn-active {
  background: rgba(186, 26, 26, 0.1);
}

.logout-text {
  font-size: 30rpx;
  font-weight: 900;
  color: #ba1a1a;
}
</style>