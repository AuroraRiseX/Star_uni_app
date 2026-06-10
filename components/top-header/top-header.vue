<template>
  <view class="top-header">
    <view class="header-inner">
      <view class="header-left">
        <view class="avatar-wrap">
          <image
            class="avatar"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuATHycH0iyKRUItWr2EghKMDeLmfW6ixv5_cnHrXM3ryOcwfOXM7iQwVlej5qyAV1BFJrXsohLrY-2kjfL24-GSVOrRnponq1dn1GGNeYlWxwxUlwtT-Va6vHYrNdMmIdKSiwj-gZpBsDg657PE0rsAaCU9oVfRkTAwHsyv67EK4KNmiLZF4Veyx-sI9nPGgwD2QTFRDV0dnSsvhwIv-Lxq4J4cXrjcFfoMHE-GQlcF0HHY2sr5gBQAs3GHDjkhyn-8bnKvXzCN-3Yy"
            mode="aspectFill"
          />
        </view>
        <text class="header-title">{{ title }}</text>
      </view>
      <view class="header-right" v-if="showAction">
        <text class="action-btn" @tap="$emit('action')">{{ actionText }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  showAction?: boolean
  actionText?: string
}>()

defineEmits<{
  (e: 'action'): void
}>()
</script>

<style scoped>
.top-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1rpx solid rgba(255, 255, 255, 0.2);
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40rpx;
  height: 128rpx;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 24rpx;
}

.avatar-wrap {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  overflow: hidden;
  border: 4rpx solid #ffd93d;
  flex-shrink: 0;
}

.avatar {
  width: 100%;
  height: 100%;
}

.header-title {
  font-size: 36rpx;
  font-weight: 700;
  color: #1a1c1c;
}

.header-right {
  display: flex;
  align-items: center;
}

.action-btn {
  font-weight: 700;
  color: #705d00;
  padding: 8rpx 24rpx;
  border-radius: 9999px;
  font-size: 28rpx;
}

.action-btn:active {
  opacity: 0.7;
}
</style>