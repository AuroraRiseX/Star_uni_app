<template>
  <view class="top-header" :style="headerStyle">
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
import { ref, onMounted } from 'vue'

defineProps<{
  title: string
  showAction?: boolean
  actionText?: string
}>()

defineEmits<{
  (e: 'action'): void
}>()

/*
 * 顶部安全区适配 - 修复灵动岛/状态栏遮挡
 *
 * 关键点：
 * 1. iPhone 14 Pro+ 灵动岛：safeAreaInsets.top ≈ 59px，仅 statusBarHeight (54px) 不足
 *    会导致"明细"按钮被电池图标 / 灵动岛区域遮挡
 * 2. 普通刘海屏 (X-13)：safeAreaInsets.top = 47px
 * 3. 旧机型 (8 及以下)：statusBarHeight = 20px
 * 4. 优先用 safeAreaInsets.top / safeArea.top，再 fallback statusBarHeight
 * 5. CSS env(safe-area-inset-top) 作为最终后备
 */
const headerStyle = ref('padding-top: 44px;')

onMounted(() => {
  try {
    const sys = uni.getSystemInfoSync()
    // 兼容不同平台：uni-app 标准字段 + 部分小程序的 safeArea
    const safeTop = (
      (sys as any).safeAreaInsets?.top
      || (sys as any).safeArea?.top
      || sys.statusBarHeight
      || 44
    )
    // 同时叠加 CSS env()，确保兼容性
    headerStyle.value = `padding-top: ${safeTop}px;`
  } catch (e) {
    headerStyle.value = 'padding-top: 44px;'
  }
})
</script>

<style scoped>
/*
 * 顶栏布局：
 *   padding-top = 状态栏/灵动岛高度（JS 动态设置）
 *   height      = 128rpx 固定内容区
 *   总高度      = 状态栏 + 128rpx
 */
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
  /* CSS 后备：部分平台 JS 未执行时仍能避让 */
  padding-top: env(safe-area-inset-top);
  padding-top: constant(safe-area-inset-top);
  /* 平滑过渡 */
  transition: padding-top 0.2s ease;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40rpx;
  height: 128rpx;
  /* 避免内容在窄屏溢出 */
  box-sizing: border-box;
  width: 100%;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 24rpx;
  flex: 1;
  min-width: 0;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.header-right {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  /* 避免"明细"按钮贴到状态栏右侧 */
  padding-right: 0;
}

.action-btn {
  font-weight: 700;
  color: #705d00;
  padding: 8rpx 24rpx;
  border-radius: 9999px;
  font-size: 28rpx;
  /* 防止被电池图标遮挡时的点击穿透 */
  position: relative;
  z-index: 1;
}

.action-btn:active {
  opacity: 0.7;
}

/* 小屏设备：压缩顶栏 */
@media (max-width: 390px) {
  .header-inner { padding: 0 24rpx; height: 112rpx; }
  .header-left { gap: 16rpx; }
  .avatar-wrap { width: 64rpx; height: 64rpx; border-width: 3rpx; }
  .header-title { font-size: 28rpx; }
  .action-btn { font-size: 24rpx; padding: 4rpx 20rpx; }
}

/* 大屏 */
@media (min-width: 431px) {
  .header-inner { padding: 0 48rpx; }
}
</style>
