<template>
  <view class="page-home">
    <!-- Header -->
    <top-header title="麦兜的星星罐" :show-action="true" action-text="明细" @action="showSheet = true" />

    <!-- Content -->
    <view class="home-content" :style="{ paddingTop: headerPaddingTop }">
      <!-- Star Jar -->
      <view class="jar-area">
        <view class="jar-glow" />
        <view class="jar-container">
          <!-- Cork Lid -->
          <view class="cork-lid" />
          <!-- Glass Jar Body -->
          <view class="glass-jar">
            <!-- Inner decorations -->
            <view class="jar-inner">
              <image
                class="star-icon star-1 animate-float"
                src="/static/icons/grade.svg"
                mode="aspectFit"
              />
              <image
                class="star-icon star-2 animate-float-delay"
                src="/static/icons/grade.svg"
                mode="aspectFit"
              />
              <image
                class="cloud-icon"
                src="/static/icons/cloud.svg"
                mode="aspectFit"
              />
              <image
                class="star-icon star-3 animate-float-delay2"
                src="/static/icons/grade.svg"
                mode="aspectFit"
              />
            </view>
          </view>
        </view>
      </view>

      <!-- Stats Cards -->
      <view class="stats-grid">
        <view class="stat-card">
          <text class="stat-label">现有星星</text>
          <view class="stat-value-row">
            <text class="stat-emoji">⭐</text>
            <text class="stat-number">128</text>
            <text class="stat-unit">颗</text>
          </view>
        </view>
        <view class="stat-card">
          <text class="stat-label">现有乌云</text>
          <view class="stat-value-row">
            <text class="stat-emoji">☁️</text>
            <text class="stat-number">5</text>
            <text class="stat-unit">朵</text>
          </view>
        </view>
      </view>

      <!-- Add Reward Button -->
      <view class="add-btn-wrap">
        <view class="add-btn" hover-class="add-btn-active">
          <image class="add-btn-icon" src="/static/icons/add_circle.svg" />
          <text class="add-btn-text">添加奖励</text>
        </view>
      </view>
    </view>

    <!-- Detail Sheet -->
    <detail-sheet :visible="showSheet" @close="showSheet = false" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onShow } from '@dcloudio/uni-app'
import TopHeader from '@/components/top-header/top-header.vue'
import DetailSheet from '@/components/detail-sheet/detail-sheet.vue'
import { useHeaderPadding } from '@/composables/useHeaderPadding'

const showSheet = ref(false)
const { headerPaddingTop } = useHeaderPadding()

onShow(() => {
  const page = getCurrentPages().pop()
  if (page && typeof (page as any).getTabBar === 'function' && (page as any).getTabBar()) {
    ;(page as any).getTabBar().setData({ selected: 0 })
  }
})
</script>

<style scoped>
.page-home {
  min-height: 100vh;
  background: radial-gradient(circle at top, #FFF9EB 0%, #FAFAFA 100%);
  /*
   * 底部留白：TabBar 高度 + 安全区
   * TabBar: padding(16px) + content(56px) + safeBottom
   * 使用 env() 作为 CSS 后备，JS 动态设置优先
   */
  padding-bottom: calc(90px + env(safe-area-inset-bottom));
  padding-bottom: calc(90px + constant(safe-area-inset-bottom));
}

.home-content {
  /*
   * 顶部留白：由 useHeaderPadding() 动态计算
   * 通过 :style="{ paddingTop: headerPaddingTop }" 内联设置
   */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 左右留白 */
  padding-left: 40rpx;
  padding-right: 40rpx;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
}

/* Star Jar Area */
.jar-area {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40rpx 0 60rpx;
}

.jar-glow {
  position: absolute;
  width: 480rpx;
  height: 480rpx;
  filter: blur(160rpx);
  background: radial-gradient(circle, rgba(255, 217, 61, 0.4) 0%, transparent 70%);
  pointer-events: none;
}

.jar-container {
  position: relative;
  width: 400rpx;
  aspect-ratio: 3 / 4;
}

.cork-lid {
  position: absolute;
  top: -16rpx;
  left: 50%;
  transform: translateX(-50%);
  width: 260rpx;
  height: 48rpx;
  background: linear-gradient(to bottom, #fc8200, #e67600);
  box-shadow: inset 0 4rpx 8rpx rgba(255, 255, 255, 0.3), 0 8rpx 16rpx rgba(0, 0, 0, 0.2);
  border-radius: 24rpx 24rpx 16rpx 16rpx;
  z-index: 30;
}

.glass-jar {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 100%);
  backdrop-filter: blur(24rpx);
  -webkit-backdrop-filter: blur(24rpx);
  border: 2rpx solid rgba(255, 255, 255, 0.8);
  box-shadow:
    inset 0 20rpx 40rpx rgba(255, 255, 255, 0.5),
    inset 0 -30rpx 60rpx rgba(0, 0, 0, 0.05),
    0 60rpx 120rpx -24rpx rgba(255, 132, 0, 0.15);
  border-radius: 50% 50% 25% 25% / 15% 15% 15% 15%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 48rpx;
  z-index: 20;
}

.jar-inner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.star-icon {
  width: 80rpx;
  height: 80rpx;
  position: absolute;
}

.cloud-icon {
  width: 120rpx;
  height: 120rpx;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.3;
}

.star-1 {
  top: 22%;
  left: 22%;
  transform: rotate(12deg);
}

.star-2 {
  bottom: 28%;
  right: 22%;
  transform: rotate(-12deg);
}

.star-3 {
  top: 28%;
  right: 26%;
  transform: rotate(45deg);
}

/* Float Animation */
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20rpx) rotate(10deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delay {
  animation: float 6s ease-in-out 1s infinite;
}

.animate-float-delay2 {
  animation: float 6s ease-in-out 2s infinite;
}

/* Stats Grid */
.stats-grid {
  margin-top: 48rpx;
  width: 100%;
  max-width: 600rpx;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24rpx;
  padding: 0 40rpx;
  box-sizing: border-box;
}

.stat-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16rpx);
  -webkit-backdrop-filter: blur(16rpx);
  border-radius: 32rpx;
  padding: 32rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.03);
  border: 2rpx solid rgba(255, 255, 255, 0.4);
}

.stat-label {
  font-size: 24rpx;
  font-weight: 700;
  color: #4d4633;
  margin-bottom: 8rpx;
}

.stat-value-row {
  display: flex;
  align-items: center;
  gap: 12rpx;
}

.stat-emoji {
  font-size: 48rpx;
}

.stat-number {
  font-size: 48rpx;
  font-weight: 900;
  color: #1a1c1c;
}

.stat-unit {
  font-size: 24rpx;
  font-weight: 700;
  color: #4d4633;
  margin-top: 8rpx;
}

/* Add Reward Button */
.add-btn-wrap {
  margin-top: 60rpx;
  width: 100%;
  max-width: 600rpx;
  padding: 0 40rpx;
  box-sizing: border-box;
}

.add-btn {
  width: 100%;
  height: 112rpx;
  background: #ffd93d;
  border-radius: 40rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16rpx;
  box-shadow: 0 8rpx 0 #e8c426;
  transition: all 0.15s ease;
}

.add-btn-active {
  transform: translateY(4rpx);
  box-shadow: 0 4rpx 0 #e8c426;
}

.add-btn-icon {
  width: 40rpx;
  height: 40rpx;
}

.add-btn-text {
  font-size: 32rpx;
  font-weight: 700;
  color: #725e00;
}
</style>