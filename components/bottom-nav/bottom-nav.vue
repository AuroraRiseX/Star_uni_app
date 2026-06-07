<template>
  <!-- 底部导航栏 Vue 组件 - 用于非 tabBar 页面或作为组件复用方案 -->
  <view class="bottom-nav">
    <view
      v-for="(item, index) in tabs"
      :key="index"
      class="nav-item"
      :class="{ active: current === index }"
      @tap="switchTab(index)"
    >
      <!-- 图标：使用 SVG image 标签，兼容微信小程序 -->
      <image
        class="nav-icon"
        :class="{ active: current === index }"
        :src="current === index ? item.iconActive : item.iconNormal"
        mode="aspectFit"
      />
      <!-- 文字标签 -->
      <text class="nav-label">{{ item.label }}</text>
    </view>
  </view>
</template>

<script>
/**
 * BottomNav 底部导航栏组件
 * 1:1 复刻原型设计规格
 *
 * 设计规格：
 * - fixed bottom, 圆角顶部 12px (24rpx)
 * - 白色背景 #ffffff (surface-container-lowest)
 * - 阴影: 0 -4px 20px rgba(0,0,0,0.05)
 * - flex 布局 justify-content: space-around, padding: 8px 16px 12px
 * - 图标: 24px (48rpx)
 * - 文字: 12px (24rpx), font-weight 700, letter-spacing 0.05em
 * - 默认颜色: #4d4632 (on-surface-variant)
 * - Active: 背景 #fd8b17 (secondary-container), 颜色 #613100 (on-secondary-container)
 * - Active 圆角: 12px (24rpx), padding: 6px 16px (12rpx 32rpx)
 *
 * 用法：
 * <BottomNav :current="0" />
 */
export default {
  name: 'BottomNav',
  props: {
    /** 当前选中的 Tab 索引 (0-based) */
    current: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      /** Tab 页签配置列表 */
      tabs: [
        {
          icon: 'home',
          label: '首页',
          path: '/pages/index/index',
          iconNormal: '/static/icons/home-outlined.svg',
          iconActive: '/static/icons/home-filled.svg'
        },
        {
          icon: 'stars',
          label: '奖惩',
          path: '/pages/reward-center/reward-center',
          iconNormal: '/static/icons/stars-outlined.svg',
          iconActive: '/static/icons/stars-filled.svg'
        },
        {
          icon: 'storefront',
          label: '商店',
          path: '/pages/prize-universal/prize-universal',
          iconNormal: '/static/icons/storefront-outlined.svg',
          iconActive: '/static/icons/storefront-filled.svg'
        },
        {
          icon: 'person',
          label: '我的',
          path: '/pages/profile/profile',
          iconNormal: '/static/icons/person-outlined.svg',
          iconActive: '/static/icons/person-filled.svg'
        }
      ]
    }
  },
  methods: {
    /**
     * 切换 Tab 页面
     * @param {number} index - 目标 Tab 索引
     */
    switchTab(index) {
      if (index === this.current) return
      uni.switchTab({ url: this.tabs[index].path })
    }
  }
}
</script>

<style scoped>
/* 底部导航栏容器 - fixed bottom, 圆角顶部 12px */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 60;
  background: #ffffff;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 24rpx 24rpx 0 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16rpx 32rpx 24rpx;
  padding-bottom: calc(24rpx + env(safe-area-inset-bottom));
}

/* 导航项 - flex-column 居中 */
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12rpx 32rpx;
  border-radius: 24rpx;
  transition: all 0.2s ease;
  min-width: 120rpx;
}

/* Active 状态 - secondary-container #fd8b17 */
.nav-item.active {
  background: #fd8b17;
}

/* 图标 - Material Symbols Outlined 24px */
.nav-icon {
  width: 48rpx;
  height: 48rpx;
  transition: all 0.2s ease;
}

/* 文字标签 - 12px, font-weight 700 */
.nav-label {
  font-size: 24rpx;
  font-weight: 700;
  color: #4d4632;
  margin-top: 8rpx;
  letter-spacing: 0.05em;
  line-height: 1;
  transition: color 0.2s ease;
}

/* Active 文字颜色 - on-secondary-container #613100 */
.nav-item.active .nav-label {
  color: #613100;
}
</style>
