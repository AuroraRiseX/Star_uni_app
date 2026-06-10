<template>
  <view class="detail-sheet-mask" v-if="visible" @tap="onClose">
    <view class="detail-sheet-panel" :class="{ 'sheet-show': visible }" @tap.stop>
      <!-- Drag Handle -->
      <view class="drag-handle-wrap">
        <view class="drag-handle" />
      </view>
      <!-- Title Bar -->
      <view class="sheet-header">
        <view class="header-placeholder" />
        <text class="sheet-title">收支明细</text>
        <view class="close-btn" @tap="onClose">
          <image class="close-icon" src="/static/icons/close.svg" />
        </view>
      </view>
      <!-- Detail List -->
      <scroll-view class="detail-list" scroll-y>
        <!-- Item 1 -->
        <view class="detail-item">
          <view class="item-left">
            <view class="item-icon-wrap icon-primary-bg">
              <image class="item-icon" src="/static/icons/brush.svg" />
            </view>
            <view class="item-info">
              <text class="item-title">独立完成绘画作业</text>
              <text class="item-time">2023.11.24 16:45</text>
            </view>
          </view>
          <view class="item-right">
            <text class="item-value value-positive">+2</text>
            <text class="item-unit">颗星星</text>
          </view>
        </view>
        <!-- Item 2 -->
        <view class="detail-item">
          <view class="item-left">
            <view class="item-icon-wrap icon-secondary-bg">
              <image class="item-icon" src="/static/icons/shopping_bag.svg" />
            </view>
            <view class="item-info">
              <text class="item-title">兑换：周末去游乐场</text>
              <text class="item-time">2023.11.23 10:00</text>
            </view>
          </view>
          <view class="item-right">
            <text class="item-value value-negative">-120</text>
            <text class="item-unit">颗星星</text>
          </view>
        </view>
        <!-- Item 3 -->
        <view class="detail-item">
          <view class="item-left">
            <view class="item-icon-wrap icon-error-bg">
              <image class="item-icon" src="/static/icons/mood_bad.svg" />
            </view>
            <view class="item-info">
              <text class="item-title">晚睡惩罚</text>
              <text class="item-time">2023.11.22 22:30</text>
            </view>
          </view>
          <view class="item-right">
            <text class="item-value value-error">+1</text>
            <text class="item-unit">朵乌云</text>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script setup lang="ts">
defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

function onClose() {
  emit('close')
}
</script>

<style scoped>
.detail-sheet-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 600;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8rpx);
  -webkit-backdrop-filter: blur(8rpx);
}

.detail-sheet-panel {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 700;
  height: 75vh;
  background: #faf9f9;
  border-radius: 60rpx 60rpx 0 0;
  box-shadow: 0 -40rpx 80rpx rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.sheet-show {
  transform: translateY(0);
}

.drag-handle-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20rpx 0 10rpx;
}

.drag-handle {
  width: 96rpx;
  height: 12rpx;
  background: #e3e2e2;
  border-radius: 9999px;
}

.sheet-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60rpx 32rpx;
}

.header-placeholder {
  width: 64rpx;
}

.sheet-title {
  font-size: 40rpx;
  font-weight: 700;
  color: #1a1c1c;
}

.close-btn {
  width: 64rpx;
  height: 64rpx;
  background: #f4f3f3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-icon {
  width: 36rpx;
  height: 36rpx;
}

.detail-list {
  flex: 1;
  padding: 0 40rpx;
  padding-bottom: calc(40rpx + env(safe-area-inset-bottom));
}

.detail-item {
  background: #ffffff;
  border-radius: 48rpx;
  padding: 40rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24rpx;
  box-shadow: 0 8rpx 16rpx rgba(0, 0, 0, 0.03);
  border: 1rpx solid rgba(245, 245, 245, 0.6);
}

.item-left {
  display: flex;
  align-items: center;
  gap: 32rpx;
}

.item-icon-wrap {
  width: 96rpx;
  height: 96rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon-primary-bg {
  background: rgba(255, 217, 61, 0.2);
}

.icon-secondary-bg {
  background: rgba(255, 183, 132, 0.3);
}

.icon-error-bg {
  background: rgba(255, 218, 214, 0.15);
}

.item-icon {
  width: 44rpx;
  height: 44rpx;
}

.item-info {
  display: flex;
  flex-direction: column;
}

.item-title {
  font-size: 28rpx;
  font-weight: 700;
  color: #1a1c1c;
}

.item-time {
  font-size: 20rpx;
  font-weight: 700;
  color: #4d4633;
  margin-top: 4rpx;
}

.item-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.item-value {
  font-size: 40rpx;
  font-weight: 700;
}

.value-positive {
  color: #fc8200;
}

.value-negative {
  color: #ba1a1a;
}

.value-error {
  color: #ba1a1a;
}

.item-unit {
  font-size: 20rpx;
  font-weight: 700;
  color: #4d4633;
}
</style>