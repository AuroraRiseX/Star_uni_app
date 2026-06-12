<template>
  <view class="page-reward">
    <!-- Header -->
    <top-header title="奖惩中心" />

    <!-- Content -->
    <view class="reward-content">
      <!-- Tab Switcher -->
      <view class="tab-switcher">
        <view
          class="tab-btn"
          :class="{ 'tab-active': activeTab === 'earn' }"
          @tap="activeTab = 'earn'"
        >
          <text class="tab-text" :class="{ 'tab-text-active': activeTab === 'earn' }">奖励赚取</text>
        </view>
        <view
          class="tab-btn"
          :class="{ 'tab-active-punish': activeTab === 'punish' }"
          @tap="activeTab = 'punish'"
        >
          <text class="tab-text" :class="{ 'tab-text-active-punish': activeTab === 'punish' }">惩罚记录</text>
        </view>
      </view>

      <!-- Reward Earn Section -->
      <view class="section" v-if="activeTab === 'earn'">
        <!-- 学习习惯 -->
        <view class="card-neu">
          <view class="card-top">
            <view class="card-icon-row">
              <view class="icon-box icon-bg-primary">
                <image class="card-icon" src="/static/icons/menu_book.svg" />
              </view>
              <view class="card-info">
                <text class="card-title">学习习惯</text>
                <text class="card-desc">坚持阅读与专注</text>
              </view>
            </view>
            <text class="card-score text-primary">4/5</text>
          </view>
          <view class="card-progress-row">
            <view class="progress-bar-bg">
              <view class="progress-bar-fill progress-primary" style="width: 80%;" />
            </view>
            <image class="progress-star-icon" src="/static/icons/stars.svg" />
          </view>
        </view>

        <!-- 生活习惯 -->
        <view class="card-neu">
          <view class="card-top">
            <view class="card-icon-row">
              <view class="icon-box icon-bg-secondary">
                <image class="card-icon" src="/static/icons/bedtime.svg" />
              </view>
              <view class="card-info">
                <text class="card-title">生活习惯</text>
                <text class="card-desc">按时作息，独立整理</text>
              </view>
            </view>
            <text class="card-score text-secondary">3/5</text>
          </view>
          <view class="card-progress-row">
            <view class="progress-bar-bg">
              <view class="progress-bar-fill progress-secondary" style="width: 60%;" />
            </view>
            <image class="progress-star-icon" src="/static/icons/stars.svg" />
          </view>
        </view>

        <!-- 学习科目 -->
        <view class="card-neu">
          <view class="card-top">
            <view class="card-icon-row">
              <view class="icon-box icon-bg-green">
                <image class="card-icon" src="/static/icons/rocket_launch.svg" />
              </view>
              <view class="card-info">
                <text class="card-title">学习科目</text>
                <text class="card-desc">掌握难点，提升兴趣</text>
              </view>
            </view>
            <text class="card-score text-green">2/5</text>
          </view>
          <view class="card-progress-row">
            <view class="progress-bar-bg">
              <view class="progress-bar-fill progress-green" style="width: 40%;" />
            </view>
            <image class="progress-star-icon" src="/static/icons/stars.svg" />
          </view>
        </view>

        <!-- 学习成绩 -->
        <view class="card-neu">
          <view class="card-top">
            <view class="card-icon-row">
              <view class="icon-box icon-bg-primary">
                <image class="card-icon" src="/static/icons/trending_up.svg" />
              </view>
              <view class="card-info">
                <text class="card-title">学习成绩</text>
                <text class="card-desc">考试与测验的突破</text>
              </view>
            </view>
            <text class="card-score text-primary">1/5</text>
          </view>
          <view class="card-progress-row">
            <view class="progress-bar-bg">
              <view class="progress-bar-fill progress-primary" style="width: 20%;" />
            </view>
            <image class="progress-star-icon" src="/static/icons/stars.svg" />
          </view>
        </view>

        <!-- 性格养成 -->
        <view class="card-neu">
          <view class="card-top">
            <view class="card-icon-row">
              <view class="icon-box icon-bg-purple">
                <image class="card-icon" src="/static/icons/favorite.svg" />
              </view>
              <view class="card-info">
                <text class="card-title">性格养成</text>
                <text class="card-desc">情绪管理与社交礼仪</text>
              </view>
            </view>
            <text class="card-score text-purple">3/5</text>
          </view>
          <view class="card-progress-row">
            <view class="progress-bar-bg">
              <view class="progress-bar-fill progress-purple" style="width: 60%;" />
            </view>
            <image class="progress-star-icon" src="/static/icons/stars.svg" />
          </view>
        </view>
      </view>

      <!-- Punishment Record Section -->
      <view class="section" v-if="activeTab === 'punish'">
        <!-- 学习习惯惩罚 -->
        <view class="card-neu card-punish">
          <view class="card-top">
            <view class="card-icon-row">
              <view class="icon-box icon-bg-error">
                <image class="card-icon" src="/static/icons/edit_off.svg" />
              </view>
              <view class="card-info">
                <text class="card-title">学习习惯</text>
                <text class="card-desc card-desc-error">拖拉作业、逃避背诵</text>
              </view>
            </view>
            <view class="punish-count">
              <text class="card-score text-error">2</text>
              <text class="count-unit">次</text>
            </view>
          </view>
          <view class="card-progress-row">
            <view class="progress-bar-bg">
              <view class="progress-bar-fill progress-error" style="width: 40%;" />
            </view>
            <text class="cloud-emoji">☁️</text>
          </view>
        </view>

        <!-- 生活习惯惩罚 -->
        <view class="card-neu card-punish">
          <view class="card-top">
            <view class="card-icon-row">
              <view class="icon-box icon-bg-error">
                <image class="card-icon" src="/static/icons/timer_off.svg" />
              </view>
              <view class="card-info">
                <text class="card-title">生活习惯</text>
                <text class="card-desc card-desc-error">晚睡超过30分钟</text>
              </view>
            </view>
            <view class="punish-count">
              <text class="card-score text-error">1</text>
              <text class="count-unit">次</text>
            </view>
          </view>
          <view class="card-progress-row">
            <view class="progress-bar-bg">
              <view class="progress-bar-fill progress-error" style="width: 25%;" />
            </view>
            <text class="cloud-emoji">☁️</text>
          </view>
        </view>

        <!-- 学习成绩惩罚 -->
        <view class="card-neu card-punish">
          <view class="card-top">
            <view class="card-icon-row">
              <view class="icon-box icon-bg-error">
                <image class="card-icon" src="/static/icons/assignment_late.svg" />
              </view>
              <view class="card-info">
                <text class="card-title">学习成绩</text>
                <text class="card-desc card-desc-error">测验退步或未达标</text>
              </view>
            </view>
            <view class="punish-count">
              <text class="card-score text-error">0</text>
              <text class="count-unit">次</text>
            </view>
          </view>
          <view class="card-progress-row">
            <view class="progress-bar-bg">
              <view class="progress-bar-fill progress-error" style="width: 0%;" />
            </view>
            <text class="cloud-emoji cloud-emoji-dim">☁️</text>
          </view>
        </view>

        <!-- 性格养成惩罚 -->
        <view class="card-neu card-punish">
          <view class="card-top">
            <view class="card-icon-row">
              <view class="icon-box icon-bg-error">
                <image class="card-icon" src="/static/icons/mood_bad.svg" />
              </view>
              <view class="card-info">
                <text class="card-title">性格养成</text>
                <text class="card-desc card-desc-error">乱发脾气、不守诚信</text>
              </view>
            </view>
            <view class="punish-count">
              <text class="card-score text-error">2</text>
              <text class="count-unit">次</text>
            </view>
          </view>
          <view class="card-progress-row">
            <view class="progress-bar-bg">
              <view class="progress-bar-fill progress-error" style="width: 40%;" />
            </view>
            <text class="cloud-emoji">☁️</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onShow } from '@dcloudio/uni-app'
import TopHeader from '@/components/top-header/top-header.vue'

const activeTab = ref<'earn' | 'punish'>('punish')

onShow(() => {
  const page = getCurrentPages().pop()
  if (page && typeof (page as any).getTabBar === 'function' && (page as any).getTabBar()) {
    ;(page as any).getTabBar().setData({ selected: 1 })
  }
})
</script>

<style scoped>
.page-reward {
  min-height: 100vh;
  background: radial-gradient(circle at top, #FFF9EB 0%, #FAFAFA 100%);
  /* 底部留白：TabBar 高度 + 安全区 */
  padding-bottom: calc(90px + env(safe-area-inset-bottom));
  padding-bottom: calc(90px + constant(safe-area-inset-bottom));
}

.reward-content {
  /*
   * 顶部留白修复：>= top-header 实际高度
   * 修复"奖惩中心"左上角图标被状态栏/灵动岛遮挡
   */
  padding-top: calc(180rpx + env(safe-area-inset-top));
  padding-top: calc(180rpx + constant(safe-area-inset-top));
  padding-bottom: 200rpx;
  padding-left: 40rpx;
  padding-right: 40rpx;
  max-width: 800rpx;
  margin: 0 auto;
  box-sizing: border-box;
}

/* Tab Switcher */
.tab-switcher {
  background: #f4f3f3;
  padding: 12rpx;
  border-radius: 32rpx;
  display: flex;
  align-items: center;
  box-shadow: inset 0 4rpx 16rpx rgba(0, 0, 0, 0.08);
  margin-bottom: 48rpx;
}

.tab-btn {
  flex: 1;
  padding: 24rpx 0;
  border-radius: 24rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.tab-active {
  background: #ffffff;
  box-shadow: 0 8rpx 20rpx rgba(0, 0, 0, 0.1);
}

.tab-active-punish {
  background: #ffffff;
  box-shadow: 0 8rpx 20rpx rgba(0, 0, 0, 0.1);
}

.tab-text {
  font-size: 28rpx;
  font-weight: 700;
  color: #4d4633;
}

.tab-text-active {
  color: #705d00;
}

.tab-text-active-punish {
  color: #ba1a1a;
}

/* Section */
.section {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}

/* Card Neu */
.card-neu {
  background: #ffffff;
  border-radius: 48rpx;
  padding: 32rpx;
  box-shadow: 0 10rpx 25rpx -5rpx rgba(0, 0, 0, 0.05), 0 8rpx 10rpx -6rpx rgba(0, 0, 0, 0.05);
  border: 1rpx solid rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease;
}

.card-punish {
  border-left: 8rpx solid #ba1a1a;
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24rpx;
}

.card-icon-row {
  display: flex;
  align-items: center;
  gap: 24rpx;
  flex: 1;
}

.icon-box {
  width: 96rpx;
  height: 96rpx;
  border-radius: 32rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon-bg-primary {
  background: rgba(255, 217, 61, 0.25);
}

.icon-bg-secondary {
  background: rgba(255, 130, 0, 0.2);
}

.icon-bg-green {
  background: rgba(16, 185, 129, 0.15);
}

.icon-bg-purple {
  background: rgba(168, 85, 247, 0.15);
}

.icon-bg-error {
  background: rgba(255, 218, 214, 0.3);
}

.card-icon {
  width: 48rpx;
  height: 48rpx;
}

.card-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-title {
  font-size: 32rpx;
  font-weight: 700;
  color: #1a1c1c;
}

.card-desc {
  font-size: 24rpx;
  color: #4d4633;
  margin-top: 4rpx;
}

.card-desc-error {
  color: rgba(186, 26, 26, 0.7);
}

.card-score {
  font-size: 40rpx;
  font-weight: 700;
}

.text-primary {
  color: #705d00;
}

.text-secondary {
  color: #944a00;
}

.text-green {
  color: #059669;
}

.text-purple {
  color: #7c3aed;
}

.text-error {
  color: #ba1a1a;
}

/* Punish Count */
.punish-count {
  display: flex;
  align-items: baseline;
}

.count-unit {
  font-size: 24rpx;
  color: #4d4633;
  margin-left: 8rpx;
}

/* Progress Row */
.card-progress-row {
  display: flex;
  align-items: center;
  gap: 24rpx;
}

.progress-bar-bg {
  flex: 1;
  height: 8rpx;
  background: rgba(227, 226, 226, 0.4);
  border-radius: 9999px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  border-radius: 9999px;
}

.progress-primary {
  background: #705d00;
  box-shadow: 0 0 16rpx rgba(112, 93, 0, 0.35);
}

.progress-secondary {
  background: #944a00;
  box-shadow: 0 0 16rpx rgba(148, 74, 0, 0.35);
}

.progress-green {
  background: #10b981;
  box-shadow: 0 0 16rpx rgba(16, 185, 129, 0.35);
}

.progress-purple {
  background: #a855f7;
  box-shadow: 0 0 16rpx rgba(168, 85, 247, 0.35);
}

.progress-error {
  background: #ba1a1a;
  box-shadow: 0 0 16rpx rgba(186, 26, 26, 0.35);
}

.progress-star-icon {
  width: 40rpx;
  height: 40rpx;
}

.cloud-emoji {
  font-size: 40rpx;
}

.cloud-emoji-dim {
  opacity: 0.3;
}
</style>